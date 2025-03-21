"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";

interface PageFormProps {
  page?: {
    _id: string;
    name: string;
    slug: string;
    imageUrl?: string;
    image?: {
      contentType: string;
      filename: string;
    };
  };
  mode: "create" | "edit";
}

export default function PageForm({ page, mode }: PageFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(
    page?.imageUrl || (page?._id ? `/api/image/${page._id}` : null)
  );
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: page?.name || "",
      imageUrl: page?.imageUrl || "",
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setFile(file);
      setImagePreview(URL.createObjectURL(file));
    },
  });

  const onSubmit = async (data: { name: string; imageUrl: string }) => {
    try {
      setIsSubmitting(true);
      setError("");

      const url = mode === "create" 
        ? "/api/pages" 
        : `/api/pages/${page?._id}`;
      
      const method = mode === "create" ? "POST" : "PUT";

      // If we have a file, use FormData instead of JSON
      if (file) {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('image', file);
        
        const response = await fetch(url, {
          method,
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Something went wrong");
        }
      } else {
        // Use JSON for regular requests (no file upload)
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            imageUrl: data.imageUrl,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Something went wrong");
        }
      }

      // Redirect to the pages list
      router.push("/admin/pages");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-3xl mx-auto">
      {error && (
        <div className="bg-red-900/50 border border-red-400 text-white px-4 py-3 rounded shadow-lg animate-fadeIn">
          {error}
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block text-white text-sm md:text-base font-bold mb-2">
          Page Name
        </label>
        <input
          {...register("name", { required: "Page name is required" })}
          type="text"
          id="name"
          className="w-full px-3 py-3 border border-accent/30 rounded-lg bg-bg text-white 
                     focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent
                     transition-all duration-200"
          placeholder="Enter page name"
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-2 animate-fadeIn">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-white text-sm md:text-base font-bold mb-3">
          Page Image
        </label>
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-accent/30 rounded-lg p-8 cursor-pointer 
                     hover:border-accent/50 hover:bg-accent/5 transition-all duration-200
                     flex flex-col items-center justify-center"
        >
          <input {...getInputProps()} />
          <svg 
            className="w-10 h-10 mb-3 text-accent/40" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <p className="text-white text-center mb-1">
            Drag & drop an image here
          </p>
          <p className="text-gray-400 text-sm text-center">
            or click to select from your device
          </p>
        </div>
        {imagePreview && (
          <div className="mt-6 p-4 bg-bg/50 border border-accent/20 rounded-lg">
            <p className="text-white text-sm font-medium mb-3">Image Preview:</p>
            <div className="flex justify-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-56 max-w-full rounded-md shadow-lg object-contain"
              />
            </div>
          </div>
        )}
        {!file && mode === "create" && !imagePreview && (
          <div className="mt-4 p-4 border border-accent/20 rounded-lg">
            <label htmlFor="imageUrl" className="block text-white text-sm font-medium mb-2">
              Or enter image URL:
            </label>
            <input
              {...register("imageUrl")}
              type="text"
              id="imageUrl"
              className="w-full px-3 py-3 border border-accent/30 rounded-lg bg-bg text-white 
                         focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent
                         transition-all duration-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-4 mt-8 pt-4 border-t border-accent/20">
        <button
          type="button"
          onClick={() => router.push("/admin/pages")}
          className="px-4 py-3 text-white bg-gray-600 rounded-lg hover:bg-gray-700 
                     transition-colors duration-200 text-sm md:text-base font-medium
                     focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-bg"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-3 text-white bg-accent/40 rounded-lg hover:bg-accent/60 
                     transition-colors duration-200 text-sm md:text-base font-medium
                     disabled:opacity-50 disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-bg"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Saving...
            </span>
          ) : (
            mode === "create" ? "Create Page" : "Update Page"
          )}
        </button>
      </div>
    </form>
  );
} 