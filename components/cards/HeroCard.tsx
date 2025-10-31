import { ChevronRight } from 'lucide-react'


function HeroCard() {
  return (
    <div className="bg-secondary w-full p-8 text-main flex flex-col rounded-lg">
      <div className="bg- rounded-lg p-8 md:p-16 flex flex-col gap-4">
        <p className="text-base font-semibold bg-primary w-fit py-2 px-4 rounded-3xl">Our Blog</p>
        <h2 className="text-3xl md:text-5xl font-bold">Latest Blogs</h2>

        <div className='flex flex-row text-sm items-center'>
                <span className='text-text'>HOME</span>
                <ChevronRight className='size-4'/>
                <span className='text-main'>BLOGS</span>
        </div>
      </div>
    </div>

  )
}

export default HeroCard