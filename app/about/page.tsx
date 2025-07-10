"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
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
              foundingDate: '2019',
              location: {
                '@type': 'Country',
                name: 'United Kingdom'
              },
              employees: {
                '@type': 'QuantitativeValue',
                value: '10+'
              }
            }
          })
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Ultra Minimalist */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>
          
          <div className="container mx-auto px-6 py-20 md:py-32 relative z-20">
            <div className="max-w-5xl mx-auto">
              {/* Subtle status indicator */}
              <div className="inline-flex items-center gap-3 mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-400 font-light tracking-wide">About us</span>
              </div>
              
              {/* Main headline - Ultra clean typography */}
              <div className="mb-16">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                  <span className="block text-white font-extralight">We are</span>
                  <span className="block text-gray-300 font-extralight italic">Devora</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                  A team of passionate developers dedicated to creating exceptional digital experiences for startups and growing businesses.
                </p>
              </div>
              
              {/* Minimal CTA */}
              <div className="flex items-center gap-8 mb-20">
                <Link href="/contact">
                  <Button variant="ghost" className="text-white hover:text-gray-300 p-0 h-auto font-light text-lg tracking-wide border-b border-white border-opacity-30 rounded-none pb-1 transition-colors">
                    Enquire →
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-light text-lg tracking-wide transition-colors">
                    Get in touch
                  </Button>
                </Link>
              </div>
              
              {/* Minimal stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-gray-800 border-opacity-30">
                {[
                  { value: "100+", label: "Projects" },
                  { value: "5+", label: "Years" },
                  { value: "50+", label: "Happy clients" },
                  { value: "10+", label: "Team members" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-light text-white mb-1 tracking-wide">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section - Ultra Minimalist */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-50 to-transparent rounded-full opacity-40 -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-50 to-transparent rounded-full opacity-40 translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Text content */}
                <div>
                  {/* Ultra minimal header */}
                  <div className="mb-12">
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">Our story</div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                      Built for<br />startups
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                    <p>
                      Founded in 2019, Devora emerged from a simple observation: startups needed access to the same quality web development that large corporations take for granted, but at a price point that made sense for growing businesses.
                    </p>
                    <p>
                      We've built our reputation on delivering exceptional results without the enterprise price tag, helping over 100 startups establish their digital presence and grow their businesses online.
                    </p>
                    <p>
                      Our team combines technical expertise with a deep understanding of startup challenges, ensuring every project delivers both immediate impact and long-term value.
                    </p>
                  </div>
                </div>
                
                {/* Right side - Team image */}
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                    <Image
                      src="/office-meeting1.jpg"
                      alt="Our team collaborating on projects"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Ultra Minimalist */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Ultra minimal header */}
              <div className="mb-24">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">What drives us</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                  Our values
                </h2>
              </div>
              
              {/* Clean values list */}
              <div className="space-y-24">
                {[
                  {
                    number: "01",
                    title: "Quality First",
                    description: "We never compromise on quality, ensuring every project meets the highest standards of craftsmanship and performance."
                  },
                  {
                    number: "02", 
                    title: "Transparent Communication",
                    description: "Clear, honest communication throughout every project, keeping you informed and involved at every step."
                  },
                  {
                    number: "03",
                    title: "Startup-Focused", 
                    description: "We understand the unique challenges startups face and tailor our approach to support your growth journey."
                  },
                  {
                    number: "04",
                    title: "Long-term Partnership",
                    description: "Building lasting relationships with our clients, supporting your business as it grows and evolves."
                  }
                ].map((value, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-12">
                      <div className="text-sm text-gray-300 font-light tracking-wider">
                        {value.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-wide group-hover:text-gray-600 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-gray-500 font-light leading-relaxed text-lg max-w-2xl">
                          {value.description}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-black" />
                      </div>
                    </div>
                    
                    {index < 3 && (
                      <div className="mt-24 border-b border-gray-100"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Ultra Minimalist */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Ultra minimal header */}
              <div className="mb-24">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">The people</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                  Our team
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left side - Team description */}
                <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                  <p>
                    Our diverse team brings together years of experience in web development, design, and digital strategy. Each member contributes unique expertise whilst sharing our commitment to excellence.
                  </p>
                  <p>
                    From frontend specialists to backend engineers, UX designers to SEO strategists, we've assembled a team that can handle every aspect of your digital project.
                  </p>
                  <p>
                    We believe in continuous learning and staying ahead of industry trends to ensure our clients always receive cutting-edge solutions.
                  </p>
                </div>
                
                {/* Right side - Team stats */}
                <div className="space-y-12">
                  {[
                    { label: "Average experience", value: "5+ years" },
                    { label: "Combined projects", value: "500+" },
                    { label: "Technologies mastered", value: "20+" },
                    { label: "Client satisfaction", value: "98%" }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100">
                      <span className="text-gray-500 font-light">{stat.label}</span>
                      <span className="text-2xl font-light text-black">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Ultra Minimalist */}
        <section className="py-32 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[0.9] tracking-tighter mb-8">
                  Ready to work<br />together?
                </h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                  Let's discuss how we can help bring your vision to life and drive your business forward.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-12">
                                 <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-light text-lg tracking-wide border-b border-white border-opacity-30 pb-1">
                   Enquire →
                 </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors font-light text-lg tracking-wide">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 