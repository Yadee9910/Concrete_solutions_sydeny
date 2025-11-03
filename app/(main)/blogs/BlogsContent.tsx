"use client";

import BlogCard from "@/components/cards/BlogCard";
import HeroCard from "@/components/cards/HeroCard";
import { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  imageUrl: string | null;
  description: string;
  createdAt: string;
  author?: string;
}

export default function BlogsContent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-8 h-auto w-full pb-8">
      <HeroCard title="Latest Blog" page="BLOGS" btn="Our Blog" />

      {/* Blog Section */}
      <div className="bg-secondary/5 rounded-lg py-24 lg:px-12 2xl:px-48 md:px-24 px-12 w-full">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-text text-lg">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-text text-lg">No blog posts available</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 lg:gap-8 sm:gap-14 gap-12 w-full">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}