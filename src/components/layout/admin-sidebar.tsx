"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  Building2,
  Settings2,
  ClipboardList,
  LogOut
} from "lucide-react"
import { supabase } from "@/services/supabase-client"

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Manage Products", href: "/admin/products", icon: Package },
  { label: "Facilities", href: "/admin/facilities", icon: Building2 },
  { label: "Catalog Assignment", href: "/admin/catalog", icon: Settings2 },
  { label: "Orders / Invoices", href: "/admin/orders", icon: ClipboardList },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  return (
    <aside className="w-72 min-h-screen bg-secondary border-r border-border p-6 flex flex-col">
      <Link href="/admin/dashboard" className="mb-10 flex items-center gap-3 px-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">V</span>
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Vyntra Care
        </h2>
      </Link>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive
                  ? "bg-white text-primary shadow-sm ring-1 ring-black/5"
                  : "text-muted-foreground hover:bg-white/50 hover:text-foreground"
                }
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="pt-6 border-t border-border mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  )
}
