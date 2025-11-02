// app/blogs/[slug]/page.tsx
import { blog1 } from '@/app/assets/assets'
import HeroCard from '@/components/cards/HeroCard'
import { ArrowLeft, Calendar, User, Clock, ArrowUpRight, Bookmark, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogDetail() {
  const blogData = {
    title: "5 Ways to Transform a Sloped Sydney Backyard",
    date: "21 OCT 2025",
    author: "Liam O'Connel",
    readTime: "6 min read",
    image: blog1,
    tags: ["Landscaping", "Retaining Walls", "Sydney Homes", "Garden Design", "Earthworks"],
    content: `
      <p class="intro-text">If you own a typical sloped block in Sydney, you know the struggle: uneven lawns, drainage issues, and wasted space. But at RRR, we see an opportunity. Slopes are perfect for creating stunning, functional, multi-level living areas that boost both appeal and value.</p>
  
      <p>As expert retaining wall builders and landscaping contractors, here are five proven ways we transform uneven Sydney properties.</p>

      <div class="feature-section">
        <h2>1. The Power of Terraced Retaining Walls</h2>
        <p>The number one solution for a sloped yard is terracing. By using strategically placed retaining walls, you can turn one steep slope into two or three flat, usable tiers. We build solid, durable structures using materials like <strong>concrete sleeper retaining walls</strong> or classic <strong>brick retaining walls</strong>. This not only creates level space for entertaining but also prevents soil erosion—a crucial factor for any landscaping design.</p>
      </div>

      <div class="feature-section">
        <h2>2. Multi-Level Garden Landscaping</h2>
        <p>Terraces are ideal for defining distinct outdoor zones. Your top tier might be a private deck, the middle tier a lush lawn area, and the bottom a dedicated vegetable or <strong>native garden landscaping</strong> space. This approach maximises the use of every square metre and turns a difficult slope into a flowing, beautiful garden.</p>
      </div>

      <div class="feature-section">
        <h2>3. Functional Steps and Paver Pathways</h2>
        <p>A beautiful landscaping design needs seamless navigation. We integrate custom-built steps and paving pathways that connect your levels. Whether using <strong>natural stone pavers</strong> or modern <strong>interlocking pavers</strong>, these features add safety, visual appeal, and make every corner of your tiered yard easily accessible.</p>
      </div>

      <div class="feature-section">
        <h2>4. Integrated Drainage Systems</h2>
        <p>Proper drainage is crucial for sloped properties. We implement <strong>French drains</strong>, surface channels, and proper grading to manage water flow and prevent erosion. This protects your investment and ensures your landscape remains stable and beautiful for years to come.</p>
      </div>

      <div class="feature-section">
        <h2>5. Outdoor Living Spaces</h2>
        <p>Transform your sloped backyard into multiple outdoor rooms. Create entertainment areas, fire pit zones, and quiet retreats across different levels. Each space serves a unique purpose while maintaining visual connectivity throughout your property.</p>
      </div>
    `,
    authorBio: "Liam O'Connel is a senior landscaping specialist with over 12 years of experience transforming challenging Sydney terrains. As the lead project manager at RRR Earthworks, he specializes in creating functional, beautiful outdoor spaces that maximize property value and usability.",
    recentPosts: [
      { 
        title: "Choosing the Right Retaining Wall Material", 
        date: "18 OCT 2025",
        slug: "retaining-wall-materials",
        readTime: "4 min read"
      },
      { 
        title: "Sydney Drainage Solutions for Sloped Blocks", 
        date: "14 OCT 2025",
        slug: "sydney-drainage-solutions",
        readTime: "5 min read"
      },
      { 
        title: "Cost Guide: Landscaping a Sloped Backyard", 
        date: "08 OCT 2025",
        slug: "sloped-backyard-cost-guide",
        readTime: "7 min read"
      },
      { 
        title: "Foundation Repair at Royal Sydney Bridge", 
        date: "3 May 14",
        slug: "foundation-repair-royal-sydney",
        readTime: "6 min read"
      }
    ]
  }

  return (
    <div className=''>
      {/* Header Navigation */}
      <HeroCard title={blogData.title} page="OUR BLOG" btn="Our Blog"/>
      
      {/* Main Content */}
      <main className='container mx-auto px-4 lg:px-8 py-8'>
        <div className='max-w-6xl mx-auto'>
          {/* Two Column Layout */}
          <div className='grid lg:grid-cols-4 gap-8'>
            {/* Left Column - Blog Content */}
            <div className='lg:col-span-3'>
              {/* Article Meta Info */}
              <div className='text-center mb-6'>
                <div className='flex flex-wrap justify-center gap-4 text-text'>
                  <div className='flex items-center gap-2'>
                    <User className='size-4 text-primary' />
                    <span className='font-semibold text-sm text-secondary'>{blogData.author}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Calendar className='size-4 text-primary' />
                    <span className='font-semibold text-sm text-secondary'>{blogData.date}</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={blogData.image}
                    alt={blogData.title}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className='prose prose-lg max-w-none
                prose-p:text-text prose-p:leading-7 prose-p:mb-6
                prose-strong:text-secondary prose-strong:font-bold
                prose-h2:text-2xl prose-h2:font-bold prose-h2:text-secondary prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:font-bold prose-h3:text-secondary prose-h3:mt-8 prose-h3:mb-4'>
                
                <div 
                  className="
                    [&_.intro-text]:text-lg [&_.intro-text]:text-secondary [&_.intro-text]:font-medium [&_.intro-text]:leading-8 [&_.intro-text]:mb-8
                    [&_.feature-section]:bg-white [&_.feature-section]:p-6 [&_.feature-section]:rounded-xl 
                    [&_.feature-section]:border [&_.feature-section]:border-gray-100 [&_.feature-section]:shadow-sm 
                    [&_.feature-section]:mb-6 [&_.feature-section]:last:mb-0 [&_.feature-section]:hover:shadow-md [&_.feature-section]:transition-shadow
                    [&_.feature-section_h2]:text-primary [&_.feature-section_h2]:text-xl [&_.feature-section_h2]:font-bold [&_.feature-section_h2]:mb-3
                    [&_.feature-section_p]:text-text [&_.feature-section_p]:leading-7
                  "
                  dangerouslySetInnerHTML={{ __html: blogData.content }}
                />
              </div>
            </div>

            {/* Right Column - Recent Blogs Sidebar */}
            <div className='lg:col-span-1'>
              <div className='sticky top-8 space-y-6'>
                {/* Recent Posts */}
                <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm'>
                  <h3 className='font-bold text-secondary text-lg mb-4'>Recent Posts</h3>
                  <div className='space-y-4'>
                    {blogData.recentPosts.map((post, index) => (
                      <Link
                        key={index}
                        href={`/blogs/${post.slug}`}
                        className='block group hover:no-underline'
                      >
                        <div className='border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 group-hover:border-primary transition-colors duration-200'>
                          <h4 className='font-semibold text-secondary group-hover:text-primary transition-colors duration-200 text-sm leading-tight  mb-2'>
                            {post.title}
                          </h4>
                          <div className='flex items-center justify-between text-xs text-text'>
                            <span>{post.date}</span>
                            <span className='flex items-center gap-1'>
                              <Clock className='size-3' />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className='bg-linear-to-br from-primary to-secondary rounded-xl p-6 text-white'>
                  <h3 className='font-bold text-lg mb-3'>Need Help?</h3>
                  <p className='text-white/90 text-sm mb-4 leading-6'>
                    Get expert advice for your landscaping project.
                  </p>
                  <Link
                    href="/contact"
                    className='inline-flex items-center gap-2 bg-white text-secondary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 w-full justify-center'
                  >
                    Contact Us
                    <ArrowUpRight className='size-4' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section - Common for both columns */}
          <div className='bg-linear-to-br from-primary to-secondary rounded-2xl p-8 text-center text-white mt-12'>
            <h3 className='text-2xl font-bold mb-4'>Ready to Transform Your Sloped Backyard?</h3>
            <p className='text-white/90 mb-6 max-w-xl mx-auto'>
              Get a free consultation with our Sydney landscaping experts and discover how we can turn your challenging terrain into a stunning outdoor oasis.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href="/contact"
                className='inline-flex items-center gap-3 bg-white text-secondary px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg'
              >
                Book Free Consultation
                <ArrowUpRight className='size-5' />
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default BlogDetail