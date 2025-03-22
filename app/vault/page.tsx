"use client"

import { LoadingScreen } from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Shield, Unlock } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function VaultPage() {
  const router = useRouter()

  const handleAccessVault = () => {
    router.push("/vault/access/login")
  }

  return (
    <LoadingScreen>
      <main className="min-h-screen pt-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Secure Vault</h1>
              <p className="text-muted-foreground">Access and manage your stored assets</p>
            </div>

            {/* Main Vault Card */}
            <Card className="overflow-hidden border-2">
              <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1628-cSsZS36CfknvZ06FBnhpywtmihE4om.jpeg"
                  alt="High-security vault door"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6 md:p-8">
                  <div className="space-y-4 text-white">
                    <div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Premium Security Vault</h2>
                      <p className="text-lg md:text-xl text-white/80">
                        State-of-the-art protection for your valuable assets
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button
                        size="lg"
                        onClick={handleAccessVault}
                        className="bg-primary/90 hover:bg-primary text-primary-foreground"
                      >
                        <Unlock className="mr-2 h-5 w-5" />
                        Access Vault
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
                        onClick={() => router.push("/contact")}
                      >
                        Request Information
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Features Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Maximum Security</CardTitle>
                  <CardDescription>
                    Multi-layered security systems with 24/7 monitoring and advanced biometric controls.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Private Access</CardTitle>
                  <CardDescription>
                    Discrete, appointment-only access with private viewing rooms and personal assistance.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Insurance Coverage</CardTitle>
                  <CardDescription>
                    Comprehensive insurance coverage with international protection guarantees.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </LoadingScreen>
  )
}

