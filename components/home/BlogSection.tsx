"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCardHome from "../cards/BlogCardHome";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  imageUrl: string | null;
  description: string;
  createdAt: string;
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
        setPosts(data.slice(0, 4)); 
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
      className="min-h-[88vh] flex flex-col gap-6 md:gap-8 px-4 md:px-8 py-8 md:py-12 rounded-lg"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-secondary tracking-wide"
      >
        Latest Blogs
      </motion.h2>

      {/* Blog Cards */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-text text-lg">Loading posts...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-text text-lg">No blog posts yet</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <BlogCardHome post={post} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-secondary hover:bg-secondary/90 rounded-full items-center gap-2 py-3 px-6 text-sm md:text-base text-main flex flex-row shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/blog" className="flex items-center gap-2">
            View All Blogs
            <ArrowRight className="size-4" />
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
}