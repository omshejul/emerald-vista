import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Page from '@/app/models/Page';

interface Params {
  params: {
    id: string;
  };
}

// GET an image by page id
export async function GET(req: NextRequest, { params }: Params) {
  try {
    await connectToDatabase();
    const page = await Page.findById(params.id);

    if (!page || !page.image || !page.image.data) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }

    // Convert buffer to base64 or serve directly as binary
    const contentType = page.image.contentType || 'image/jpeg';
    
    // Create a response with the image data
    const response = new NextResponse(page.image.data);
    
    // Set appropriate headers
    response.headers.set('Content-Type', contentType);
    response.headers.set('Content-Disposition', `inline; filename="${page.image.filename || 'image'}"`);
    response.headers.set('Cache-Control', 'public, max-age=31536000'); // Cache for a year
    
    return response;
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch image' },
      { status: 500 }
    );
  }
} 