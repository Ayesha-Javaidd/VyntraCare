import Link from "next/link"
import Button from "@/components/ui/Button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      
      {/* Top Navigation */}
      <header className="flex justify-end p-6">
        <Link href="/auth/login">
          <Button  label="Login" variant="ghost" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center space-y-6 shadow-lg">
          <h1 className="text-3xl font-semibold tracking-tight">
            Vyntra Care
          </h1>

          <p className="text-sm text-gray-400">
            Select your portal to continue
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/admin/dashboard">
              <Button label="Admin Portal" />
            </Link>

            <Link href="/facility/dashboard">
              <Button label="Facility Portal" variant="secondary" />
            </Link>
          </div>
        </div>
      </main>

    </div>
  )
}
