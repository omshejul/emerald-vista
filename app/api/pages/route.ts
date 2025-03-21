import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import connectToDatabase from '@/app/lib/mongodb';
import Page from '@/app/models/Page';
import { authOptions } from '@/app/lib/auth';

// GET all pages
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const pages = await Page.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: pages });
  } catch (error) {
    console.error('Error fetching pages:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pages' },
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
      const newPage = await Page.create({
        name,
        slug,
        image: {
          data: buffer,
          contentType: file.type,
          filename: file.name
        }
      });
      
      return NextResponse.json(
        { success: true, data: newPage },
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
      const newPage = await Page.create({
        name,
        slug,
        imageUrl,
      });
      
      return NextResponse.json(
        { success: true, data: newPage },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error('Error creating page:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create page' },
      { status: 500 }
    );
  }
} 