"use client"
import ServicecontentCard from '@/components/cards/ServicecontentCard'
import React from 'react'
import ToggleDownCard from '@/components/cards/ToggleDownCard';
import { useState } from 'react';
import AboutUsCard from '@/components/cards/AboutUsCard';
import { DollarSign, Handshake, Leaf, MapPin } from 'lucide-react';
import ServicePercentageCard from '@/components/cards/ServicePErcentageCard';
import { DropdownItemProps } from '@/data/about';
import FAQSection from '@/components/faq/Frequently';


function LandscapingContent() {
  const dropdownItems: DropdownItemProps[] = [
      {
        id: "Garden Design & Planting",
        title: "Garden Design & Planting",
        content:
          "We design gardens that perfectly blend beauty and practicality. Every layout is customized to your property and lifestyle, selecting the right plants, soil preparation and irrigation solutions. Our landscaping experts ensure your garden flourishes year round, creating a serene, inviting outdoor space that enhances your property’s aesthetic and value.",
      },
      {
        id: "Water Features & Outdoor Enhancements",
        title: "Water Features & Outdoor Enhancements",
        content:
          "Bring life, elegance and tranquility to your garden with custom water features and outdoor enhancements. From fountains and ponds to pergolas and seating areas, we design each element to complement your property. Our team ensures every feature is functional, visually striking and adds character to your landscape.",
      },
      {
        id: "Turf & Lawn Installation",
        title: "Turf & Lawn Installation",
        content:
          "We provide professional turf and lawn installation that transforms your outdoor space into a lush, vibrant environment. Proper soil preparation, drainage and ongoing care ensure long-lasting healthy lawns. Our team creates green, inviting areas perfect for family enjoyment, entertaining and enhancing overall property appeal.",
      },
      {
        id: "Landscape Maintenance & Upgrades",
        title: "Landscape Maintenance & Upgrades",
        content:
          "Keep your outdoor space thriving with our comprehensive maintenance and upgrade services. We handle pruning, mulching, seasonal updates and general upkeep to ensure your garden remains vibrant and attractive. Our team enhances your landscape’s longevity while keeping it visually stunning throughout the year. .",
      },
      {
        id: "Feature Garden Elements",
        title: "Feature Garden Elements",
        content:
          "Enhance your outdoor space with thoughtfully designed garden features such as raised beds, planters, pathways and rockeries. Each element is custom-built to harmonize with your property’s style, adding both charm and function. Our landscaping team ensures these features integrate seamlessly for a cohesive, beautiful environment.",
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
        description='At Concrete Solutions Sydeny Bricklaying, we specialize in creating custom outdoor environments designed specifically for your property. Each landscaping project combines beauty, functionality and sustainability to deliver spaces that look stunning and work for your lifestyle. From small residential gardens to large commercial landscapes, our experienced team ensures every detail from plant selection and turf installation to water features and garden enhancements is executed with precision. We focus on creating outdoor spaces that are low-maintenance, visually appealing and built to last, transforming your garden into a welcoming, functional retreat.'
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
            title="Building Beautiful, Functional Landscapes That Last"
            subtitle="Guaranteed Excellence"
            percentage="100%"
            percentageText="Client Satisfaction Rating"
            description="We take pride in exceeding client expectations, with 100% of customers reporting long-term satisfaction and returning for ongoing maintenance."
            icon="shield"
            variant="primary"
          />

          {/* Cost Savings Card */}
          <ServicePercentageCard
            title="Affordable Landscaping, Exceptional Quality"
            percentage="80%+"
            percentageText="Choose Concrete Solutions Sydeny Bricklaying and Save 80% or more compared to major Sydney landscaping firms."
            description="Our in-house team and streamlined process eliminate unnecessary costs, allowing us to deliver premium results within budget."
            icon="check"
            variant="secondary"
          />
        </div>

        {/* the why choose section */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl text-secondary font-bold'>Why Choose Us?</h2>

          <div className='grid xl:grid-cols-2 gap-5'>
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
          <FAQSection />
        </div>
    </div>
  )
}

export default LandscapingContent