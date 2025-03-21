import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Page document
export interface IPage extends Document {
  name: string;
  slug: string;
  imageUrl?: string;
  image?: {
    data: Buffer;
    contentType: string;
    filename: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Create schema for Page model
const PageSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for this page'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Please provide a slug for this page'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    image: {
      data: Buffer,
      contentType: String,
      filename: String,
    },
  },
  {
    timestamps: true,
  }
);

// Export Page model if it exists, or create a new one
export default mongoose.models.Page || mongoose.model<IPage>('Page', PageSchema); 