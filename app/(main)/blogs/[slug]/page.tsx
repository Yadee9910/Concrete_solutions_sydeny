import { blog1 } from "@/app/assets/assets";
import HeroCard from "@/components/cards/HeroCard";
import { Calendar, User, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { calculateReadTime, formatDate } from "@/components/helpers/blogHelper";
import TiptapViewer from "@/components/admin/editor/TiptapViewer";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  imageUrl: string | null;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author?: string;
  readTime?: string;
  tags?: string[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const response = await fetch(
      `${baseUrl}/api/blog/slug/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return {
        title: "Blog Post Not Found",
      };
    }

    const post: BlogPost = await response.json();
    const canonicalUrl = `${baseUrl}/blogs/${slug}`;
    const imageUrl = post.imageUrl || `${baseUrl}/images/og-default.jpg`;

    return {
      title: `${post.title} | Concrete Solutions Sydeny Bricklaying Blog`,
      description: post.description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url: canonicalUrl,
        siteName: "Concrete Solutions Sydeny Bricklaying",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
        type: "article",
        publishedTime: post.createdAt,
        modifiedTime: post.updatedAt,
        authors: post.author ? [post.author] : ["Concrete Solutions Sydeny Bricklaying"],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.log("error :>> ", error);
    return {
      title: "Blog Post",
    };
  }
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/blog/slug/${slug}`,
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

async function getRecentPosts(currentSlug: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/blog`,
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      return [];
    }

    const posts: BlogPost[] = await response.json();

    return posts.filter((post) => post.slug !== currentSlug).slice(0, 4);
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [blogPost, recentPosts] = await Promise.all([
    getBlogPost(slug),
    getRecentPosts(slug),
  ]);

  if (!blogPost) {
    notFound();
  }

  const readTime = blogPost.readTime || calculateReadTime(blogPost.content);
  const formattedDate = formatDate(blogPost.createdAt);

  // BlogPosting JSON-LD Schema
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogPost.title,
    description: blogPost.description,
    image: blogPost.imageUrl || `${baseUrl}/images/og-default.jpg`,
    datePublished: blogPost.createdAt,
    dateModified: blogPost.updatedAt,
    author: {
      "@type": blogPost.author ? "Person" : "Organization",
      name: blogPost.author || "Concrete Solutions Sydeny Bricklaying",
      ...(blogPost.author
        ? {}
        : {
            url: baseUrl,
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/images/logo.png`,
            },
          }),
    },
    publisher: {
      "@type": "Organization",
      name: "Concrete Solutions Sydeny Bricklaying",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blogs/${slug}`,
    },
    ...(blogPost.tags && blogPost.tags.length > 0
      ? { keywords: blogPost.tags.join(", ") }
      : {}),
  };

  return (
    <div>
      {/* JSON-LD BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />

      <HeroCard title={blogPost.title} page="OUR BLOG" btn="Our Blog" />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Column - Blog Content */}
            <div className="lg:col-span-3">
              {/* Article Meta Info */}
              <div className="text-center mb-6">
                <div className="flex flex-wrap justify-center gap-4 text-text">
                  {blogPost.author && (
                    <div className="flex items-center gap-2">
                      <User className="size-4 text-primary" />
                      <span className="font-semibold text-sm text-secondary">
                        {blogPost.author}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-primary" />
                    <span className="font-semibold text-sm text-secondary">
                      {formattedDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-primary" />
                    <span className="font-semibold text-sm text-secondary">
                      {readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <div className="relative w-full h-[400px] max-h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={blogPost.imageUrl || blog1}
                    alt={`${blogPost.title} - Featured image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
                    priority
                  />
                </div>
              </div>

              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Article Content */}
              <TiptapViewer content={blogPost.content} />
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-secondary text-lg mb-4">
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {recentPosts.map((post) => (
                        <Link
                          key={post.id}
                          href={`/blogs/${post.slug}`}
                          className="block group hover:no-underline"
                        >
                          <div className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 group-hover:border-primary transition-colors duration-200">
                            <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors duration-200 text-sm leading-tight mb-2 line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center justify-between text-xs text-text">
                              <span>{formatDate(post.createdAt)}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="size-3" />
                                {post.readTime ||
                                  calculateReadTime(post.content)}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Contact */}
                <div className="bg-linear-to-br from-primary to-secondary rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-3">Need Help?</h3>
                  <p className="text-white/90 text-sm mb-4 leading-6">
                    Get expert advice for your landscaping project.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-secondary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 w-full justify-center"
                  >
                    Contact Us
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}