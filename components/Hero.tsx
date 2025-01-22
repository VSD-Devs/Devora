"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Modern startup workspace"
          fill
          priority
          className="object-cover object-center opacity-60"
          quality={100}
        />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/40 z-0" />
      
      {/* Grid pattern overlay with enhanced mask */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
        opacity-40 z-10" 
      />

      {/* Animated glow orb */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl z-5 animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl z-5 animate-pulse" />

      <div className="container mx-auto px-4 pt-32 md:pt-40 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mb-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b 
              from-white via-white to-gray-200 leading-[1.4] tracking-tight py-2 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            >
              Design. Build. Scale.
            </motion.h1>
            <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-black/80 to-black/60 blur-3xl -z-10" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Startup-focused web development at prices you'll love
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-200 text-black 
              text-lg px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/20
              text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:border-white/30"
            >
              Portfolio
            </Button>
          </motion.div>

          {/* Tech stack logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-20 flex justify-center items-center gap-8 flex-wrap"
          >
            <div className="text-gray-400 text-sm font-light tracking-wide">
              Fast delivery • Startup-friendly pricing • Expert team
            </div>
          </motion.div>

          {/* Trusted By Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-12 border-t border-white/20"
          >
            <p className="text-sm text-gray-300 mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
            <div className="relative">
              {/* Gradient overlays for infinite scroll effect */}
              
              {/* Logo grid with hover effects */}
              <div className="flex justify-center items-center gap-24">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-64 h-24 transition-all duration-300"
                >
                  <Image
                    src="/Slush-Logo (BW) (1).png"
                    alt="Slush Dating"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-72 h-24 transition-all duration-300"
                >
                  <Image
                    src="/Sandalwood-Memorials-BW.png"
                    alt="Sandalwood Memorials"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-64 h-24 transition-all duration-300"
                >
                  <Image
                    src="/Envirotech-Logo (BW).png"
                    alt="Envirotech Plumbing"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[40px] h-[65px] rounded-full border-2 border-white/30 flex justify-center p-2 backdrop-blur-sm">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-2 h-2 rounded-full bg-gradient-to-b from-white to-white/50"
          />
        </div>
      </motion.div>
    </section>
  )
} 