"use client"
import HeroCard from "@/components/cards/HeroCard";
import { ChevronRight, Sun } from "lucide-react";
import { useRouter } from "next/navigation";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter()
  const services =[
    {name:"BrickLaying", link:"/services/bricklaying"},
    {name:"landscaping", link:"/services/landscaping"},
    {name:"BrickLaying", link:"/services/bricklaying"}
  ]
  return (
<div>
     <HeroCard title="Bricklaying" page="SERVICES" btn="Your Sydney "/>

     <div className="grid grid-cols-3 mx-auto px-44 py-12 gap-24">
     
        {/* the sidebar  */}
        <div className="flex flex-col gap-3 sticky top-0 h-auto">
          <div className="bg-secondary/10 p-3  rounded-xl  h-fit ">
            <h3 className="text-secondary text-lg p-3">Our Services</h3>
            {services.map((ser,index)=>(
              <div key={index} className="flex flex-row border-b border-gray-300 gap-8 p-3 justify-between w-full items-center " onClick={()=>router.push(`/${ser.link}`)}>
                  <p className="text-secondary text-sm font-medium">{ser.name}</p>
                  <div className="bg-secondary/10 rounded-full flex justify-end">
                    <ChevronRight className="size-5"/>
                  </div>       
                </div>
            ))}
          </div>

          <div className="bg-secondary flex flex-col gap-3 p-5 py-8 text-main rounded-lg">
            <h1 className="text-2xl font-semibold">
              Need a Bricklayer in Sydney? Get Quality Bricklaying for an Affordable Price.
            </h1>

            <p className="text-text text-base leading-6 font-medium">
              We are your local bricklayers based in Seven Hills, trusted across Western Sydney and The Hills District for exceptional brickwork and masonry services
            </p>

            <div className="flex flex-row items-center gap-4 mt-3 bg-text/30 p-3 rounded-lg">
              <Sun className="size-8" fill="#F59E0B"/>
              <p className="text-sm">100% Quality Workmanship Guaranteed</p>
            </div>

            <button className="bg-primary text-main p-2 mt-3 text-sm font-medium rounded-lg">
              Get a Free Quote Today
            </button>
          </div>
        </div>


        <div className="space-y-3 col-span-2">
          {children}
        </div>

     </div>
</div>
  );
}