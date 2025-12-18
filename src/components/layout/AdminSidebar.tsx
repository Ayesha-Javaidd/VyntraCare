"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Products", href: "/admin/products" },
  { label: "Facilities", href: "/admin/facilities" },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-6">Admin Panel</h2>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-3 py-2 rounded-md text-sm font-medium
              ${
                pathname === item.href
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
