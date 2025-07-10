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
        <section className="relative min-h-screen bg-black text-white">
          <div className="container mx-auto px-6 py-20 md:py-32">
            <div className="max-w-5xl mx-auto">
              {/* Main headline - Ultra clean typography */}
              <div className="mb-16 mt-12">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                  <span className="block text-white font-extralight">Creating</span>
                  <span className="block text-white font-extralight">Stunning</span>
                  <span className="block text-gray-300 font-extralight italic">Websites</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed tracking-wide">
                  that Elevates Your Online Presence
                </p>
              </div>
              
              {/* Minimal CTA */}
              <div className="flex items-center gap-8 mb-20">
                <Link href="/contact">
                  <Button variant="ghost" className="text-white hover:text-gray-300 p-0 h-auto font-light text-lg tracking-wide border-b border-white border-opacity-30 rounded-none pb-1 transition-colors">
                    Enquire →
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto font-light text-lg tracking-wide transition-colors">
                    View work
                  </Button>
                </Link>
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
              
              {/* Client list */}
              <div className="border-t border-gray-800 border-opacity-30 pt-16">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-light mb-12">Trusted by</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                  {[
                    { name: "Slush Dating", logo: "/Slush-Logo (BW) (1).png" },
                    { name: "EnviroTech", logo: "/Envirotech-Logo (BW).png" },
                    { name: "Sandalwood", logo: "/Sandalwood-Memorials-BW.png" },
                    { name: "Devora", logo: "/devora-bw.png" }
                  ].map((client, index) => (
                    <div key={index} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={40}
                        className="object-contain filter invert"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Ultra Minimalist */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Ultra minimal header */}
              <div className="mb-24">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">Services</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                  What we do
                </h2>
              </div>
              
              {/* Clean services list */}
              <div className="space-y-16">
                {[
                  {
                    number: "01",
                    title: "UI/UX Design",
                    description: "Intuitive experiences that convert"
                  },
                  {
                    number: "02", 
                    title: "Web Development",
                    description: "Fast, scalable, modern solutions"
                  },
                  {
                    number: "03",
                    title: "Digital Strategy", 
                    description: "Data-driven growth planning"
                  },
                  {
                    number: "04",
                    title: "Brand Identity",
                    description: "Cohesive visual storytelling"
                  },
                  {
                    number: "05",
                    title: "SEO & Performance",
                    description: "Visibility and speed optimisation"
                  }
                ].map((service, index) => (
                  <div key={index} className="group flex items-start gap-8 py-6 border-b border-gray-100 last:border-b-0">
                    <div className="text-sm text-gray-300 font-light tracking-wider">
                      {service.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-light text-black mb-2 tracking-wide group-hover:text-gray-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Minimal CTA */}
              <div className="mt-20 pt-12 border-t border-gray-100">
                <Link href="/services" className="text-black hover:text-gray-600 transition-colors font-light tracking-wide border-b border-black border-opacity-20 pb-1">
                  View all services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section - Ultra Minimalist */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* Ultra minimal header */}
              <div className="mb-24">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">Selected work</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                  Recent projects
                </h2>
              </div>
              
              {/* Clean project list */}
              <div className="space-y-20">
                {[
                  {
                    number: "01",
                    title: "Slush Dating Platform",
                    description: "Video-first dating experience",
                    year: "2024",
                    category: "Platform",
                    image: "/Slush.png"
                  },
                  {
                    number: "02",
                    title: "EnviroTech Plumbing",
                    description: "Emergency service platform",
                    year: "2024", 
                    category: "Service",
                    image: "/Enviro.png"
                  },
                  {
                    number: "03",
                    title: "Sandalwood Memorials",
                    description: "Premium memorial services",
                    year: "2023",
                    category: "Service",
                    image: "/Sandalwood-Memorials.png"
                  }
                ].map((project, index) => (
                  <div key={index} className="group">
                    {/* Project image area */}
                    <div className="bg-white border border-gray-200 h-80 mb-8 overflow-hidden relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center">
                          <span className="text-gray-400 text-xs font-light">{project.number}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project details */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-2xl md:text-3xl font-light text-black tracking-wide group-hover:text-gray-600 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-sm text-gray-400 font-light">{project.year}</span>
                        </div>
                        <p className="text-gray-500 font-light">
                          {project.description}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-8">
                        <ArrowRight className="w-5 h-5 text-black" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Minimal CTA */}
              <div className="mt-20 pt-12 border-t border-gray-200">
                <Link href="/work" className="text-black hover:text-gray-600 transition-colors font-light tracking-wide border-b border-black border-opacity-20 pb-1">
                  View all projects →
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