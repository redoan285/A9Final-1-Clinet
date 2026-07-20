"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select, FieldError, Calendar, DateField, DatePicker, toast } from "@heroui/react";
import { CgNotes } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";

const AppointModal = ({ doctor }) => {
    const userData = authClient.useSession()
    const user = userData?.data?.user

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        const appointmentData = {
            doctorName: doctor.name,
            doctorImage: doctor.image,
            patientName: values.name,
            phone: values.phone,
            session: values.session,
            date: values.date,
            availability: doctor.availability,
            specialty: doctor.specialty,
            userId: user?.id
        }
        const {data: tokenData} = await authClient.token()
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
         method: 'POST',
         headers:{
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`
         },
         body: JSON.stringify(appointmentData)

    })
      const data = await res.json();
        if(data.acknowledged
        ) {
          toast.success("You have booked an appointment", {
              actionProps: {
                children: "Booked",
                className: "bg-success text-white",
              },
              description: "You can view your appointment details and manage your bookings in the dashboard.",
            })
        }
}
    return (
        <div  >
            <Modal className={' p-0 m-0'}>
                <Button className={'text-white font-semibold text-lg bg-[#004AC6] rounded-2xl'}><FaRegCalendarAlt />
                    Book Appointment</Button>
                <Modal.Backdrop >
                    <Modal.Container placement="auto" className={'p-0 m-0'}>
                        <Modal.Dialog className="sm:max-w-md ">
                            <Modal.CloseTrigger className="mt-3" />
                            <Modal.Header className="">
                                <div className="flex items-center gap-2">

                                    <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                        <CgNotes
                                            className="size-5" />
                                    </Modal.Icon>
                                    <Modal.Heading className="title text-xl">Book Appointment</Modal.Heading>

                                </div>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below and we&apos;ll get back to you.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                        <TextField className="w-full " name="doctor" type="text" variant="secondary">
                                            <Label>Doctor Name</Label>
                                            <Input value={doctor.name} className={'bg-[#edf3ff] border border-[#C3C6D7]'} disabled placeholder="Enter Doctor Name" />
                                        </TextField>
                                        <TextField isRequired className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Your Name</Label>
                                            <Input className={'bg-white border border-[#C3C6D7]'} placeholder="Enter Your Name" />
                                            <FieldError />
                                        </TextField>
                                        <TextField isRequired className="w-full" name="phone" type="tel" variant="secondary">
                                            <Label>Phone</Label>
                                            <Input className={'bg-white border border-[#C3C6D7]'} placeholder="Enter your phone number" />
                                            <FieldError />
                                        </TextField>
                                        <DatePicker isRequired className="" name="date">
                                            <Label>Date</Label>
                                            <DateField.Group fullWidth className={'border border-[#C3C6D7]'}>
                                                <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                                <DateField.Suffix>
                                                    <DatePicker.Trigger>
                                                        <DatePicker.TriggerIndicator />
                                                    </DatePicker.Trigger>
                                                </DateField.Suffix>
                                            </DateField.Group>
                                            <DatePicker.Popover>
                                                <Calendar aria-label="Event date" >
                                                    <Calendar.Header>
                                                        <Calendar.YearPickerTrigger >
                                                            <Calendar.YearPickerTriggerHeading />
                                                            <Calendar.YearPickerTriggerIndicator />
                                                        </Calendar.YearPickerTrigger>
                                                        <Calendar.NavButton slot="previous" />
                                                        <Calendar.NavButton slot="next" />
                                                    </Calendar.Header>
                                                    <Calendar.Grid>
                                                        <Calendar.GridHeader>
                                                            {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                                        </Calendar.GridHeader>
                                                        <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                                                    </Calendar.Grid>
                                                    <Calendar.YearPickerGrid>
                                                        <Calendar.YearPickerGridBody>
                                                            {({ year }) => <Calendar.YearPickerCell year={year} />}
                                                        </Calendar.YearPickerGridBody>
                                                    </Calendar.YearPickerGrid>
                                                </Calendar>
                                            </DatePicker.Popover>
                                            <FieldError />
                                        </DatePicker>
                                        <Select name="session" isRequired className="w-full  " placeholder="Select one">
                                            <Label>Session</Label>
                                            <Select.Trigger className={'border border-[#C3C6D7]'}>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover className={''}>
                                                <ListBox >
                                                    {doctor.availability.map((session, index) => (
                                                        <ListBox.Item key={index} id={session} textValue={session}>
                                                            {session}
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                            <FieldError />
                                        </Select>
                                        <Modal.Footer>

                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button  type="submit" slot="close" >
                                                Book
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default AppointModal;