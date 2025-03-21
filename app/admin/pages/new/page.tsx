"use client";

import AdminLayout from "@/app/Components/Admin/AdminLayout";
import PageForm from "@/app/Components/Admin/PageForm";

export default function NewPagePage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Create New Page</h1>
        <div className="bg-bg border border-accent/20 rounded-lg p-6">
          <PageForm mode="create" />
        </div>
      </div>
    </AdminLayout>
  );
} 