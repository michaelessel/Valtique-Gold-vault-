"use client"

import { LoadingScreen } from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowRight, BarChart3, Clock, DollarSign, LogOut, Play, Diamond, LogIn, Loader2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { TransitionLoader } from "@/components/transition-loader"

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [loginTime, setLoginTime] = useState(new Date())
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)
  const [showRedirectDialog, setShowRedirectDialog] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [showVideoDialog, setShowVideoDialog] = useState(false)
  const [showDiamondDialog, setShowDiamondDialog] = useState(false)
  const [isLoadingDiamond, setIsLoadingDiamond] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [currentUser, setCurrentUser] = useState<string>("michael")
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const redirectTimerRef = useRef<NodeJS.Timeout | null>(null)
  const logoutTimerRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("vaultUser") || "michael"
      setCurrentUser(storedUser)

      // Set login time when component mounts
      const storedLoginTime = localStorage.getItem("loginTime")
      if (storedLoginTime) {
        setLoginTime(new Date(storedLoginTime))
      } else {
        const now = new Date()
        setLoginTime(now)
        localStorage.setItem("loginTime", now.toString())
      }
    }

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    timerRef.current = timer

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    })
  }

  const handleLogout = () => {
    setShowLogoutDialog(true)
  }

  const confirmLogout = () => {
    setShowLogoutDialog(false)
    setIsLoggingOut(true)

    // Add a 2-second delay before logging out
    logoutTimerRef.current = setTimeout(() => {
      localStorage.removeItem("vaultUser")
      localStorage.removeItem("loginTime")
      router.push("/")
    }, 2000)
  }

  const handleAddAsset = () => {
    setShowRedirectDialog(true)
    setIsRedirecting(true)

    redirectTimerRef.current = setTimeout(() => {
      router.push("/contact")
    }, 1500)
  }

  // Clean up any pending timers when component unmounts
  useEffect(() => {
    return () => {
      if (redirectTimerRef.current) {
        clearTimeout(redirectTimerRef.current)
      }
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current)
      }
    }
  }, [])

  const handlePlayVideo = () => {
    setShowVideoDialog(true)
  }

  const handleViewDiamond = () => {
    setIsLoadingDiamond(true)
    setTimeout(() => {
      setIsLoadingDiamond(false)
      setShowDiamondDialog(true)
    }, 2000)
  }

  if (isLoggingOut) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="text-xl font-medium">Logging out...</p>
          <p className="text-muted-foreground">Thank you for using GoldVault</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoadingDiamond && (
        <TransitionLoader
          isLoading={true}
          message="Loading diamond certification data..."
          duration={2000}
          onComplete={() => {}}
        />
      )}

      <LoadingScreen loadingTime={1000}>
        <main className="min-h-screen pt-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Vault Dashboard</h1>
                  <p className="text-muted-foreground">
                    Welcome {currentUser === "thomas" ? "Thomas" : "Michael"}. Here's your vault overview.
                  </p>
                </div>
                <Button onClick={handleAddAsset}>
                  Add New Asset
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {currentUser === "thomas" ? (
                // Thomas's dashboard view with detailed breakdown
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Gold Assets</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$3,007,984</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Diamond Assets</CardTitle>
                      <Diamond className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$2,360,000</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$5,367,984</div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                // Michael's dashboard view
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Gold Assets</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$3,007,984</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Assets Added</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl font-bold">10 Gold Bars</div>
                      <p className="text-xs text-muted-foreground">+ VVS Diamond</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Last Access</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">{formatTime(currentTime)}</div>
                    </CardContent>
                  </Card>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Assets</CardTitle>
                    <CardDescription>Your recently added precious items</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="relative w-[60px] h-[60px] rounded-lg overflow-hidden cursor-pointer"
                          onClick={handlePlayVideo}
                        >
                          <div className="w-[60px] h-[60px] bg-muted rounded-lg flex items-center justify-center">
                            <Play className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">Gold Bar #1</h3>
                          <p className="text-sm text-muted-foreground">Added 2 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div
                          className="relative w-[60px] h-[60px] rounded-lg overflow-hidden cursor-pointer"
                          onClick={handleViewDiamond}
                        >
                          <Image
                            src="/assets/diamond.jpeg"
                            alt="Premium Diamond"
                            width={60}
                            height={60}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Premium VVS Diamond</h3>
                          <p className="text-sm text-muted-foreground">Added 15 AUG 2009</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Vault Activity</CardTitle>
                    <CardDescription>Recent access and security events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* New Login Activity Row */}
                      <div className="flex items-center gap-4 p-2 bg-primary/5 rounded-md border border-primary/20 animate-pulse">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <LogIn className="h-4 w-4 text-primary" />
                            <h3 className="font-medium">Account Login</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">{formatTime(loginTime)}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <div>
                          <h3 className="font-medium">Vault Accessed</h3>
                          <p className="text-sm text-muted-foreground">{formatTime(currentTime)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <div>
                          <h3 className="font-medium">Vault Accessed</h3>
                          <p className="text-sm text-muted-foreground">17 May 2018</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <div>
                          <h3 className="font-medium">Vault Accessed</h3>
                          <p className="text-sm text-muted-foreground">20 April 2009</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Log Out
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Logout Confirmation Dialog */}
          <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Logout</DialogTitle>
                <DialogDescription asChild>
                  <div className="space-y-4">
                    <p>Are you sure you want to log out?</p>
                    <div className="font-medium text-primary">
                      Thank you for trusting GoldVault with your precious assets. We appreciate your business and look
                      forward to serving you again.
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowLogoutDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={confirmLogout}>Confirm Logout</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Redirect Dialog */}
          <Dialog open={showRedirectDialog} onOpenChange={setShowRedirectDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Leaving Dashboard</DialogTitle>
                <DialogDescription>
                  You're being redirected to our contact page to arrange adding new assets to your vault...
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Video Dialog */}
          <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Gold Bar #1 - Premium 24K Gold</DialogTitle>
                <DialogDescription>
                  Certification and authentication video for your premium gold asset
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-video relative bg-black rounded-md overflow-hidden flex items-center justify-center">
                <div className="text-center p-4">
                  <Play className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-white/70">Video preview not available</p>
                  <p className="text-white/50 text-sm mt-2">Contact your account manager to view the full video</p>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => setShowVideoDialog(false)}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Diamond Dialog */}
          <Dialog open={showDiamondDialog} onOpenChange={setShowDiamondDialog}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Premium VVS Diamond - 7.30 Carats</DialogTitle>
                <CardDescription>Certification and valuation details</CardDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-square relative rounded-md overflow-hidden border">
                  <Image
                    src="/assets/diamond.jpeg"
                    alt="Premium Diamond - 7.30 Carats"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Weight</p>
                      <p className="text-lg">7.30 Carats</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Value</p>
                      <p className="text-lg font-bold text-primary">$2,360,000</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Clarity</p>
                      <p className="text-lg">VVS1</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Color</p>
                      <p className="text-lg">D (Colorless)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Added</p>
                      <p className="text-lg">15 AUG 2009</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Status</p>
                      <p className="text-lg text-green-600">Secured</p>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <p className="text-sm font-medium mb-2">Certificate</p>
                    <p className="text-sm text-muted-foreground">
                      This premium VVS diamond has been certified by the Gemological Institute of America (GIA) and is
                      stored in our high-security vault facility. The diamond is insured for its full value.
                    </p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => setShowDiamondDialog(false)}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </LoadingScreen>
    </>
  )
}

