"use client";

import { revalidateDashboard } from "@/actions";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select, FieldError, Calendar, DateField, DatePicker, toast } from "@heroui/react";
import { parseDate } from "@internationalized/date";

import { FiEdit } from "react-icons/fi";

const UpdateProfile = ({ user }) => {
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
      const result =  await authClient.updateUser({
            image: values.image,
            name: values.name,
        })
        if(result.data){
            await revalidateDashboard();
            toast.success("Your profile has been updated")
        }
       
    }
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
                                    <Modal.Heading className="title text-xl">Update Profile</Modal.Heading>

                                </div>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Make changes to your profile information as needed.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
                                        <TextField defaultValue={user.name} isRequired className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Your Name</Label>
                                            <Input className={'bg-white border border-[#C3C6D7]'} placeholder="Enter Your Name" />
                                            <FieldError />
                                        </TextField>
                                        <TextField defaultValue={user.image} className="w-full" name="image" type="text" variant="secondary">
                                            <Label>Image URL</Label>
                                            <Input className={'bg-white border border-[#C3C6D7]'} placeholder="Enter image URL" />
                                            <FieldError />
                                        </TextField>

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

export default UpdateProfile;