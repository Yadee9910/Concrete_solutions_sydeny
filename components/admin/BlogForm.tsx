"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional(),
  imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(1, "Content is required"),
});

type BlogFormData = z.infer<typeof blogSchema>;

interface BlogFormProps {
  postId?: string;
}

export const BlogForm = ({ postId }: BlogFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(!!postId);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  const title = watch("title");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }

    if (postId) {
      fetchPost();
    }
  }, [postId, router]);

  useEffect(() => {
    if (title && !postId) {
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      setValue("slug", slug);
    }
  }, [title, setValue, postId]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/${postId}`);
      const data = await response.json();

      setValue("title", data.title);
      setValue("slug", data.slug);
      setValue("imageUrl", data.imageUrl || "");
      setValue("description", data.description);
      setValue("content", data.content);
    } catch (error) {
      toast.error("Failed to fetch post");
    } finally {
      setIsFetching(false);
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    setIsLoading(true);

    try {
      const url = postId ? `/api/blog/${postId}` : "/api/blog";
      const method = postId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(postId ? "Post updated!" : "Post created!");
        router.push("/admin/dashboard");
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to save post");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex items-center justify-center py-12">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title*</Label>
          <Input
            id="title"
            placeholder="Enter post title"
            {...register("title")}
            disabled={isLoading}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">Slug*</Label>
          <Input
            id="slug"
            placeholder="post-slug"
            {...register("slug")}
            disabled={isLoading}
          />
          {errors.slug && (
            <p className="text-sm text-red-500">{errors.slug.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl">Image URL (optional)</Label>
          <Input
            id="imageUrl"
            placeholder="https://example.com/image.jpg"
            {...register("imageUrl")}
            disabled={isLoading}
          />
          {errors.imageUrl && (
            <p className="text-sm text-red-500">{errors.imageUrl.message}</p>
          )}
          <p className="text-sm text-gray-500">
            Use external image URL (e.g., from Unsplash, Imgur)
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description*</Label>
          <Textarea
            id="description"
            placeholder="Brief description of the post"
            rows={3}
            {...register("description")}
            disabled={isLoading}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content*</Label>
          <Textarea
            id="content"
            placeholder="Full post content..."
            rows={10}
            {...register("content")}
            disabled={isLoading}
          />
          {errors.content && (
            <p className="text-sm text-red-500">{errors.content.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : postId ? "Update Post" : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
};
