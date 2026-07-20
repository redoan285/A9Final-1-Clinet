"use client";

import { revalidateDashboard } from "@/actions";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select, FieldError, Calendar, DateField, DatePicker, toast } from "@heroui/react";
import { parseDate } from "@internationalized/date";

import { FiEdit } from "react-icons/fi";

const UpdateBooking = ({ booking }) => {
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        const data = {
            patientName: values.name,
            phone: values.phone,
            session: values.session,
            date: values.date,
        }
        const {data: tokenData} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`,
            {
                method: 'PATCH',
                headers: { 'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
                 },
                body: JSON.stringify(data)
            }
        )
        const final = await res.json()
        if (final.acknowledged
        ) {
          await revalidateDashboard()
          toast.success("Your appointment has been updated", {
              actionProps: {
                children: "Updated",
                className: "bg-success text-white",
              },
              description: "If you have any questions or need further assistance, please contact our support team.",
            })
        }
    };
    return (
        <div>
            <Modal className={' p-0 m-0'}>
                <Button variant="secondary" className={'primary bg-[#DBE1FF]/50 font-medium text-sm rounded-2xl'}>Update</Button>
                <Modal.Backdrop >
                    <Modal.Container placement="auto" className={'p-0 m-0'}>
                        <Modal.Dialog className="sm:max-w-md ">
                            <Modal.CloseTrigger className="mt-3" />
                            <Modal.Header className="">
                                <div className="flex items-center gap-2">

                                    <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                        <FiEdit

                                            className="size-5" />
                                    </Modal.Icon>
                                    <Modal.Heading className="title text-xl">Update Appointment</Modal.Heading>

                                </div>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Make changes to your appointment details as needed.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
                                        <TextField className="w-full " name="doctor" type="text" variant="secondary">
                                            <Label>Doctor Name</Label>
                                            <Input value={booking.doctorName} className={'bg-[#edf3ff] border border-[#C3C6D7]'} disabled placeholder="Enter Doctor Name" />
                                        </TextField>
                                        <TextField defaultValue={booking.patientName} isRequired className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Your Name</Label>
                                            <Input className={'bg-white border border-[#C3C6D7]'} placeholder="Enter Your Name" />
                                            <FieldError />
                                        </TextField>
                                        <TextField defaultValue={booking.phone} isRequired className="w-full" name="phone" type="tel" variant="secondary">
                                            <Label>Phone</Label>
                                            <Input className={'bg-white border border-[#C3C6D7]'} placeholder="Enter your phone number" />
                                            <FieldError />
                                        </TextField>
                                        <DatePicker isRequired defaultValue={parseDate(booking.date)} name="date">
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
                                        <Select defaultValue={booking.session} name="session" isRequired className="w-full  " placeholder="Select one">
                                            <Label>Session</Label>
                                            <Select.Trigger className={'border border-[#C3C6D7]'}>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover className={''}>
                                                <ListBox >
                                                    {booking.availability.map((session, index) => (
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
                                            <Button type="submit" slot="close" >
                                                Update
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

export default UpdateBooking;