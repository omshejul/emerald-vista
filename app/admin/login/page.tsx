"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Check for error in URL parameters
    const error = searchParams.get("error");
    if (error === "AccessDenied") {
      setErrorMessage("Access denied. Only authorized administrators can login.");
    }

    if (status === "authenticated" && session?.user?.role === "admin") {
      router.push("/admin");
    }
  }, [session, status, router, searchParams]);

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/admin" });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-bg">
      <div className="max-w-md p-8 m-2 space-y-8 bg-bg border border-accent/20 rounded-xl">
        <div className="text-center">
          <div className="flex justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to access the admin dashboard
          </p>
        </div>
        
        {errorMessage && (
          <div className="p-3 uppercase text-center bg-red-500/20 border border-red-500/50 rounded-md text-red-200 text-sm">
            {errorMessage}
          </div>
        )}
        
        <div className="space-y-6">
          <button
            onClick={handleGoogleLogin}
            className="group w-full flex justify-center py-3 px-4 border border-accent rounded-md shadow-sm text-white bg-accent/20 hover:bg-accent/30 focus:outline-none"
          >
            <svg
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.676-4.199-2.707-6.735-2.707-5.632 0-10.15 4.518-10.15 10.15s4.518 10.15 10.15 10.15c5.858 0 9.804-4.121 9.804-9.932 0-0.722-0.098-1.42-0.238-2.078h-9.566z"></path>
            </svg>
            Sign in with Google
          </button>
        </div>
        <div className="text-center text-sm mt-6">
          <p className="text-gray-400">
            Only authorized administrators can log in
          </p>
        </div>
      </div>
    </main>
  );
} 