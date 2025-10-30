import { footerLogo } from "@/app/assets/assets";
import { ArrowRight, ChevronRight, Facebook, Instagram, PhoneCall } from "lucide-react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { RiTiktokFill } from "react-icons/ri";


export default function Footer(){
    return(
        <div className="w-full text-main py-10 px-12 bg-secondary grid grid-cols-2 gap-40 rounded-lg">
           
            {/* the company details col */}
            <div className="flex flex-col gap-5">
                {/* the logo */}
                <div>
                    <Image 
                        src={footerLogo}
                        alt="logo" 
                        width={90}
                    />
                </div>

                <span className="text-justify text-sm tracking-wider font-light w-5/6">
                    Expert Bricklaying & Masonry Works. Solutions Tailored 
                    to Your Needs Ensuring Accuracy, Compliance, and Financial Peace of Mind.
                </span>

                {/* the social media logos */}
                <div className="flex flex-row text-main/80 gap-3  ">
                    <div className="rounded-full hover:bg-primary/90 p-2 cursor-pointer hover:animate__animated hover:animate__zoomIn "> 
                    <Instagram className="" />
                    </div>
                    <div className="rounded-full hover:bg-primary/90 p-2 cursor-pointer"> 
                    <Facebook className="" />
                    </div>
                    <div className="rounded-full hover:bg-primary/90 p-2 cursor-pointer"> 
                    <RiTiktokFill className="size-6" />
                    </div>
                </div>

                {/* contact information */}
                <div className="flex flex-row gap-10 pt-6">

                    {/* call contact */}
                    <div className="flex flex-row text-sm tracking- font-light gap-2 items-center">
                        <div className="bg-main p-2 flex items-center justify-center  rounded-full">
                            <PhoneCall className="text-secondary size-5"/>
                        </div>
                        <p className="font-medium text-main">0759497812</p>
                    </div>

                    {/* email */}
                    <div className="flex flex-row text-sm tracking- font-light gap-2 items-center">
                        <div className="bg-main p-2 flex items-center justify-center  rounded-full">
                            <MdEmail className="text-secondary size-5"/>
                        </div>
                        <p className="font-medium text-main hover:text-primary cursor-pointer">info@rrrbricklaying.com.au</p>
                    </div>
                    
                </div>

            </div>

            {/* the menu items list */}

            <div className="grid grid-cols-3">
                {/* about list */}
                <div className="flex flex-col gap-3">
                    <span className="font-semibold tracking-wider text-primary">ABOUT</span>
                    <ul className="flex flex-col gap-3 text-sm font-light">
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Home</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Services</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">About</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Blogs</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Contact</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Privacy Policy</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Terms and Condition</li>
                    </ul>
                </div>

                {/* service list */}
                <div className="flex flex-col gap-3">
                    <span className="font-semibold tracking-wider text-primary">SERVICES</span>
                    <ul className="flex flex-col gap-3 text-sm font-light">
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Bricklaying</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Landscaping</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Retaining Walls</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Concrete Driveways</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Decorative Concrete</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Paving</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Excavation</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:translate-x-2 hover:transition-3ms hover:ease-in-out hover:text-primary">Concrete Solution</li>
                    </ul>
                </div>

                 {/* the newsletter section */}
                <div className="flex flex-col gap-3 ">
                    <span className="font-semibold tracking-wider text-primary">NEWSLETTER</span>

                    <div className="flex flex-col gap-4 text-sm">
                        <p className="tracking-wider font-light">Want to receive news and updates? Enter your email.</p>

                        {/* the newsletter submit section */}
                            <input 
                                type="email"
                                placeholder="Enter your email"
                                className=" w-full py-2 px-4 rounded-md text-sm bg-text focus:outline-none "
                            />

                            <div className="bg-main text-black py-2 px-4 rounded-xl flex flex-row gap-3 mt-8 w-32">
                                <button className="text-wide font-medium tracking-wide cursor-pointer">
                                    Submit 
                                </button>
                                <ArrowRight />
                            </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}