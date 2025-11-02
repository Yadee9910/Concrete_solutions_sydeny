import { logo } from "../app/assets/assets"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,DropdownMenuSeparator } from "./ui/dropdown-menu"
import { ArrowRight, ChevronDown, Phone } from "lucide-react"
import Link from "next/link"


export default function Header(){
    return(
        <div className="bg-main px-6 py-4 h-[12vh] w-full flex flex-row justify-between items-center ">
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
                    <Link href="/" className="hover:text-primary cursor-pointer ">Home</Link>
                    <DropdownMenu> 
                        <DropdownMenuTrigger asChild>
                           <button className="flex flex-row gap-1 items-center focus:outline-none cursor-pointer hover:text-primary ">
                                <Link href="">Services</Link>
                                <ChevronDown className="size-4" />
                           </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="rounded-lg text-text text-lg bg-main border-gray shadow-sm">
                            <DropdownMenuItem className="cursor-pointer hover:translate-x-2 transition-transform duration-200 ease-in-out hover:text-primary  px-4 py-2 text-sm tracking-wide ">Landscaping</DropdownMenuItem>  <DropdownMenuSeparator className="bg-text/10 h-px" />
                            <DropdownMenuItem className="cursor-pointer hover:translate-x-2 transition-transform duration-200 ease-in-out hover:text-primary  px-4 py-2 text-sm tracking-wide ">Landscaping</DropdownMenuItem>
                             <DropdownMenuSeparator className="bg-text/10 h-px" />
                            <DropdownMenuItem className="cursor-pointer hover:translate-x-2 transition-transform duration-200 ease-in-out hover:text-primary  px-4 py-2 text-sm tracking-wide ">Landscaping</DropdownMenuItem>                   
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="/about" className="hover:text-primary cursor-pointer ">About</Link>
                    <Link href="/blogs"  className="hover:text-primary cursor-pointer ">Blogs</Link>
                    <Link href="/contact" className="hover:text-primary cursor-pointer ">Contact</Link>
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
                <div className=" bg-secondary flex flex-row  gap-2 items-center py-2 px-3 text-sm rounded-3xl text-main">
                    <button>
                        Get Free Quote
                    </button>
                    <ArrowRight/>
                </div>
            </div>
        </div> 
    )
}