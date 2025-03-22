"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { useState } from "react"

export default function TrackingPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleTrackLocation = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/tracking/details")
    }, 1200)
  }

  if (isLoading) {
    return <LoadingScreen loadingTime={1200} />
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Asset Tracking</h1>
            <p className="text-muted-foreground">Monitor your precious metals and stones in real-time</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Gold Assets</CardTitle>
                <CardDescription>24K Gold - Premium Quality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1625-ANoThgDLe0wFdUTStb32oWsiPu3k0d.jpeg"
                      alt="Premium gold nuggets"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Package className="h-4 w-4" />
                    <span>Secure Tracking Available</span>
                  </div>
                  <Button variant="outline" className="w-full" onClick={handleTrackLocation}>
                    <Package className="mr-2 h-4 w-4" />
                    Track Location
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Diamond Collection</CardTitle>
                <CardDescription>VVS1 Clarity - Premium Grade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1626-rYqi2QQqohrfVbPGzIz0oWUZTuBPtl.jpeg"
                      alt="Premium diamonds"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Package className="h-4 w-4" />
                    <span>Secure Tracking Available</span>
                  </div>
                  <Button variant="outline" className="w-full" onClick={handleTrackLocation}>
                    <Package className="mr-2 h-4 w-4" />
                    Track Location
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

