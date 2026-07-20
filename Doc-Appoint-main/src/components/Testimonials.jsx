import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Testimonials = () => {
    return (
        <div>
            <h1 className="title text-3xl pb-6">Patient Testimonials</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-3 bg-white rounded-3xl shadow p-6">
                    <div className="text-[#F59E0B] flex items-center gap-0.5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p className="secondary italic">&quot;The booking process was incredibly smooth,
                        and Dr. Rahman was exceptionally attentive. A
                        truly modern healthcare experience.&quot;</p>
                    <div className="flex items-center gap-3 ">
                        <div className="w-10 h-10 rounded-full  bg-[#DBE1FF] flex flex-col items-center justify-center">
                            <p className="primary  font-bold    text-sm text-center ">MK</p>
                        </div>
                        <div>
                            <p className="secondary  text-sm font-medium">Mohammed K.</p>
                            <p className="font-semibold text text-xs">Cardiology Patient</p>

                        </div>

                    </div>
                </div>
                <div className="space-y-3 bg-white rounded-3xl shadow p-6 flex flex-col">
                    <div className="text-[#F59E0B] flex items-center gap-0.5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <p className="secondary italic grow">&quot;I appreciated the minimalist design of the
                        app. It didn&apos;t feel overwhelming like other
                        medical portals. Dr. Chen was fantastic.&quot;</p>
                    <div className="flex items-center gap-3 ">
                        <div className="w-10 h-10 rounded-full  bg-[#6CF8BB] flex flex-col items-center justify-center">
                            <p className="text-[#00714D] font-bold    text-sm text-center ">ST</p>
                        </div>
                        <div>
                            <p className="secondary  text-sm font-medium">Sarah T.</p>
                            <p className="font-semibold text text-xs">Neurology Patient</p>

                        </div>

                    </div>
                </div>
                <div className="space-y-3 bg-white rounded-3xl shadow p-6 flex flex-col">
                    <div className="text-[#F59E0B] flex items-center gap-0.5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p className="secondary italic grow">&quot;Very professional service. The interface is
                        clean and finding a specialist took only
                        minutes. Highly recommend DocAppoint.&quot;</p>
                    <div className="flex items-center gap-3 ">
                        <div className="w-10 h-10 rounded-full  bg-[#996100] flex flex-col items-center justify-center">
                            <p className="text-[#FFEEDD]  font-bold    text-sm text-center ">RJ</p>
                        </div>
                        <div>
                            <p className="secondary  text-sm font-medium">Rahim J.</p>
                            <p className="font-semibold text text-xs">General Checkup</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;