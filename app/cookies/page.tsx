"use client"

import { Button } from "@/components/ui/button";
import { 
  Cookie, 
  Settings, 
  BarChart3, 
  Shield, 
  Eye, 
  ArrowRight,
  CheckCircle2,
  Globe,
  Clock,
  Zap
} from "lucide-react";
import Link from "next/link";
import Script from 'next/script';

export default function CookiePolicyPage() {
  return (
    <>
      <Script
        id="cookie-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookie Policy - Devora",
            "description": "Devora's cookie policy explaining how we use cookies to improve your website experience.",
            "url": "https://www.devora.co.uk/cookies"
          })
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating geometric shapes */}
            <div className="absolute top-10 md:top-20 left-5 md:left-10 w-2 md:w-4 h-2 md:h-4 bg-blue-500/30 rotate-45 animate-pulse"></div>
            <div className="absolute top-20 md:top-40 right-10 md:right-20 w-3 md:w-6 h-3 md:h-6 bg-blue-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 md:bottom-40 left-10 md:left-20 w-2 md:w-3 h-2 md:h-3 bg-blue-600/40 rotate-12 animate-pulse"></div>
            
            {/* Dynamic gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-l from-blue-600/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 md:pt-32 pb-8 md:pb-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm mb-6 md:mb-8 shadow-lg">
                <Cookie className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
                <span className="font-medium">Transparent Cookie Usage</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Cookie Policy
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                How we use cookies to improve your experience and provide{" "}
                <span className="text-white font-semibold">better service</span>
              </p>
              
              {/* Last Updated Badge */}
              <div className="inline-flex items-center mt-6 md:mt-8 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Clock className="w-4 h-4 mr-2 text-blue-300" />
                <span className="text-sm text-blue-200">
                  Last Updated: {new Date().toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:80px_80px] animate-pulse"></div>
            <div className="absolute top-0 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-l from-blue-500/15 to-cyan-500/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-blue-600/15 to-indigo-500/10 rounded-[40%_60%_70%_30%/40%_70%_30%_60%] blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Quick Navigation */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-blue-200/50 mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Quick Navigation</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { icon: <Cookie className="w-4 h-4" />, text: "What Are Cookies", href: "#what-are" },
                    { icon: <Eye className="w-4 h-4" />, text: "How We Use Them", href: "#how-we-use" },
                    { icon: <BarChart3 className="w-4 h-4" />, text: "Types of Cookies", href: "#types" },
                    { icon: <Settings className="w-4 h-4" />, text: "Managing Cookies", href: "#managing" }
                  ].map((item, index) => (
                    <a key={index} href={item.href} className="group flex items-center p-3 md:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 border border-blue-200/50 hover:border-blue-300/60">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white mr-3 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-xl border border-blue-200/50">
                <div className="prose prose-lg max-w-none">
                  
                  <div id="what-are" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                        <Cookie className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">What Are Cookies</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience.
                    </p>
                    <div className="p-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl border border-blue-200/30">
                      <div className="flex items-start">
                        <Zap className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Why Cookies Matter</h4>
                          <p className="text-slate-600 text-sm">
                            Cookies help us understand how you use our website, remember your preferences, and provide you with a personalised experience that improves with each visit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="how-we-use" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">How We Use Cookies</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      We use cookies to understand how you use our website and to improve your experience. This includes:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Remembering your preferences and settings",
                        "Understanding how you move around our website",
                        "Keeping you signed in to your account",
                        "Analysing website performance and usage patterns",
                        "Providing personalised content and recommendations",
                        "Improving our services based on user behaviour"
                      ].map((use, index) => (
                        <div key={index} className="flex items-center p-3 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-lg border border-green-200/30">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{use}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="types" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Types of Cookies We Use</h2>
                    </div>
                    <div className="space-y-6">
                      
                      <div className="p-6 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl border border-purple-200/30">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mr-3">
                            <Shield className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900">Essential Cookies</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Security", "Authentication", "Load Balancing", "Basic Functionality"].map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl border border-blue-200/30">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
                            <BarChart3 className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900">Analytics Cookies</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          We use analytics cookies to understand how visitors interact with our website, helping us improve our site and services.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Google Analytics", "Page Views", "User Journey", "Performance Metrics"].map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-xl border border-green-200/30">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-3">
                            <Settings className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900">Functionality Cookies</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          These cookies allow the website to remember choices you make and provide enhanced features and content.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Preferences", "Language Settings", "Region Selection", "Personalisation"].map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-orange-50/50 to-yellow-50/50 rounded-xl border border-orange-200/30">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-3">
                            <Globe className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900">Marketing Cookies</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Advertising", "Retargeting", "Social Media", "Third-party Services"].map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  <div id="third-party" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mr-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Third-Party Cookies</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Some cookies on our site are set by third-party services. These help us provide better functionality and understand how our website is being used.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          service: "Google Analytics",
                          purpose: "Website analytics and performance tracking",
                          type: "Analytics"
                        },
                        {
                          service: "Google Fonts",
                          purpose: "Font delivery and display optimisation",
                          type: "Functionality"
                        },
                        {
                          service: "Social Media Widgets",
                          purpose: "Social sharing and embedded content",
                          type: "Marketing"
                        },
                        {
                          service: "Contact Forms",
                          purpose: "Form functionality and spam protection",
                          type: "Essential"
                        }
                      ].map((item, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-teal-50/50 to-blue-50/50 rounded-xl border border-teal-200/30">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-slate-900">{item.service}</h4>
                            <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                              {item.type}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm">{item.purpose}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="managing" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mr-4">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Managing Cookies</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      You have control over how cookies are used on your device. Here are your options:
                    </p>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-xl border border-indigo-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Browser Settings</h4>
                        <p className="text-slate-600 text-sm">
                          Most web browsers allow you to control cookies through their settings preferences. You can usually find these options in the 'Privacy' or 'Security' section of your browser settings.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-xl border border-indigo-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Cookie Consent</h4>
                        <p className="text-slate-600 text-sm">
                          When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept or reject.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-xl border border-indigo-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Impact of Disabling Cookies</h4>
                        <p className="text-slate-600 text-sm">
                          Please note that limiting cookies may impact your experience of our website. Some features may not work properly or may not be available.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="updates" className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Updates to This Policy</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-white/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Questions About{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Cookies?</span>
              </h2>
              <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
                We're committed to transparency about how we use cookies. If you have any questions about our cookie practices, we're here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-6 text-lg font-semibold shadow-2xl transition-all duration-300">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/project-inquiry">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300">
                    Start Your Project
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