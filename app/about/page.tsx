"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Target, Award, Zap, Heart, Code, Rocket, CheckCircle2 } from "lucide-react"
import Script from 'next/script'

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Devora',
              url: 'https://www.devora.co.uk',
              description: 'Web development specialists empowering startups with affordable, high-impact web solutions.',
              foundingDate: '2024',
              location: {
                '@type': 'Country',
                name: 'United Kingdom'
              },
              employees: {
                '@type': 'QuantitativeValue',
                value: '5+'
              }
            }
          })
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Ultra Modern */}
        <section className="relative min-h-screen bg-black text-white overflow-hidden"
          style={{ backgroundImage: "url(/noise.png)" }}>
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Dynamic background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full opacity-30 -translate-y-48 translate-x-48 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full opacity-30 translate-y-48 -translate-x-48 animate-pulse delay-1000"></div>
          
          <div className="container mx-auto px-6 py-20 md:py-32 relative z-20">
            <div className="max-w-5xl mx-auto">
              {/* Enhanced status indicator */}
              <div className="inline-flex items-center gap-3 mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm text-gray-400 font-light tracking-wide">About us</span>
                <div className="w-8 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
              </div>
              
              {/* Enhanced headline */}
              <div className="mb-16">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                  <span className="block text-white font-extralight">We are</span>
                  <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-extralight italic">Devora</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                  A passionate team of developers and designers dedicated to creating exceptional digital experiences for startups and growing businesses.
                </p>
              </div>
              
              {/* Enhanced CTA */}
              <div className="flex items-center gap-8 mb-20">
                <Link href="/contact">
                  <Button variant="ghost" className="text-white hover:text-gray-300 p-0 h-auto font-light text-lg tracking-wide border-b border-white border-opacity-30 rounded-none pb-1 transition-all duration-300 group">
                    <span>Start your project</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-light text-lg tracking-wide transition-colors">
                    View our work
                  </Button>
                </Link>
              </div>
              
              {/* Enhanced stats with icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-gray-800 border-opacity-30">
                {[
                  { value: "100+", label: "Projects", icon: <Rocket className="w-5 h-5" /> },
                  { value: "2+", label: "Years experience", icon: <Award className="w-5 h-5" /> },
                  { value: "50+", label: "Happy clients", icon: <Heart className="w-5 h-5" /> },
                  { value: "5+", label: "Team members", icon: <Users className="w-5 h-5" /> }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-2 mb-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-light text-white mb-1 tracking-wide group-hover:text-gray-300 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section - Enhanced Modern */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Sophisticated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-40 -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-transparent rounded-full opacity-40 translate-y-48 -translate-x-48"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-30"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Enhanced text content */}
                <div>
                  <div className="mb-12">
                    <div className="inline-flex items-center gap-3 mb-8">
                      <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-light">Our story</span>
                      <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                      Built for<br />
                      <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent italic">startups</span>
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                    <div className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-200 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                      </div>
                      <p>
                        Founded in 2019, Devora emerged from a simple observation: startups needed access to the same quality web development that large corporations take for granted, but at a price point that made sense for growing businesses.
                      </p>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover:bg-green-200 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                      </div>
                      <p>
                        We've built our reputation on delivering exceptional results without the enterprise price tag, helping over 100 startups establish their digital presence and grow their businesses online.
                      </p>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1 group-hover:bg-purple-200 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-purple-600" />
                      </div>
                      <p>
                        Our team combines technical excellence with a deep understanding of startup challenges, ensuring every project delivers both immediate impact and long-term value.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Enhanced image */}
                <div className="relative group">
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-200 rounded-2xl">
                    <Image
                      src="/office-meeting1.jpg"
                      alt="Our team collaborating on projects"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating stats */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-light text-black">100+</div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
                        </div>
                        <div>
                          <div className="text-2xl font-light text-black">98%</div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Enhanced Grid */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Enhanced header */}
              <div className="mb-20 text-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-light">What drives us</span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter mb-6">
                  Our values
                </h2>
                <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                  The principles that guide everything we do and every decision we make.
                </p>
              </div>
              
              {/* Modern values grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Quality First",
                    description: "We never compromise on quality, ensuring every project meets the highest standards of craftsmanship and performance.",
                    accent: "gray"
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Transparent Communication",
                    description: "Clear, honest communication throughout every project, keeping you informed and involved at every step.",
                    accent: "gray"
                  },
                  {
                    icon: <Rocket className="w-8 h-8" />,
                    title: "Startup-Focused", 
                    description: "We understand the unique challenges startups face and tailor our approach to support your growth journey.",
                    accent: "gray"
                  },
                  {
                    icon: <Heart className="w-8 h-8" />,
                    title: "Long-term Partnership",
                    description: "Building lasting relationships with our clients, supporting your business as it grows and evolves.",
                    accent: "gray"
                  }
                ].map((value, index) => (
                  <div 
                    key={index} 
                    className={`group p-8 rounded-2xl border border-gray-100 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
                  >
                    {/* Icon with background */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gray-100 group-hover:bg-gray-200 transition-colors duration-500 mb-6`}>
                      <div className={`text-black group-hover:scale-110 transition-transform duration-500`}>
                        {value.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-light text-black mb-4 tracking-wide group-hover:text-gray-700 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {value.description}
                    </p>
                    
                    {/* Hover arrow */}
                    <div className={`mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0`}>
                      <ArrowRight className={`w-5 h-5 text-black`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Enhanced Modern */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-40"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced header */}
              <div className="mb-20 text-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-light">Small but mighty</span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter mb-6">
                  Our approach
                </h2>
                <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                  As a focused team, we work closely with each client to deliver personalised, high-quality solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Team description */}
                <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                  <div className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-1 group-hover:bg-gray-200 transition-colors">
                      <Code className="w-3 h-3 text-black" />
                    </div>
                    <p>
                      We're a small, dedicated team with extensive experience in web development and design. This allows us to maintain direct communication and deliver truly personalised service.
                    </p>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-1 group-hover:bg-gray-200 transition-colors">
                      <Users className="w-3 h-3 text-black" />
                    </div>
                    <p>
                      Being small means every project gets our full attention. You'll work directly with the people building your website, not through layers of account managers.
                    </p>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-1 group-hover:bg-gray-200 transition-colors">
                      <Zap className="w-3 h-3 text-black" />
                    </div>
                    <p>
                      We stay current with the latest technologies and best practices, ensuring your website is built with modern, reliable solutions.
                    </p>
                  </div>
                </div>
                
                {/* Right side - Enhanced team stats */}
                <div className="space-y-6">
                  {[
                    { label: "Years in business", value: "5+", icon: <Award className="w-5 h-5" />, accent: "gray" },
                    { label: "Projects completed", value: "100+", icon: <Rocket className="w-5 h-5" />, accent: "gray" },
                    { label: "Technologies we use", value: "Latest", icon: <Code className="w-5 h-5" />, accent: "gray" },
                    { label: "Client satisfaction", value: "98%", icon: <Heart className="w-5 h-5" />, accent: "gray" }
                  ].map((stat, index) => (
                    <div key={index} className={`group p-6 rounded-xl border border-gray-100 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300`}>
                            <div className={`text-black`}>
                              {stat.icon}
                            </div>
                          </div>
                          <span className="text-gray-600 font-light">{stat.label}</span>
                        </div>
                        <span className="text-2xl font-light text-black group-hover:text-gray-700 transition-colors">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Enhanced */}
        <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full opacity-50 -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full opacity-50 translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[0.9] tracking-tighter mb-8">
                  Ready to work<br />
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent italic">together?</span>
                </h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                  Let's discuss how we can help bring your vision to life and drive your business forward.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-12">
                <Link href="/contact" className="group inline-flex items-center gap-3 text-white hover:text-gray-300 transition-all duration-300 font-light text-lg tracking-wide border-b border-white border-opacity-30 hover:border-opacity-60 pb-1">
                  <span>Start your project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/work" className="text-gray-400 hover:text-white transition-colors font-light text-lg tracking-wide">
                  View our work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 