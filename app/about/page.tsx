"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Rocket, Users, Star, Shield, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  return (
    <section className="min-h-[100dvh] flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.015] z-[2]" 
      />

      {/* Soft gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-50/50 to-transparent" />

      <div className="container mx-auto px-3 sm:px-4 relative z-[30] flex-1 flex flex-col pt-28 sm:pt-32 md:pt-36">
        {/* Hero Section with Image */}
        <div className="text-center mb-10 sm:mb-16 md:mb-24">
          <div className="inline-block mb-4 sm:mb-6 p-1.5 sm:p-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-100">
            <span className="px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium bg-black text-white rounded-full">
              Web Development Experts
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800">
            Meet Devora
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Empowering startups with affordable, high-impact web solutions that drive growth and success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-16 md:mb-24">
          {[
            { label: "Projects Completed", value: "12+" },
            { label: "Happy Clients", value: "12+" },
            { label: "Years Experience", value: "3+" },
            { label: "Team Members", value: "2" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-16 md:mb-24">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Our Story & Mission</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">
                Born from years of freelance experience, Devora unites passionate developers who understand startup challenges in the digital landscape.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                We're committed to making professional web development accessible to ambitious startups, delivering enterprise-quality websites at startup-friendly prices.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link href="/project-inquiry" className="flex-1">
                <Button className="w-full bg-black hover:bg-gray-900 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                  Start Your Project <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/contact" className="flex-1">
                <Button variant="outline" className="w-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <div className="grid gap-4 sm:gap-6">
                <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Enterprise Quality</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Professional grade development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Innovation First</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Modern tech solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Client-Focused</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Your success is our priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-10 sm:mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
                title: "Excellence",
                desc: "Committed to delivering outstanding results that exceed expectations."
              },
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
                title: "Collaboration",
                desc: "Working closely with clients to bring their vision to life."
              },
              {
                icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />,
                title: "Innovation",
                desc: "Staying ahead with cutting-edge technologies and approaches."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-gray-200 transition-all duration-300">
                <div className="bg-gray-50 w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">Ready to Transform Your Digital Presence?</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
            Let's discuss how our team can help bring your startup's vision to life with a website that drives growth.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 