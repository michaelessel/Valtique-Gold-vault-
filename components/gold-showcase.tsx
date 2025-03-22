"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function GoldShowcase() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1618-WoVpcBEXhoEcWf73aHSWiuFyH71TvQ.gif",
      alt: "American Gold Eagle coins collection",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1620-hguwfYcbTbhb1NgrQfqqn1gRlOVvYc.webp",
      alt: "Premium gold bars stacked",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1619-uCP9x2NB3q9OqatsCJw1t5oymgJBMw.jpeg",
      alt: "Certified gold bars with stamps",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1621-cRTBo0uw4A08AOSNIPuuk8guX0FfUc.jpeg",
      alt: "Raw and refined gold",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1623-qSX9NRomqqmMliv14HPyEY2NeZ5IHA.jpeg",
      alt: "Gold bar certification details",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1622-dzDpRxEcM8BhtCUoTVj3wwfiWuWHE8.jpeg",
      alt: "Premium gold bars collection",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black">
      <div className="aspect-[16/9] relative">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{
              opacity: currentImage === index ? 1 : 0,
              zIndex: currentImage === index ? 1 : 0,
            }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  )
}

