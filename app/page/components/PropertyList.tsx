"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiLoader, FiEye } from "react-icons/fi";

// Define the interface to match the data structure we're sending from the server
interface SerializedPage {
  _id?: string;
  name: string;
  slug: string;
  imageUrl?: string;
  image?: {
    data?: boolean;
  };
}

interface PropertyListProps {
  pages: SerializedPage[];
}

export default function PropertyList({ pages }: PropertyListProps) {
  const [loadingPage, setLoadingPage] = useState<string | null>(null);
  const router = useRouter();

  const handlePageClick = (slug: string) => {
    setLoadingPage(slug);
    router.push(`/page/${slug}`);
  };

  return (
    <>
      {pages.length === 0 ? (
        <p className="text-gray-400">No pages available.</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {pages.map((page) => (
            <div
              key={page._id || `page-${page.slug}`}
              className="relative flex h-48 rounded-lg overflow-hidden shadow-md border-2 border-white/10"
            >
              {/* Loading Overlay */}
              {loadingPage === page.slug && (
                <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                  <FiLoader className="h-12 w-12 text-accent animate-spin" />
                </div>
              )}
              {/* Main Content Area (2/3 width) */}
              <div
                className="flex-grow cursor-pointer relative"
                onClick={() => handlePageClick(page.slug)}
              >
                {/* Image Background */}
                <div className="absolute inset-0 bg-gray-800">
                  {page.imageUrl ? (
                    <Image
                      src={page.imageUrl}
                      alt={page.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  ) : page.image?.data ? (
                    <img
                      src={`/api/image/${page._id}`}
                      alt={page.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/80"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-xl font-semibold text-white transition-colors">
                    {page.name}
                  </h2>
                </div>
              </div>

              {/* View Button (1/3 width) */}
              <div
                className="w-1/3 bg-black bg-opacity-10 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 active:bg-opacity-80"
                onClick={() => handlePageClick(page.slug)}
                role="button"
                aria-label={`View ${page.name}`}
              >
                <FiEye className="text-3xl text-white mb-2" />
                <span className="text-white font-medium uppercase text-center">
                  VIEW
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
