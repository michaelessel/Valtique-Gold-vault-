"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, Phone, CheckCircle2 } from "lucide-react"
import { LoadingScreen } from "@/components/loading-screen"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    assetType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending email to valtique.goldvault@outlook.com
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      console.log("Form submitted to valtique.goldvault@outlook.com:", formData)
    }, 1500)
  }

  return (
    <LoadingScreen loadingTime={1000}>
      <main className="min-h-screen pt-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Add New Assets</h1>
              <p className="text-muted-foreground">
                To ensure the highest level of security for your precious assets, please contact our team to arrange a
                personal consultation for adding new items to your vault.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(233) 241935517</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Toll Free: 0306753342</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>valtique.goldvault@outlook.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span>032 community 27 Althergate Ave RD 2 00233</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                    <h3 className="text-xl font-bold">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting Valtique Gold Vault. Our team will review your message and get back to
                      you shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(233) 000000000"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="assetType">Asset Type</Label>
                      <Input
                        id="assetType"
                        placeholder="Gold, Diamonds, etc."
                        required
                        value={formData.assetType}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about the assets you'd like to store..."
                        className="min-h-[100px]"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </LoadingScreen>
  )
}

