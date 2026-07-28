'use client'
import DocCard from "@/components/DocCard";
import {  doctorsPromise } from "@/data";
import { Button, SearchField, Surface} from "@heroui/react";
import { use, useState } from "react";
const doctorsPromised = doctorsPromise(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoints`);


const Appointments =  () => {
    const [query, setQuery] = useState(doctorsPromised);
    const [searchValue, setSearchValue] = useState(null)
     const doctors = use(query);
     const queryHandler = (e) => {
       const value = e.target.value;
      
       if(value.length===0){
        setSearchValue(null)
       }
       else{
        setSearchValue(value)
       }
       
    } 
    const searchHandler =()=>{
         const searchPromise = doctorsPromise(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoints/search/${searchValue}`);

        if(searchValue === null){
        setQuery(doctorsPromised);
       }
       else{
        setQuery(searchPromise);
       }
    }
    
    
    return (
        <div>
            <h2 className="title text-3xl">Find Your Specialist</h2>
            <p className="text text-lg">Search and book appointments with top medical professionals.</p>
            <div className="mt-6 mb-7">
                <Surface className="flex w-full   gap-4 rounded-3xl p-3 border border-[#C3C6D7] flex-row items-center">
      <SearchField name="search" variant="secondary" className={'w-full'} >
        <SearchField.Group className={'bg-[#f8f9ff] border border-[#C3C6D7] rounded-2xl'}>
          <SearchField.SearchIcon />
          <SearchField.Input onKeyDown={(e) => e.key === 'Enter' && searchHandler()}  className="w-full " placeholder="Search by Doctor Name" onChange={queryHandler} />
          <SearchField.ClearButton onClick={()=>{setSearchValue(null);
               setQuery(doctorsPromised)
          }} />
        </SearchField.Group>
       
      </SearchField>
       <Button onClick={searchHandler} variant="outline" className={'text-white border border-[#F8F9FF] rounded-3xl  bg-[#004AC6]'}>Search</Button>
      </Surface>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
               {doctors.length > 0 ? (
                    doctors.map(doctor => <DocCard key={doctor._id} doctor={doctor} />)
                ) : (
                    <p className="col-span-full text-center text-gray-500">No doctors found matching your search.</p>
                )}
            </div>
        </div>
    );
};

export default Appointments;