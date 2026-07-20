"use client";
import { revalidateDashboard } from "@/actions";
import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button, toast} from "@heroui/react";

const DeleteAlert = ({ booking }) => {
  const deleteHandler =async ()=>{
       const {data: tokenData} = await authClient.token()
       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`,
        {
          method: 'DELETE',
          headers:{ 'content-type' : 'application/json',
          authorization: `Bearer ${tokenData?.token}`

          }
        }
       )
       const data = await res.json()
       if (data.acknowledged
               ) {
                 await revalidateDashboard()
                 toast.danger("Your appointment has been deleted", {
                     actionProps: {
                       children: "Deleted",
                       className: "bg-danger text-danger-foreground",
                     },
                     description: "If you have any questions or need further assistance, please contact our support team.",
                   })
               }
  }
    return (
        <div>
             <AlertDialog>
      <Button variant="outline" className={'text-[#BA1A1A] border border-[#BA1A1A]/30 font-medium text-sm rounded-2xl'}>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete appointment permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete your appointment with <strong>{booking.doctorName}</strong> scheduled on <strong>{new Date(booking.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',    
                    year: 'numeric'
                })}</strong>. This action cannot be undone. Are you sure you want to proceed?
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={deleteHandler} slot="close" variant="danger">
                Delete Appointment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default DeleteAlert;