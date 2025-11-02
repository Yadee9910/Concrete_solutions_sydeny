"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import TiptapEditor from "@/components/admin/editor/TiptapEditor";
import {
  ArrowLeft,
  Save,
  Sparkles,
  FileText,
  Link as LinkIcon,
  Image as ImageIcon,
} from "lucide-react";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  slug: z.string().min(1, "Slug is required"),
  imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  description: z
    .string()
    .min(10, "Min 10 characters")
    .max(160, "Max 160 characters"),
  content: z.string().min(50, "Content too short"),
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
    control,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      imageUrl: "",
      description: "",
      content: "",
    },
  });

  const title = watch("title");
  const description = watch("description");

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
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
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
        toast.error(error.message || "Failed to save");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex flex-col items-center justify-center py-12 md:py-20">
        <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-4 border-secondary border-t-transparent"></div>
        <p className="mt-4 text-sm md:text-base text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="divide-y divide-gray-100"
      >
        {/* Basic Information Section */}
        <div className="p-4 md:p-6 space-y-4 md:space-y-5">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <h3 className="text-base md:text-lg font-semibold text-secondary">
              Basic Information
            </h3>
          </div>

          {/* Title */}
          <div className="space-y-1.5">
            <Label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              {...register("title")}
              disabled={isLoading}
              className={`${
                errors.title ? "border-red-300 focus:ring-red-500" : ""
              }`}
              placeholder="Enter the title here"
            />
            {errors.title && (
              <p className="text-xs text-red-600">{errors.title.message}</p>
            )}
          </div>

          {/* Slug */}
          <div className="space-y-1.5">
            <Label
              htmlFor="slug"
              className="text-sm font-medium text-gray-700 flex items-center gap-1.5"
            >
              <LinkIcon className="w-3.5 h-3.5" />
              URL Slug <span className="text-red-500">*</span>
            </Label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <Input
                id="slug"
                {...register("slug")}
                disabled={isLoading}
                className={`font-mono text-sm ${
                  errors.slug ? "border-red-300" : ""
                }`}
                placeholder="Autogenerated from title"
              />
            </div>
            {errors.slug && (
              <p className="text-xs text-red-600">{errors.slug.message}</p>
            )}
          </div>

          {/* Image URL */}
          <div className="space-y-1.5">
            <Label
              htmlFor="imageUrl"
              className="text-sm font-medium text-gray-700 flex items-center gap-1.5"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Featured Image{" "}
              <span className="text-xs text-gray-400 ml-1">(optional)</span>
            </Label>
            <Input
              id="imageUrl"
              type="url"
              {...register("imageUrl")}
              disabled={isLoading}
              className={`${errors.imageUrl ? "border-red-300" : ""}`}
              placeholder="Enter the image URL here"
            />
            {errors.imageUrl && (
              <p className="text-xs text-red-600">{errors.imageUrl.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Description <span className="text-red-500">*</span>
              </Label>
              <span
                className={`text-xs ${
                  description.length > 160
                    ? "text-red-500 font-medium"
                    : "text-gray-500"
                }`}
              >
                {description.length}/160
              </span>
            </div>
            <Textarea
              id="description"
              rows={3}
              {...register("description")}
              disabled={isLoading}
              className={`resize-none ${
                errors.description ? "border-red-300" : ""
              }`}
              placeholder="Enter a brief description"
            />
            {errors.description && (
              <p className="text-xs text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-6 space-y-3 md:space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <h3 className="text-sm font-medium text-secondary">
              Content
            </h3>
          </div>

          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <TiptapEditor
                value={field.value}
                onChange={field.onChange}
                placeholder="Write your content here..."
                hasError={!!errors.content}
              />
            )}
          />
          {errors.content && (
            <p className="text-xs text-red-600">{errors.content.message}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-4 md:p-6 bg-gray-50 flex flex-col-reverse sm:flex-row gap-3 justify-between items-stretch sm:items-center">
          <Button
            type="button"
            variant="ghost"
            onClick={() => router.push("/admin/dashboard")}
            disabled={isLoading}
            className="w-full sm:w-auto text-gray-700 hover:text-secondary hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Cancel
          </Button>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            {postId && (
              <Button
                type="button"
                variant="outline"
                onClick={() => window.open(`/blogs/${watch("slug")}`, "_blank")}
                disabled={isLoading}
                className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                Preview
              </Button>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-secondary hover:bg-hover text-white transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  <span>{postId ? "Update" : "Publish"}</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};