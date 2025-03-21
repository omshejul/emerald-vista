"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "border-accent" : "border-transparent";
  };

  return (
    <nav className="bg-bg border-b border-accent/20 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="font-bold text-white text-xl">
              <Link href="/admin">Admin Dashboard</Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <NavLink href="/admin" isActive={isActive("/admin")}>
                Dashboard
              </NavLink>
              <NavLink href="/admin/pages" isActive={isActive("/admin/pages")}>
                Pages
              </NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {session?.user?.name && (
              <span className="text-white">{session.user.name}</span>
            )}
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-accent/20 hover:bg-accent/30 text-white px-4 py-2 rounded-md"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  isActive: string;
  children: React.ReactNode;
}

function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-white border-b-2 ${isActive} hover:border-accent pb-2 transition-colors`}
    >
      {children}
    </Link>
  );
} 