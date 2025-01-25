"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Rocket, Users, Star, Shield, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
        opacity-10 z-[1]" 
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse z-[1]" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse z-[1]" />

      <div className="container mx-auto px-4 relative z-[30] py-32">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
            Meet Devora
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
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
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Born from years of freelance experience, Devora brings together a team of passionate web developers who understand the unique challenges startups face in the digital landscape.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              After years of individually crafting successful digital solutions, we united under one vision: to make professional web development accessible to ambitious startups. Our combined experience and shared commitment to excellence enable us to deliver enterprise-quality websites at startup-friendly prices.
            </p>
            <Link href="/project-inquiry">
              <Button className="bg-white hover:bg-gray-100 text-black px-6 py-6 text-lg mt-4">
                Start Your Project <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
            <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
              <div className="grid gap-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Years of Experience</h3>
                    <p className="text-gray-400">Proven track record of success</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Trusted Expertise</h3>
                    <p className="text-gray-400">Professional & reliable service</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Innovation Focus</h3>
                    <p className="text-gray-400">Modern tech solutions</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-400">Clear communication and honest pricing throughout your project journey.</p>
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">Cutting-edge solutions that keep you ahead of the competition.</p>
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Partnership</h3>
              <p className="text-gray-400">We're not just service providers - we're your growth partners.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how our team can help bring your startup's vision to life with a website that drives growth.
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg">
              Schedule a Free Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 