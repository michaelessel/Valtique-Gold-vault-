"use client"

import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface TransitionLoaderProps {
  isLoading: boolean
  message?: string
  duration?: number
  onComplete?: () => void
}

export function TransitionLoader({
  isLoading,
  message = "Loading assets...",
  duration = 1800,
  onComplete,
}: TransitionLoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      setProgress(0)
      return
    }

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateProgress = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)

      setProgress(newProgress)

      if (currentTime < endTime) {
        requestAnimationFrame(updateProgress)
      } else {
        if (onComplete) onComplete()
      }
    }

    const animationFrame = requestAnimationFrame(updateProgress)
    return () => cancelAnimationFrame(animationFrame)
  }, [isLoading, duration, onComplete])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="text-center space-y-6 max-w-md px-6">
        <Loader2 className="h-16 w-16 animate-spin text-primary mx-auto" />
        <p className="text-xl font-medium">{message}</p>

        {/* Progress bar */}
        <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
          <div className="bg-primary h-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <p className="text-sm text-muted-foreground">Securely accessing your valuable assets...</p>
      </div>
    </div>
  )
}

