"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function AnimatedBanner() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "/gold-bars.gif",
      alt: "Shining gold bars in secure vault",
    },
    {
      src: "/diamonds.gif",
      alt: "Sparkling diamonds on black surface",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
      {images.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            opacity: currentImage === index ? 1 : 0,
          }}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      ))}
    </div>
  )
}

