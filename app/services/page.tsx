"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Paintbrush2, LineChart, Check, ArrowUpRight, Users, Rocket, Star, Shield, Palette, Code, Target, TrendingUp, Zap, Award } from "lucide-react"
import Script from 'next/script'
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function ServicesPage() {
  const router = useRouter()

  const handleGetConsultation = () => {
    router.push('/project-inquiry')
  }

  const handleViewWork = () => {
    router.push('/work')
  }

  const handleGetStarted = () => {
    router.push('/project-inquiry')
  }

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            provider: {
              '@type': 'Organization',
              name: 'Devora',
              url: 'https://www.devora.co.uk'
            },
            serviceType: 'Web Development',
            areaServed: {
              '@type': 'Country',
              name: 'United Kingdom'
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Web Development Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'React Development',
                    description: 'Modern web applications built with React and Next.js'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'UI/UX Design',
                    description: 'User-centered design and interface development'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Full-Stack Development',
                    description: 'End-to-end web application development'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'SEO Optimization',
                    description: 'Search engine optimization and performance tuning'
                  }
                }
              ]
            }
          })
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black via-slate-900 to-black text-white pt-20 md:pt-24 pb-12 md:pb-24 relative overflow-hidden">
          {/* Enhanced Creative background elements */}
          <div className="absolute inset-0">
            {/* Animated grid with multiple layers */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-pulse"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:80px_80px] md:bg-[size:120px_120px] animate-pulse delay-500"></div>
            
            {/* Floating code-themed elements */}
            <div className="hidden md:block absolute top-20 left-10 w-6 h-6 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
            <div className="hidden md:block absolute top-40 right-20 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce"></div>
            <div className="hidden md:block absolute bottom-40 left-20 w-8 h-8 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
            
            {/* Additional floating elements */}
            <div className="hidden md:block absolute top-32 right-1/3 w-3 h-3 bg-green-400/40 rotate-45 animate-ping"></div>
            <div className="hidden md:block absolute bottom-32 right-16 w-5 h-5 border border-purple-400/30 rounded-full animate-spin-slow"></div>
            <div className="hidden md:block absolute top-1/2 left-16 w-2 h-2 bg-yellow-400/50 rounded-full animate-bounce delay-300"></div>
            
            {/* Code brackets floating animation */}
            <div className="hidden lg:block absolute top-24 left-1/3 text-blue-400/20 text-4xl font-mono animate-pulse delay-700">{'{'}</div>
            <div className="hidden lg:block absolute bottom-24 right-1/3 text-cyan-400/20 text-4xl font-mono animate-pulse delay-1000">{'}'}</div>
            <div className="hidden lg:block absolute top-1/3 right-20 text-green-400/20 text-2xl font-mono animate-bounce delay-500">{'<>'}</div>
            <div className="hidden lg:block absolute bottom-1/3 left-24 text-purple-400/20 text-2xl font-mono animate-pulse delay-200">{'</>'}</div>
            
            {/* Enhanced gradient orbs with more variety */}
            <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-l from-blue-600/10 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-green-500/8 to-emerald-500/4 rounded-full blur-2xl animate-pulse delay-1500"></div>
            <div className="absolute bottom-1/4 right-0 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-tl from-purple-500/8 to-pink-500/4 rounded-full blur-3xl animate-pulse delay-2000"></div>
            
            {/* Floating tech icons */}
            <div className="hidden lg:block absolute top-16 right-1/4 opacity-10 animate-float">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <div className="hidden lg:block absolute bottom-20 left-1/4 opacity-10 animate-float delay-1000">
              <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="hidden lg:block absolute top-1/3 left-1/2 opacity-10 animate-float delay-500">
              <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Enhanced badge - Added more top margin on mobile */}
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg mt-4 md:mt-0">
                <Rocket className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
                <span className="font-medium">Professional Web Solutions</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Turn Your Vision</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Into Reality</span>
              </h1>
              
              <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
                We specialise in crafting high-performance websites and applications that help startups scale. Get enterprise-grade development at prices that make sense for your business.
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
                {[
                  { label: "Projects Completed", value: "100+" },
                  { label: "Happy Clients", value: "50+" },
                  { label: "Years Experience", value: "5+" },
                  { label: "Team Members", value: "10+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-6 border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                    <div className="text-lg md:text-2xl lg:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                    <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 rounded-xl px-8 py-6 font-semibold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                  onClick={handleGetConsultation}
                >
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 rounded-xl px-8 py-6 font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={handleViewWork}
                >
                  View Our Work <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          {/* Creative background elements */}
          <div className="absolute inset-0">
            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-20 right-10 w-8 h-8 border border-blue-400/40 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 border-2 border-cyan-400/50 rounded-full animate-pulse"></div>
            
            {/* Gradient orbs */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
              {/* Enhanced badge - Smaller on mobile */}
              <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-blue-700 mb-6 md:mb-8 shadow-lg">
                <Star className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-600 animate-pulse" />
                <span className="font-medium">Our Offerings</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-900">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
              </h2>
              
              <p className="text-slate-700 text-base md:text-lg">
                From design to development and growth, we've got you covered
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* UI/UX Design Card */}
              <div className="group relative">
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200/50 hover:border-blue-400/60 group-hover:scale-105 h-full flex flex-col relative">
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl md:rounded-t-3xl"></div>
                  
                  <div className="mb-4 md:mb-6">
                    <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 shadow-lg border border-blue-400/30">
                      <Palette className="w-6 md:w-8 h-6 md:h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900 group-hover:text-blue-700 transition-colors">UI/UX Design</h3>
                  <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 group-hover:text-slate-700 transition-colors leading-relaxed">Transform visitors into customers with stunning, user-centric interfaces that deliver exceptional experiences across all devices.</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {[
                      'User Research & Strategy', 
                      'Wireframing & Prototyping', 
                      'Visual Design & Branding', 
                      'Mobile-First Design',
                      'Accessibility Compliance'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start text-slate-700 group-hover:text-slate-800 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 shadow-sm mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Development Card */}
              <div className="group relative">
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200/50 hover:border-blue-400/60 group-hover:scale-105 h-full flex flex-col relative">
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl"></div>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 shadow-lg border border-blue-400/30">
                      <Code className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-700 transition-colors">Modern Web Development</h3>
                  <p className="text-slate-600 mb-6 group-hover:text-slate-700 transition-colors leading-relaxed">Build scalable, lightning-fast web applications using cutting-edge technologies like React, Next.js, and Node.js.</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {[
                      'Custom Web Applications',
                      'API Development & Integration', 
                      'Performance Optimisation',
                      'Database Design',
                      'Cloud Deployment'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-slate-700 group-hover:text-slate-800 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 shadow-sm mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Marketing Card */}
              <div className="group relative">
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200/50 hover:border-blue-400/60 group-hover:scale-105 h-full flex flex-col relative">
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl"></div>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 shadow-lg border border-blue-400/30">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-700 transition-colors">Growth Marketing</h3>
                  <p className="text-slate-600 mb-6 group-hover:text-slate-700 transition-colors leading-relaxed">Accelerate your startup's growth with data-driven digital marketing strategies that deliver measurable results.</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {[
                      'Technical SEO Optimisation',
                      'Conversion Rate Optimisation', 
                      'Analytics & Performance Tracking',
                      'Content Strategy',
                      'Social Media Integration'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-slate-700 group-hover:text-slate-800 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 shadow-sm mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden text-white">
          {/* Creative background elements */}
          <div className="absolute inset-0">
            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white/20 rounded-full animate-spin-slow"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-white/10 rotate-45 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 border border-white/30 rotate-12 animate-pulse"></div>
            
            {/* Gradient orbs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-white/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/20 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:scale-105">
                <div className="max-w-3xl mx-auto text-center">
                  {/* Enhanced badge - Smaller on mobile */}
                  <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg">
                    <Award className="w-3 md:w-4 h-3 md:h-4 mr-2 text-cyan-300 animate-pulse" />
                    <span className="font-medium">Free Consultation</span>
                    <div className="ml-2 md:ml-3 flex space-x-1">
                      <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-100"></div>
                      <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    Enquire Today For A{" "}
                    <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Free Consultation</span>
                  </h2>
                  
                  <p className="text-blue-100 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                    Get a free consultation and custom quote for your project. Our team is ready to help transform your vision into reality.
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 rounded-xl px-8 py-4 font-semibold text-lg shadow-2xl shadow-black/20 transition-all duration-300"
                    onClick={handleGetStarted}
                  >
                    Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 