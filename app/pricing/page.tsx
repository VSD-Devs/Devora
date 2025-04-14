"use client"

import { Check, ArrowRight } from "lucide-react"
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
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Subtle background texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
          
          {/* Subtle gradient orbs */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] z-0" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-0" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-[3]">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm mb-6">
                <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
                <span>Transparent pricing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Start-up Friendly</span>
                <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent"> Pricing</span>
              </h1>
              
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
                We believe great web development shouldn't break the bank. Our flexible packages are designed to grow with your startup.
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                {[
                  { label: "Flexible Payment Plans", value: "100%" },
                  { label: "Satisfaction Guarantee", value: "100%" },
                  { label: "Transparent Pricing", value: "Always" },
                  { label: "No Hidden Fees", value: "Ever" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                    <div className="text-2xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
          <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] z-0" />
          <div className="absolute bottom-20 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] z-0" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-[3]">
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
              {/* Starter Package */}
              <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/70 to-teal-400/70"></div>
                
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900">Starter Package</h3>
                  <div className="text-3xl font-bold mb-4 text-slate-900">£250 - £750</div>
                  <p className="text-slate-600 mb-6 text-sm">Perfect for MVPs and landing pages</p>
                  
                  <ul className="space-y-3 mb-6">
                    {['3-5 Pages Website', 'Mobile Responsive Design', 'Basic SEO Setup', '2-3 Weeks Delivery'].map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <Check className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 md:p-8 pt-0 mt-auto">
                  <Link href="/project-inquiry" className="block w-full">
                    <Button 
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6 py-4 font-medium"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Growth Package Container */}
              <div className="relative">
                {/* Popular tag - moved completely outside */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-md z-20">
                  Most Popular
                </div>
                
                {/* Card content */}
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
                  {/* Subtle gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/70 to-teal-500/70"></div>
                  
                  <div className="p-6 md:p-8 flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900">Growth Package</h3>
                    <div className="text-3xl font-bold mb-4 text-slate-900">£1,000 - £2,000</div>
                    <p className="text-slate-600 mb-6 text-sm">For growing startups</p>
                    
                    <ul className="space-y-3 mb-6">
                      {[
                        '5-10 Pages Website', 
                        'Advanced Design Features', 
                        'CMS Integration', 
                        '3-5 Weeks Delivery',
                        'Advanced SEO Package'
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-700">
                          <Check className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6 md:p-8 pt-0 mt-auto">
                    <Link href="/project-inquiry" className="block w-full">
                      <Button 
                        variant="gradient"
                        className="w-full rounded-xl px-6 py-4 font-medium"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Scale Package */}
              <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/70 to-teal-400/70"></div>
                
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900">Scale Package</h3>
                  <div className="text-3xl font-bold mb-4 text-slate-900">£2,500+</div>
                  <p className="text-slate-600 mb-6 text-sm">Complex custom solutions</p>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      'Custom Web Applications', 
                      'E-commerce Solutions', 
                      'Custom Integrations', 
                      '6-12 Weeks Delivery',
                      'Premium Support'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <Check className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 md:p-8 pt-0 mt-auto">
                  <Link href="/project-inquiry" className="block w-full">
                    <Button 
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6 py-4 font-medium"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                  Flexible <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Payment Plans</span>
                </h2>
                
                <p className="text-slate-600 mb-8">
                  We understand startup budgets. That's why we offer flexible payment plans to help you get started. Contact us to discuss your project and find a plan that works for you.
                </p>
                
                <Link href="/contact">
                  <Button 
                    variant="gradient"
                    className="rounded-xl px-6 py-4 font-medium"
                  >
                    Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-teal-400 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.05] z-[1]" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-[100px] z-0" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-[3]">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Need a Custom Solution?
                  </h2>
                  
                  <p className="text-white/80 text-lg mb-8">
                    Have a project that doesn't fit these packages? We'd love to hear about it and create a custom proposal tailored to your specific needs.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/project-inquiry">
                      <Button 
                        className="bg-white text-blue-600 hover:bg-white/90 rounded-xl px-6 py-6 font-medium text-base shadow-lg hover:shadow-xl transition-all"
                      >
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button 
                        variant="outlineWhite" 
                        className="rounded-xl px-6 py-6 font-medium text-base backdrop-blur-sm"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 