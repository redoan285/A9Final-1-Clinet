import { Button } from "@heroui/react";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import HeroImg from "../../public/hero.jpg"
import Image from "next/image";

const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 items-center">
            <div className="space-y-4 bg-[#d3e4fe] px-7 md:px-15 md:py-20 py-10 md:rounded-l-3xl max-md:rounded-t-3xl h-full">
                <h1 className="main-title text-5xl">Book Your Health
                    Today</h1>
                <p className="text text-lg">Experience seamless medical appointments with top-
                    rated professionals. Prioritize your well-being with
                    DocAppoint&apos;s clinical clarity and efficient workflows.</p>
                <Link href={'/appointments'}>
                <Button variant="" className="text-sm font-medium bg-[#004AC6] rounded-2xl  text-white">Find a Doctor<IoMdArrowRoundForward /></Button>
                </Link>
            </div>
            <Image src={HeroImg} alt="Banner Img" height={400} width={400} className="w-full h-full md:rounded-r-3xl max-md:rounded-b-3xl"></Image>
        </div>
    );
};

export default Hero;