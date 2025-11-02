import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text mb-4">
          Blog Post Not Found
        </h2>
        <p className="text-text/70 mb-8">
          The blog post your&apos;e looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 bg-secondary text-main px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to All Blogs
        </Link>
      </div>
    </div>
  );
}