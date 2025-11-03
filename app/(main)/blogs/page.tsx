import { Metadata } from "next";
import BlogsContent from "./BlogsContent";


export const metadata: Metadata = {
  title: "Blog | RRR Bricklaying",
  description:
    "Latest insights, tips, and updates on bricklaying, concrete services, landscaping, and retaining walls from Sydney's trusted construction experts.",
  alternates: {
    canonical: "https://concrete-solutions-sydeny.vercel.app/blogs",
  },
  openGraph: {
    title: "Blog | RRR Bricklaying",
    description:
      "Latest insights, tips, and updates on bricklaying, concrete services, landscaping, and retaining walls from Sydney's trusted construction experts.",
    url: "https://concrete-solutions-sydeny.vercel.app/blogs",
    siteName: "RRR Bricklaying",
    images: [
      {
        url: "https://concrete-solutions-sydeny.vercel.app/images/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "RRR Bricklaying Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | RRR Bricklaying",
    description:
      "Latest insights, tips, and updates on bricklaying, concrete services, landscaping, and retaining walls.",
    images: ["https://concrete-solutions-sydeny.vercel.app/images/og-blog.jpg"],
  },
};

export default function BlogsPage() {
  return <BlogsContent />;
}