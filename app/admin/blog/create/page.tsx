import { BlogForm } from "@/components/admin/BlogForm";

export const metadata = {
  title: "Admin | Create Post",
};

export default function CreateBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold">Create New Blog Post</h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogForm />
      </main>
    </div>
  );
}
