"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import AdminLayout from "@/app/Components/Admin/AdminLayout";
import PageForm from "@/app/Components/Admin/PageForm";

interface Page {
  _id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  image?: {
    contentType: string;
    filename: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export default function EditPagePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const [page, setPage] = useState<Page | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/pages/${id}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to fetch page");
        }

        setPage(result.data);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchPage();
    }
  }, [id]);

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="p-6 text-white">Loading...</div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="p-6">
          <div className="bg-red-900/50 border border-red-400 text-white px-4 py-3 rounded mb-4">
            {error}
          </div>
          <button
            onClick={() => router.push('/admin/pages')}
            className="px-4 py-2 bg-accent/40 text-white rounded-md hover:bg-accent/60"
          >
            Back to Pages
          </button>
        </div>
      </AdminLayout>
    );
  }

  if (!page) {
    return (
      <AdminLayout>
        <div className="p-6">
          <div className="bg-yellow-900/50 border border-yellow-400 text-white px-4 py-3 rounded mb-4">
            Page not found
          </div>
          <button
            onClick={() => router.push('/admin/pages')}
            className="px-4 py-2 bg-accent/40 text-white rounded-md hover:bg-accent/60"
          >
            Back to Pages
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-white">Edit Page</h1>
        <div className="bg-bg border border-accent/20 rounded-lg p-6">
          <PageForm mode="edit" page={page} />
        </div>
      </div>
    </AdminLayout>
  );
} 