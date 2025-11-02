"use client";
import React, { useState } from "react";
import HeroCard from "@/components/cards/HeroCard";
import Indicators from "@/components/home/Indicators";
import Image from "next/image";
import { img } from "@/app/assets/assets";
import AboutUsCard from "@/components/cards/AboutUsCard";
import { Wrench } from "lucide-react";
import ToggleDownCard from "@/components/cards/ToggleDownCard";

interface DropdwonItem {
  id: string;
  title: string;
  content: string;
  isPlaceholder?: boolean;
}

function About() {
  const dropdownItems: DropdwonItem[] = [
    {
      id: "mission",
      title: "Our Mission",
      content:
        "Our Mission is to be the most reliable and highly-regarded bricklaying contractors in Sydney. We achieve this by always guaranteeing the structural integrity of every project and delivering complete, efficient hardscaping solutions. From simple brickwork to complex retaining walls, we are committed to providing the absolute best service, ensuring efficiency and transparency from project start to finish.",
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "We envision a future where every construction project in Sydney benefits from superior masonry and integrated structural design. Our goal is to continually redefine the benchmark for quality and efficiency, setting the industry standard for what clients should expect from a brickwork company. We strive to be the single-source contractor clients rely on for flawless results in excavation, concrete driveways, and specialist mason bricklayer services.",
    },
    {
      id: "core-values",
      title: "Our Core Values",
      content:
        "Our work is guided by three core Values. Precision is our cornerstone, committing us to exact measurements and flawless finishes on all bricklaying and paving work. Reliability means we show up on time, maintain clean worksites, and keep our word, giving you the peace of mind you expect from local bricklayers. Finally, Integrity ensures honest pricing and ethical practices, from the moment we calculate your retaining wall cost to the final project handover.",
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const [openItem, setOpenItem] = useState<string | null>("mission");
  return (
    <div className="flex flex-col gap-6">
      <HeroCard title="About Us" page="ABOUT US" btn="Who We Are" />

        {/* the who we are section */}
      <div className="grid grid-cols-2 gap-12 px-24 py-12 items-center min-h-[88vh]">
        <div>
          {/* header */}
          <div className="space-y-6">
            <h1 className=" bg-secondary w-fit p-2  font-medium text-main rounded-3xl py-2 px-4 text-sm leading-tight">
              Who We Are
            </h1>
            <h2 className="text-2xl md:text-5xl font-semibold text-secondary leading-tight">
              Your Trusted Financial Partners and Advisors
            </h2>
          </div>

          {/* description */}
          <div className="space-y-6">
            <p className="text-lg text-text leading-relaxed">
              We are RRR Bricklaying, a team of fully licensed, dedicated
              professional bricklayers and mason bricklayers proudly serving the
              entire Sydney Metro area for over 5 years. We specialize in
              delivering not just flawless brickwork, but complete, integrated
              hardscape solutions from initial excavation and retaining walls to
              stunning final finishes like concrete driveways and paving.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {dropdownItems.map((item) => (
            <ToggleDownCard
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              isOpen={openItem === item.id}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </div>

      <div>
        <Indicators />
      </div>

      {/* thre image showing section */}
      <div className="grid grid-cols-3 gap-10 px-52">
        <Image src={img} alt="about us img" className="rounded-lg " />
        <Image src={img} alt="about us img" className="rounded-lg " />
        <Image src={img} alt="about us img" className="rounded-lg " />
        <Image src={img} alt="about us img" className="rounded-lg" />
        <Image src={img} alt="about us img" className="rounded-lg" />
        <Image src={img} alt="about us img" className="rounded-lg" />
      </div>

      {/* the card component in about us */}
      <div className="flex flex-col gap-10 py-24 min-h-screen">
        <h1 className="text-center font-semibold text-4xl text-secondary">
          Why Choose us?
        </h1>
        <div className="grid grid-cols-2 gap-8 h-full px-28 mx-auto max-w-7xl ">
          <AboutUsCard
            title="Expert Bricklaying Team"
            icon={<Wrench className="size-8" />}
            description="Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish."
          />
          <AboutUsCard
            title="Expert Bricklaying Team"
            icon={<Wrench className="size-8" />}
            description="Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish."
          />
          <AboutUsCard
            title="Expert Bricklaying Team"
            icon={<Wrench className="size-8" />}
            description="Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish."
          />
          <AboutUsCard
            title="Expert Bricklaying Team"
            icon={<Wrench className="size-8" />}
            description="Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish."
          />
        </div>
      </div>
    </div>
  );
}

export default About;
