import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET single post by ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const post = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

// UPDATE post
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const { title, slug, imageUrl, description, content } =
      await request.json();

    // Check for duplicate slug
    if (slug) {
      const existing = await prisma.blogPost.findFirst({
        where: {
          slug,
          NOT: { id },
        },
      });

      if (existing) {
        return NextResponse.json(
          { error: "This slug is already used by another post" },
          { status: 400 }
        );
      }
    }

    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        slug,
        imageUrl: imageUrl || null,
        description,
        content,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

// DELETE post
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.blogPost.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}