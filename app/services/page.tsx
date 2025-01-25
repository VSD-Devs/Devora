"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Paintbrush2, LineChart, Check, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Script from 'next/script'
import { motion } from "framer-motion"

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
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
          opacity-10 z-[1]" 
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-[120px] animate-pulse z-[1]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse z-[1]" />

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="container mx-auto px-4 relative z-[30]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-400/10 text-white/90 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span> Website Solutions</span>
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
              >
                Turn Your Vision Into
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200"> Digital Reality</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
              >
                We specialize in crafting high-performance websites and applications that help startups scale. Get enterprise-grade development at prices that make sense for your business.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-white/90 text-black text-lg px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105 border-0"
                >
                  Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-black/80 hover:bg-black text-white border border-white/10 hover:border-white/20 text-lg px-8 py-6 
                  transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  View Success Stories <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Design Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-300/5 rounded-3xl blur-xl group-hover:from-blue-500/10 group-hover:to-blue-300/10 transition-all duration-300" />
                <div className="relative bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-2xl flex items-center justify-center mb-6">
                    <Paintbrush2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
                  <p className="text-gray-300 mb-6">Transform visitors into customers with stunning, user-centric interfaces that deliver exceptional experiences across all devices.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-gray-200">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>Custom Interface Design & Branding</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-200">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>Mobile-First Responsive Design</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-200">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>User Testing & Optimisation</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Development Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-300/5 rounded-3xl blur-xl group-hover:from-blue-500/10 group-hover:to-blue-300/10 transition-all duration-300" />
                <div className="relative bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-2xl flex items-center justify-center mb-6">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Modern Web Development</h3>
                  <p className="text-gray-300 mb-6">Build scalable, lightning-fast web applications using cutting-edge technologies like React, Next.js, and Node.js.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-gray-200">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>Custom Web Applications</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-200">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>E-commerce Solutions</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-200">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>API Development & Integration</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Marketing Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-300/5 rounded-3xl blur-xl group-hover:from-blue-500/10 group-hover:to-blue-300/10 transition-all duration-300" />
                <div className="relative bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-2xl flex items-center justify-center mb-6">
                    <LineChart className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Growth Marketing</h3>
                  <p className="text-gray-300 mb-6">Accelerate your startup's growth with data-driven digital marketing strategies that deliver measurable results.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-gray-200">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>Technical SEO Optimisation</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-200">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>Conversion Rate Optimization</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-200">
                      <Check className="w-5 h-5 text-blue-400" />
                      <span>Analytics & Performance Tracking</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Proven Development Process</h2>
              <p className="text-gray-300">We follow a battle-tested methodology that ensures your project is delivered on time, within budget, and exceeds expectations.</p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Strategic Planning</h3>
                <p className="text-gray-300">Deep dive into your goals, market, and technical requirements.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">UX Architecture</h3>
                <p className="text-gray-300">Design intuitive user flows and compelling interfaces.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Agile Development</h3>
                <p className="text-gray-300">Build with modern tech stack and continuous feedback.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Growth Launch</h3>
                <p className="text-gray-300">Deploy with optimization for maximum market impact.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden bg-gradient-to-br from-blue-950/30 to-blue-900/30 rounded-3xl p-12 border border-white/10"
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
              <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Enquire Today For A Free Consultation</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Get a free consultation and custom quote for your project. Our expert team is ready to help transform your vision into reality.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-white/90 text-black text-lg px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105 border-0"
                >
                  Schedule Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 