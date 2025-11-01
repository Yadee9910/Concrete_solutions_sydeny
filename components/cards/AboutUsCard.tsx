import { Wrench } from 'lucide-react'
import React from 'react'

interface AboutUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AboutUsCard({ icon, title, description }: AboutUsCardProps) {
  return (
    <div className='flex flex-row items-start gap-4 bg-main border  p-6 rounded-lg border-gray-300'>
        <div className='text-secondary font-bold flex  flex-col items-start justify-start'>
            {icon}
        </div>

        <div className='flex flex-col gap-2'>
            <span className='text-secondary font-semibold text-lg'>{title}</span>
            <p className='text-text text-base leading-relaxed'>
                {description}
            </p> 

        </div>

    </div>
  )
}

export default AboutUsCard