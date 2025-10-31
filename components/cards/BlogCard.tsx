import { blog1 } from '@/app/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BlogCard() {
  return (
    <div className='flex flex-col gap-3 bg-secondary/5 rounded-t-lg rounded-b-lg  '>

        {/* the image section */}
        <div>
            <Image
                src={blog1}
                alt="blog image"
                className='rounded-t-lg'
             />
        </div>

        {/* the content section */}
        <div className='flex flex-col p-4 pb-8 gap-5 '>
            <div className='flex flex-col gap-3'>
                <h1 className='text-secondary font-bold text-lg'>5 Ways to Transform a Sloped Sydney Backyard</h1>
                <p className='text-sm text-text leading-relaxed'>A sloped yard isn't a problem; it's an opportunity. From multi-level garden landscaping to structural retaining walls, we explore landscaping design ideas that maximise space, add value, and are perfect for Sydney properties…</p>
            </div>
          
            {/* the date */}
            <div className='flex flex-row items-center w-12 h-10'>
                <div className='bg-main py-2 px-4  w-full h-full'>21</div>
                <p className='bg-secondary w-full text-center h-full text-sm text-main flex items-center p-2 '>Oct</p>
            </div>

            {/* the bottom sectipon */}
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-1 items-center text-primary font-medium text-sm'>
                    <p>Read more</p>
                    <ArrowUpRight className='size-4' />
                </div>
                
                <p  className='text-xs text-secondary font-semibold'>By Liam O'Conne </p>
            </div>
        </div>


    </div>
  )
}

export default BlogCard