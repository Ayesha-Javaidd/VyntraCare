import AdminSidebar from "@/components/layout/AdminSidebar"
import Topbar from "@/components/layout/Topbar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex text-amber-900 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6  text-amber-900  bg-amber-50 flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
