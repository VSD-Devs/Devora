import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Paintbrush2, Rocket, LineChart, Check, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Web Development Services for Startups | Devora",
  description: "Transform your startup with affordable web development, design, and digital marketing services. Expert solutions tailored for growing businesses. Get started today!",
  keywords: "web development services, startup web development, affordable web design, digital marketing for startups, web development agency",
  openGraph: {
    title: "Web Development Services for Startups | Devora",
    description: "Transform your startup with affordable web development, design, and digital marketing services. Expert solutions tailored for growing businesses.",
    type: "website",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630, alt: "Devora Web Development Services" }]
  }
}

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Expert Web Solutions for Growing Startups
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We transform ambitious startups into digital success stories through affordable, high-impact web solutions.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Design Service Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full mb-6">
                <Paintbrush2 className="w-5 h-5" />
                <span>Design Services</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Beautiful Designs That Convert</h2>
              <p className="text-gray-300 text-lg mb-8">
                We create stunning, user-centric designs that not only look amazing but drive real business results. Our design process focuses on your users while maintaining your brand's unique identity.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">UI/UX Design</h4>
                    <p className="text-gray-400">Intuitive interfaces that users love to interact with</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Brand Identity</h4>
                    <p className="text-gray-400">Cohesive visual language that tells your story</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Responsive Design</h4>
                    <p className="text-gray-400">Flawless experience across all devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Prototype & Testing</h4>
                    <p className="text-gray-400">Validated designs before development</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="text-purple-300 border-purple-500/30 hover:bg-purple-500/10">
                View Design Portfolio <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-3xl animate-pulse" />
              <div className="relative h-full rounded-3xl overflow-hidden border border-purple-500/20 bg-purple-950/30">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Design Showcase Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Service Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl animate-pulse" />
              <div className="relative h-full rounded-3xl overflow-hidden border border-blue-500/20 bg-blue-950/30">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Development Showcase Image
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full mb-6">
                <Code2 className="w-5 h-5" />
                <span>Development Services</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Modern Web Development</h2>
              <p className="text-gray-300 text-lg mb-8">
                We build fast, scalable, and secure web applications using cutting-edge technologies. Our development process ensures your product is future-proof and maintainable.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Full-Stack Development</h4>
                    <p className="text-gray-400">End-to-end web application development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">API Integration</h4>
                    <p className="text-gray-400">Seamless third-party service integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Performance</h4>
                    <p className="text-gray-400">Lightning-fast load times and optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Security</h4>
                    <p className="text-gray-400">Best practices for data protection</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="text-blue-300 border-blue-500/30 hover:bg-blue-500/10">
                View Tech Stack <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Service Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-4 py-2 rounded-full mb-6">
                <LineChart className="w-5 h-5" />
                <span>Digital Marketing</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Growth-Driven Marketing</h2>
              <p className="text-gray-300 text-lg mb-8">
                We help startups achieve sustainable growth through data-driven digital marketing strategies. Our approach focuses on ROI and measurable results.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">SEO Optimization</h4>
                    <p className="text-gray-400">Rank higher in search results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Content Strategy</h4>
                    <p className="text-gray-400">Engaging content that converts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Analytics</h4>
                    <p className="text-gray-400">Data-driven decision making</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Conversion Rate</h4>
                    <p className="text-gray-400">Turn visitors into customers</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/10">
                View Case Studies <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-3xl animate-pulse" />
              <div className="relative h-full rounded-3xl overflow-hidden border border-emerald-500/20 bg-emerald-950/30">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Marketing Showcase Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-gray-300 text-lg">
              Flexible packages designed for startups at every stage. No hidden fees, just clear value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Add pricing cards here */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-3xl font-bold mb-6">$2,999</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>5-page Website</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Basic SEO Setup</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-gray-100">Get Started</Button>
            </div>
            {/* Add more pricing cards */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Startup?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Book a free consultation and let's discuss how we can help you achieve your goals.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 