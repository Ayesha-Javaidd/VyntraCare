import Link from "next/link"

export default function Home() {
  return (
    <div className="flex items-center justify-center  text-white min-h-screen">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold m-12">Vyntra Care</h1>

        <div className="space-x-4">
          <Link href="/admin/dashboard">Admin</Link>
          <Link href="/facility/dashboard">Facility</Link>
        </div>
      </div>
    </div>
  )
}
