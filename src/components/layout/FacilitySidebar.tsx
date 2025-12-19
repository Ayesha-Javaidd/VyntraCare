"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Dashboard", href: "/facility/dashboard" },
  { label: "Inventory", href: "/facility/inventory" },
]

export default function FacilitySidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 min-h-screen bg-gray-950 border-r border-gray-800 p-6">
      <h2 className="text-lg font-semibold text-gray-100 mb-8">
        Facility Portal
      </h2>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:bg-gray-900 hover:text-gray-100"
                }
              `}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
