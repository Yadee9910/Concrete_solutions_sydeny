"use client";

import HeroCard from "@/components/cards/HeroCard";
import { ChevronRight, Phone, Sun } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Define all services
  const services = [
    { name: "Bricklaying", link: "/services/bricklaying" },
    { name: "Landscaping", link: "/services/landscaping" },
    { name: "Retaining Walls", link: "/services/retaining" },
  ];

  // Dynamically set HeroCard details based on current path
  const getHeroDetails = () => {
    if (pathname.includes("bricklaying"))
      return { title: "Bricklaying", page: "SERVICES", btn: "Your Sydney Bricklaying" };
    if (pathname.includes("landscaping"))
      return { title: "Landscaping Design", page: "SERVICES", btn: "Your Sydney Landscaper" };
    if (pathname.includes("retaining"))
      return { title: "Retaining Wall Installation", page: "SERVICES", btn: "YOUR SYDNEY RETAINING WALL CONTRACTORS" };
    return { title: "Bricklaying", page: "SERVICES", btn: "Bricklaying" };
  };

  const heroData = getHeroDetails();

  return (
    <div>
      <HeroCard title={heroData.title} page={heroData.page} btn={heroData.btn} />

      <div className="grid lg:grid-cols-3 mx-auto  lg:px-40 md:px-10 sm:px-20 px-10 py-6 gap-16">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit pb-4  ">
          <div className="bg-text/10 p-3 rounded-xl h-fit">
            <h3 className="text-secondary text-lg font-semibold p-3">Our Services</h3>
            {services.map((ser, index) => {
              const isActive = pathname === ser.link;
              return (
                <div
                  key={index}
                  onClick={() => router.push(ser.link)}
                  className={`flex flex-row border-b border-gray-200 gap-8 p-3 justify-between w-full items-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? " text-secondary font-semibold"
                      : "text-text hover:text-primary hover:translate-x-1"
                  }`}
                >
                  <p className="text-sm">{ser.name}</p>
                  <div
                    className={`rounded-full flex justify-end p-1 ${
                      isActive ? "bg-secondary" : "bg-secondary/10"
                    }`}
                  >
                    <ChevronRight
                      className={`size-4 ${
                        isActive ? "text-main" : "text-secondary"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="bg-secondary flex flex-col gap-3 p-5 py-8 text-main rounded-lg">
            <h1 className="text-2xl font-semibold">
              Need a Bricklayer in Sydney? Get Quality Bricklaying for an
              Affordable Price.
            </h1>

            <p className="text-text text-base leading-6 font-medium">
              We are your local bricklayers based in Seven Hills, trusted across
              Western Sydney and The Hills District for exceptional brickwork
              and masonry services.
            </p>

            <div className="flex flex-row items-center gap-4 mt-3 bg-text/30 p-3 rounded-lg">
              <Sun className="size-8" fill="#F59E0B" />
              <p className="text-sm">100% Quality Workmanship Guaranteed</p>
            </div>

            <button className="bg-primary text-main p-2 mt-3 text-sm font-medium rounded-lg">
              Get a Free Quote Today
            </button>

            <div className="flex flex-col gap-3 pt-5">
              {/* Call details */}
              <div className="flex flex-row items-center gap-3">
                <div className="bg-text/30 rounded-full p-3">
                  <Phone className="text-main size-5" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-semibold text-primary">CALL US</span>
                  <span className="font-medium hover:text-primary cursor-pointer">
                    0758948624
                  </span>
                </div>
              </div>

              {/* Email section */}
              <div className="flex flex-row items-center gap-3">
                <div className="bg-text/30 rounded-full p-3">
                  <MdEmail className="text-main size-5" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-semibold text-primary">EMAIL US</span>
                  <span className="font-medium hover:text-primary cursor-pointer">
                    info@rrrbricklaying.com.au
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-3 col-span-2">{children}</div>
      </div>
    </div>
  );
}
