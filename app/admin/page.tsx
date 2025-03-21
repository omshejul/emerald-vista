"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../Components/Admin/AdminLayout";
import Link from "next/link";

export default function AdminDashboard() {
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/pages");
        const result = await response.json();
        
        if (result.success) {
          setPageCount(result.data.length);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard
            title="Custom Pages"
            count={isLoading ? "Loading..." : pageCount?.toString() || "0"}
            linkText="Manage Pages"
            linkHref="/admin/pages"
          />
          
          {/* You can add more dashboard cards here */}
        </div>
      </div>
    </AdminLayout>
  );
}

interface DashboardCardProps {
  title: string;
  count: string;
  linkText: string;
  linkHref: string;
}

function DashboardCard({ title, count, linkText, linkHref }: DashboardCardProps) {
  return (
    <div className="bg-bg border border-accent/20 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-4xl font-bold text-accent mt-2">{count}</p>
      <div className="mt-4">
        <Link 
          href={linkHref}
          className="text-white bg-accent/20 hover:bg-accent/30 px-4 py-2 rounded-md inline-flex"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
} 