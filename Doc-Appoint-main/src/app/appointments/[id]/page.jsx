import AppointModal from '@/components/AppointModal';
import { getDoctors } from '@/data';
import { auth } from '@/lib/auth';
import { Button, Separator } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
import { FiMoon } from 'react-icons/fi';
import { GiGraduateCap } from 'react-icons/gi';
import { IoSunnyOutline } from 'react-icons/io5';
import { LuGraduationCap } from 'react-icons/lu';
import { MdOutlineLocalHospital } from 'react-icons/md';

export const metadata = {
  title: 'Doctor-Details',
}

const DoctorDetails = async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoints/${id}`,{
        headers:{
            authorization: `Bearer ${token}`,
        }
    })
    const doctor= await res.json()
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
                <div className='text-center bg-white rounded-3xl p-6 shadow'>
                    <Image src={doctor.image} alt={doctor.name} height={192} width={192} className='rounded-full mb-6 mx-auto border-4 border-[#00174B]/10 shadow-sm' />
                    <h2 className="text-2xl title">{doctor.name}</h2>
                    <p className='primary font-medium pt-1 pb-2'>{doctor.specialty}</p>
                    <p className='text text-sm font-medium flex items-center gap-1  justify-center pb-5 border-b-[1.5px] border-[#C3C6D7]/30'><MdOutlineLocalHospital />
                        {doctor.hospital}</p>
                    <div className='flex items-center justify-center gap-10 pt-6'>
                        <div>
                            <h3 className='text-2xl title'>{doctor.experience}+</h3>
                            <p className='text-xs font-semibold text '>YEARS EXP.</p>

                        </div>
                        <Separator orientation="vertical" />
                        <div>
                            <h3 className='text-2xl title'>৳{doctor.fee}</h3>
                            <p className='text-xs font-semibold text '>CONSULTATION</p>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-white rounded-3xl space-y-3 shadow mt-6'>
                    <div className='flex items-center gap-3'>
                        <div className="bg-[#dbe1ff] w-fit rounded-full p-3">
                            <LuGraduationCap

                                className="primary   h-5 w-5 " />

                        </div>
                        <div>
                            <h3 className='text-sm secondary font-medium'>Qualifications</h3>
                            <p className='text text-xs font-semibold'>{doctor.education}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className="bg-[#dbe1ff] w-fit rounded-full p-3">
                            <FaRegStar

                                className="primary   h-5 w-5 " />

                        </div>
                        <div>
                            <h3 className='text-sm secondary font-medium'>Patient Rating</h3>
                            <p className='text text-xs font-semibold'>{doctor.rating.score}/5 ({doctor.rating.totalReviews} reviews)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:col-span-2 space-y-6'>
                <div className=' bg-white rounded-3xl p-6 shadow'>
                    <h2 className="text-2xl title mb-3">About Dr. {doctor.name.split(" ")[1]}</h2>
                    <p className='text'>{doctor.description}</p>
                </div>

                <div className=' bg-white rounded-3xl p-6 shadow'>

                    <h2 className="text-2xl title mb-3">Availability Today</h2>
                    <div className='flex items-center flex-col md:flex-row gap-3'>
                        <div className='flex items-center gap-3 border border-[#C3C6D7] p-3 rounded-2xl w-full'>
                            <div className="bg-[#dbe1ff] w-fit rounded-2xl p-3 ">
                                <IoSunnyOutline
                                    className="primary   h-5 w-5 " />

                            </div>
                            <div>
                                <h3 className='text-sm secondary font-medium'>Morning Session</h3>
                                <p className='text-lg  primary font-medium'>{doctor.availability[0]}</p>
                            </div>

                        </div>
                        <div className='flex  items-center gap-3 border border-[#C3C6D7] p-3 rounded-2xl w-full'>
                            <div className="bg-[#dbe1ff] w-fit rounded-2xl p-3 ">
                                <FiMoon

                                    className="primary   h-5 w-5 " />

                            </div>
                            <div>
                                <h3 className='text-sm secondary font-medium'>Evening Session</h3>
                                <p className='text-lg  primary font-medium'>{doctor.availability[1]}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-[#f2f4ff] p-6 rounded-3xl flex md:items-center max-md:gap-2 justify-between border border-[#DBE1FF] shadow flex-col md:flex-row '>
                    <div >
                        <p className='text font-semibold text-xs'>READY TO CONSULT?</p>
                        <p className='title text-2xl font-semibold'>Secure Your Appointment</p>
                    </div>
                    <AppointModal doctor={doctor} />
                </div>

            </div>

        </div>
    );
};

export default DoctorDetails;