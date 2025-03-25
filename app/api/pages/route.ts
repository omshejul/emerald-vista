import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { Types } from 'mongoose';
import connectToDatabase from '@/app/lib/mongodb';
import Page from '@/app/models/Page';
import { authOptions } from '@/app/lib/auth';

interface MongoPage {
  _id: Types.ObjectId;
  name: string;
  slug: string;
  imageUrl?: string;
  image?: {
    data: Buffer;
    contentType: string;
    filename: string;
  };
}

// GET all pages
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    
    // Fetch pages and convert to plain objects
    const rawData = await Page.find({}).sort({ name: 1 }).lean();
    
    // Type assertion after validating the shape of the data
    const pagesData = rawData.map(doc => {
      if (!doc._id || !doc.name || !doc.slug) {
        throw new Error('Invalid document structure');
      }
      return {
        _id: doc._id as Types.ObjectId,
        name: doc.name as string,
        slug: doc.slug as string,
        imageUrl: doc.imageUrl as string | undefined,
        image: doc.image as MongoPage['image'] | undefined
      };
    });
    
    // Serialize the data properly
    const pages = pagesData.map(page => ({
      _id: page._id.toString(),
      name: page.name || '',
      slug: page.slug || '',
      imageUrl: page.imageUrl || undefined,
      image: page.image ? {
        data: page.image.data ? true : undefined,
      } : undefined
    }));

    return NextResponse.json({ 
      success: true, 
      data: pages 
    });
  } catch (error: any) {
    console.error('Error fetching pages:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to fetch pages' 
      },
      { status: 500 }
    );
  }
}

// POST create a new page
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    // Check if user is authenticated and is an admin
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if request is multipart/form-data
    const contentType = req.headers.get('content-type') || '';
    
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const name = formData.get('name') as string;
      const file = formData.get('image') as File;
      
      // Validate input
      if (!name || !file) {
        return NextResponse.json(
          { success: false, error: 'Name and image are required' },
          { status: 400 }
        );
      }
      
      // Create slug from name
      const slug = name.toLowerCase().replace(/\s+/g, '-');
      
      await connectToDatabase();
      
      // Check if page with the same slug already exists
      const existingPage = await Page.findOne({ slug });
      if (existingPage) {
        return NextResponse.json(
          { success: false, error: 'A page with this name already exists' },
          { status: 400 }
        );
      }
      
      // Convert file to buffer
      const buffer = Buffer.from(await file.arrayBuffer());
      
      // Create a new page with image data
      const doc = await Page.create({
        name,
        slug,
        image: {
          data: buffer,
          contentType: file.type,
          filename: file.name
        }
      });

      // Type assertion after validating the shape of the data
      const newPage = {
        _id: doc._id as Types.ObjectId,
        name: doc.name as string,
        slug: doc.slug as string,
        imageUrl: doc.imageUrl as string | undefined,
        image: doc.image as MongoPage['image'] | undefined
      };
      
      // Serialize the response
      const serializedPage = {
        _id: newPage._id.toString(),
        name: newPage.name || '',
        slug: newPage.slug || '',
        imageUrl: newPage.imageUrl || undefined,
        image: newPage.image ? {
          data: newPage.image.data ? true : undefined,
        } : undefined
      };

      return NextResponse.json(
        { success: true, data: serializedPage },
        { status: 201 }
      );
    } else {
      // Handle JSON request for backward compatibility
      const body = await req.json();
      const { name, imageUrl } = body;
      
      // Validate input
      if (!name || !imageUrl) {
        return NextResponse.json(
          { success: false, error: 'Name and image URL are required' },
          { status: 400 }
        );
      }
      
      // Create slug from name
      const slug = name.toLowerCase().replace(/\s+/g, '-');
      
      await connectToDatabase();
      
      // Check if page with the same slug already exists
      const existingPage = await Page.findOne({ slug });
      if (existingPage) {
        return NextResponse.json(
          { success: false, error: 'A page with this name already exists' },
          { status: 400 }
        );
      }
      
      // Create a new page
      const doc = await Page.create({
        name,
        slug,
        imageUrl,
      });

      // Type assertion after validating the shape of the data
      const newPage = {
        _id: doc._id as Types.ObjectId,
        name: doc.name as string,
        slug: doc.slug as string,
        imageUrl: doc.imageUrl as string | undefined,
        image: doc.image as MongoPage['image'] | undefined
      };
      
      // Serialize the response
      const serializedPage = {
        _id: newPage._id.toString(),
        name: newPage.name || '',
        slug: newPage.slug || '',
        imageUrl: newPage.imageUrl || undefined,
        image: newPage.image ? {
          data: newPage.image.data ? true : undefined,
        } : undefined
      };

      return NextResponse.json(
        { success: true, data: serializedPage },
        { status: 201 }
      );
    }
  } catch (error: any) {
    console.error('Error creating page:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to create page' 
      },
      { status: 500 }
    );
  }
} 