"use client"
import ServicecontentCard from '@/components/cards/ServicecontentCard'
import React from 'react'
import { DropdownItemProps } from '../../about/page'
import ToggleDownCard from '@/components/cards/ToggleDownCard';
import { useState } from 'react';
import AboutUsCard from '@/components/cards/AboutUsCard';
import { DollarSign, Handshake, Leaf, MapPin } from 'lucide-react';
import ServicePercentageCard from '@/components/cards/ServicePErcentageCard';


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
    <div className='flex flex-col gap-12'>
      <ServicecontentCard 
        title='Beautiful, Functional Gardens : Sydney’s Trusted Landscaping Experts'
        description='At RRR Bricklaying, we specialize in creating custom outdoor environments designed specifically for your property. Each landscaping project combines beauty, functionality and sustainability to deliver spaces that look stunning and work for your lifestyle. From small residential gardens to large commercial landscapes, our experienced team ensures every detail from plant selection and turf installation to water features and garden enhancements is executed with precision. We focus on creating outdoor spaces that are low-maintenance, visually appealing and built to last, transforming your garden into a welcoming, functional retreat.'
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

        {/* the why choose section */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl text-secondary font-bold'>Why Choose Us?</h2>

          <div className='grid grid-cols-2 gap-5'>
            <AboutUsCard
            title="Experienced Landscaping Professionals"
            icon={<Leaf className="size-8" />}
            description="Our experienced landscape designers and builders understand Sydney’s diverse terrains. We bring together creativity, horticultural expertise and construction know how to deliver durable outdoor spaces."
          />
          <AboutUsCard
            title="Tailored Designs, Affordable Prices"
            icon={<DollarSign className="size-8" />}
            description="Every project is designed around your vision and budget. We prioritize cost transparency while ensuring top-tier materials and craftsmanship for long-term satisfaction."
          />
          <AboutUsCard
            title="Friendly & Trustworthy Staff"
            icon={<Handshake className="size-8" />}
            description="From concept to completion, our friendly and trustworthy staff communicate clearly and work efficiently ensuring a stress-free landscaping experience."
          />
          <AboutUsCard
            title="Local Sydney Expertise"
            icon={<MapPin className="size-8" />}
            description="Based in Seven Hills NSW, we’re deeply familiar with local soil conditions and council requirements. Our landscaping solutions are custom tailored to Sydney’s environment and property needs."
          />
          </div>
        </div>

        <div>
          <ServicePercentageCard />
        </div>
    </div>
  )
}

export default Bricklaying