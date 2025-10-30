import { logo } from "../app/assets/assets"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,DropdownMenuSeparator } from "./ui/dropdown-menu"
import { ArrowRight, ChevronDown, Phone } from "lucide-react"


export default function Header(){
    return(
        <div className="bg-main w-full flex flex-row justify-between items-center ">
            {/* the logo */}
            <div className=" ">
                <Image 
                    src={logo}
                    alt="logo" 
                    width={90}
                />
            </div>

            {/* the navbar content */}
             <nav>            
                <ul className="flex flex-row gap-8 items-center text-base font-medium">
                    <li className="hover:text-primary cursor-pointer ">Home</li>
                    <DropdownMenu> 
                        <DropdownMenuTrigger asChild>
                           <button className="flex flex-row gap-1 items-center focus:outline-none cursor-pointer hover:text-primary ">
                                <li>Services</li>
                                <ChevronDown className="size-4" />
                           </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="rounded-lg text-text text-lg border-gray shadow-sm">
                            <DropdownMenuItem className="cursor-pointer hover:translate-x-2 transition-transform duration-200 ease-in-out hover:text-primary  px-4 py-2 text-sm tracking-wide ">Landscaping</DropdownMenuItem>  <DropdownMenuSeparator className="bg-text/10 h-px" />
                            <DropdownMenuItem className="cursor-pointer hover:translate-x-2 transition-transform duration-200 ease-in-out hover:text-primary  px-4 py-2 text-sm tracking-wide ">Landscaping</DropdownMenuItem>
                             <DropdownMenuSeparator className="bg-text/10 h-px" />
                            <DropdownMenuItem className="cursor-pointer hover:translate-x-2 transition-transform duration-200 ease-in-out hover:text-primary  px-4 py-2 text-sm tracking-wide ">Landscaping</DropdownMenuItem>                   
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <li className="hover:text-primary cursor-pointer ">About</li>
                    <li className="hover:text-primary cursor-pointer ">Blogs</li>
                    <li className="hover:text-primary cursor-pointer ">Contact</li>
                </ul>
             </nav>


            {/* the contact no and the get quote btn */}
            <div className="flex flex-row gap-4 items-center">

                {/* contact number */}
                <div className="flex flex-row gap-1 items-center">
                    <Phone />
                    <p className="font-medium">0778946789</p>
                </div>

                {/* get quote button */}
                <div className=" bg-secondary  py-2 px-3 font-medium  text-sm rounded-3xl text-main">
                    <div className="hover:animate__animated animate__slideInUp flex flex-row  gap-2 items-center ">
                        <button>
                            Get Free Quote
                        </button>
                         <ArrowRight/>
                    </div>
                </div>
            </div>

        </div>
    )
}