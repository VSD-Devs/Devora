"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Paintbrush2, LineChart, Check, ArrowUpRight, Users, Rocket, Star, Shield } from "lucide-react"
import Script from 'next/script'
import Link from "next/link"

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
      
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Subtle background texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
          
          {/* Subtle gradient orbs */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] z-0" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-0" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-[3]">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm mb-6">
                <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
                <span>Professional web solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Turn Your Vision</span>
                <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent"> Into Reality</span>
              </h1>
              
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                We specialise in crafting high-performance websites and applications that help startups scale. Get enterprise-grade development at prices that make sense for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/project-inquiry">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white border-0 rounded-xl px-6 py-6 font-medium text-base"
                  >
                    Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-xl px-6 py-6 font-medium text-base backdrop-blur-sm transition-colors"
                  >
                    View Success Stories <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
          <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] z-0" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-[3]">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm mb-4">
                <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
                <span>Our offerings</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Comprehensive <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Services</span>
              </h2>
              
              <p className="text-slate-600 text-lg">
                From design to development and growth, we've got you covered
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* UI/UX Design Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 overflow-hidden group-hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Subtle gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/30 to-teal-500/30"></div>
                  
                  <div className="mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-teal-600">
                      <Paintbrush2 className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">UI/UX Design</h3>
                  <p className="text-slate-600 text-sm mb-5">Transform visitors into customers with stunning, user-centric interfaces that deliver exceptional experiences across all devices.</p>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      '5-10 Pages Website', 
                      'Advanced Design Features', 
                      'CMS Integration', 
                      '3-5 Weeks Delivery',
                      'Advanced SEO Package'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <Check className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Development Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 overflow-hidden group-hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Subtle gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/30 to-teal-500/30"></div>
                  
                  <div className="mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-teal-600">
                      <Code2 className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">Modern Web Development</h3>
                  <p className="text-slate-600 text-sm mb-5">Build scalable, lightning-fast web applications using cutting-edge technologies like React, Next.js, and Node.js.</p>
                  
                  <ul className="space-y-3 mt-auto">
                    {['Custom Web Applications', 'API Development & Integration', 'Performance Optimisation'].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-700">
                        <Check className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Marketing Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 overflow-hidden group-hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Subtle gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/30 to-teal-500/30"></div>
                  
                  <div className="mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-teal-600">
                      <LineChart className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">Growth Marketing</h3>
                  <p className="text-slate-600 text-sm mb-5">Accelerate your startup's growth with data-driven digital marketing strategies that deliver measurable results.</p>
                  
                  <ul className="space-y-3 mt-auto">
                    {['Technical SEO Optimisation', 'Conversion Rate Optimisation', 'Analytics & Performance Tracking'].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-700">
                        <Check className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-teal-400 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.05] z-[1]" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-[100px] z-0" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-[3]">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Enquire Today For A Free Consultation
                  </h2>
                  
                  <p className="text-white/80 text-lg mb-8">
                    Get a free consultation and custom quote for your project. Our expert team is ready to help transform your vision into reality.
                  </p>
                  
                  <Link href="/project-inquiry">
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-white/90 rounded-xl px-6 py-6 font-medium text-base shadow-lg hover:shadow-xl transition-all"
                    >
                      Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 