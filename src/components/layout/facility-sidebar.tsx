"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
    LayoutDashboard,
    Package,
    ClipboardList,
    Warehouse,
    LogOut
} from "lucide-react"
import { supabase } from "@/services/supabase-client"

const navItems = [
    { label: "Dashboard", href: "/facility/dashboard", icon: LayoutDashboard },
    { label: "Products", href: "/facility/products", icon: Package },
    { label: "Orders", href: "/facility/orders", icon: ClipboardList },
    { label: "Inventory", href: "/facility/inventory", icon: Warehouse },
]

export default function FacilitySidebar() {
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/auth/login')
    }

    return (
        <aside className="w-72 min-h-screen bg-secondary border-r border-border p-6 flex flex-col">
            <Link href="/facility/dashboard" className="mb-10 flex items-center gap-3 px-2 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-medical-teal rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">V</span>
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    Vyntra Care
                </h2>
            </Link>

            <nav className="flex-1 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href)
                    const Icon = item.icon

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive
                                    ? "bg-white text-medical-teal shadow-sm ring-1 ring-black/5"
                                    : "text-muted-foreground hover:bg-white/50 hover:text-foreground"
                                }
              `}
                        >
                            <Icon className={`w-5 h-5 ${isActive ? "text-medical-teal" : "text-muted-foreground"}`} />
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

