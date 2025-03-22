"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroShowcase() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1630-Jz8D24Id3qJdAEJ8YKNcQSXCjkifwy.webp",
      alt: "Secure gold vault storage facility",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1752-Vlr5XjHuLxo23sXWUV3Z8MDatwqZvK.jpeg",
      alt: "Premium cut diamonds with loupe",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1753-qLfTSoPF1QT3LjttJmxGh0dWJP860I.jpeg",
      alt: "Collection of brilliant cut diamonds",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1754-iqu4m1FVimFvNtC9juoxIsDXvL1Hqg.jpeg",
      alt: "Certified gold bars with stamps",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2300) // 2.3 seconds between transitions

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-full overflow-hidden">
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
            sizes="100vw"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
      ))}
    </div>
  )
}

