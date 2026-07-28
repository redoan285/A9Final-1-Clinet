import { FaRegCalendarCheck } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";


const Why = () => {
    return (
        <div className="bg-[#eff4ff] md:p-16 p-7 rounded-3xl">
            <div className="text-center">

                <h2 className="title text-3xl mb-1.5">Why Choose Us</h2>
                <p className="text mb-6">We prioritize your health with streamlined workflows and clinical excellence.</p>
            </div>
            <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
                <div className="space-y-2.5 flex flex-col items-center justify-center">
                    <div className="bg-[#dbe1ff] w-fit rounded-full p-4">
                        <FaUserDoctor className="primary   h-6 w-6 " />
                    </div>
                    <h4 className="title text-xl">Expert Doctors</h4>
                    <p className="text text-center">Access a network of highly qualified and
                        experienced medical professionals across
                        various specialties.</p>

                </div>
                <div className="space-y-2.5 flex flex-col items-center justify-center">
                    <div className="bg-[#dbe1ff] w-fit rounded-full p-4">
                        <FaRegCalendarCheck className="primary   h-6 w-6 " />
                    </div>
                    <h4 className="title text-xl">Easy Booking</h4>
                    <p className="text text-center">Schedule your appointments seamlessly
                        with our intuitive, user-friendly digital
                        platform.</p>

                </div>
                <div className="space-y-2.5 flex flex-col items-center justify-center">
                    <div className="bg-[#dbe1ff] w-fit rounded-full p-4">
                        <MdOutlineSupportAgent className="primary   h-6 w-6 " />
                    </div>
                    <h4 className="title text-xl">24/7 Support</h4>
                    <p className="text text-center">Our dedicated support team is available
                        around the clock to assist with any
                        inquiries or issues.</p>

                </div>
            </div>
        </div>
    );
};

export default Why;