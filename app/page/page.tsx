import connectToDatabase from "@/app/lib/mongodb";
import Page from "@/app/models/Page";
import PropertyList from "./components/PropertyList";

export const metadata = {
  title: "Property Information",
  description: "All the things you need to know about our property",
};

export default async function PagesIndex() {
  try {
    // Connect to database
    await connectToDatabase();

    // Fetch all pages from the database and convert to plain objects
    const pagesData = await Page.find({}).sort({ name: 1 }).lean();

    // Map the data to a safe structure for client components
    const pages = pagesData.map((page: any) => ({
      _id: page._id ? page._id.toString() : undefined,
      name: page.name || "",
      slug: page.slug || "",
      imageUrl: page.imageUrl || undefined,
      image: page.image
        ? {
            data: page.image.data ? true : undefined,
          }
        : undefined,
    }));

    return (
      <div className="min-h-screen bg-bg p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">
            Property Information
          </h1>
          <PropertyList pages={pages} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching pages:", error);
    return (
      <div className="min-h-screen bg-bg p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">
            Property Information
          </h1>
          <p className="text-red-400">
            Error loading property information. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
