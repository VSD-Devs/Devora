"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Script from 'next/script'

export default function PricingPage() {
  return (
    <>
      <Script
        id="pricing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
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
      <div className="min-h-[100dvh] flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 relative z-[30] flex-1 flex flex-col pt-32 md:pt-32">
            {/* Desktop Title */}
            <div className="hidden md:block text-center mb-16">
              <div className="inline-block mb-4 sm:mb-6 p-1.5 sm:p-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-100">
                <span className="px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium bg-black text-white rounded-full">
                  Transparent Pricing
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-2">
                Start-up Friendly Pricing
              </h1>
              <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                We believe great web development shouldn't break the bank. Our flexible packages are designed to grow with your startup.
              </p>
            </div>

            {/* Mobile Title */}
            <div className="md:hidden text-center mb-8">
              <div className="inline-block mb-4 sm:mb-6 p-1.5 sm:p-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-100">
                <span className="px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium bg-black text-white rounded-full">
                  Transparent Pricing
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-3 text-gray-900">
                Our Pricing Plans
              </h1>
              <p className="text-base text-gray-600 px-4">
                Flexible packages designed to grow with your startup
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto w-full">
              {/* Starter Package */}
              <div className="flex flex-col">
                <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Starter Package</h3>
                    <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">£500 - £750</div>
                    <div className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Perfect for MVPs and landing pages</div>
                    <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>3-5 Pages Website</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>Mobile Responsive Design</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>Basic SEO Setup</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>2-3 Weeks Delivery</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Link href="/project-inquiry" className="block w-full">
                      <Button className="w-full bg-black hover:bg-gray-900 text-white font-semibold">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Growth Package */}
              <div className="flex flex-col">
                <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                  <div className="absolute -top-3 md:-top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 md:px-6 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Growth Package</h3>
                    <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">£1,000 - £2,000</div>
                    <div className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">For growing startups</div>
                    <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>5-10 Pages Website</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>Advanced Design Features</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>CMS Integration</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>3-5 Weeks Delivery</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>Advanced SEO Package</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Link href="/project-inquiry" className="block w-full">
                      <Button className="w-full bg-black hover:bg-gray-900 text-white font-semibold">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Scale Package */}
              <div className="flex flex-col">
                <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Scale Package</h3>
                    <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">£2,500+</div>
                    <div className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Complex custom solutions</div>
                    <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>Custom Web Applications</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>E-commerce Solutions</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>Custom Integrations</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>6-12 Weeks Delivery</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm md:text-base">
                        <Check className="text-blue-500 mr-2 flex-shrink-0" size={18} />
                        <span>Premium Support</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
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
            <div className="mt-12 md:mt-20 text-center pb-8 md:pb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Flexible Payment Plans</h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
                We understand startup budgets. That's why we offer flexible payment plans to help you get started. Contact us to discuss your project and find a plan that works for you.
              </p>
              <Link 
                href="/contact" 
                className="inline-block mt-6 md:mt-8 bg-black text-white hover:bg-gray-900 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold rounded-md cursor-pointer transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 