"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
      
      {/* Subtle gradient orbs - softer colors */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/15 rounded-full blur-[120px] z-0" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px] z-0" />
      
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center relative z-[3] pt-32 md:pt-40">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          {/* Left content - Copy */}
          <div className="flex-1 space-y-6 max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
              <span className="mr-1 h-2 w-2 rounded-full bg-blue-400"></span>
              <span>Web Design & Development </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="inline bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Design. Build.</span>
              <br />
              <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">Scale.</span>
            </h1>

            <p className="text-lg text-white/80 max-w-xl">
              We specialise in crafting beautiful, high-performance websites that help startups make their mark in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/project-inquiry">
                <Button 
                  size="lg" 
                  variant="gradient"
                  className="w-full sm:w-auto rounded-xl px-6 py-6 font-medium text-base"
                >
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outlineWhite" 
                  className="w-full rounded-xl px-6 py-6 font-medium text-base backdrop-blur-sm"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right content - Visual element */}
          <div className="flex-1 relative hidden md:block">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/office-meeting1.jpg"
                alt="Modern startup workspace"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="object-cover object-center"
                style={{ borderRadius: '16px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 to-transparent rounded-2xl" />
              
              {/* Floating UI elements for visual interest */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl">
                <div className="h-1 w-12 bg-blue-400 rounded-full mb-2"></div>
                <div className="h-1 w-20 bg-white/40 rounded-full mb-2"></div>
                <div className="h-1 w-16 bg-white/40 rounded-full"></div>
              </div>
              
              <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-blue-400"></div>
                  <div className="text-white font-medium">Excellence in design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted By Section - Moved Up */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-white/10">
          <p className="text-sm md:text-base text-white/70 mb-6 tracking-wider font-medium text-center">Trusted by innovative startups</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="relative w-24 sm:w-36 h-10 sm:h-12 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/Slush-Logo (BW) (1).png" alt="Slush Dating" fill className="object-contain" />
            </div>
            <div className="relative w-28 sm:w-40 h-10 sm:h-12 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/Sandalwood-Memorials-BW.png" alt="Sandalwood Memorials" fill className="object-contain" />
            </div>
            <div className="relative w-24 sm:w-36 h-10 sm:h-12 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/Envirotech-Logo (BW).png" alt="Envirotech Plumbing" fill className="object-contain" />
            </div>
          </div>
          <div className="pb-16 md:pb-24 lg:pb-32"></div>
        </div>
      </div>
    </section>
  )
} 