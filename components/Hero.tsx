"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-[75vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
      
      {/* Subtle gradient orbs - softer colors */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/15 rounded-full blur-[120px] z-0" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px] z-0" />
      
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center relative z-[3] pt-20 md:pt-24">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          {/* Left content - Copy */}
          <div className="flex-1 space-y-4 max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
              <span className="mr-1 h-2 w-2 rounded-full bg-blue-400"></span>
              <span>Web Design & Development </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Websites Built Right
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 max-w-xl">
              Professional web development that delivers results
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                              <Link href="/contact">
                <Button 
                  size="default" 
                  variant="gradient"
                  className="w-full sm:w-auto rounded-xl px-6 py-3 font-medium"
                >
                  Enquire <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="default" 
                  variant="outlineWhite" 
                  className="w-full rounded-xl px-6 py-3 font-medium backdrop-blur-sm"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right content - Visual element */}
          <div className="flex-1 relative hidden md:block">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
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
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl">
                <div className="h-1 w-10 bg-blue-400 rounded-full mb-2"></div>
                <div className="h-1 w-16 bg-white/40 rounded-full mb-2"></div>
                <div className="h-1 w-12 bg-white/40 rounded-full"></div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-blue-400"></div>
                  <div className="text-white font-medium text-sm">Excellence in design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted By Section - Moved Up */}
        <div className="mt-8 md:mt-12 pt-4 border-t border-white/10">
          <p className="text-sm text-white/70 mb-4 tracking-wider font-medium text-center">Trusted by innovative startups</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <div className="relative w-20 sm:w-32 h-8 sm:h-10 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/Slush-Logo (BW) (1).png" alt="Slush Dating" fill className="object-contain" />
            </div>
            <div className="relative w-24 sm:w-36 h-8 sm:h-10 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/Sandalwood-Memorials-BW.png" alt="Sandalwood Memorials" fill className="object-contain" />
            </div>
            <div className="relative w-20 sm:w-32 h-8 sm:h-10 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/Envirotech-Logo (BW).png" alt="Envirotech Plumbing" fill className="object-contain" />
            </div>
          </div>
          <div className="pb-8 md:pb-16"></div>
        </div>
      </div>
    </section>
  )
} 