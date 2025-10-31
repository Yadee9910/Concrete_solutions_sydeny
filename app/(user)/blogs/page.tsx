import BlogCard from '@/components/cards/BlogCard'
import HeroCard from '@/components/cards/HeroCard'


function Blogs() {
  return (
    <div className=' flex flex-col gap-8 h-auto w-full pb-8'>
        <HeroCard />
   
    {/* the blog section */}
        <div className='bg-secondary/5 rounded-lg p-8'>
            <div className='grid grid-cols-4 gap-8 '>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    </div>
  )
}
 
export default Blogs