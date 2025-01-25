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
          src="/office-meeting1.jpg"
          alt="Modern startup workspace"
          fill
          priority
          className="object-cover object-center opacity-90"
          quality={100}
        />
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/70 z-[1]" />
      
      {/* Checkerboard pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/checkerboard.svg')] bg-[length:24px_24px] opacity-[0.03] z-[2]" 
      />

      <div className="container mx-auto px-4 pt-32 md:pt-40 relative z-[30]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] pt-4 pb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Design. Build. Scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
            >
              We are a digital agency that specialises in building and scaling cutting-edge websites for startups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center items-center mb-16"
            >
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-200 text-black 
                text-lg px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105 flex items-center"
                onClick={() => window.location.href = '/project-inquiry'}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/20
                text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:border-white/30 flex items-center"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-white/80 flex justify-center items-center backdrop-blur-sm hover:border-white transition-colors">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="flex items-center justify-center"
                >
                  <ArrowRight className="w-8 h-8 text-white rotate-90" />
                </motion.div>
              </div>
            </motion.div>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 