"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Palette, Code, TrendingUp, Shield, Search, GanttChartSquare, Rocket } from "lucide-react"
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

        {/* Services Section - Enhanced Minimalism */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Enhanced background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-30 -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-transparent rounded-full opacity-30 translate-y-48 -translate-x-48"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-30"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced header */}
              <div className="mb-32 text-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-light">Capabilities</span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter mb-6">
                  Our expertise
                </h2>
                <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                  We craft digital experiences that transform businesses and delight users through strategic thinking and meticulous execution.
                </p>
              </div>
              
              {/* Enhanced services list */}
              <div className="space-y-0">
                {[
                  {
                    number: "01",
                    title: "Strategy & Planning",
                    subtitle: "Foundation for Success",
                    description: "Digital strategy that aligns with your business goals and sets the foundation for sustainable growth",
                    capabilities: [
                      "Business analysis & requirements",
                      "Technical architecture planning", 
                      "User journey mapping",
                      "Growth strategy development"
                    ],
                    hasImage: true,
                    image: "/services/strategy-planning.jpg",
                    icon: Zap,
                    accent: "gray"
                  },
                  {
                    number: "02", 
                    title: "Design & User Experience",
                    subtitle: "Beautiful & Functional",
                    description: "Intuitive interfaces that users love, designed with accessibility and conversion in mind",
                    capabilities: [
                      "User research & testing",
                      "Visual design & branding",
                      "Responsive design systems",
                      "Accessibility compliance"
                    ],
                    hasImage: false,
                    icon: Palette,
                    accent: "gray"
                  },
                  {
                    number: "03",
                    title: "Development & Engineering", 
                    subtitle: "Modern & Scalable",
                    description: "Cutting-edge web applications built with the latest technologies and best practices",
                    capabilities: [
                      "Frontend development (React, Next.js)",
                      "Backend development & APIs",
                      "Database design & optimisation",
                      "Cloud deployment & hosting"
                    ],
                    hasImage: true,
                    image: "/services/development.jpg",
                    icon: Code,
                    accent: "gray"
                  },
                  {
                    number: "04",
                    title: "Growth & Optimisation",
                    subtitle: "Data-Driven Results",
                    description: "Continuous improvement through analytics, testing, and performance optimisation",
                    capabilities: [
                      "Performance optimisation",
                      "SEO & search visibility",
                      "Analytics & conversion tracking",
                      "A/B testing & iteration"
                    ],
                    hasImage: false,
                    icon: TrendingUp,
                    accent: "gray"
                  },
                  {
                    number: "05",
                    title: "Support & Maintenance",
                    subtitle: "Always There for You",
                    description: "Proactive support and maintenance to keep your digital presence running smoothly",
                    capabilities: [
                      "24/7 monitoring & uptime",
                      "Security updates & patches",
                      "Content management support",
                      "Technical consultation"
                    ],
                    hasImage: false,
                    icon: Shield,
                    accent: "gray"
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className={`group relative py-24 transition-all duration-700 hover:bg-gray-50/50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    } ${index > 0 ? 'border-t border-gray-100' : ''}`}
                  >
                    {/* Accent line */}
                    <div className={`absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    <div className="container mx-auto px-6">
                      {service.hasImage ? (
                        /* Services with images - enhanced two column layout */
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                          {/* Text content */}
                          <div className={`${index === 2 ? 'lg:order-2' : ''} space-y-8`}>
                            <div className="flex items-start gap-8">
                              <div className="flex flex-col items-center gap-4">
                                <div className="text-xs text-gray-300 font-light tracking-wider">
                                  {service.number}
                                </div>
                                <div className={`p-3 rounded-2xl bg-gray-100 group-hover:bg-gray-200 transition-colors duration-500`}>
                                  <service.icon className={`w-6 h-6 text-black`} />
                                </div>
                              </div>
                              <div className="flex-1 space-y-6">
                                <div>
                                  <div className={`text-sm text-gray-600 font-medium mb-2 tracking-wide`}>
                                    {service.subtitle}
                                  </div>
                                  <h3 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-wide group-hover:text-gray-700 transition-colors">
                                    {service.title}
                                  </h3>
                                  <p className="text-gray-600 font-light leading-relaxed text-lg">
                                    {service.description}
                                  </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {service.capabilities.map((capability, capIndex) => (
                                    <div key={capIndex} className="flex items-center gap-3 group/capability py-2">
                                      <div className={`w-1.5 h-1.5 bg-gray-400 rounded-full group-hover/capability:scale-125 transition-transform duration-300`}></div>
                                      <span className="text-gray-600 font-light group-hover/capability:text-black transition-colors text-sm">{capability}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Enhanced Image */}
                          <div className={`${index === 2 ? 'lg:order-1' : ''} relative`}>
                            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-xl">
                              <Image
                                src={service.image!}
                                alt={service.title}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 group-hover:from-black/10 group-hover:to-black/10 transition-all duration-700"></div>
                              <div className={`absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500`}>
                                {service.title}
                              </div>
                            </div>
                            {/* Floating accent */}
                            <div className={`absolute -top-4 -right-4 w-20 h-20 bg-black rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700`}></div>
                          </div>
                        </div>
                      ) : (
                        /* Services without images - enhanced single column layout */
                        <div className="max-w-5xl mx-auto">
                          <div className="flex items-start gap-8">
                            <div className="flex flex-col items-center gap-4">
                              <div className="text-xs text-gray-300 font-light tracking-wider">
                                {service.number}
                              </div>
                              <div className={`p-4 rounded-2xl bg-gray-100 group-hover:bg-gray-200 transition-all duration-500 group-hover:scale-110`}>
                                <service.icon className={`w-8 h-8 text-black`} />
                              </div>
                            </div>
                            <div className="flex-1 space-y-8">
                              <div>
                                <div className={`text-sm text-gray-600 font-medium mb-2 tracking-wide`}>
                                  {service.subtitle}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-wide group-hover:text-gray-700 transition-colors">
                                  {service.title}
                                </h3>
                                <p className="text-gray-600 font-light leading-relaxed text-lg max-w-3xl">
                                  {service.description}
                                </p>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {service.capabilities.map((capability, capIndex) => (
                                  <div key={capIndex} className={`group/capability p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300`}>
                                    <div className="flex items-center gap-3">
                                      <div className={`w-2 h-2 bg-gray-400 rounded-full group-hover/capability:scale-125 transition-transform duration-300`}></div>
                                      <span className="text-gray-600 font-light group-hover/capability:text-black transition-colors text-sm">{capability}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Innovative Timeline Design */}
        <section className="py-32 bg-gradient-to-br from-slate-50 via-gray-50/30 to-gray-50/20 relative overflow-hidden">
          {/* Enhanced background elements */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-gray-200/40 via-gray-200/40 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-gray-200/40 via-gray-200/40 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100/20 via-transparent to-gray-100/20"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-7xl mx-auto">
              {/* Enhanced header section */}
              <div className="text-center mb-24">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-medium px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50">
                    How we work
                  </span>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
                
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-slate-900 leading-[0.85] tracking-tighter mb-8">
                  Our <span className="italic text-slate-600">process</span>
                </h2>
                
                <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                  A collaborative journey from concept to launch, designed to deliver exceptional results through proven methodology and transparent communication.
                </p>
              </div>
              
              {/* Innovative interconnected timeline */}
              <div className="relative max-w-6xl mx-auto">
                {/* Central flowing line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-300 to-gray-300 transform -translate-x-1/2 hidden lg:block"></div>
                
                {/* Process steps - zigzag layout */}
                <div className="space-y-24">
                  {[
                    {
                      step: "Discovery",
                      subtitle: "Understanding & Research",
                      description: "Deep dive into your business goals, target audience, and market landscape to create a strategic foundation",
                      details: [
                        "Stakeholder interviews",
                        "Competitive analysis", 
                        "User research",
                        "Technical audit"
                      ],
                      icon: Search,
                      color: "gray",
                      side: "left"
                    },
                    {
                      step: "Strategy",
                      subtitle: "Planning & Architecture",
                      description: "Crafting a comprehensive roadmap with clear milestones, technical specifications, and success metrics",
                      details: [
                        "Project roadmap",
                        "Information architecture",
                        "Technology stack",
                        "Success metrics"
                      ],
                      icon: GanttChartSquare,
                      color: "gray",
                      side: "right"
                    },
                    {
                      step: "Design",
                      subtitle: "User Experience & Interface",
                      description: "Creating intuitive, accessible designs that balance aesthetics with functionality and brand identity",
                      details: [
                        "Wireframing",
                        "Visual design",
                        "Design systems",
                        "Prototyping"
                      ],
                      icon: Palette,
                      color: "gray",
                      side: "left"
                    },
                    {
                      step: "Development",
                      subtitle: "Building & Integration",
                      description: "Transforming designs into high-performance, scalable applications using modern development practices",
                      details: [
                        "Frontend development",
                        "Backend integration",
                        "Quality assurance",
                        "Performance optimisation"
                      ],
                      icon: Code,
                      color: "gray",
                      side: "right"
                    },
                    {
                      step: "Launch",
                      subtitle: "Deployment & Optimisation",
                      description: "Seamless deployment with comprehensive testing, monitoring, and final optimisations for peak performance",
                      details: [
                        "Production deployment",
                        "Performance monitoring",
                        "SEO optimisation",
                        "Analytics setup"
                      ],
                      icon: Rocket,
                      color: "gray",
                      side: "left"
                    },
                    {
                      step: "Growth",
                      subtitle: "Support & Evolution",
                      description: "Ongoing partnership with continuous improvements, updates, and strategic enhancements for sustained success",
                      details: [
                        "Ongoing maintenance",
                        "Performance insights",
                        "Feature enhancements",
                        "Strategic consultation"
                      ],
                      icon: TrendingUp,
                      color: "gray",
                      side: "right"
                    }
                  ].map((step, index) => {
                    const Icon = step.icon;
                    return (
                    <div key={index} className={`group relative ${step.side === 'right' ? 'lg:pl-1/2' : ''}`}>
                      {/* Connection node */}
                      <div className={`absolute top-8 ${step.side === 'left' ? 'right-0 lg:right-[-2rem]' : 'left-0 lg:left-[-2rem]'} lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-black rounded-full shadow-lg group-hover:scale-125 transition-all duration-500 border-4 border-white z-10`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                        <div className={`absolute inset-0 rounded-full animate-ping bg-gray-400 opacity-20 group-hover:opacity-40`}></div>
                      </div>
                      
                      {/* Content card */}
                      <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-xl p-8 lg:p-10 group-hover:shadow-2xl transition-all duration-500 group-hover:bg-white/90 ${step.side === 'right' ? 'lg:ml-16' : 'lg:mr-16'}`}>
                        {/* Step indicator and icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-400 font-medium tracking-wider">
                              STEP {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="w-8 h-px bg-gray-300"></div>
                          </div>
                          <Icon className={`w-8 h-8 text-black`} />
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-6">
                          <div>
                            <div className={`text-sm font-medium text-gray-600 mb-2 tracking-wide`}>
                              {step.subtitle}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 tracking-wide group-hover:text-slate-700 transition-colors">
                              {step.step}
                            </h3>
                            <p className="text-slate-600 font-light leading-relaxed text-lg">
                              {step.description}
                            </p>
                          </div>
                          
                          {/* Key deliverables */}
                          <div className="grid grid-cols-2 gap-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className={`group/detail flex items-center gap-3 p-3 rounded-lg bg-gray-100/50 hover:bg-gray-200/50 transition-all duration-300 border border-gray-200/50`}>
                                <div className={`w-1.5 h-1.5 bg-gray-400 rounded-full group-hover/detail:scale-125 transition-transform duration-300`}></div>
                                <span className="text-slate-600 font-light text-sm group-hover/detail:text-slate-900 transition-colors">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Subtle gradient accent */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-black rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      </div>
                      
                      {/* Connection line to next step */}
                      {index < 5 && (
                        <div className={`absolute ${step.side === 'left' ? 'right-[-2rem] top-16' : 'left-[-2rem] top-16'} lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-16 w-px h-24 bg-gradient-to-b from-gray-300 to-gray-300 hidden lg:block`}></div>
                      )}
                    </div>
                  )})
                  }
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