"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Script from 'next/script';

export default function PricingPage() {
  return (
    <>
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'PriceSpecification',
            provider: {
              '@type': 'Organization',
              name: 'Devora',
              url: 'https://devora.dev'
            },
            priceSpecification: [
              {
                '@type': 'UnitPriceSpecification',
                name: 'Basic Package',
                price: '500',
                priceCurrency: 'GBP',
                description: 'Landing page development with basic features',
                unitText: 'per project'
              },
              {
                '@type': 'UnitPriceSpecification',
                name: 'Standard Package',
                price: '1500',
                priceCurrency: 'GBP',
                description: 'Multi-page website with advanced features',
                unitText: 'per project'
              },
              {
                '@type': 'UnitPriceSpecification',
                name: 'Premium Package',
                price: '2500',
                priceCurrency: 'GBP',
                description: 'Full web application development',
                unitText: 'per project'
              }
            ]
          })
        }}
      />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/40 z-0" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40 z-10" />

        {/* Animated glow orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl z-5 animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl z-5 animate-pulse" />

        <div className="container mx-auto px-4 relative z-20">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-20 relative"
          >
            <div className="relative mb-8">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b 
                from-white via-white to-gray-200 leading-[1.4] tracking-tight py-2 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
              >
                Startup-Friendly Pricing
              </motion.h1>
              <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-black/80 to-black/60 blur-3xl -z-10" />
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              We believe great web development shouldn't break the bank. Our flexible packages are designed to grow with your startup.
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Package */}
            <div className="flex flex-col h-full">
              <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-white/50 transition-all duration-300 group h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">Starter Package</h3>
                  <div className="text-3xl font-bold mb-6">£500 - £750</div>
                  <div className="text-gray-400 mb-8">Perfect for MVPs and landing pages</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>3-5 Pages Website</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>Mobile Responsive Design</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>Basic SEO Setup</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>2-3 Weeks Delivery</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link href="/project-inquiry" className="block w-full">
                    <Button className="w-full bg-white hover:bg-gray-100 text-black font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Growth Package */}
            <div className="flex flex-col h-full">
              <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 border border-white hover:border-white/75 transition-all duration-300 group transform hover:scale-105 h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">Growth Package</h3>
                  <div className="text-3xl font-bold mb-6">£1,000 - £2,000</div>
                  <div className="text-gray-400 mb-8">For growing startups</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>5-10 Pages Website</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>Advanced Design Features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>CMS Integration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>3-5 Weeks Delivery</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>Advanced SEO Package</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link href="/project-inquiry" className="block w-full">
                    <Button className="w-full bg-white hover:bg-gray-100 text-black font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Scale Package */}
            <div className="flex flex-col h-full">
              <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-white/50 transition-all duration-300 group h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">Scale Package</h3>
                  <div className="text-3xl font-bold mb-6">£2,500+</div>
                  <div className="text-gray-400 mb-8">Complex custom solutions</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>Custom Web Applications</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>E-commerce Solutions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>Custom Integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>6-12 Weeks Delivery</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-white mr-2" size={20} />
                      <span>Premium Support</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link href="/project-inquiry" className="block w-full">
                    <Button className="w-full bg-white hover:bg-gray-100 text-black font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Flexible Payment Plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We understand startup budgets. That's why we offer flexible payment plans to help you get started. Contact us to discuss your project and find a plan that works for you.
            </p>
            <Link 
              href="/contact" 
              className="inline-block mt-8 bg-white text-black hover:bg-gray-100 px-8 py-4 font-semibold rounded-md cursor-pointer transition-colors"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 