"use client"

import { Check, ArrowRight, Star, Award, Zap, Crown, Rocket } from "lucide-react"
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
              url: 'https://www.devora.co.uk'
            },
            priceSpecification: [
              {
                '@type': 'UnitPriceSpecification',
                name: 'Starter Package',
                price: '750',
                priceCurrency: 'GBP',
                description: 'Landing page development with basic features',
                unitText: 'per project'
              },
              {
                '@type': 'UnitPriceSpecification',
                name: 'Growth Package',
                price: '2000',
                priceCurrency: 'GBP',
                description: 'Multi-page website with advanced features',
                unitText: 'per project'
              },
              {
                '@type': 'UnitPriceSpecification',
                name: 'Scale Package',
                price: '2500',
                priceCurrency: 'GBP',
                description: 'Full web application development',
                unitText: 'per project'
              }
            ]
          })
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black via-slate-900 to-black text-white py-12 md:py-24 relative overflow-hidden">
          {/* Creative background elements - Simplified for mobile */}
          <div className="absolute inset-0">
            {/* Animated grid - Smaller on mobile */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-pulse"></div>
            
            {/* Floating geometric shapes - Hidden on mobile */}
            <div className="hidden md:block absolute top-20 left-10 w-6 h-6 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
            <div className="hidden md:block absolute top-40 right-20 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce"></div>
            <div className="hidden md:block absolute bottom-40 left-20 w-8 h-8 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
            
            {/* Gradient orbs - Smaller on mobile */}
            <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-l from-blue-600/10 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Enhanced badge */}
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-6 py-3 text-sm text-white mb-8 shadow-lg">
                <Star className="w-4 h-4 mr-2 text-blue-400 animate-pulse" />
                <span className="font-medium">Transparent Pricing</span>
                <div className="ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Startup-Friendly</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h1>
              
              <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
                We believe great web development shouldn't break the bank. Our flexible packages are designed to grow with your startup.
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
                {[
                  { label: "Flexible Payment Plans", value: "100%" },
                  { label: "Satisfaction Guarantee", value: "100%" },
                  { label: "Transparent Pricing", value: "Always" },
                  { label: "No Hidden Fees", value: "Ever" }
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-6 border border-blue-500/20 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                    <div className="text-lg md:text-2xl lg:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                    <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          {/* Creative background elements */}
          <div className="absolute inset-0">
            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-20 right-10 w-8 h-8 border border-blue-400/40 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 border-2 border-cyan-400/50 rounded-full animate-pulse"></div>
            
            {/* Gradient orbs */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Enhanced badge */}
              <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm px-6 py-3 text-sm text-blue-700 mb-8 shadow-lg">
                <Award className="w-4 h-4 mr-2 text-blue-600 animate-pulse" />
                <span className="font-medium">Choose Your Package</span>
                <div className="ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Plans That{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Scale With You</span>
              </h2>
              
              <p className="text-slate-700 text-lg">
                From MVP to enterprise, we have the perfect package for your startup journey
              </p>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
              {/* Starter Package */}
              <div className="group relative">
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200/50 hover:border-blue-400/60 group-hover:scale-105 h-full flex flex-col relative">
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl md:rounded-t-3xl"></div>
                  
                  <div className="mb-4 md:mb-6">
                    <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 shadow-lg border border-blue-400/30 mb-3 md:mb-4">
                      <Rocket className="w-6 md:w-8 h-6 md:h-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 group-hover:text-blue-700 transition-colors">Starter Package</h3>
                    <div className="text-2xl md:text-4xl font-bold mb-2 text-slate-900">£250 - £750</div>
                    <p className="text-sm md:text-base text-slate-600 group-hover:text-slate-700 transition-colors">Perfect for MVPs and landing pages</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {['3-5 Pages Website', 'Mobile Responsive Design', 'Basic SEO Setup', '2-3 Weeks Delivery', 'Basic Analytics'].map((feature, i) => (
                      <li key={i} className="flex items-start text-slate-700 group-hover:text-slate-800 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 shadow-sm mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/project-inquiry" className="block w-full">
                    <Button 
                      className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-xl px-6 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                    </Button>
                  </Link>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Growth Package - Most Popular */}
              <div className="relative">
                {/* Popular badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-xl z-20 animate-pulse">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
                
                <div className="group relative">
                  {/* Enhanced floating accent for popular */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-blue-400/60 hover:border-blue-500/80 group-hover:scale-105 h-full flex flex-col relative">
                    {/* Enhanced gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-t-3xl"></div>
                    
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-600 shadow-lg border border-blue-400/40 mb-4">
                        <Crown className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-blue-700 transition-colors">Growth Package</h3>
                      <div className="text-4xl font-bold mb-2 text-slate-900">£1,000 - £2,000</div>
                      <p className="text-slate-600 group-hover:text-slate-700 transition-colors">For growing startups</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-grow">
                      {[
                        '5-10 Pages Website', 
                        'Advanced Design Features', 
                        'CMS Integration', 
                        '3-5 Weeks Delivery',
                        'Advanced SEO Package',
                        'Performance Optimisation'
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-700 group-hover:text-slate-800 transition-colors">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 shadow-sm mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/project-inquiry" className="block w-full">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-6 py-4 font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                      >
                        Get Started
                      </Button>
                    </Link>
                    
                    {/* Enhanced hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Scale Package */}
              <div className="group relative">
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200/50 hover:border-blue-400/60 group-hover:scale-105 h-full flex flex-col relative">
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl"></div>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 shadow-lg border border-blue-400/30 mb-4">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-blue-700 transition-colors">Scale Package</h3>
                    <div className="text-4xl font-bold mb-2 text-slate-900">£2,500+</div>
                    <p className="text-slate-600 group-hover:text-slate-700 transition-colors">Complex custom solutions</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {[
                      'Custom Web Applications', 
                      'E-commerce Solutions', 
                      'Custom Integrations', 
                      '6-12 Weeks Delivery',
                      'Premium Support',
                      'Dedicated Project Manager'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start text-slate-700 group-hover:text-slate-800 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 shadow-sm mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/project-inquiry" className="block w-full">
                    <Button 
                      className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-xl px-6 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                    </Button>
                  </Link>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Payment Plans Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 relative">
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl"></div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 shadow-lg border border-blue-400/30 mb-6 mx-auto">
                    <Star className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                    Flexible{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Payment Plans</span>
                  </h2>
                  
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                    We understand startup budgets. That's why we offer flexible payment plans to help you get started. Contact us to discuss your project and find a plan that works for you.
                  </p>
                  
                  <Link href="/contact">
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-8 py-4 font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                    >
                      Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden text-white">
          {/* Creative background elements */}
          <div className="absolute inset-0">
            {/* Animated grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white/20 rounded-full animate-spin-slow"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-white/10 rotate-45 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 border border-white/30 rotate-12 animate-pulse"></div>
            
            {/* Gradient orbs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-white/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  {/* Enhanced badge */}
                  <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm text-white mb-8 shadow-lg">
                    <Award className="w-4 h-4 mr-2 text-cyan-300 animate-pulse" />
                    <span className="font-medium">Custom Solutions</span>
                    <div className="ml-3 flex space-x-1">
                      <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-100"></div>
                      <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Need a{" "}
                    <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Custom Solution?</span>
                  </h2>
                  
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Have a project that doesn't fit these packages? We'd love to hear about it and create a custom proposal tailored to your specific needs.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/project-inquiry">
                      <Button 
                        className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 rounded-xl px-8 py-4 font-semibold text-lg shadow-2xl shadow-black/20 transition-all duration-300"
                      >
                        Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button 
                        variant="outline" 
                        className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 rounded-xl px-8 py-4 font-semibold text-lg shadow-xl transition-all duration-300"
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