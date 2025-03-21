import Link from 'next/link';
import Image from 'next/image';
import connectToDatabase from '@/app/lib/mongodb';
import Page, { IPage } from '@/app/models/Page';

export const metadata = {
  title: 'All Pages',
  description: 'View all available pages',
};

export default async function PagesIndex() {
  // Connect to database
  await connectToDatabase();
  
  // Fetch all pages from the database
  const pages = await Page.find({}).sort({ name: 1 });
  
  return (
    <div className="min-h-screen bg-bg p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Property Information</h1>
        
        {pages.length === 0 ? (
          <p className="text-gray-400">No pages available.</p>
        ) : (
          <div className="flex flex-col space-y-4">
            {pages.map((page: IPage) => (
              <Link 
                key={page._id ? page._id.toString() : `page-${page.slug}`} 
                href={`/page/${page.slug}`}
                className="group block relative h-48 rounded-lg overflow-hidden"
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/80"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                    {page.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
