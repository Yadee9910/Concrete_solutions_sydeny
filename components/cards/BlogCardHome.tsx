import Link from "next/link";
import Image from "next/image";

interface BlogCardHomeProps {
  post: {
    id: number;
    title: string;
    slug: string;
    imageUrl: string | null;
    description: string;
    createdAt: string;
  };
}

export default function BlogCardHome({ post }: BlogCardHomeProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 bg-linear-to-br from-gray-200 to-gray-300">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No image</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col grow">
          <time className="text-xs text-text/70 mb-2">
            {new Date(post.createdAt).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h3 className="font-bold text-secondary text-lg mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-text text-sm line-clamp-3 grow">
            {post.description}
          </p>
          <span className="text-primary text-sm font-medium mt-3 hover:underline">
            Read More →
          </span>
        </div>
      </article>
    </Link>
  );
}