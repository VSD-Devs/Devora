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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 pt-32 pb-20 relative overflow-hidden">
        {/* Dark overlay for nav */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-900/80 to-transparent z-[3]" />
        
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/30 z-[1]" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
          opacity-5 z-[2]" 
        />

        {/* Animated glow orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse z-[1]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse z-[1]" />

        <div className="container mx-auto px-4 relative z-[30]">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-20 relative"
          >
            <div className="relative mb-8">
              <motion.h1 
                className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-2"
              >
                Start-up Friendly Pricing
              </motion.h1>
              <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-gray-50/80 to-gray-100/60 blur-3xl -z-10" />
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
            >
              We believe great web development shouldn't break the bank. Our flexible packages are designed to grow with your startup.
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">
            {/* Starter Package */}
            <div className="flex flex-col h-full">
              <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 rounded-2xl pointer-events-none"></div>
                <div className="flex-grow relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Starter Package</h3>
                  <div className="text-3xl font-bold mb-6 text-gray-900">£500 - £750</div>
                  <div className="text-gray-600 mb-8">Perfect for MVPs and landing pages</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>3-5 Pages Website</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>Mobile Responsive Design</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>Basic SEO Setup</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>2-3 Weeks Delivery</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto relative z-10">
                  <Link href="/project-inquiry" className="block w-full">
                    <Button className="w-full bg-black hover:bg-gray-900 text-white font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Growth Package */}
            <div className="flex flex-col h-full">
              <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-lg z-[40]">
                  Most Popular
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 rounded-2xl pointer-events-none"></div>
                <div className="flex-grow relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Growth Package</h3>
                  <div className="text-3xl font-bold mb-6 text-gray-900">£1,000 - £2,000</div>
                  <div className="text-gray-600 mb-8">For growing startups</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>5-10 Pages Website</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>Advanced Design Features</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>CMS Integration</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>3-5 Weeks Delivery</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>Advanced SEO Package</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto relative z-10">
                  <Link href="/project-inquiry" className="block w-full">
                    <Button className="w-full bg-black hover:bg-gray-900 text-white font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Scale Package */}
            <div className="flex flex-col h-full">
              <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 rounded-2xl pointer-events-none"></div>
                <div className="flex-grow relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Scale Package</h3>
                  <div className="text-3xl font-bold mb-6 text-gray-900">£2,500+</div>
                  <div className="text-gray-600 mb-8">Complex custom solutions</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>Custom Web Applications</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>E-commerce Solutions</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>Custom Integrations</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>6-12 Weeks Delivery</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="text-blue-500 mr-2" size={20} />
                      <span>Premium Support</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto relative z-10">
                  <Link href="/project-inquiry" className="block w-full">
                    <Button className="w-full bg-black hover:bg-gray-900 text-white font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Flexible Payment Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand startup budgets. That's why we offer flexible payment plans to help you get started. Contact us to discuss your project and find a plan that works for you.
            </p>
            <Link 
              href="/contact" 
              className="inline-block mt-8 bg-black text-white hover:bg-gray-900 px-8 py-4 font-semibold rounded-md cursor-pointer transition-colors"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 