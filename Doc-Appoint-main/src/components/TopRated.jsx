import { Button } from "@heroui/react";
import Link from "next/link";
import DocCard from "./DocCard";
import { getDoctors } from "@/data";


const TopRated = async() => {
  const doctors = await getDoctors(`${process.env.NEXT_PUBLIC_SERVER_URL}/top-appoints`)
  
    return (
        <div>
            <div className="flex items-end justify-between">
                <div>
            <h1 className="title text-3xl">Top Rated Doctors</h1>
            <p className="text">Trusted specialists ready to assist you.</p>
                </div>
                <Link href={'/appointments'}>
             <Button variant="ghost" className={'primary font-medium text-sm'}>View all doctors</Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {doctors.map(doctor=><DocCard key={doctor._id} doctor={doctor}></DocCard>)}
            </div>

        </div>
    );
};

export default TopRated;