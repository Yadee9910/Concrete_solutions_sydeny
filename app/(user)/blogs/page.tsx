import BlogCard from '@/components/cards/BlogCard'
import HeroCard from '@/components/cards/HeroCard'


function Blogs() {
  return (
    <div className=' flex flex-col gap-8 h-auto w-full pb-8'>
        <HeroCard title="Latest Blog" page="BLOGS" btn="Our Blog"/>
   
    {/* the blog section */}
        <div className='bg-secondary/5 rounded-lg py-24 px-50'>
            <div className='grid grid-cols-3 gap-12 '>
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