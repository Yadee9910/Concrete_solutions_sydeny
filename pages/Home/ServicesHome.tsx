import HomeServiceCard from '@/components/cards/HomeServiceCard'
import { ChevronLeft, ChevronRight, GripHorizontal } from 'lucide-react'
import React from 'react'


function ServicesHome() {
  return (
    <div className='min-h-[88vh] bg-secondary/10 flex flex-col gap-8 p-8 rounded-lg'>

        <div className='flex flex-row items-center gap-6 justify-between'>
            {/* the left content */}
            <div className='flex flex-col gap-3 md:w-1/2'>
                <p className='w-fit bg-secondary rounded-3xl py-2 px-4 text-sm text-main'>
                    Our Core Services
                </p>
                <h2
                    className="text-2xl md:text-5xl font-semibold text-secondary leading-tight
                  "
                  >
                    Expert Construction & Hardscaping in Sydney
                  </h2>
            </div>

              {/* the right content */}
               <p className="text-lg md:w-1/2 text-text leading-relaxed justify-end">
                   At RRR Bricklaying, we go beyond standard brickwork. We offer a full suite of integrated hardscaping and construction services, ensuring quality and efficiency from site preparation to the final finish.
               </p>
        </div>

        {/* the services cards */}
          <div className=' grid grid-cols-5 gap-5 overflow-x-auto'>
              <HomeServiceCard />
              <HomeServiceCard />
              <HomeServiceCard />
              <HomeServiceCard />
              <HomeServiceCard />
          </div>
          
        {/* the arrows */}
        <div className='flex flex-row gap-4 justify-center items-center '>
            <button className='bg-main rounded-full p-2 hover:text-main border cursor-pointer border-secondary hover:bg-secondary '>
              <ChevronLeft className='text-secondary hover:text-main '/>
            </button>
            <p className='text-lg font-medium'>DRAG</p>
            <button className='bg-main border border-secondary cursor-pointer rounded-full p-2 hover:bg-secondary '>
              <ChevronRight className='text-secondary hover:text-main'/>
            </button>
            </div>

    </div>
  )
}

export default ServicesHome