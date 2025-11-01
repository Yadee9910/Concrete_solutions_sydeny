import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET all posts
export async function GET() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(posts)
}

// CREATE post
export async function POST(request: Request) {
  const { title, slug, imageUrl, description, content } = await request.json()

  const finalSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  const post = await prisma.blogPost.create({
    data: { title, slug: finalSlug, imageUrl, description, content }
  })

  return NextResponse.json(post)
}