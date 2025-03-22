"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { HeroShowcase } from "@/components/hero-showcase"
import { TransitionLoader } from "@/components/transition-loader"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleTrackAssets = () => {
    setIsLoading(true)
    // The loader component will handle the timing and redirect
  }

  const handleLoadingComplete = () => {
    router.push("/tracking")
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Loading Transition */}
      <TransitionLoader
        isLoading={isLoading}
        duration={1800}
        message="Preparing Asset Tracking System..."
        onComplete={handleLoadingComplete}
      />

      <section className="relative">
        {/* Background Image Showcase */}
        <div className="absolute inset-0 w-full h-full">
          <HeroShowcase />
        </div>

        {/* Fixed Content Overlay */}
        <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center z-10">
          <div className="container px-4 md:px-6 py-24 md:py-32">
            <div className="max-w-[800px] space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none drop-shadow-md">
                Secure Gold & Diamond Tracking
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl drop-shadow-md">
                Track your precious assets with confidence. Our state-of-the-art vault system ensures your valuables are
                monitored 24/7.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto shadow-lg" onClick={handleTrackAssets}>
                  Track Your Assets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/vault">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-lg backdrop-blur-sm"
                  >
                    Access Vault
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="group rounded-lg border p-6 hover:border-primary transition-colors cursor-pointer"
              onClick={handleTrackAssets}
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary">Track Assets</h3>
              <p className="text-muted-foreground">
                Monitor your precious metals and stones in real-time with our advanced tracking system.
              </p>
            </div>
            <Link href="/vault" className="group">
              <div className="rounded-lg border p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary">Vault Access</h3>
                <p className="text-muted-foreground">
                  Secure access to your stored valuables with our state-of-the-art vault system.
                </p>
              </div>
            </Link>
            <Link href="/about" className="group">
              <div className="rounded-lg border p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary">Learn More</h3>
                <p className="text-muted-foreground">
                  Discover how we ensure the highest level of security for your precious assets.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

