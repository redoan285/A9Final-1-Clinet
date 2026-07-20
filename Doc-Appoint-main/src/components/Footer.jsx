import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
       <footer className="w-full   items-center justify-between bg-[#213145] text-[#DBE1FF]  px-6 py-10 border-t-[1.5px] border-[#C3C6D7]/50 md:flex">
        <div>
            <p className="text-[#F8F9FF] font-bold text-2xl">DocAppoint</p>
            <p className="my-2 text-sm">&copy; {new Date().getFullYear()} DocAppoint. Clinical excellence in every appointment.</p>
        </div>
        <div>
            <div className="flex md:items-center gap-2 md:gap-5 flex-col md:flex-row">
            <div className="flex items-center gap-5">
            <a className="text-sm font-semibold hover:underline">Privacy Policy</a>
            <a className="text-sm font-semibold hover:underline">Terms of Service</a>
            </div>
            <div className="flex items-center gap-5">
            <a className="text-sm font-semibold hover:underline">Help Center</a>
            <a className="text-sm font-semibold hover:underline">Contact Us</a>
            </div>
            </div>
           <div className="flex items-center  md:justify-end gap-5 mt-2">
            <p className="text-sm ">Follow us on:</p>
            <div className="flex items-center gap-3 justify-end ">
                <FaFacebook />
                <FaInstagramSquare />
                <FaSquareXTwitter />


            </div>
            </div> 
        
        </div>
       </footer>
    );
};

export default Footer;