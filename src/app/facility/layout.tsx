import FacilitySidebar from "@/components/layout/FacilitySidebar"
import Topbar from "@/components/layout/Topbar"

export default function FacilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex text-amber-900 min-h-screen">
      <FacilitySidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className=" text-amber-900  bg-amber-50  p-6 flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
