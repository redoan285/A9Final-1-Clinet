"use client";
import { authClient } from "@/lib/auth-client";
import { Bars, Pencil, SquarePlus, TrashBin } from "@gravity-ui/icons";
import { Avatar, Description, Dropdown, Header, Kbd, Label, Separator } from "@heroui/react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { FaBriefcaseMedical } from "react-icons/fa";

const Navbar = () => {
    const pathname = usePathname();
    const userData = authClient.useSession()
        const user = userData?.data?.user
    const logoutHandler = async () => {
        await authClient.signOut()
        redirect('/')
        
    }

    
    return (
        <div className=" bg-[#f8f9ff] h-16 md:px-6 px-1.5 flex items-center justify-between border-b-[1.5px] border-[#C3C6D7]/50 ">
            <div className="flex items-center ">
                <div className="md:hidden">

                    <Dropdown>
                        <Button isIconOnly aria-label="Menu" variant="ghost" >
                            <Bars className="outline-none text-[#004AC6]" />
                        </Button>
                        <Dropdown.Popover className="min-w-55">
                            <Dropdown.Menu
                                disabledKeys={["delete-file"]}
                                onAction={(key) => console.log(`Selected: ${key}`)}
                            >
                                <Dropdown.Section>
                                    <Header>Go to</Header>
                                    <Dropdown.Item id="new-file" textValue="New file" >
                                        <Link href={"/"} className={`${pathname === '/' ? "primary  text-sm font-medium hover:text-[#004AC6]/80!" : "text text-sm font-medium hover:text-[#0B1C30]!"} `}>
                                            <span className={`${pathname === '/' ? "border-b border-[#004AC6]" : ""} `}>
                                                Home
                                            </span>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="all-appointments" textValue="all-appointments">
                                        <Link href={"/appointments"} className={`${pathname === '/appointments' ? "primary  text-sm font-medium hover:text-[#004AC6]/80!" : "text text-sm font-medium hover:text-[#0B1C30]!"} `}>
                                            <span className={`${pathname === '/appointments' ? "border-b border-[#004AC6]" : ""} `}>
                                                All Appointments
                                            </span>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="dash-board" textValue="dashboard">
                                        <Link href={"/dashboard"} className={`${pathname === '/dashboard' ? "primary  text-sm font-medium hover:text-[#004AC6]/80!" : "text text-sm font-medium hover:text-[#0B1C30]!"} `}>
                                            <span className={`${pathname === '/dashboard' ? "border-b border-[#004AC6]" : ""} `}>
                                                Dashboard
                                            </span>
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Section>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>
                <Link href={'/'}>
                    <h1 className="text-2xl font-bold primary  main-title flex items-center gap-1"><FaBriefcaseMedical />
                        DocAppoint</h1>
                </Link>
            </div>
            <div className="hidden md:block">
                <ul className="flex items-center gap-5">
                    <Link href={"/"} className={`${pathname === '/' ? "primary border-b border-[#004AC6] text-sm font-medium hover:text-[#004AC6]/80!" : "text text-sm font-medium hover:text-[#0B1C30]!"} `}>Home</Link>
                    <Link href={"/appointments"} className={`${pathname === '/appointments' ? "primary border-b border-[#004AC6] text-sm font-medium hover:text-[#004AC6]/80!" : "text text-sm font-medium hover:text-[#0B1C30]!"} `}>All Appointments</Link>
                    <Link href={"/dashboard"} className={`${pathname === '/dashboard' ? "primary border-b border-[#004AC6] text-sm font-medium hover:text-[#004AC6]/80!" : "text text-sm font-medium hover:text-[#0B1C30]!"} `}>Dashboard</Link>
                </ul>

            </div>
            <div className="flex items-center md:gap-3 gap-2 ">
                {
                    user ? <> <Avatar className="border-[#C3C6D7] border">
        <Avatar.Image referrerPolicy="no-referrer" alt={user.name} src={user?.image} />
        <Avatar.Fallback className="bg-[#eff4ff]  ">{user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}</Avatar.Fallback>
      </Avatar>
            
                    <Button onClick={logoutHandler} variant="" className="text-sm font-medium bg-[#004AC6] rounded-2xl  text-white">Logout</Button>
                </>: <>
                <Link href={"/login"}>
                    <Button variant="ghost" className="text-sm font-medium primary rounded-2xl ">Login</Button>
                </Link>
                <Link href={"/register"}>
                    <Button variant="" className="text-sm font-medium bg-[#004AC6] rounded-2xl  text-white">Register</Button>
                </Link>
                </>
                }
                
            </div>
        </div>
    );
};

export default Navbar;