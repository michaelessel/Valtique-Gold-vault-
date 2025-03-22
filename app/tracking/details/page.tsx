"use client"

import type React from "react"

import { LoadingScreen } from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plane, Package, Building, Search } from "lucide-react"
import { useState } from "react"

const TimelineItem = ({
  icon: Icon,
  title,
  description,
  location,
  time,
  isActive,
}: {
  icon: any
  title: string
  description: string
  location: string
  time: string
  isActive?: boolean
}) => (
  <div className="relative mb-[120px] flex items-center group">
    <div
      className={`absolute left-0 flex h-20 w-20 items-center justify-center rounded-full 
      ${isActive ? "bg-primary" : "bg-muted"} transition-colors duration-300`}
    >
      <Icon className={`h-10 w-10 ${isActive ? "text-white animate-pulse" : "text-primary"}`} />
    </div>
    <div className="ml-32 space-y-2">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${isActive ? "bg-primary animate-pulse" : "bg-green-500"}`} />
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <p className="text-base text-muted-foreground">{description}</p>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Location: {location}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
    </div>
  </div>
)

export default function TrackingDetailPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isValidTracking, setIsValidTracking] = useState(false)
  const [isConfiguring, setIsConfiguring] = useState(false)

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber === "15AUG1999") {
      setIsConfiguring(true)
      setTimeout(() => {
        setIsConfiguring(false)
        setIsValidTracking(true)
      }, 1200)
    }
  }

  if (isConfiguring) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="relative">
            <Plane className="h-16 w-16 animate-pulse text-primary mx-auto" />
            <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/20" />
          </div>
          <p className="text-xl font-medium">Please wait while we configure your package information...</p>
        </div>
      </div>
    )
  }

  return (
    <LoadingScreen loadingTime={800}>
      <main className="min-h-screen pt-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Track Your Asset</CardTitle>
                <CardDescription className="text-base">
                  Enter your tracking ID to view your asset's current location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrackingSubmit} className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="tracking" className="sr-only">
                      Tracking ID
                    </Label>
                    <Input
                      id="tracking"
                      placeholder="Enter your tracking ID"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="text-lg h-12"
                    />
                  </div>
                  <Button type="submit" size="lg" className="px-8">
                    <Search className="h-5 w-5 mr-2" />
                    Track
                  </Button>
                </form>
              </CardContent>
            </Card>

            {isValidTracking && (
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Tracking Details</CardTitle>
                  <CardDescription className="text-base">Real-time tracking information for your asset</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-12">
                    {/* Timeline with 5-inch (120px) spacing and connecting line */}
                    <div className="relative pt-8 pb-4">
                      {/* Connecting line */}
                      <div className="absolute left-10 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary to-muted" />

                      {/* Timeline Items */}
                      <TimelineItem
                        icon={Plane}
                        title="In Transit to Miami"
                        description="Asset is currently in transit to final destination"
                        location="International Airspace"
                        time={new Date().toLocaleString()}
                        isActive={true}
                      />

                      <TimelineItem
                        icon={Building}
                        title="Item in Possession"
                        description="Asset secured and processed at UK facility"
                        location="London, United Kingdom"
                        time="23 Feb 2024, 12:30 GMT"
                      />

                      <TimelineItem
                        icon={Plane}
                        title="In Transit to UK"
                        description="Asset in secure transport to UK facility"
                        location="International Airspace"
                        time="23 Feb 2024, 08:00 GMT"
                      />

                      <TimelineItem
                        icon={Package}
                        title="Item in Possession"
                        description="Asset received and secured at origin facility"
                        location="Accra, Ghana"
                        time="23 Feb 2024, 04:00 GMT"
                      />
                    </div>

                    {/* Additional Details */}
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                          <div>
                            <p className="text-sm font-semibold mb-1">Initial Location</p>
                            <p className="text-base text-muted-foreground">Accra, Ghana</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-1">Final Destination</p>
                            <p className="text-base text-muted-foreground">Miami, Florida, USA</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-1">Transit Point</p>
                            <p className="text-base text-muted-foreground">London, UK</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-1">Expected Arrival</p>
                            <p className="text-base text-muted-foreground">23 Feb 2024, 18:00 EST</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </LoadingScreen>
  )
}

