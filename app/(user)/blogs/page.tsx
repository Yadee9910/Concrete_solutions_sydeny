import BlogCard from '@/components/cards/BlogCard'
import HeroCard from '@/components/cards/HeroCard'


function Blogs() {
  return (
    <div className=' flex flex-col gap-8 h-auto w-full pb-8'>
        <HeroCard title="Latest Blog" page="BLOGS" btn="Our Blog"/>
   
    {/* the blog section */}
        <div className='bg-secondary/5 rounded-lg py-24 lg:px-12 2xl:px-48 md:px-24 px-12 w-full'>
            <div className='grid lg:grid-cols-3 lg:gap-8  sm:gap-14  gap-12 w-full'>
                <BlogCard />
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