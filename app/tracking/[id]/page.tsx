"use client"

import type React from "react"

import { LoadingScreen } from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plane, Package, Building, Search } from "lucide-react"
import { useState } from "react"

interface LoadingMessageProps {
  message: string
}

const LoadingMessage = ({ message }: LoadingMessageProps) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-4">
      <Plane className="h-12 w-12 animate-pulse text-primary mx-auto" />
      <p className="text-lg font-medium">{message}</p>
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
    return <LoadingMessage message="Please wait while we configure your package information..." />
  }

  return (
    <LoadingScreen loadingTime={800}>
      <main className="min-h-screen pt-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Track Your Asset</CardTitle>
                <CardDescription>Enter your tracking number to view your asset's current location</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrackingSubmit} className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="tracking" className="sr-only">
                      Tracking Number
                    </Label>
                    <Input
                      id="tracking"
                      placeholder="Enter your tracking number"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                    />
                  </div>
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Track
                  </Button>
                </form>
              </CardContent>
            </Card>

            {isValidTracking && (
              <Card>
                <CardHeader>
                  <CardTitle>Tracking Details</CardTitle>
                  <CardDescription>Tracking Reference: {trackingNumber}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Timeline */}
                    <div className="relative">
                      <div className="absolute left-8 top-0 h-full w-px bg-muted-foreground/20" />

                      {/* Current Status */}
                      <div className="relative mb-8 flex items-center">
                        <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                          <Plane className="h-8 w-8 text-primary animate-pulse" />
                        </div>
                        <div className="ml-24 space-y-1">
                          <p className="text-sm font-medium">In Transit to Miami</p>
                          <p className="text-sm text-muted-foreground">Package is en route to final destination</p>
                          <p className="text-xs text-muted-foreground">Location: US Airspace</p>
                          <p className="text-xs text-muted-foreground">{new Date().toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Timeline Events */}
                      <div className="relative mb-8 flex items-center">
                        <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                          <Building className="h-8 w-8 text-primary" />
                        </div>
                        <div className="ml-24 space-y-1">
                          <p className="text-sm font-medium">US Customs Clearance</p>
                          <p className="text-sm text-muted-foreground">
                            Package cleared customs at JFK International Airport
                          </p>
                          <p className="text-xs text-muted-foreground">Location: New York, USA</p>
                          <p className="text-xs text-muted-foreground">23 Feb 2024, 14:30 EST</p>
                        </div>
                      </div>

                      <div className="relative mb-8 flex items-center">
                        <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                          <Plane className="h-8 w-8 text-primary" />
                        </div>
                        <div className="ml-24 space-y-1">
                          <p className="text-sm font-medium">Departed Origin</p>
                          <p className="text-sm text-muted-foreground">
                            Package departed from Kotoka International Airport
                          </p>
                          <p className="text-xs text-muted-foreground">Location: Accra, Ghana</p>
                          <p className="text-xs text-muted-foreground">23 Feb 2024, 06:00 GMT</p>
                        </div>
                      </div>

                      <div className="relative flex items-center">
                        <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                          <Package className="h-8 w-8 text-primary" />
                        </div>
                        <div className="ml-24 space-y-1">
                          <p className="text-sm font-medium">Package Received</p>
                          <p className="text-sm text-muted-foreground">Package received at secure facility</p>
                          <p className="text-xs text-muted-foreground">Location: Accra, Ghana</p>
                          <p className="text-xs text-muted-foreground">23 Feb 2024, 04:00 GMT</p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="grid gap-4 rounded-lg border p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Origin</p>
                          <p className="text-sm text-muted-foreground">Accra, Ghana</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Destination</p>
                          <p className="text-sm text-muted-foreground">Miami, Florida, USA</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Security Level</p>
                          <p className="text-sm text-muted-foreground">Maximum</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Expected Delivery</p>
                          <p className="text-sm text-muted-foreground">23 Feb 2024, 18:00 EST</p>
                        </div>
                      </div>
                    </div>
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

