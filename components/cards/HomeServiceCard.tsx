import { img } from '@/app/assets/assets'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function HomeServiceCard() {
  return (
    <div className="bg-main flex flex-col h-[60vh] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
      
      {/* Image section */}
        <div className="relative w-full bg-white ">
            <Image
            src={img}
            alt="service img"
            width={300}
            height={200}
            className="w-full h-[35vh]  "
            />
        </div>

        {/* Content section */}
        <div className="relative p-4 py-4 flex flex-col gap-2 text-secondary bg-main rounded-t-4xl ">
            <div className='absolute -top-3 h-3 rounded-t-full left-0 right-0 bg-main'></div>
            <h3 className="text-lg font-semibold ">Landscaping Services</h3>
            <div className='flex justify-end flex-col  h-full items-end'>
                <p className="text-sm text-text/80 tracking-wider text-left">
                    We provide high-quality landscaping solutions to enhance the beauty and functionality of your outdoor spaces.
                </p>
            </div>

            <div className=' inline-flex p-2 items-center justify-between'>
                <p className='text-base underline underline-offset-4 hover:font-medium cursor-pointer'>
                    View details
                </p>
                <div className='flex cursor-pointer hover:bg-secondary/70 bg-secondary justify-end p-2 rounded-full'>
                    <MoveUpRight  className='text-main'/>
                </div>
               
            </div>
            
        </div>
    </div>
  )
}

export default HomeServiceCard