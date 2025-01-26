"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Paintbrush2, LineChart, Check, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Script from 'next/script'

export default function ServicesPage() {
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
              url: 'https://devora.dev'
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
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative">
        {/* Dark overlay for nav - Adjusted z-index */}
        <div className="fixed inset-x-0 top-0 h-32 sm:h-40 md:h-48 bg-gradient-to-b from-gray-900/60 via-gray-900/1 to-transparent z-[1]" />
        
        {/* Background elements - Adjusted z-indices and moved to fixed positioning */}
        <div className="fixed inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/30 pointer-events-none" />
        <div 
          className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
          opacity-5 pointer-events-none" 
        />

        {/* Content wrapper - Added to ensure content stays above background */}
        <div className="relative z-[2]">
          {/* Hero Section */}
          <section className="relative mb-12 sm:mb-16 md:mb-20 pt-12 sm:pt-16 md:pt-20">
            <div className="container mx-auto px-4 sm:px-6 relative z-[30]">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.2] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 py-1">
                  Turn Your Vision Into Reality
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                  We specialize in crafting high-performance websites and applications that help startups scale. Get enterprise-grade development at prices that make sense for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg transition-all duration-300 hover:scale-105 border-0"
                  >
                    Get Free Consultation <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-white/90 hover:bg-white text-black border border-gray-200 hover:border-gray-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 
                    transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    View Success Stories <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 sm:py-16 md:py-20 relative">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {/* Design Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-300/5 rounded-2xl sm:rounded-3xl blur-xl group-hover:from-blue-500/10 group-hover:to-blue-300/10 transition-all duration-300" />
                  <div className="relative bg-white/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 backdrop-blur-sm">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <Paintbrush2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">UI/UX Design</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Transform visitors into customers with stunning, user-centric interfaces that deliver exceptional experiences across all devices.</p>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span>Custom Interface Design & Branding</span>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span>Mobile-First Responsive Design</span>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span>User Testing & Optimisation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Development Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-300/5 rounded-2xl sm:rounded-3xl blur-xl group-hover:from-blue-500/10 group-hover:to-blue-300/10 transition-all duration-300" />
                  <div className="relative bg-white/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 backdrop-blur-sm">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Modern Web Development</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Build scalable, lightning-fast web applications using cutting-edge technologies like React, Next.js, and Node.js.</p>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span>Custom Web Applications</span>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span>API Development & Integration</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Marketing Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-300/5 rounded-2xl sm:rounded-3xl blur-xl group-hover:from-blue-500/10 group-hover:to-blue-300/10 transition-all duration-300" />
                  <div className="relative bg-white/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 backdrop-blur-sm">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Growth Marketing</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Accelerate your startup's growth with data-driven digital marketing strategies that deliver measurable results.</p>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span>Technical SEO Optimisation</span>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span>Conversion Rate Optimisation</span>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span>Analytics & Performance Tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-12 sm:py-16 md:py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/80 to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 sm:px-6 relative">
              <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Our Proven Development Process</h2>
                <p className="text-sm sm:text-base text-gray-600">We follow a battle-tested methodology that ensures your project is delivered on time, within budget, and exceeds expectations.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">1</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900">Strategic Planning</h3>
                  <p className="text-sm sm:text-base text-gray-600">Deep dive into your goals, market, and technical requirements.</p>
                </div>
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">2</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900">UX Architecture</h3>
                  <p className="text-sm sm:text-base text-gray-600">Design intuitive user flows and compelling interfaces.</p>
                </div>
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900">Agile Development</h3>
                  <p className="text-sm sm:text-base text-gray-600">Build with modern tech stack and continuous feedback.</p>
                </div>
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">4</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900">Growth Launch</h3>
                  <p className="text-sm sm:text-base text-gray-600">Deploy with optimisation for maximum market impact.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 relative">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="relative overflow-hidden bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200 shadow-lg">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" />
                <div className="relative max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Enquire Today For A Free Consultation</h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
                    Get a free consultation and custom quote for your project. Our expert team is ready to help transform your vision into reality.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg transition-all duration-300 hover:scale-105 border-0"
                  >
                    Schedule Free Strategy Call <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
} 