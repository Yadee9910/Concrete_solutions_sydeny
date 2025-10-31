import Image from 'next/image'
import React from 'react'
import { prof } from '@/app/assets/assets'
import { Star } from 'lucide-react'
import { Smile } from "lucide-react";

function ClientCard() {
  return (
    <div className='hover:bg- bg-main flex flex-col gap-4 rounded-lg shadow-md border-gray-200 border p-6'>
        <div className='flex flex-row items-center gap-2'>
            {/* the prof image */}
            <div className='size-14'>
                <Image 
                    src={prof}
                    alt="profile"
                    className='rounded-full'
                />
            </div>

            {/* the name and address */}
            <div className='flex flex-col gap-1'>
                <h1 className='font-semibold text-secondary'>Michael B.</h1>
                <p className='text-sm text-text'>CEO & Property Manager, Parramatta</p>
            </div>

        </div>

        {/* the content */}
        <p className='text-sm tracking-wide text-dark/80 leading-relaxed text-left'>
            I manage several properties and needed reliable retaining wall contractors in Sydney for a complex, failing wall. RRR's team were outstanding. They identified the core yard drainage problem immediately, then designed and built a new, structurally sound retaining wall that is built to last. Their trustworthy staff also handled some remedial brickwork on the property. They are now my go-to remedial builders for any structural or drainage job..
        </p>

        {/* the ratings */}
        <div className='flex flex-row gap-1'>
            <Star className='text-primary' fill='#F59E0B' />
            <Star className='text-primary' fill='#F59E0B' />
            <Star className='text-primary' fill='#F59E0B' />
            <Star className='text-primary' fill='#F59E0B' />
        </div>
    </div>
  )
}

export default ClientCard