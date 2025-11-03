import { MetadataRoute } from 'next'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'

  try {
    // Fetch all blog posts directly from the database
    const blogs = await prisma.blogPost.findMany({
      select: {
        slug: true,
        updatedAt: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    // Map blog posts to sitemap entries
    const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

    // Static pages sitemap
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/bricklaying`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/landscaping`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/retaining`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/blogs`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      // Dynamic blog entries
      ...blogEntries,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)

    // Return static pages only if blog fetch fails
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/bricklaying`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/landscaping`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/retaining`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/blogs`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ]
  }
}