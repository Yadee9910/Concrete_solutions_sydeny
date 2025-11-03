"use client"
import ServicecontentCard from '@/components/cards/ServicecontentCard'
import React from 'react'
import ToggleDownCard from '@/components/cards/ToggleDownCard';
import { useState } from 'react';
import AboutUsCard from '@/components/cards/AboutUsCard';
import { DollarSign, Handshake, HardHat, Leaf, LeafIcon, MapPin } from 'lucide-react';
import ServicePercentageCard from '@/components/cards/ServicePErcentageCard';
import { DropdownItemProps } from '@/data/about';
import FAQSection from '@/components/faq/Frequently';


function RetainingWallsContent() {
  const dropdownItems: DropdownItemProps[] = [
      {
        id: "Residential Retaining Walls",
        title: "Residential Retaining Walls",
        content:
          "We design and construct retaining walls for homes and gardens, providing support for sloped areas and creating usable, level spaces. Our walls are built with durable materials and crafted to complement your home and outdoor style, enhancing both safety and curb appeal.",
      },
      {
        id: "Commercial & Industrial Retaining Walls",
        title: "Commercial & Industrial Retaining Walls",
        content:
          "Commercial & Industrial Retaining WallsOur team delivers robust retaining walls for commercial and industrial sites, engineered to handle large-scale terrain and structural loads. We ensure compliance with Australian standards while maintaining a polished and professional finish.",
      },
      {
        id: "Decorative & Feature Walls",
        title: "Decorative & Feature Walls",
        content:
          "Add style to your landscape with decorative retaining walls. We combine functional support with aesthetic design, using textures, colors and finishes that enhance your garden or outdoor space while remaining strong and durable.",
      },
      {
        id: "Timber & Modular Retaining Walls",
        title: "Timber & Modular Retaining Walls",
        content:
          "We provide timber and modular retaining wall solutions for flexible, cost-effective landscaping. Each wall is carefully installed for stability, longevity and a natural or contemporary appearance that suits your property.",
      }
    ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };
  const [openItem, setOpenItem] = useState<string | null>("mission");
  return (
    <div className='flex flex-col gap-12'>
      <ServicecontentCard 
        title='Strong, Stylish Retaining Walls : Sydney’s Trusted Experts'
        description='At Concrete Solution Sydney Bricklaying, we specialize in designing and building durable, attractive retaining walls across Sydney. Whether you need to manage sloping terrain, create level garden areas or add structure and visual appeal to your property, our team delivers precision, strength and style in every wall. We combine expert craftsmanship, quality materials and innovative design to provide long-lasting solutions that enhance your landscape and property value. From residential gardens to commercial projects, we ensure every retaining wall is engineered for safety, functionality and aesthetic excellence.'
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
            title="Precision-Built Retaining Walls, Tested for Strength"
            subtitle="Guaranteed Excellence"
            percentage="95.99%"
            percentageText="Structural Integrity Rating"
            description="Every retaining wall we construct is built to exceed Australian safety standards, ensuring long-lasting performance against soil pressure and weather exposure."
            icon="shield"
            variant="primary"
          />

          {/* Cost Savings Card */}
          <ServicePercentageCard
            title="Save More on Durable Retaining Wall Projects"
            percentage="75%+"
            percentageText="Choose Concrete Solution Sydney Bricklaying and Enjoy up to 75% savings compared to major Sydney retaining wall contractors."
            description="Through in house equipment, local sourcing and efficient site preparation, we keep costs down while maintaining exceptional construction quality."
            icon="check"
            variant="secondary"
          />
        </div>

        {/* the why choose section */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl text-secondary font-bold'>Why Choose Us?</h2>

          <div className='grid xl:grid-cols-2 lg:grid-cols-1 gap-5'>
            <AboutUsCard
            title="Engineered for Strength"
            icon={<HardHat className="size-8" />}
            description="Our retaining walls are professionally engineered and built for long term stability. We use top grade materials and advanced construction methods to ensure reliable soil retention."
          />
          <AboutUsCard
            title="Aesthetic & Functional Designs"
            icon={<LeafIcon className="size-8" />}
            description="We design walls that not only hold your ground but also enhance your property’s appeal. Choose from stone, concrete or brick finishes tailored to your landscape."
          />
          <AboutUsCard
            title="Licensed & Skilled Team"
            icon={<HardHat className="size-8" />}
            description="Our team includes experienced masons and engineers specializing in retaining wall construction. You can trust our expertise for safe, compliant and visually impressive results."
          />
          <AboutUsCard
            title="Local Sydney Expertise"
            icon={<MapPin className="size-8" />}
            description="Located in Seven Hills NSW, we have years of experience building walls across Western Sydney and The Hills District. We understand local council compliance requirements."
          />
          </div>
        </div>

  
  
          <FAQSection />
       
    </div>
  )
}

export default RetainingWallsContent