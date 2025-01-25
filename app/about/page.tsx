"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Rocket, Users, Star, Shield, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-80 text-gray-800 relative overflow-hidden">
      {/* Dark overlay for nav */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-900/60 via-gray-900/1 to-transparent z-[10]" />\
    
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/30 z-[1]" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
        opacity-5 z-[2]" 
      />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse z-[1]" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse z-[1]" />

      <div className="container mx-auto px-4 relative z-[30] py-32">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Meet Devora
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            A collective of experienced developers dedicated to empowering startups with affordable, high-impact web solutions.
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Born from years of freelance experience, Devora brings together a team of passionate web developers who understand the unique challenges startups face in the digital landscape.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              After years of individually crafting successful digital solutions, we united under one vision: to make professional web development accessible to ambitious startups. Our combined experience and shared commitment to excellence enable us to deliver enterprise-quality websites at startup-friendly prices.
            </p>
            <Link href="/project-inquiry">
              <Button className="bg-black hover:bg-gray-900 text-white px-6 py-6 text-lg mt-4 transition-all duration-300 hover:scale-105">
                Start Your Project <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-300/5 rounded-2xl blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="grid gap-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Years of Experience</h3>
                    <p className="text-gray-600">Proven track record of success</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Trusted Expertise</h3>
                    <p className="text-gray-600">Professional & reliable service</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-pink-500/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation Focus</h3>
                    <p className="text-gray-600">Modern tech solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 shadow-lg hover:border-gray-300 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Transparency</h3>
              <p className="text-gray-600">Clear communication and honest pricing throughout your project journey.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 shadow-lg hover:border-gray-300 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600">Cutting-edge solutions that keep you ahead of the competition.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 shadow-lg hover:border-gray-300 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Partnership</h3>
              <p className="text-gray-600">We're not just service providers - we're your growth partners.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how our team can help bring your startup's vision to life with a website that drives growth.
          </p>
          <Link href="/contact">
            <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
              Schedule a Free Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 