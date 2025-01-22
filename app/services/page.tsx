import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Paintbrush2, LineChart, Check, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Expert Web Development Services for Startups | Affordable Solutions | Devora",
  description: "Transform your startup with our affordable web development, design & digital marketing services. Custom solutions starting at $2,999. Get a free consultation today!",
  keywords: "startup web development, affordable web design, custom web applications, UI/UX design, digital marketing for startups, SEO optimization, React development, Next.js development",
  openGraph: {
    title: "Expert Web Development Services for Startups | Affordable Solutions | Devora",
    description: "Transform your startup with our affordable web development, design & digital marketing services. Custom solutions starting at $2,999. Get a free consultation today!",
    type: "website",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630, alt: "Devora Web Development Services" }]
  }
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
        opacity-10" 
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Premium Web Solutions at Startup-Friendly Prices</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-300">
              Turn Your Vision Into
              <span className="text-white"> Digital Reality</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl">
              We specialize in crafting high-performance websites and applications that help startups scale. Get enterprise-grade development at prices that make sense for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-200 text-black text-lg px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/20 text-lg px-8 py-6 
                transition-all duration-300 hover:scale-105 hover:border-white/30"
              >
                View Success Stories <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Card */}
            <div className="group relative bg-gradient-to-br from-blue-950/50 to-transparent p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl group-hover:bg-blue-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
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
            </div>

            {/* Development Card */}
            <div className="group relative bg-gradient-to-br from-indigo-950/50 to-transparent p-8 rounded-3xl border border-indigo-500/20 hover:border-indigo-400/30 transition-all duration-300">
              <div className="absolute inset-0 bg-indigo-500/5 rounded-3xl blur-xl group-hover:bg-indigo-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Modern Web Development</h3>
                <p className="text-gray-300 mb-6">Build scalable, lightning-fast web applications using cutting-edge technologies like React, Next.js, and Node.js.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span>Custom Web Applications</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span>E-commerce Solutions</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span>API Development & Integration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Marketing Card */}
            <div className="group relative bg-gradient-to-br from-violet-950/50 to-transparent p-8 rounded-3xl border border-violet-500/20 hover:border-violet-400/30 transition-all duration-300">
              <div className="absolute inset-0 bg-violet-500/5 rounded-3xl blur-xl group-hover:bg-violet-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <LineChart className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Growth Marketing</h3>
                <p className="text-gray-300 mb-6">Accelerate your startup's growth with data-driven digital marketing strategies that deliver measurable results.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <Check className="w-5 h-5 text-violet-400" />
                    <span>Technical SEO Optimisation</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <Check className="w-5 h-5 text-violet-400" />
                    <span>Conversion Rate Optimization</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <Check className="w-5 h-5 text-violet-400" />
                    <span>Analytics & Performance Tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Proven Development Process</h2>
            <p className="text-gray-300">We follow a battle-tested methodology that ensures your project is delivered on time, within budget, and exceeds expectations.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Planning</h3>
              <p className="text-gray-300">Deep dive into your goals, market, and technical requirements.</p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">UX Architecture</h3>
              <p className="text-gray-300">Design intuitive user flows and compelling interfaces.</p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Agile Development</h3>
              <p className="text-gray-300">Build with modern tech stack and continuous feedback.</p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Growth Launch</h3>
              <p className="text-gray-300">Deploy with optimization for maximum market impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-950/50 to-transparent rounded-3xl p-12 border border-blue-500/20">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Success Story Today</h2>
              <p className="text-gray-300 text-lg mb-8">
                Get a free consultation and custom quote for your project. Our expert team is ready to help transform your vision into reality.
              </p>
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-200 text-black text-lg px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 