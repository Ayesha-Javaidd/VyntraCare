"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import FacilitySidebar from "@/components/layout/facility-sidebar";
import { useUser } from "@/hooks/use-user";

export default function FacilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, role, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/auth/login");
      } else if (role !== "facility_manager" && role !== "admin") {
        router.push("/shop");
      }
    }
  }, [user, role, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user || (role !== "facility_manager" && role !== "admin")) return null;

  return (
    <div className="flex h-screen bg-slate-50">
      <FacilitySidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Facility Portal
            </h2>
            <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full border border-teal-100 italic">
              Vyntra Pro Connected
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* User profile / info could go here */}
          </div>
        </header>

        <main className="p-8 bg-background flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
