"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Script from 'next/script'
import Link from "next/link"
import Image from "next/image"

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
        {/* Hero Section - Ultra Minimalist */}
        <section className="relative min-h-screen bg-black text-white overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80 z-10"></div>
            <Image
              src="/office-meeting1.jpg"
              alt="Professional team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="container mx-auto px-6 py-20 md:py-32 relative z-20">
            <div className="max-w-5xl mx-auto">
              {/* Subtle status indicator */}
              <div className="inline-flex items-center gap-3 mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-400 font-light tracking-wide">Our services</span>
              </div>
              
              {/* Main headline - Ultra clean typography */}
              <div className="mb-16">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                  <span className="block text-white font-extralight">What we</span>
                  <span className="block text-gray-300 font-extralight italic">deliver</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                  Comprehensive digital solutions that drive growth and create lasting impact for your business.
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
                  { value: "50+", label: "Clients" },
                  { value: "24/7", label: "Support" }
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

        {/* Services Section - Ultra Minimalist */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-50 to-transparent rounded-full opacity-40 -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-50 to-transparent rounded-full opacity-40 translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              {/* Ultra minimal header */}
              <div className="mb-24">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">Capabilities</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                  Our expertise
                </h2>
              </div>
              
              {/* Clean services list */}
              <div className="space-y-24">
                {[
                  {
                    number: "01",
                    title: "Strategy & Planning",
                    description: "Digital strategy that aligns with your business goals",
                    capabilities: [
                      "Business analysis & requirements",
                      "Technical architecture planning", 
                      "User journey mapping",
                      "Growth strategy development"
                    ]
                  },
                  {
                    number: "02", 
                    title: "Design & User Experience",
                    description: "Intuitive interfaces that users love",
                    capabilities: [
                      "User research & testing",
                      "Visual design & branding",
                      "Responsive design systems",
                      "Accessibility compliance"
                    ]
                  },
                  {
                    number: "03",
                    title: "Development & Engineering", 
                    description: "Modern, scalable web applications",
                    capabilities: [
                      "Frontend development (React, Next.js)",
                      "Backend development & APIs",
                      "Database design & optimisation",
                      "Cloud deployment & hosting"
                    ]
                  },
                  {
                    number: "04",
                    title: "Growth & Optimisation",
                    description: "Continuous improvement for better results",
                    capabilities: [
                      "Performance optimisation",
                      "SEO & search visibility",
                      "Analytics & conversion tracking",
                      "A/B testing & iteration"
                    ]
                  },
                  {
                    number: "05",
                    title: "Support & Maintenance",
                    description: "Ongoing support to keep you running smoothly",
                    capabilities: [
                      "24/7 monitoring & uptime",
                      "Security updates & patches",
                      "Content management support",
                      "Technical consultation"
                    ]
                  }
                ].map((service, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-12">
                      <div className="text-sm text-gray-300 font-light tracking-wider">
                        {service.number}
                      </div>
                      <div className="flex-1">
                        <div className="mb-8">
                          <h3 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-wide group-hover:text-gray-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-500 font-light leading-relaxed text-lg max-w-2xl">
                            {service.description}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.capabilities.map((capability, capIndex) => (
                            <div key={capIndex} className="flex items-center gap-3 group/capability">
                              <div className="w-1.5 h-1.5 bg-black rounded-full group-hover/capability:bg-gray-600 transition-colors"></div>
                              <span className="text-gray-600 font-light group-hover/capability:text-black transition-colors">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-black" />
                      </div>
                    </div>
                    
                    {index < 4 && (
                      <div className="mt-24 border-b border-gray-100"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Ultra Minimalist */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                {/* Left side - Text content */}
                <div>
                  {/* Ultra minimal header */}
                  <div className="mb-12">
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">How we work</div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                      Our process
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 font-light leading-relaxed max-w-xl">
                    We follow a structured approach that ensures every project delivers exceptional results whilst maintaining clear communication throughout.
                  </p>
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
              
              {/* Simple process steps */}
              <div className="max-w-4xl mx-auto">
                <div className="space-y-16">
                  {[
                  {
                    step: "Discovery",
                    description: "Understanding your business, goals, and challenges"
                  },
                  {
                    step: "Strategy",
                    description: "Crafting a tailored approach for your project"
                  },
                  {
                    step: "Design",
                    description: "Creating beautiful, functional user experiences"
                  },
                  {
                    step: "Development",
                    description: "Building with modern, scalable technology"
                  },
                  {
                    step: "Launch",
                    description: "Deploying and optimising for success"
                  },
                  {
                    step: "Growth",
                    description: "Ongoing support and continuous improvement"
                  }
                ].map((step, index) => (
                  <div key={index} className="group flex items-center gap-8 py-6">
                    <div className="text-sm text-gray-300 font-light tracking-wider min-w-[60px]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-light text-black mb-2 tracking-wide group-hover:text-gray-600 transition-colors">
                        {step.step}
                      </h3>
                      <p className="text-gray-500 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
                  Ready to<br />get started?
                </h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                  Let's discuss your project and explore how we can help you achieve your goals.
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