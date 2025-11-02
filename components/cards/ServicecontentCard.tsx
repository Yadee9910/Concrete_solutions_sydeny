import React from 'react'

interface ServicecontentCardProps{
    title:string,
    description:string
}
function ServicecontentCard({title, description}:ServicecontentCardProps) {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-secondary font-semibold text-2xl'>{title}</h1>
        <p className='text-base text-text leading-7'>{description}</p>
    </div>
  )
}

export default ServicecontentCard