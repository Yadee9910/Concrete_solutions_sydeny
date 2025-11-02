import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET single post by slug
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> } // ✅ Use Promise here
) {
  try {
    const { slug } = await context.params; // ✅ await the params

    const post = await prisma.blogPost.findUnique({
      where: { slug },
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