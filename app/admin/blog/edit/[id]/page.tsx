import { BlogForm } from "@/components/admin/BlogForm";
import { ArrowLeft, Edit } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Edit Post | Admin",
};

export default function EditBlogPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <Link
                href="/admin/dashboard"
                className="text-gray-600 hover:text-secondary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-secondary flex items-center gap-2">
                  <Edit className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="hidden sm:inline">Edit Post</span>
                  <span className="sm:hidden">Edit</span>
                </h1>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1 hidden sm:block">
                  Update your post content
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <BlogForm postId={params.id} />
      </main>
    </div>
  );
}