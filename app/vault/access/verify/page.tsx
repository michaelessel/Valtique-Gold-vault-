"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LoadingScreen } from "@/components/loading-screen"
import { Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function VerifyPage() {
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds
  const router = useRouter()

  useEffect(() => {
    if (timeLeft <= 0) {
      router.push("/vault/access/login")
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, router])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (code === "3894") {
      setIsLoading(true)
      // Simulate verification delay
      setTimeout(() => {
        router.push("/vault/dashboard")
      }, 1000)
    } else {
      setError("Invalid verification code")
    }
  }

  return (
    <LoadingScreen loadingTime={1000}>
      <main className="min-h-screen pt-24 bg-muted">
        <div className="container flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
              </div>
              <CardTitle className="text-2xl text-center">Two-Step Verification</CardTitle>
              <CardDescription className="text-center">
                Enter the verification code sent to number ending ****633
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Enter verification code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="text-center text-2xl tracking-widest"
                    maxLength={4}
                    required
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    The code will expire in {formatTime(timeLeft)}
                  </p>
                </div>
                {error && <p className="text-sm text-destructive text-center">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading || code.length !== 4 || timeLeft <= 0}>
                  {isLoading ? "Verifying..." : "Verify"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </LoadingScreen>
  )
}

