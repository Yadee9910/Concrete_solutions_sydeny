import React from 'react'
import HeroCard from '@/components/cards/HeroCard'
import Indicators from '@/pages/Home/Indicators'
import Image from 'next/image'
import { img } from '@/app/assets/assets'
import AboutUsCard from '@/components/cards/AboutUsCard'
import { Wrench } from 'lucide-react'

function About() {
  return (
    <div className='flex flex-col gap-6'>
    <HeroCard title="About Us" page="ABOUT US" btn="Who We Are"/>

    <div className='grid grid-cols-2 px-24 py-8'>
        <div>
            {/* header */}
            <div className="space-y-6">
            <h1 className=" bg-secondary w-fit p-2  font-medium text-main rounded-3xl py-2 px-4 text-sm leading-tight">
                Who We Are
            </h1>
            <h2
                className="text-2xl md:text-5xl font-semibold text-secondary leading-tight
                "
            >
                Your Trusted Financial Partners and Advisors
            </h2>
            </div>

            {/* description */}
            <div className="space-y-6">
            <p className="text-lg text-text leading-relaxed">
                We are RRR Bricklaying, a team of fully licensed, dedicated professional bricklayers and mason bricklayers proudly serving the entire Sydney Metro area for over 5 years. We specialize in delivering not just flawless brickwork, but complete, integrated hardscape solutions from initial excavation and retaining walls to stunning final finishes like concrete driveways and paving.
            </p>
            </div>
        </div>

        <div>

        </div>
    </div>

    <div>
        <Indicators />
    </div>

    {/* thre image showing section */}
    <div className='grid grid-cols-3 gap-10 px-52'>
        <Image 
            src={img}
            alt="about us img"
            className='rounded-lg '
        />
                <Image 
            src={img}
            alt="about us img"
            className='rounded-lg '
        />
                <Image 
            src={img}
            alt="about us img"
            className='rounded-lg '
        />
                <Image 
            src={img}
            alt="about us img"
            className='rounded-lg'
        />
                <Image 
            src={img}
            alt="about us img"
            className='rounded-lg'
        />
                <Image 
            src={img}
            alt="about us img"
            className='rounded-lg'
        />

    </div>

    {/* the card component in about us */}
    <div className='flex flex-col gap-10 py-24 min-h-screen'>
        <h1 className='text-center font-semibold text-4xl text-secondary'>Why Choose us?</h1>
        <div className='grid grid-cols-2 gap-8 h-full px-28 mx-auto max-w-7xl '>
            <AboutUsCard 
                title ="Expert Bricklaying Team"
                icon={<Wrench className='size-8'/>}
                description="Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish."
            />
            <AboutUsCard 
                title ="Expert Bricklaying Team"
                icon={<Wrench className='size-8'/>}
                description="Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish."
            />
            <AboutUsCard 
                title ="Expert Bricklaying Team"
                icon={<Wrench className='size-8'/>}
                description="Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish."
            />
                    <AboutUsCard 
                title ="Expert Bricklaying Team"
                icon={<Wrench className='size-8'/>}
                description="Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish."
            />   

        </div>
    </div>
  

    </div>
  )
}

export default About