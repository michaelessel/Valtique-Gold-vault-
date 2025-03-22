"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoadingScreen } from "@/components/loading-screen"
import { Lock } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Case-insensitive email comparison
    const isValidMichaelEmail = email.toLowerCase() === "michaelclayton783@outlook.com".toLowerCase()
    const isValidThomasEmail = email.toLowerCase() === "thomasfree67@yahoo.com".toLowerCase()

    // Check for Michael's credentials
    if (isValidMichaelEmail && password === "Mikeclayton1865") {
      setIsLoading(true)
      // Store user info in localStorage
      localStorage.setItem("vaultUser", "michael")
      // Simulate login delay
      setTimeout(() => {
        router.push("/vault/access/verify")
      }, 1500)
      return
    }

    // Check for Thomas's credentials - case insensitive for "thomas" part
    if (isValidThomasEmail) {
      // Extract the "thomas" part and the rest of the password
      const thomasPart = password.substring(0, 6)
      const restOfPassword = password.substring(6)

      // Check if the rest of the password matches exactly and thomas part matches case-insensitively
      if (thomasPart.toLowerCase() === "thomas".toLowerCase() && restOfPassword === "1$1") {
        setIsLoading(true)
        // Store user info in localStorage
        localStorage.setItem("vaultUser", "thomas")
        // Simulate login delay
        setTimeout(() => {
          router.push("/vault/access/verify")
        }, 1500)
        return
      }
    }

    setError("Invalid email or password")
  }

  return (
    <LoadingScreen loadingTime={1000}>
      <main className="min-h-screen pt-24 relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1630-UNUH7pKhcWgmcaw60hwEvrvAYPKt2G.webp"
            alt="Secure gold vault storage"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />
        </div>

        <div className="container relative flex items-center justify-center">
          <div className="w-full max-w-md space-y-8 bg-background/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border">
            <div className="flex flex-col items-center space-y-2 text-center">
              <Lock className="h-12 w-12 text-primary" />
              <h1 className="text-2xl font-bold">Secure Vault Access</h1>
              <p className="text-sm text-muted-foreground">Please login to access your vault</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-background/50 backdrop-blur-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="bg-background/50 backdrop-blur-sm"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Sign In"}
              </Button>
              <Link href="/forgot-password" className="block text-center text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </form>
          </div>
        </div>
      </main>
    </LoadingScreen>
  )
}

