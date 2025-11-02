import React from 'react'
import HeroCard from '@/components/cards/HeroCard'

function page() {
  return (
    <div className='flex flex-col'>
        <HeroCard title="Latest Blog" page="BLOGS" btn="Our Blog"/>

        {/* <----one blog details content----> */}
        <div>
            
        </div>

    </div>
  )
}

export default page