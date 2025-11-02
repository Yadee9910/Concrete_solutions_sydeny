"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCard from "../cards/BlogCard";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  imageUrl: string | null;
  description: string;
  createdAt: string;
  author?: string;
}

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setPosts(data.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-[88vh] flex flex-col gap-8 md:gap-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-12 md:py-16 lg:py-20"
    >
      {/* Container with background */}
      <div className="w-full bg-secondary/5 rounded-2xl p-6 md:p-10 lg:p-12 xl:p-16 2xl:p-20 flex flex-col gap-8 md:gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary tracking-wide">
            Latest Blogs
          </h2>
          <p className="text-text text-base md:text-lg lg:text-xl mx-auto max-w-3xl">
            Discover our latest insights, tips, and stories
          </p>
        </motion.div>

        {/* Blog Cards */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
              <p className="text-text text-lg">Loading posts...</p>
            </div>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <p className="text-text text-lg mb-2">No blog posts yet</p>
              <p className="text-text/60 text-sm">
                Check back soon for updates!
              </p>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12"
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex w-full"
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Button */}
        {!loading && posts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center pt-4"
          >
            <Link href="/blogs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-secondary hover:bg-secondary/90 rounded-full flex items-center gap-2 py-3 px-8 md:py-4 md:px-10 text-sm md:text-base lg:text-lg text-main font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Blogs
                <ArrowRight className="size-4 md:size-5" />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}