"use client"

import type React from "react"

import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  children: React.ReactNode
  loadingTime?: number
}

export function LoadingScreen({ children, loadingTime = 1100 }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingTime)

    return () => clearTimeout(timer)
  }, [loadingTime])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  }

  return children
}

