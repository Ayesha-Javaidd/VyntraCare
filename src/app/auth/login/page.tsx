"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Sprint 1 only: simulated role routing
    if (email.toLowerCase().includes("admin")) {
      router.push("/admin/dashboard")
    } else {
      router.push("/facility/dashboard")
    }
  }

  return (
    <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-2">
        Vyntra Care
      </h1>
      <p className="text-sm text-gray-400 text-center mb-6">
        Sign in to continue
      </p>

      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@vyntracare.com"
          required
          dark
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          dark
        />

        <Button
          type="submit"
          label="Login"
          className="w-full"
        />
      </form>
    </div>
  )
}
