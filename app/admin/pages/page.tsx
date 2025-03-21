"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminLayout from "@/app/Components/Admin/AdminLayout";

interface Page {
  _id: string;
  name: string;
  slug: string;
  imageUrl?: string;
}

export default function PagesPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch("/api/pages");
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to fetch pages");
        }

        setPages(result.data);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPages();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this page?")) {
      return;
    }

    try {
      const response = await fetch(`/api/pages/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to delete page");
      }

      // Remove the deleted page from the list
      setPages(pages.filter((page) => page._id !== id));
    } catch (err: any) {
      setError(err.message || "An error occurred");
    }
  };

  return (
    <AdminLayout>
      <div className="p-4 sm:p-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-white">Pages</h1>
          <Link
            href="/admin/pages/new"
            className="px-4 py-2 bg-accent/40 text-white rounded-lg hover:bg-accent/60 
                     transition-colors duration-200 text-sm font-medium w-full sm:w-auto text-center"
          >
            Add New Page
          </Link>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-400 text-white px-4 py-3 rounded-lg shadow-lg mb-6 animate-fadeIn">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : pages.length === 0 ? (
          <div className="text-center py-12 bg-bg border border-accent/20 rounded-lg">
            <svg 
              className="w-16 h-16 mx-auto text-accent/30 mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <p className="text-white text-lg mb-4">No pages found.</p>
            <Link
              href="/admin/pages/new"
              className="px-4 py-2 bg-accent/40 text-white rounded-lg hover:bg-accent/60 transition-colors duration-200"
            >
              Create your first page
            </Link>
          </div>
        ) : (
          <>
            {/* Mobile view - Cards */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {pages.map((page) => (
                <div 
                  key={page._id} 
                  className="bg-bg border border-accent/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="h-12 w-12 relative mr-3">
                        <img
                          src={page.imageUrl || `/api/image/${page._id}`}
                          alt={page.name}
                          className="h-12 w-12 rounded-md object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder-image.jpg';
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">
                          <Link 
                            href={`/page/${page.slug}`} 
                            target="_blank"
                            className="hover:text-accent"
                          >
                            {page.name}
                          </Link>
                        </h3>
                        <p className="text-gray-400 text-sm">{page.slug}</p>
                      </div>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-accent/10">
                      <Link 
                        href={`/page/${page.slug}`} 
                        target="_blank"
                        className="text-accent/70 hover:text-accent text-sm font-medium flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View
                      </Link>
                      <button
                        onClick={() => router.push(`/admin/pages/${page._id}`)}
                        className="text-accent/70 hover:text-accent text-sm font-medium flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(page._id)}
                        className="text-red-400 hover:text-red-500 text-sm font-medium flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m5-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop view - Table */}
            <div className="hidden md:block bg-bg border border-accent/20 rounded-lg overflow-hidden shadow-sm">
              <table className="min-w-full divide-y divide-accent/20">
                <thead className="bg-bg">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Slug
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent/20">
                  {pages.map((page) => (
                    <tr key={page._id} className="hover:bg-accent/5 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href={`/page/${page.slug}`} target="_blank">
                          <div className="h-10 w-10 relative">
                            <img
                              src={page.imageUrl || `/api/image/${page._id}`}
                              alt={page.name}
                              className="h-10 w-10 rounded-md object-cover shadow-sm"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder-image.jpg'; // Fallback image
                              }}
                            />
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        <Link 
                          href={`/page/${page.slug}`} 
                          target="_blank"
                          className="hover:text-accent underline"
                        >
                          {page.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                        <Link 
                          href={`/page/${page.slug}`} 
                          target="_blank"
                          className="hover:text-white"
                        >
                          {page.slug}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <Link 
                          href={`/page/${page.slug}`} 
                          target="_blank"
                          className="text-accent/70 hover:text-accent mr-3 inline-flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                          View
                        </Link>
                        <button
                          onClick={() => router.push(`/admin/pages/${page._id}`)}
                          className="text-accent/70 hover:text-accent ml-3 inline-flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(page._id)}
                          className="text-red-400 hover:text-red-500 ml-3 inline-flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m5-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
} 