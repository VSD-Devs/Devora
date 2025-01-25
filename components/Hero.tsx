"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/office-meeting1.jpg"
          alt="Modern startup workspace"
          fill
          priority
          sizes="100vw"
          quality={85}
          loading="eager"
          className="object-cover object-center opacity-90"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4xOzc6Njs3OzFEQUFEVU9QVVtbW11ubm5ubm5ubm7/2wBDARUXFx4aHh4rISErXkI2Ql5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/70 z-[1]" />
      
      {/* Checkerboard pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/checkerboard.svg')] bg-[length:24px_24px] opacity-[0.03] z-[2]" 
      />

      <div className="container mx-auto px-4 pt-40 md:pt-48 relative z-[30]">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.2] md:leading-[1.3] py-1 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Design. Build. Scale.
            </h1>

            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
              We are a digital agency that specialises in building and scaling cutting-edge websites for startups.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 shadow-lg flex items-center transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/project-inquiry'}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent text-white border-2 border-white/20 text-lg px-8 py-6 flex items-center"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-white/80 flex justify-center items-center backdrop-blur-sm">
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-white rotate-90" />
                </div>
              </div>
            </div>

            {/* Trusted By Section */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-8 tracking-wider">We have worked with many start-ups across the globe</p>
              <div className="flex justify-center items-center gap-24">
                <div className="relative w-64 h-24">
                  <Image src="/Slush-Logo (BW) (1).png" alt="Slush Dating" fill className="object-contain" />
                </div>
                <div className="relative w-72 h-24">
                  <Image src="/Sandalwood-Memorials-BW.png" alt="Sandalwood Memorials" fill className="object-contain" />
                </div>
                <div className="relative w-64 h-24">
                  <Image src="/Envirotech-Logo (BW).png" alt="Envirotech Plumbing" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 