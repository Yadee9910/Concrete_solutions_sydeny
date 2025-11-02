import { blog1 } from "@/app/assets/assets";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  imageUrl: string | null;
  description: string;
  createdAt: string;
  author?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.createdAt);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });

  const imageAlt = `${post.title} - Featured blog post image`;

  return (
    <Link href={`/blogs/${post.slug}`} className="block hover:no-underline">
      <div
        className="flex flex-col gap-3 bg-main rounded-t-lg rounded-b-lg cursor-pointer 
                 transform transition-transform duration-300 ease-in-out 
                 hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-300/50 2xl:w-[400px] xl:w-[350px] w-full h-full border border-secondary/10"
      >
        {/* Image Section */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={post.imageUrl || blog1}
            alt={imageAlt}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col p-5 pb-6 gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-secondary font-bold text-xl hover:text-primary cursor-pointer hover:animate-pulse line-clamp-2">
              {post.title}
            </h2>
            <p className="text-sm text-text leading-6 line-clamp-4">
              {post.description}
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row items-center w-12 h-10">
            <div className="bg-secondary/5 py-2 px-4 rounded-l-lg w-full h-full flex items-center text-md justify-center font-semibold">
              {day}
            </div>
            <p className="bg-secondary w-full text-center rounded-r-lg h-full text-sm text-main flex items-center p-2 font-medium">
              {month}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1 items-center text-primary font-medium text-sm">
              <p className="hover:underline cursor-pointer">Read more</p>
              <ArrowUpRight className="size-4" />
            </div>

            <p className="text-xs text-secondary font-semibold">
              By {post.author || "Admin"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;