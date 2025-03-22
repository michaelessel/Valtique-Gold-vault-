"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu, Shield, Package, Info, Users, Phone, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface LoadingScreenProps {
  message: string
}

const LoadingScreen = ({ message }: LoadingScreenProps) => (
  <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="text-center space-y-4">
      <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  </div>
)

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState("")

  const handleNavigation = (path: string, message: string) => {
    setLoadingMessage(message)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push(path)
    }, 1200)
  }

  return (
    <>
      {isLoading && <LoadingScreen message={loadingMessage} />}
      <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg md:text-2xl text-primary">
            Valtique Gold Vault
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              href="/about"
              className={cn(
                "text-[13px] lg:text-sm font-medium transition-colors hover:text-primary",
                pathname === "/about" ? "text-primary" : "text-muted-foreground",
              )}
            >
              About Us
            </Link>
            <Link
              href="/tracking"
              className={cn(
                "text-[13px] lg:text-sm font-medium transition-colors hover:text-primary",
                pathname === "/tracking" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Tracking
            </Link>
            <Link
              href="/vault"
              className={cn(
                "text-[13px] lg:text-sm font-medium transition-colors hover:text-primary",
                pathname === "/vault" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Vault
            </Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 md:w-64" sideOffset={8}>
              <DropdownMenuItem
                onSelect={() => handleNavigation("/about", "Loading About Us...")}
                className="gap-2 py-3"
              >
                <Info className="h-4 w-4" />
                <span className="text-sm">About Us</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => handleNavigation("/tracking", "Loading Asset Tracking...")}
                className="gap-2 py-3"
              >
                <Package className="h-4 w-4" />
                <span className="text-sm">Track Assets</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => handleNavigation("/vault", "Loading Vault Access...")}
                className="gap-2 py-3"
              >
                <Shield className="h-4 w-4" />
                <span className="text-sm">Vault Access</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => handleNavigation("/team", "Loading Our Team...")}
                className="gap-2 py-3"
              >
                <Users className="h-4 w-4" />
                <span className="text-sm">Our Team</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => handleNavigation("/contact", "Loading Contact Page...")}
                className="gap-2 py-3"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">Contact Us</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
    </>
  )
}

