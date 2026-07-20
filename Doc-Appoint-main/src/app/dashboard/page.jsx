import BookingCard from "@/components/BookingCard";
import UpdateProfile from "@/components/UpdateProfile";
import { auth } from "@/lib/auth";
import { Tabs } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import profile from "../../../public/profile.png"

export const metadata = {
  title: 'Doc-Appoint Dashboard',
}

const DashboardPage =async () => {
    const session = await auth.api.getSession({
    headers: await headers() 
})
  const {token} = await auth.api.getToken({
          headers: await headers()
      })
  const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`,{
         headers:{
                    authorization: `Bearer ${token}`,
                }
    });
    const bookings = await res.json();
    
    return (
        <div>
            <Tabs
                className="w-full  flex flex-col md:flex-row gap-6 "
            >
                <Tabs.ListContainer className="w-full md:w-1/4 ">
                    <Tabs.List
                        aria-label="Options"
                        className=" flex flex-row md:flex-col w-full bg-white px-2 rounded-2xl py-2 shadow"
                    >
                        <Tabs.Tab className="secondary font-medium text-sm flex items-center justify-start gap-1 " id="bookings"><FaRegCalendarAlt className="mb-0.5" />
                            My Bookings<Tabs.Indicator className="bg-[#DBE1FF] text-[#00174B]" /></Tabs.Tab>
                        <Tabs.Tab className="secondary font-medium text-sm flex items-center justify-start gap-1" id="profile"><MdPerson />
                            My Profile<Tabs.Indicator className="bg-[#DBE1FF] text-[#00174B]" /></Tabs.Tab>
                    </Tabs.List>
                    <div className="secondary text-sm space-y-1 bg-[#eff4ff] rounded-4xl mt-3 p-6 shadow max-md:hidden">
                        <p>Need help?</p>
                        <p>Contact our support team for
                            assistance with your bookings.</p>
                         <p className="primary">support@docappoint.com</p>
                    </div>
                </Tabs.ListContainer>

                <div className="">
                    <Tabs.Panel className="md:px-4" id="bookings">
                        <h3 className="title text-3xl">My Bookings</h3>
                        <p className="text">Manage your upcoming and past medical appointments.</p>
                        {
                            bookings.length ===  0 ? <div className="flex flex-col items-center gap-4 mt-6 bg-white py-20 px-10 rounded-4xl shadow">
                                <FaRegCalendarAlt className="text-[#004AC6] text-6xl" />
                                <p className="text text-lg text-center">You have no bookings yet. Start by booking an appointment with your doctor.</p>
                            </div>  : <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            {bookings.map((booking,i) => <BookingCard key={i} booking={booking}></BookingCard>)}
                        </div>
                        }
                        
                    </Tabs.Panel>
                    <Tabs.Panel className="md:px-4" id="profile">
                        <h3 className="title text-3xl">My Profile</h3>
                        <p className="text">Manage your profile information.</p>
                       <div className="w-full md:w-sm bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col items-center mt-6">
  <div className="relative mb-5">
    <Image 
      src={user?.image || profile} 
      alt={user?.name || "User avatar"} 
      height={120} 
      width={120} 
      className="rounded-full object-cover border-4 border-[#00174B]/10 shadow-sm"
    />
  </div>

  <div className="text-center w-full mb-6">
    <h2 className="text-xl font-bold secondary mb-1">{user?.name}</h2>
    <p className="text-sm font-medium text-gray-500">
      Patient ID: <span className="secondary">{user?.id?.slice(0, 8)}</span>
    </p>
  </div>
  <div className="w-full bg-[#f8f9ff] rounded-2xl p-4 mb-6 text-sm text-gray-600 border border-gray-200 ">
    <div className="flex flex-col space-y-1">
      <span className="font-medium text-gray-400 uppercase text-xs tracking-wider">Email Address</span>
      <span className="font-semibold secondary wrap-break-word">{user?.email}</span>
    </div>
  </div>
  <div className="w-full flex justify-center mt-auto">
    <UpdateProfile user={user} />
  </div>
</div>
                    </Tabs.Panel>

                </div>
            </Tabs>
        </div>
    );
};

export default DashboardPage;