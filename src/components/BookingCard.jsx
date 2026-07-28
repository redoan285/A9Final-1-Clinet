
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoCallOutline, IoPersonOutline } from "react-icons/io5";
import UpdateBooking from "./UpdateBooking";
import DeleteAlert from "./DeleteAlert";
const BookingCard = ({ booking }) => {
    return (
        <div className="bg-white rounded-4xl p-6 shadow">
            <div className="flex items-center gap-3">
                <Image src={booking.doctorImage} alt={booking.doctorName} height={64} width={64} className="rounded-full border-2 border-[#00174B]/10 shadow-sm"></Image>
                <div className="">
                    <p className="title text-lg">{booking.doctorName}</p>
                    <p className="primary">{booking.specialty}</p>
                </div>
            </div>
            <div className="bg-[#f8f9ff] rounded-2xl p-3 border border-[#C3C6D7]/40 mt-6">
                <div className="grid grid-cols-2 items-center   border-b border-[#C3C6D7]/40 pb-3">
                    <div>
                        <p className="flex items-center gap-1 text-xs font-semibold text pb-1"><CiCalendar className="mb-0.5" />
                            Date</p>
                        <p className="text-sm secondary font-medium">{new Date(booking.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}</p>
                    </div>
                    <div>
                        <p className="flex items-center gap-1 text-xs font-semibold text pb-1"><IoMdTime
                            className="mb-0.5" />
                            Session</p>
                        <p className="text-sm secondary font-medium">{booking.session}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center  pt-3">
                    <div>
                        <p className="flex items-center gap-1 text-xs font-semibold text pb-1"><IoPersonOutline
                            className="mb-0.5" />
                            Patient</p>
                        <p className="text-sm secondary font-medium">{booking.patientName}</p>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-1 text-xs font-semibold text pb-1"><IoCallOutline

                            className="mb-0.5" />
                            Phone</p>
                        <p className="text-sm secondary font-medium">{booking.phone}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4 mt-6">
                <DeleteAlert booking={booking}></DeleteAlert>
               <UpdateBooking booking={booking}></UpdateBooking>
            </div>
        </div>
    );
};

export default BookingCard;