import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET single post
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = await prisma.blogPost.findUnique({
    where: { id: parseInt(params.id) }
  })

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  return NextResponse.json(post)
}

// UPDATE post
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { title, slug, imageUrl, description, content } = await request.json()

  const post = await prisma.blogPost.update({
    where: { id: parseInt(params.id) },
    data: { title, slug, imageUrl, description, content }
  })

  return NextResponse.json(post)
}

// DELETE post
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await prisma.blogPost.delete({
    where: { id: parseInt(params.id) }
  })

  return NextResponse.json({ message: 'Deleted' })
}