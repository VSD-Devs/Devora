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
        {/* Hero Section */}
        <section className="relative min-h-[80vh] md:min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden">
          {/* Animated Background Elements - Simplified for mobile */}
          <div className="absolute inset-0">
            {/* Floating geometric shapes - Smaller on mobile */}
            <div className="absolute top-10 md:top-20 left-5 md:left-10 w-2 md:w-4 h-2 md:h-4 bg-blue-500/30 rotate-45 animate-pulse"></div>
            <div className="absolute top-20 md:top-40 right-10 md:right-20 w-3 md:w-6 h-3 md:h-6 bg-blue-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 md:bottom-40 left-10 md:left-20 w-2 md:w-3 h-2 md:h-3 bg-blue-600/40 rotate-12 animate-pulse"></div>
            
            {/* Dynamic gradient orbs - Smaller on mobile */}
            <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-l from-blue-600/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Grid pattern overlay - Smaller on mobile */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>
            
            {/* Spotlight effect - Smaller on mobile */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] md:w-[1000px] h-[300px] md:h-[600px] bg-gradient-to-b from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 md:pt-32 pb-8 md:pb-20">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-12 lg:items-center">
              {/* Text Content - Always first on mobile */}
              <div className="space-y-4 md:space-y-8 relative order-1 lg:order-1 text-left">
                {/* Floating decorative elements - Hidden on mobile */}
                <div className="hidden md:block absolute -top-10 -left-10 w-20 h-20 border border-blue-500/20 rounded-full animate-spin-slow"></div>
                <div className="hidden md:block absolute top-20 -right-5 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                
                {/* Badge with enhanced styling - Smaller on mobile */}
                <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm shadow-lg">
                  <span className="mr-2 md:mr-3 h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></span>
                  <span className="font-medium">Trusted by 100+ Startups</span>
                  <div className="ml-2 md:ml-3 flex space-x-1">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
          </div>
          </div>
          
                {/* Enhanced Main Headline with creative typography - Responsive sizing */}
                <div className="relative">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                        Beautiful Websites
                      </span>
                      {/* Underline decoration - Smaller on mobile */}
                      <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
                    </span>
                    <br />
                    <span className="text-white font-light">That </span>
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent font-black">
                        Convert
                      </span>
                      {/* Emphasis decoration - Smaller on mobile */}
                      <div className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-sm"></div>
                      {/* Floating accent - Smaller on mobile */}
                      <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    </span>
                  </h1>
          </div>
          
                {/* Subheadline - Larger on mobile */}
                <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-xl">
                  We craft stunning, high-performance websites that help ambitious startups{" "}
                  <span className="text-white font-semibold">stand out</span> and{" "}
                  <span className="text-white font-semibold">scale fast</span>
                </p>
                
                {/* CTA Buttons - Larger on mobile */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Link href="/project-inquiry">
                    <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-xl px-8 md:px-8 py-5 md:py-6 text-lg md:text-lg font-semibold shadow-2xl">
                        Start Your Project
                      <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                      </Button>
                    </Link>
                  <Link href="/work">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-xl px-8 md:px-8 py-5 md:py-6 text-lg md:text-lg font-semibold">
                      View Our Work
                      </Button>
                    </Link>
                  </div>
                
                {/* Stats - Larger on mobile, hidden on small screens to save space */}
                <div className="hidden sm:grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-8 text-left">
                  {[
                    { value: "100+", label: "Projects Delivered" },
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "50+", label: "Startups Launched" },
                    { value: "24/7", label: "Support Available" }
                  ].map((stat, index) => (
                    <div key={index} className="text-left">
                      <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image Content - Below text on mobile */}
              <div className="relative order-2 lg:order-2">
                {/* Floating decorative elements around image - Hidden on mobile */}
                <div className="hidden lg:block absolute -top-8 -right-8 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
                <div className="hidden lg:block absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <div className="hidden lg:block absolute top-1/2 -right-6 w-4 h-4 bg-blue-400/50 rotate-45 animate-bounce"></div>
                
                <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] w-full overflow-hidden rounded-2xl md:rounded-3xl border border-blue-500/20 shadow-2xl shadow-blue-500/10">
                  <Image
                    src="/office-meeting1.jpg"
                    alt="Modern startup workspace showcasing web development"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-blue-900/20 rounded-2xl md:rounded-3xl" />
                  
                  {/* Enhanced floating UI elements - Responsive sizing */}
                  <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-black/40 backdrop-blur-xl p-2 md:p-4 rounded-xl md:rounded-2xl border border-blue-400/30 shadow-xl animate-pulse">
                    <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                      <div className="h-1.5 md:h-2 w-1.5 md:w-2 bg-green-400 rounded-full animate-ping"></div>
                      <span className="text-xs text-white/80 font-medium">Live Project</span>
                    </div>
                    <div className="h-0.5 md:h-1 w-8 md:w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-1 md:mb-2"></div>
                    <div className="h-0.5 md:h-1 w-12 md:w-20 bg-white/30 rounded-full mb-1 md:mb-2"></div>
                    <div className="h-0.5 md:h-1 w-10 md:w-16 bg-white/20 rounded-full"></div>
                  </div>
                  
                  <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 bg-black/40 backdrop-blur-xl px-3 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl border border-blue-400/30 shadow-xl">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="relative">
                        <div className="h-4 md:h-6 w-4 md:w-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
                        <div className="absolute inset-0 h-4 md:h-6 w-4 md:w-6 rounded-full bg-green-400 animate-ping opacity-30"></div>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs md:text-sm">Excellence in Design</div>
                        <div className="text-blue-200 text-xs">Award-winning quality</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Code snippet overlay - Hidden on small mobile */}
                  <div className="hidden sm:block absolute top-1/2 left-3 md:left-6 transform -translate-y-1/2 bg-black/60 backdrop-blur-xl p-2 md:p-4 rounded-lg md:rounded-xl border border-blue-400/20 font-mono text-xs">
                    <div className="text-blue-400 mb-1">const website = &#123;</div>
                    <div className="text-white ml-2 md:ml-4">design: <span className="text-green-400">&apos;beautiful&apos;</span>,</div>
                    <div className="text-white ml-2 md:ml-4">performance: <span className="text-green-400">&apos;fast&apos;</span>,</div>
                    <div className="text-white ml-2 md:ml-4">conversion: <span className="text-green-400">&apos;high&apos;</span></div>
                    <div className="text-blue-400">&#125;</div>
                  </div>
                  
                  {/* Floating metrics - Smaller on mobile */}
                  <div className="absolute top-12 md:top-20 left-3 md:left-6 bg-blue-600/80 backdrop-blur-xl px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl border border-blue-400/30">
                    <div className="text-white font-bold text-sm md:text-lg">98%</div>
                    <div className="text-blue-100 text-xs">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
            </div>
          </section>

        {/* Trusted By Section - Compact & Asymmetrical */}
        <section className="py-6 md:py-12 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
          {/* Organic flowing border for mobile */}
          <div className="absolute top-0 left-0 w-full h-12 md:h-20 bg-gradient-to-br from-black via-slate-900 to-black">
            <svg className="absolute bottom-0 w-full h-8 md:h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
            </svg>
          </div>
          {/* Creative background elements - Simplified for mobile */}
          <div className="absolute inset-0">
            {/* Animated grid - Smaller on mobile */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-pulse"></div>
            
            {/* Floating geometric shapes - Hidden on mobile */}
            <div className="hidden md:block absolute top-10 left-10 w-6 h-6 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
            <div className="hidden md:block absolute top-20 right-20 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce"></div>
            <div className="hidden md:block absolute bottom-20 left-1/4 w-8 h-8 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
            
            {/* Gradient orbs - Smaller on mobile */}
            <div className="absolute top-0 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-l from-blue-600/10 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-4 md:mb-8 shadow-lg">
                <Star className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
                <span className="font-medium">Trusted by innovative companies</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-12">
                Join the startups already{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">scaling with Devora</span>
              </h2>
              
              {/* Asymmetrical layout for mobile */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-4 md:mb-8">
                {[
                  {
                    logo: "/Slush-Logo (BW) (1).png",
                    name: "Slush Dating",
                    description: "Revolutionary video dating platform",
                    metric: "78% engagement rate"
                  },
                  {
                    logo: "/Sandalwood-Memorials-BW.png", 
                    name: "Sandalwood Memorials",
                    description: "Premium memorial services",
                    metric: "145% increase in enquiries"
                  },
                  {
                    logo: "/Envirotech-Logo (BW).png",
                    name: "EnviroTech Plumbing", 
                    description: "24/7 emergency plumbing",
                    metric: "50% more conversions"
                  }
                ].map((company, index) => (
                  <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-xl rounded-3xl md:rounded-[2rem] p-3 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-500/20 hover:border-blue-400/40 glow-blue hover:scale-105 hover:rotate-1">
                    <div className="relative w-24 md:w-32 h-12 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                      <Image 
                        src={company.logo} 
                        alt={company.name} 
                        width={128}
                        height={64}
                        className="object-contain max-w-full max-h-full opacity-70 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:brightness-110" 
                      />
                      {/* Floating accent */}
                      <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-sm md:text-base group-hover:text-blue-200 transition-colors">{company.name}</h3>
                    <p className="text-xs md:text-sm text-slate-400 mb-3 group-hover:text-slate-300 transition-colors">{company.description}</p>
                    <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white rounded-full text-xs font-medium shadow-lg group-hover:from-blue-500 group-hover:to-cyan-500 transition-all">
                      <TrendingUp className="w-3 h-3 mr-1 animate-pulse" />
                      {company.metric}
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-slate-400 text-xs md:text-sm">
                Ready to join them?{" "}
                <Link href="/project-inquiry" className="text-blue-400 hover:text-cyan-400 font-medium ml-1 transition-colors">
                  Start your project today →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Services Section - Tall & Expansive */}
        <section className="py-16 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          {/* Creative background elements - Simplified for mobile */}
          <div className="absolute inset-0">
            {/* Animated grid - Smaller on mobile */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:80px_80px] animate-pulse"></div>
            
            {/* Floating geometric shapes - Hidden on mobile */}
            <div className="hidden md:block absolute top-20 right-10 w-8 h-8 border border-blue-400/40 rotate-45 animate-spin-slow"></div>
            <div className="hidden md:block absolute bottom-20 left-10 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce"></div>
            <div className="hidden md:block absolute top-1/2 right-1/4 w-4 h-4 border-2 border-cyan-400/50 rounded-full animate-pulse"></div>
            
            {/* Organic blob shapes - Smaller on mobile */}
            <div className="absolute top-0 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-l from-blue-500/15 to-cyan-500/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-blue-600/15 to-indigo-500/10 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-24 md:w-48 h-24 md:h-48 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-[70%_30%_50%_50%/30%_70%_50%_50%] blur-2xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
              {/* Enhanced badge - Smaller on mobile */}
              <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-blue-700 mb-6 md:mb-8 shadow-lg">
                <Rocket className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-600 animate-pulse" />
                <span className="font-medium">Complete Digital Solutions</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
                Everything You Need to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Succeed Online</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-700">
                From strategy to launch, we provide comprehensive web solutions that drive real business results
              </p>
            </div>
            
            {/* Masonry-style layout for mobile */}
            <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
              {[
                {
                  icon: <Palette className="w-6 md:w-8 h-6 md:h-8" />,
    title: "Web Design",
                  description: "Stunning, user-focused designs that convert visitors into customers",
                  features: ["UI/UX Design", "Mobile-First", "Brand Integration"],
                  color: "from-pink-500 to-rose-500"
                },
                {
                  icon: <Code className="w-6 md:w-8 h-6 md:h-8" />,
                  title: "Development",
                  description: "Fast, secure, and scalable websites built with modern technologies",
                  features: ["React/Next.js", "Performance Optimised", "SEO Ready"],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Rocket className="w-6 md:w-8 h-6 md:h-8" />,
                  title: "Digital Strategy",
                  description: "Data-driven strategies that align with your business goals",
                  features: ["Market Research", "Growth Planning", "Analytics Setup"],
                  color: "from-indigo-500 to-blue-600"
                },
                {
                  icon: <Target className="w-6 md:w-8 h-6 md:h-8" />,
                  title: "SEO & Marketing",
                  description: "Get found online and attract your ideal customers",
                  features: ["Technical SEO", "Content Strategy", "Local SEO"],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Shield className="w-6 md:w-8 h-6 md:h-8" />,
                  title: "Maintenance & Support",
                  description: "Keep your website secure, fast, and up-to-date",
                  features: ["24/7 Monitoring", "Security Updates", "Performance Optimisation"],
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <TrendingUp className="w-6 md:w-8 h-6 md:h-8" />,
                  title: "Growth Optimisation",
                  description: "Continuous improvements to maximise your ROI",
                  features: ["A/B Testing", "Conversion Optimisation", "Analytics"],
                  color: "from-teal-500 to-blue-500"
                }
                              ].map((service, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200/50 hover:border-blue-400/60 hover:scale-105 hover:-rotate-1 relative">
                  {/* Floating accent for each card - Smaller on mobile */}
                  <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-3 md:w-4 h-3 md:h-4 bg-blue-500/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className={`inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-2xl md:rounded-3xl bg-gradient-to-r ${service.color} text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 group-hover:text-slate-700 transition-colors">{service.description}</p>
                  <ul className="space-y-2 md:space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm md:text-base text-slate-700 group-hover:text-slate-800 transition-colors">
                        <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-2 md:mr-3 shadow-sm">
                          <CheckCircle2 className="w-2.5 md:w-3 h-2.5 md:h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 md:mt-16">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Work Section - Medium Height */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden -mt-8 md:-mt-12">
          {/* Creative background elements - Simplified for mobile */}
          <div className="absolute inset-0">
            {/* Animated grid with different pattern - Smaller on mobile */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] animate-pulse"></div>
            
            {/* Floating geometric shapes - Hidden on mobile */}
            <div className="hidden md:block absolute top-10 left-10 w-12 h-12 border-2 border-blue-400/20 rounded-full animate-spin-slow"></div>
            <div className="hidden md:block absolute bottom-10 right-10 w-6 h-6 bg-cyan-500/30 rotate-45 animate-bounce"></div>
            <div className="hidden md:block absolute top-1/3 left-1/4 w-8 h-8 border border-blue-500/30 rotate-12 animate-pulse"></div>
            
            {/* Large gradient orbs - Smaller on mobile */}
            <div className="absolute -top-20 md:-top-40 -left-20 md:-left-40 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 md:-bottom-40 -right-20 md:-right-40 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-tl from-blue-600/10 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
              {/* Enhanced badge - Smaller on mobile */}
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg">
                <Award className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
                <span className="font-medium">Award-Winning Projects</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Recent Work That{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Drives Results</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-blue-100">
                See how we&apos;ve helped startups transform their digital presence and achieve their goals
              </p>
            </div>
            
            {/* Asymmetrical project showcase */}
            <div className="space-y-8 lg:space-y-16 mb-8 md:mb-16">
              {[
                {
                  title: "Slush Dating",
                  description: "Revolutionary video dating platform with 78% match-to-conversation rate",
                  image: "/Slush.png",
                  tags: ["Web App", "Video Platform", "UX Design"],
                  results: "78% higher engagement than industry average",
                  link: "https://www.slushdating.com"
                },
                {
                  title: "EnviroTech Plumbing",
                  description: "24/7 emergency plumbing platform with real-time booking",
                  image: "/Enviro.png",
                  tags: ["Service Platform", "Real-time Booking", "Mobile-First"],
                  results: "50% increase in emergency call conversions",
                  link: "https://envirotech-plumbing.co.uk"
                }
                              ].map((project, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/60 to-black/60 backdrop-blur-xl rounded-3xl md:rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-blue-500/20 hover:border-blue-400/40 hover:scale-105 hover:rotate-1 lg:grid lg:grid-cols-5 lg:gap-8 lg:items-center">
                  {/* Floating accent - Smaller on mobile */}
                  <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 w-4 md:w-6 h-4 md:h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden lg:col-span-3 lg:rounded-3xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Live indicator - Smaller on mobile */}
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/60 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full border border-blue-400/30">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-xs font-medium">Live</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-8 lg:col-span-2 lg:flex lg:flex-col lg:justify-center relative z-10">
                    <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 md:px-3 py-1 md:py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white rounded-full text-xs md:text-sm font-medium shadow-lg backdrop-blur-sm border border-blue-400/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                    <p className="text-sm md:text-base text-slate-300 mb-4 md:mb-6 group-hover:text-slate-200 transition-colors">{project.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-green-600/80 to-emerald-600/80 text-white rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        <TrendingUp className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2 animate-pulse" />
                        {project.results}
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center text-blue-400 hover:text-cyan-400 font-semibold transition-colors group-hover:translate-x-1 duration-300 text-sm md:text-base">
                        View Project
                        <ArrowRight className="ml-2 h-3 md:h-4 w-3 md:w-4" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/work">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-blue-400/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-blue-400/50 rounded-xl px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-xl transition-all duration-300">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Compact */}
        <section className="py-10 md:py-16 bg-gradient-to-br from-blue-50 to-slate-50 relative overflow-hidden">
          {/* Creative background elements - Simplified for mobile */}
          <div className="absolute inset-0">
            {/* Animated grid with hexagonal pattern - Smaller on mobile */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:80px_80px] md:bg-[size:120px_120px] animate-pulse"></div>
            
            {/* Floating geometric shapes - Hidden on mobile */}
            <div className="hidden md:block absolute top-16 right-16 w-10 h-10 border border-blue-400/50 rotate-45 animate-spin-slow"></div>
            <div className="hidden md:block absolute bottom-16 left-16 w-8 h-8 bg-cyan-500/40 rounded-full animate-bounce"></div>
            <div className="hidden md:block absolute top-1/2 left-1/4 w-6 h-6 border-2 border-blue-500/60 rounded-full animate-pulse"></div>
            <div className="hidden md:block absolute bottom-1/4 right-16 w-4 h-4 bg-blue-400/50 rotate-12 animate-pulse delay-500"></div>
            
            {/* Large gradient orbs - Smaller on mobile */}
            <div className="absolute top-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-tl from-blue-600/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
              {/* Enhanced badge - Smaller on mobile */}
              <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-blue-700 mb-6 md:mb-8 shadow-lg">
                <Zap className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-600 animate-pulse" />
                <span className="font-medium">Why Choose Devora</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
                Why Startups Choose{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Devora</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-700">
                We understand the unique challenges startups face and deliver solutions that drive growth
              </p>
            </div>
            
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                {
                  icon: <Clock className="w-6 md:w-8 h-6 md:h-8" />,
                  title: "Fast Delivery",
                  description: "Launch in weeks, not months. We move at startup speed."
                },
                {
                  icon: <Award className="w-6 md:w-8 h-6 md:h-8" />,
                  title: "Proven Results",
                  description: "98% client satisfaction with measurable business impact."
                },
                {
                  icon: <Users className="w-6 md:w-8 h-6 md:h-8" />,
                  title: "Startup Focused",
                  description: "We understand your budget and common growth challenges."
                },
                {
                  icon: <Zap className="w-6 md:w-8 h-6 md:h-8" />,
                  title: "Modern Tech",
                  description: "Built with the latest technologies for optimal performance."
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center group relative">
                  {/* Floating accent - Smaller on mobile */}
                  <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-3 md:w-4 h-3 md:h-4 bg-blue-500/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl md:rounded-[2rem] p-4 md:p-8 border border-blue-200/50 hover:border-blue-400/60 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                                          <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm text-blue-600 mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg border border-blue-400/40">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-slate-900 group-hover:text-blue-700 transition-colors">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 group-hover:text-slate-700 transition-colors leading-relaxed">{benefit.description}</p>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden text-white">
          {/* Creative background elements */}
          <div className="absolute inset-0">
            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white/20 rounded-full animate-spin-slow"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-white/10 rotate-45 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 border border-white/30 rotate-12 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-4 h-4 bg-cyan-300/50 rounded-full animate-ping"></div>
            
            {/* Large gradient orbs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-white/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Enhanced badge */}
              <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm text-white mb-8 shadow-lg">
                <Rocket className="w-4 h-4 mr-2 text-cyan-300 animate-pulse" />
                <span className="font-medium">Ready to Get Started?</span>
                <div className="ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Digital Presence?</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                Join 100+ successful startups who&apos;ve chosen Devora to bring their vision to life. 
                Let&apos;s discuss your project and create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/project-inquiry">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 rounded-xl px-8 py-6 text-lg font-semibold shadow-2xl shadow-black/20 transition-all duration-300">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 rounded-xl px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
              

            </div>
          </div>
        </section>
      </div>
    </>
  );
}