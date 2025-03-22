"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoadingScreen } from "@/components/loading-screen"
import { Mail } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setShowSuccess(true)

    // Redirect to home after showing success message
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen pt-24 bg-muted">
        <div className="container flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center text-green-600">Success!</CardTitle>
              <CardDescription className="text-center">
                Password reset instructions have been sent to your email. Please check your inbox and spam folder.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center text-sm text-muted-foreground">
              Redirecting you to the homepage...
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <LoadingScreen loadingTime={1000}>
      <main className="min-h-screen pt-24 bg-muted">
        <div className="container flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center">
                <Mail className="h-12 w-12 text-primary mb-4" />
              </div>
              <CardTitle className="text-2xl text-center">Reset Password</CardTitle>
              <CardDescription className="text-center">
                Enter your email address and we'll send you a link to reset your password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full"
                  onClick={() => router.push("/vault/access/login")}
                >
                  Back to Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </LoadingScreen>
  )
}

