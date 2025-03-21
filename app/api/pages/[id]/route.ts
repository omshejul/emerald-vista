import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import connectToDatabase from '@/app/lib/mongodb';
import Page from '@/app/models/Page';
import { authOptions } from '@/app/lib/auth';

interface Params {
  params: {
    id: string;
  };
}

// GET a page by id
export async function GET(req: NextRequest, { params }: Params) {
  try {
    await connectToDatabase();
    const page = await Page.findById(params.id);

    if (!page) {
      return NextResponse.json(
        { success: false, error: 'Page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: page });
  } catch (error) {
    console.error('Error fetching page:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch page' },
      { status: 500 }
    );
  }
}

// PUT update a page by id
export async function PUT(req: NextRequest, { params }: Params) {
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
      const file = formData.get('image') as File | null;
      
      // Validate input
      if (!name) {
        return NextResponse.json(
          { success: false, error: 'Name is required' },
          { status: 400 }
        );
      }
      
      // Create slug from name
      const slug = name.toLowerCase().replace(/\s+/g, '-');
      
      await connectToDatabase();
      
      // Check if the page exists
      const page = await Page.findById(params.id);
      if (!page) {
        return NextResponse.json(
          { success: false, error: 'Page not found' },
          { status: 404 }
        );
      }
      
      // Update fields
      const updateData: any = {
        name,
        slug,
      };
      
      // If a new file is uploaded, process it
      if (file) {
        // Convert file to buffer
        const buffer = Buffer.from(await file.arrayBuffer());
        
        updateData.image = {
          data: buffer,
          contentType: file.type,
          filename: file.name
        };
        
        // Remove old imageUrl if exists
        updateData.imageUrl = undefined;
      }
      
      // Update the page
      const updatedPage = await Page.findByIdAndUpdate(
        params.id,
        updateData,
        { new: true }
      );
      
      return NextResponse.json({ success: true, data: updatedPage });
    } else {
      // Handle JSON request
      const body = await req.json();
      const { name, imageUrl } = body;
      
      // Validate input
      if (!name) {
        return NextResponse.json(
          { success: false, error: 'Name is required' },
          { status: 400 }
        );
      }
      
      // Create slug from name
      const slug = name.toLowerCase().replace(/\s+/g, '-');
      
      await connectToDatabase();
      
      // Check if the page exists
      const page = await Page.findById(params.id);
      if (!page) {
        return NextResponse.json(
          { success: false, error: 'Page not found' },
          { status: 404 }
        );
      }
      
      // Update the page
      const updatedPage = await Page.findByIdAndUpdate(
        params.id,
        {
          name,
          slug,
          imageUrl,
          // If imageUrl is provided, remove the image data to save space
          ...(imageUrl ? { image: undefined } : {})
        },
        { new: true }
      );
      
      return NextResponse.json({ success: true, data: updatedPage });
    }
  } catch (error) {
    console.error('Error updating page:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update page' },
      { status: 500 }
    );
  }
}

// DELETE a page by id
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    
    // Check if user is authenticated and is an admin
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();
    
    const deletedPage = await Page.findByIdAndDelete(params.id);
    
    if (!deletedPage) {
      return NextResponse.json(
        { success: false, error: 'Page not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    console.error('Error deleting page:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete page' },
      { status: 500 }
    );
  }
} 