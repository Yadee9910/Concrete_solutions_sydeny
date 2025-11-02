"use client"
import ServicecontentCard from '@/components/cards/ServicecontentCard'
import React from 'react'
import ToggleDownCard from '@/components/cards/ToggleDownCard';
import { useState } from 'react';
import AboutUsCard from '@/components/cards/AboutUsCard';
import { DollarSign, HandCoins, Handshake, Leaf, MapPin, PencilRuler } from 'lucide-react';
import ServicePercentageCard from '@/components/cards/ServicePErcentageCard';
import { DropdownItemProps } from '@/data/about';
import FAQSection from '@/components/faq/Frequently';


function Bricklaying() {
  const dropdownItems: DropdownItemProps[] = [
      {
        id: "Residential Bricklaying",
        title: "Residential Bricklaying",
        content:
          "Our experienced bricklayers handle all types of residential projects, from new home builds and extensions to retaining walls and fences. We ensure precision in every layer, using high-quality materials and expert techniques to deliver strong, durable and visually appealing results. Each project is tailored to your style, maximizing curb appeal, longevity and property value while maintaining structural integrity and a flawless finish.",
      },
      {
        id: "Commercial Bricklaying",
        title: "Commercial Bricklaying",
        content:
          "We manage large-scale commercial and industrial brickwork projects with professionalism, skill and efficiency. From new facilities to refurbishments, our team delivers top-tier quality that meets Australian building standards. We focus on durable construction, precise execution and timely project completion, ensuring your business property looks exceptional while providing reliable, long-lasting structural performance.",
      },
      {
        id: "Brick Repairs & Restoration",
        title: "Brick Repairs & Restoration",
        content:
          "We bring old and damaged brickwork back to life with expert restoration services. Our team carefully matches materials, textures and colors to preserve the original appearance while upgrading structural integrity. From repairing cracks to re-pointing mortar joints, we ensure every project maintains the property’s historical charm while benefiting from modern durability, safety and a flawless, long-lasting finish.",
      },
      {
        id: "Face Brickwork & Decorative Finishes",
        title: "Face Brickwork & Decorative Finishes",
        content:
          "Enhance your property’s aesthetic appeal with custom face bricklaying and detailed decorative finishes. Our work blends craftsmanship with style, adding visual character while maintaining robust structure. We tailor each design to match your home’s architecture and your personal style, creating a unique and lasting impression.",
      },
            {
        id: "Boundary Walls & Fences",
        title: "Boundary Walls & Fences",
        content:
          "Add privacy, security and elegance with expertly built brick fences and boundary walls. We design and construct to complement your property’s architecture while ensuring long-lasting performance. Every wall is carefully engineered for durability, safety and a polished, professional finish that enhances curb appeal..",
      },
    ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };
  const [openItem, setOpenItem] = useState<string | null>("mission");
  return (
    <div className='flex flex-col gap-12'>
      <ServicecontentCard 
        title='Sydney’s Trusted Bricklaying Experts for Quality Builds'
        description='When it comes to professional bricklaying in Sydney, RRR Bricklaying sets the standard for precision, durability and design excellence. Whether you are building a new home, extending your property or repairing existing structures our skilled bricklayers deliver exceptional craftsmanship that enhances both strength and aesthetics. Based in Seven Hills, we’re trusted across Western Sydney and The Hills District for providing reliable, affordable and high-quality bricklaying services that stand the test of time. From structural builds to decorative finishes, we bring experience, attention to detail and passion to every project.'
      />

      {/* the toggledown card contents */}
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

    <div className="grid xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* Quality Assurance Card */}
          <ServicePercentageCard
            title="Delivering Excellence Through Expertise and Dedication"
            subtitle="Guaranteed Excellence"
            percentage="100%"
            percentageText="Quality Assurance Rating"
            description="We guarantee quality work completed right the first time, ensuring lasting structural integrity and customer satisfaction."
            icon="shield"
            variant="primary"
          />

          {/* Cost Savings Card */}
          <ServicePercentageCard
            title="Quality Work, Affordable Prices"
            percentage="100%+"
            percentageText="Choose RRR Bricklaying and save an average of 90% or more compared to major Sydney bricklaying firms."
            description="We achieve this through efficient project management and direct, transparent communication, eliminating unnecessary costs."
            icon="check"
            variant="secondary"
          />
        </div>

        {/* the why choose section */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl text-secondary font-bold'>Why Choose Us?</h2>

          <div className='grid xl:grid-cols-2 gap-5'>
            <AboutUsCard
            title="Expert Bricklaying Team"
            icon={<PencilRuler className="size-8" />}
            description="Our experienced landscape designers and builders understand Sydney’s diverse terrains. We bring together creativity, horticultural expertise and construction know how to deliver durable outdoor spaces.Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish."
          />
          <AboutUsCard
            title="Quality, Affordable Prices"
            icon={<HandCoins className="size-8" />}
            description="We guarantee quality work for affordable prices. By managing our operations efficiently as dedicated bricklaying contractors, we cut down overheads and pass the savings directly to you. No hidden fees, just competitive, honest quotes"
          />
          <AboutUsCard
            title="Friendly & Trustworthy Staff"
            icon={<HandCoins className="size-8" />}
            description="You are dealing with ,friendly and trustworthy staff from the first call to final cleanup. We are the local bricklayers near me who treat your property with respect, communicate clearly, and ensure a hassle-free building experience."
          />
          <AboutUsCard
            title="Local Sydney Expertise"
            icon={<MapPin className="size-8" />}
            description="Based in Seven Hills NSW, we’re deeply familiar with local soil conditions and council requirements. Our landscaping solutions are custom tailored to Sydney’s environment and property needs."
          />
          </div>
        </div>

        <div>
          <FAQSection />
        </div>
    </div>
  )
}

export default Bricklaying