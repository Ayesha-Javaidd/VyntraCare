"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Warehouse,
  LogOut,
} from "lucide-react";
import { supabase } from "@/services/supabase-client";

const navItems = [
  { label: "Dashboard", href: "/facility/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/facility/products", icon: Package },
  { label: "Orders", href: "/facility/orders", icon: ClipboardList },
  { label: "Inventory", href: "/facility/inventory", icon: Warehouse },
];

export default function FacilitySidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <aside className="w-72 min-h-screen bg-[#0A1A33] p-6 flex flex-col text-gray-200">
      {/* Logo */}
      <Link
        href="/facility/dashboard"
        className="mb-10 flex items-center gap-3 px-2 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="w-10 h-10 bg-[#1F2A4D] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">V</span>
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Vyntra Care
        </h2>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200
                                ${
                                  isActive
                                    ? "bg-[#1F2A4D] text-white shadow-md"
                                    : "hover:bg-[#1F2A4D] hover:text-white text-gray-300"
                                }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="pt-6 mt-auto border-t border-[#1F2A4D]">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-600/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
