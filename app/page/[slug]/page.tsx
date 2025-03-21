import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import connectToDatabase from '@/app/lib/mongodb';
import Page from '@/app/models/Page';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Connect to database
  await connectToDatabase();
  
  // Find page by slug
  const page = await Page.findOne({ slug: params.slug });
  
  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }
  
  return {
    title: page.name,
    description: `View ${page.name}`,
  };
}

export default async function PageDetail({ params }: PageProps) {
  // Connect to database
  await connectToDatabase();
  
  // Find page by slug
  const page = await Page.findOne({ slug: params.slug });
  
  // If page not found, return 404
  if (!page) {
    notFound();
  }
  
  const hasImage = page.image?.data || page.imageUrl;

  return (
    <>
      {hasImage ? (
        page.imageUrl ? (
          <div className="relative w-full h-screen">
            <Image 
              src={page.imageUrl}
              alt={page.name}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <>
            <img 
              src={`/api/image/${page._id}`}
              alt={page.name}
              className="w-full"
            />
          </>
        )
      ) : (
        <div className="text-white text-center p-4">
          No image available
        </div>
      )}
    </>
  );
} 