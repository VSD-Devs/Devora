"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Rocket, Users, Star, Shield, Sparkles, CheckCircle2, Award, Heart, Target, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-slate-900 to-black text-white py-12 md:py-16 lg:py-24 relative overflow-hidden">
        {/* Creative background elements - Simplified for mobile */}
        <div className="absolute inset-0">
          {/* Animated grid - Smaller on mobile */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-pulse"></div>
          
          {/* Floating geometric shapes - Hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-10 w-6 h-6 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
          <div className="hidden md:block absolute top-40 right-20 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="hidden md:block absolute bottom-40 left-20 w-8 h-8 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
          
          {/* Gradient orbs - Smaller on mobile */}
          <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-l from-blue-600/10 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced badge - Smaller on mobile */}
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg">
              <Heart className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
              <span className="font-medium">Web Development Specialists</span>
              <div className="ml-2 md:ml-3 flex space-x-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Meet</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Devora</span>
            </h1>
            
            <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
              Empowering startups with affordable, high-impact web solutions that drive growth and success.
            </p>
            
            {/* Stats Cards - Mobile optimised */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12">
              {[
                { label: "Projects Completed", value: "100+" },
                { label: "Happy Clients", value: "50+" },
                { label: "Years Experience", value: "5+" },
                { label: "Team Members", value: "10+" }
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-blue-200 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Creative background elements - Simplified for mobile */}
        <div className="absolute inset-0">
          {/* Animated grid - Smaller on mobile */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:80px_80px] animate-pulse"></div>
          
          {/* Floating geometric shapes - Hidden on mobile */}
          <div className="hidden md:block absolute top-20 right-10 w-8 h-8 border border-blue-400/40 rotate-45 animate-spin-slow"></div>
          <div className="hidden md:block absolute bottom-20 left-10 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="hidden md:block absolute top-1/2 right-1/4 w-4 h-4 border-2 border-cyan-400/50 rounded-full animate-pulse"></div>
          
          {/* Gradient orbs - Smaller on mobile */}
          <div className="absolute top-0 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-gradient-to-l from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-48 md:w-80 h-48 md:h-80 bg-gradient-to-r from-blue-600/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              {/* Enhanced badge - Smaller on mobile */}
              <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-blue-700 shadow-lg">
                <Star className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-600 animate-pulse" />
                <span className="font-medium">Our Story</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Our Story &{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-slate-700">
                <p className="text-base md:text-lg leading-relaxed">
                  Born from years of freelance experience, Devora unites passionate developers who understand startup challenges in the digital landscape.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  We're committed to making professional web development accessible to ambitious startups, delivering enterprise-quality websites at startup-friendly prices.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
                <Link href="/project-inquiry">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 rounded-xl px-6 md:px-8 py-4 md:py-6 font-semibold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  >
                    Start Your Project <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-blue-400/40 bg-white/80 backdrop-blur-sm text-blue-700 hover:bg-blue-50 hover:border-blue-500/60 rounded-xl px-6 md:px-8 py-4 md:py-6 font-semibold text-base md:text-lg shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative group mt-8 md:mt-0">
              {/* Floating accent - Smaller on mobile */}
              <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 w-4 md:w-6 h-4 md:h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-blue-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 relative">
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl md:rounded-t-3xl"></div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl border border-blue-200/30">
                    <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center shadow-lg border border-blue-400/30">
                      <Shield className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">Enterprise Quality</h3>
                      <p className="text-xs md:text-sm text-slate-600">Professional grade development</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl border border-blue-200/30">
                    <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center shadow-lg border border-blue-400/30">
                      <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">Innovation First</h3>
                      <p className="text-xs md:text-sm text-slate-600">Modern tech solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl border border-blue-200/30">
                    <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center shadow-lg border border-blue-400/30">
                      <Users className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">Client-Focused</h3>
                      <p className="text-xs md:text-sm text-slate-600">Your success is our priority</p>
                    </div>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden text-white">
        {/* Creative background elements - Simplified for mobile */}
        <div className="absolute inset-0">
          {/* Animated grid - Smaller on mobile */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:120px_120px] animate-pulse"></div>
          
          {/* Floating geometric shapes - Hidden on mobile */}
          <div className="hidden md:block absolute top-16 right-16 w-10 h-10 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
          <div className="hidden md:block absolute bottom-16 left-16 w-8 h-8 bg-cyan-500/20 rounded-full animate-bounce"></div>
          <div className="hidden md:block absolute top-1/2 left-1/3 w-6 h-6 border-2 border-blue-500/40 rounded-full animate-pulse"></div>
          
          {/* Gradient orbs - Smaller on mobile */}
          <div className="absolute top-0 left-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-gradient-to-br from-blue-500/8 to-cyan-500/4 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-gradient-to-tl from-blue-600/8 to-indigo-500/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
            {/* Enhanced badge - Smaller on mobile */}
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg">
              <Target className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
              <span className="font-medium">What Drives Us</span>
              <div className="ml-2 md:ml-3 flex space-x-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Our Core{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
            </h2>
            
            <p className="text-blue-100 text-base md:text-lg px-4">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Star className="w-6 md:w-8 h-6 md:h-8 text-yellow-400" />,
                title: "Excellence",
                desc: "Committed to delivering outstanding results that exceed expectations."
              },
              {
                icon: <Users className="w-6 md:w-8 h-6 md:h-8 text-blue-400" />,
                title: "Collaboration",
                desc: "Working closely with clients to bring their vision to life."
              },
              {
                icon: <Zap className="w-6 md:w-8 h-6 md:h-8 text-cyan-400" />,
                title: "Innovation",
                desc: "Staying ahead with cutting-edge technologies and approaches."
              }
            ].map((value, i) => (
              <div key={i} className="group relative">
                {/* Floating accent - Smaller on mobile */}
                <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-3 md:w-4 h-3 md:h-4 bg-blue-400/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group-hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 relative">
                  <div className="mb-4 md:mb-6">
                    <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 shadow-lg border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white group-hover:text-blue-200 transition-colors">{value.title}</h3>
                  <p className="text-sm md:text-base text-blue-100 group-hover:text-slate-200 transition-colors leading-relaxed">{value.desc}</p>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden text-white">
        {/* Creative background elements - Simplified for mobile */}
        <div className="absolute inset-0">
          {/* Animated grid - Smaller on mobile */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-pulse"></div>
          
          {/* Floating geometric shapes - Hidden on mobile */}
          <div className="hidden md:block absolute top-10 left-10 w-8 h-8 border-2 border-white/20 rounded-full animate-spin-slow"></div>
          <div className="hidden md:block absolute top-20 right-20 w-6 h-6 bg-white/10 rotate-45 animate-bounce"></div>
          <div className="hidden md:block absolute bottom-20 left-1/4 w-10 h-10 border border-white/30 rotate-12 animate-pulse"></div>
          
          {/* Gradient orbs - Smaller on mobile */}
          <div className="absolute -top-40 -left-40 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-white/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-tl from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/20 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:scale-105">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12">
                <div className="flex-1">
                  {/* Enhanced badge - Smaller on mobile */}
                  <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-4 md:mb-6 shadow-lg">
                    <Award className="w-3 md:w-4 h-3 md:h-4 mr-2 text-cyan-300 animate-pulse" />
                    <span className="font-medium">Ready to Start?</span>
                    <div className="ml-2 md:ml-3 flex space-x-1">
                      <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-100"></div>
                      <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                    Ready to transform your{" "}
                    <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">digital presence?</span>
                  </h2>
                  <p className="text-blue-100 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                    Let's discuss how our team can help bring your startup's vision to life with a website that drives growth.
                  </p>
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    <li className="flex items-center text-blue-100 group">
                      <div className="mr-2 md:mr-3 flex-shrink-0 w-5 md:w-6 h-5 md:h-6 rounded-full bg-gradient-to-r from-cyan-400/30 to-white/30 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-400/50 group-hover:to-white/50 transition-all shadow-lg border border-white/20">
                        <CheckCircle2 className="w-3 md:w-4 h-3 md:h-4 text-white" />
                      </div>
                      <span className="text-sm md:text-base">Free initial consultation</span>
                    </li>
                    <li className="flex items-center text-blue-100 group">
                      <div className="mr-2 md:mr-3 flex-shrink-0 w-5 md:w-6 h-5 md:h-6 rounded-full bg-gradient-to-r from-cyan-400/30 to-white/30 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-400/50 group-hover:to-white/50 transition-all shadow-lg border border-white/20">
                        <CheckCircle2 className="w-3 md:w-4 h-3 md:h-4 text-white" />
                      </div>
                      <span className="text-sm md:text-base">Tailored solutions for your budget</span>
                    </li>
                    <li className="flex items-center text-blue-100 group">
                      <div className="mr-2 md:mr-3 flex-shrink-0 w-5 md:w-6 h-5 md:h-6 rounded-full bg-gradient-to-r from-cyan-400/30 to-white/30 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-400/50 group-hover:to-white/50 transition-all shadow-lg border border-white/20">
                        <CheckCircle2 className="w-3 md:w-4 h-3 md:h-4 text-white" />
                      </div>
                      <span className="text-sm md:text-base">Ongoing support and maintenance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex-shrink-0 flex flex-col gap-4 md:gap-6">
                  <Link href="/project-inquiry" className="w-full">
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 rounded-xl px-6 md:px-8 py-4 md:py-6 font-semibold text-base md:text-lg shadow-2xl shadow-black/20 transition-all duration-300"
                    >
                      Start Your Project <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 rounded-xl px-6 md:px-8 py-4 md:py-6 font-semibold text-base md:text-lg shadow-xl transition-all duration-300"
                    >
                      <span className="hidden sm:inline">Schedule a Free Consultation</span>
                      <span className="sm:hidden">Free Consultation</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 