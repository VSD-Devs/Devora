"use client"

import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Scale, 
  Shield, 
  Users, 
  CreditCard, 
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Globe,
  Clock,
  Gavel
} from "lucide-react";
import Link from "next/link";
import Script from 'next/script';

export default function TermsPage() {
  return (
    <>
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - Devora",
            "description": "Devora's terms of service outlining the conditions for using our web development services.",
            "url": "https://www.devora.co.uk/terms"
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
                <Scale className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
                <span className="font-medium">Fair & Transparent Terms</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Please read these terms carefully before using our services. We believe in{" "}
                <span className="text-white font-semibold">clear communication</span> and{" "}
                <span className="text-white font-semibold">fair practices</span>
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
                    { icon: <FileText className="w-4 h-4" />, text: "Agreement to Terms", href: "#agreement" },
                    { icon: <Users className="w-4 h-4" />, text: "User Responsibilities", href: "#responsibilities" },
                    { icon: <CreditCard className="w-4 h-4" />, text: "Payment Terms", href: "#payment" },
                    { icon: <AlertTriangle className="w-4 h-4" />, text: "Limitations", href: "#limitations" }
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
                  
                  <div id="agreement" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                        <Gavel className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">1. Agreement to Terms</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any part of these terms, you may not access our services. These terms apply to all visitors, users, and others who access or use our service.
                    </p>
                  </div>

                  <div id="services" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">2. Services</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      We provide comprehensive web development and design services, including but not limited to:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Website development and design",
                        "UI/UX design services",
                        "Digital marketing solutions",
                        "SEO optimisation",
                        "Website maintenance and support",
                        "Custom web applications"
                      ].map((service, index) => (
                        <div key={index} className="flex items-center p-3 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-lg border border-green-200/30">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="intellectual-property" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">3. Intellectual Property</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl border border-purple-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Our Intellectual Property</h4>
                        <p className="text-slate-600 text-sm">
                          The service and all materials therein, including software, images, text, graphics, logos, patents, trademarks, service marks, copyrights, and all intellectual property rights are the exclusive property of Devora, except where otherwise noted.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl border border-purple-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Client Ownership</h4>
                        <p className="text-slate-600 text-sm">
                          Upon full payment, clients retain ownership of custom content, designs, and code specifically created for their project, subject to any third-party licensing restrictions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="responsibilities" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">4. User Responsibilities</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      As a user of our services, you agree to:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Provide accurate and complete information when requested",
                        "Maintain the confidentiality of your account information",
                        "Notify us immediately of any unauthorised use of your account",
                        "Use our services only for lawful purposes",
                        "Respect intellectual property rights",
                        "Provide timely feedback and approvals during project development"
                      ].map((responsibility, index) => (
                        <div key={index} className="flex items-start p-3 bg-gradient-to-r from-orange-50/50 to-red-50/50 rounded-lg border border-orange-200/30">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="payment" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mr-4">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">5. Payment Terms</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-teal-50/50 to-blue-50/50 rounded-xl border border-teal-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Payment Schedule</h4>
                        <p className="text-slate-600 text-sm">
                          Payment terms are outlined in your individual service agreement. Typically, we require a deposit before work begins, with the remainder due upon project completion.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-teal-50/50 to-blue-50/50 rounded-xl border border-teal-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Late Payments</h4>
                        <p className="text-slate-600 text-sm">
                          Late payments may result in project delays or suspension of services. Additional fees may apply for overdue accounts.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-teal-50/50 to-blue-50/50 rounded-xl border border-teal-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Refunds</h4>
                        <p className="text-slate-600 text-sm">
                          Refund policies are detailed in our separate{" "}
                          <Link href="/refund-policy" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 hover:decoration-blue-500 transition-colors">
                            Refund Policy
                          </Link>. All fees are generally non-refundable unless otherwise specified in writing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="project-scope" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">6. Project Scope and Changes</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-xl border border-indigo-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Scope Definition</h4>
                        <p className="text-slate-600 text-sm">
                          Project scope, deliverables, and timelines are defined in your individual service agreement. We work closely with clients to ensure clear expectations.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-xl border border-indigo-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Scope Changes</h4>
                        <p className="text-slate-600 text-sm">
                          Changes to project scope may result in additional costs and timeline adjustments. All changes must be agreed upon in writing before implementation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="limitations" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">7. Limitation of Liability</h2>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-xl border border-yellow-200/30">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        In no event shall Devora, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                      </p>
                    </div>
                  </div>

                  <div id="warranties" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">8. Warranties and Disclaimers</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-xl border border-pink-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Service Warranty</h4>
                        <p className="text-slate-600 text-sm">
                          We warrant that our services will be performed in a professional manner in accordance with industry standards. We will correct any defects in our work at no additional charge.
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-xl border border-pink-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Disclaimer</h4>
                        <p className="text-slate-600 text-sm">
                          Except as expressly stated, our services are provided "as is" without warranties of any kind, either express or implied.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="termination" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">9. Termination</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Either party may terminate the service agreement with written notice. Upon termination, you will be responsible for payment of all services rendered up to the termination date. We reserve the right to terminate services immediately for breach of these terms.
                    </p>
                  </div>

                  <div id="changes" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">10. Changes to Terms</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      We reserve the right to modify these terms at any time. We will notify users of any significant changes by updating the date at the top of these terms and, where appropriate, providing additional notice through our website or email.
                    </p>
                  </div>

                  <div id="governing-law" className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-slate-500 to-gray-600 flex items-center justify-center mr-4">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">11. Governing Law</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
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
                Questions About Our{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Terms?</span>
              </h2>
              <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
                We believe in clear, fair terms that protect both parties. If you have any questions about our terms of service, we're here to help clarify.
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