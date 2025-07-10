import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Globe, 
  Code, 
  Layout, 
  LineChart, 
  MessageSquare, 
  Rocket, 
  Star, 
  Users, 
  Plus,
  Briefcase,
  CheckCircle2,
  Zap,
  Target,
  Palette,
  Monitor,
  Smartphone,
  TrendingUp,
  Award,
  Clock,
  Shield
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';
import WebsiteAuditForm from "@/components/WebsiteAuditForm";

export default function Home() {
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Devora - Web Design & Development for Startups",
            "url": "https://www.devora.co.uk/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.devora.co.uk/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://twitter.com/devora",
              "https://www.linkedin.com/company/devora/",
              "https://www.instagram.com/devora/"
            ]
          })
        }}
      />
      
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Devora",
            "url": "https://www.devora.co.uk/",
            "logo": "https://www.devora.co.uk/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+44-XXX-XXXX-XXX",
              "contactType": "customer service"
            }
          })
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Ultra Minimalist */}
        <section
          className="relative min-h-screen bg-black text-white"
          style={{ backgroundImage: "url(/noise.png)" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-6 py-20 md:py-32">
            <div className="max-w-7xl mx-auto">
              {/* Hero Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20 mt-12">
                {/* Left Column - Main Content */}
                <div>
                  {/* Main headline - Ultra clean typography */}
                  <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                      <span className="block text-white font-extralight">Creating</span>
                      <span className="block text-white font-extralight">Stunning</span>
                      <span className="block text-gray-300 font-extralight italic">Websites</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed tracking-wide">
                      that Elevates Your Online Presence
                    </p>
                  </div>
                  
                  {/* Minimal CTA */}
                  <div className="flex items-center gap-8">
                    <Link href="/contact">
                      <Button variant="ghost" className="text-white p-0 h-auto font-light text-lg tracking-wide border-b border-white/30 hover:border-white rounded-none pb-1 transition-colors group">
                        Enquire
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link href="/work">
                      <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-light text-lg tracking-wide border-b border-transparent hover:border-white rounded-none pb-1 transition-colors">
                        View work
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Column - Website Audit Form */}
                <div className="flex items-center justify-start lg:justify-end lg:pt-8">
                  <WebsiteAuditForm variant="hero" />
                </div>
              </div>
              
              {/* Minimal stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-gray-800 border-opacity-30">
                {[
                  { value: "100+", label: "Projects" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "50+", label: "Startups" },
                  { value: "2 weeks", label: "Avg delivery" }
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

        {/* Testimonials Section - Ultra Minimalist */}
        <section className="py-32 bg-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Ultra minimal header */}
              <div className="mb-24">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-light mb-8">What clients say</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[0.9] tracking-tighter">
                  Testimonials
                </h2>
              </div>
              
              {/* Single featured testimonial */}
              <div className="mb-24">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed mb-12 tracking-wide">
                  "They have an eye for design and an incredible understanding of how to create experiences that feel both modern and timeless."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-light text-lg">SJ</span>
                  </div>
                  <div>
                    <div className="text-white font-light">Sarah Johnson</div>
                    <div className="text-sm text-gray-500 font-light">CEO, TechStart Inc</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Services Section - Ultra Modern Grid */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Sophisticated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-transparent rounded-full opacity-20 translate-y-48 -translate-x-48"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-30"></div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-7xl mx-auto">
              {/* Enhanced header */}
              <div className="mb-20 text-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-light">Services</span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter mb-6">
                  What we do
                </h2>
                <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                  We create digital experiences that drive results through strategic design and cutting-edge development.
                </p>
              </div>
              
              {/* Modern services grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: <Palette className="w-8 h-8" />,
                    title: "UI/UX Design",
                    description: "Intuitive experiences that convert visitors into customers",
                    accent: "gray",
                    features: ["User Research", "Wireframing", "Prototyping"]
                  },
                  {
                    icon: <Code className="w-8 h-8" />,
                    title: "Web Development",
                    description: "Fast, scalable solutions built with modern technologies",
                    accent: "gray",
                    features: ["React/Next.js", "Performance", "Scalability"]
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: "Digital Strategy",
                    description: "Data-driven planning for sustainable business growth",
                    accent: "gray",
                    features: ["Analytics", "Growth Plans", "Optimisation"]
                  },
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: "Brand Identity",
                    description: "Cohesive visual storytelling across all touchpoints",
                    accent: "gray",
                    features: ["Logo Design", "Brand Guidelines", "Visual Systems"]
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "SEO & Performance",
                    description: "Visibility and speed optimisation for better results",
                    accent: "gray",
                    features: ["Technical SEO", "Site Speed", "Core Web Vitals"]
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Support & Maintenance",
                    description: "Ongoing care to keep your digital presence running smoothly",
                    accent: "gray",
                    features: ["24/7 Monitoring", "Updates", "Security"]
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className={`group relative p-8 rounded-2xl border border-gray-100 hover:border-black/20 bg-white hover:bg-gradient-to-br hover:from-gray-100/30 hover:to-white transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
                  >
                    {/* Accent dot */}
                    <div className={`absolute -top-3 -right-3 w-6 h-6 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100`}></div>
                    
                    {/* Icon with background */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gray-100 group-hover:bg-gray-200 transition-colors duration-500 mb-6`}>
                      <div className={`text-black group-hover:scale-110 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-light text-black group-hover:text-gray-700 transition-colors tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed text-sm">
                        {service.description}
                      </p>
                      
                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className={`px-2 py-1 text-xs font-light bg-gray-100 text-gray-700 rounded-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-${featureIndex * 100}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover arrow */}
                    <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0`}>
                      <ArrowRight className={`w-4 h-4 text-gray-600`} />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced CTA with stats */}
              <div className="text-center space-y-8">
                {/* Mini stats */}
                <div className="flex items-center justify-center gap-12 text-sm text-gray-500 font-light">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>100+ Projects Delivered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>98% Client Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>2 Week Average Delivery</span>
                  </div>
                </div>
                
                {/* CTA */}
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-3 text-black hover:text-gray-600 transition-all duration-300 font-light text-lg tracking-wide group"
                >
                  <span className="border-b border-black/20 group-hover:border-black/40 pb-1 transition-colors">
                    Explore all services
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section - Ultra Minimalist */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Ultra minimal header */}
              <div className="mb-32">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">Selected work</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                  Recent projects
                </h2>
              </div>
              
              {/* Modern project grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
                {/* Featured project - full width on mobile */}
                <Link href="/work/slush-dating" className="lg:col-span-2 group cursor-pointer">
                  <div className="relative h-[60vh] bg-white overflow-hidden">
                    <Image
                      src="/Slush.png"
                      alt="Slush Dating Platform"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating content */}
                    <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-xs text-gray-300 uppercase tracking-wider font-light mb-2">Platform • 2024</div>
                          <h3 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                            Slush Dating Platform
                          </h3>
                          <p className="text-gray-300 font-light text-lg max-w-md">
                            Video-first dating experience revolutionising modern connections
                          </p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Secondary projects */}
                <Link href="/work/envirotech-plumbing" className="group cursor-pointer">
                  <div className="relative h-[40vh] bg-white overflow-hidden mb-8">
                    <Image
                      src="/Enviro.png"
                      alt="EnviroTech Plumbing"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-2">Service • 2024</div>
                      <h3 className="text-2xl font-light text-black mb-2 tracking-wide group-hover:text-gray-600 transition-colors">
                        EnviroTech Plumbing
                      </h3>
                      <p className="text-gray-500 font-light">
                        Emergency service platform
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </Link>

                <Link href="/work/sandalwood-memorials" className="group cursor-pointer">
                  <div className="relative h-[40vh] bg-white overflow-hidden mb-8">
                    <Image
                      src="/Sandalwood-Memorials.png"
                      alt="Sandalwood Memorials"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-2">Service • 2023</div>
                      <h3 className="text-2xl font-light text-black mb-2 tracking-wide group-hover:text-gray-600 transition-colors">
                        Sandalwood Memorials
                      </h3>
                      <p className="text-gray-500 font-light">
                        Premium memorial services
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* Minimal CTA */}
              <div className="text-center">
                <Link href="/work" className="inline-flex items-center gap-3 text-black hover:text-gray-600 transition-colors font-light text-lg tracking-wide group">
                  <span className="border-b border-black/20 pb-1">View all projects</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
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
                  Let's work<br />together
                </h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                  Ready to transform your digital presence?
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
  );
}