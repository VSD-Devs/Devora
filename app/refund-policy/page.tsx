"use client"

import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Clock,
  Shield,
  Phone,
  Mail
} from "lucide-react";
import Link from "next/link";
import Script from 'next/script';

export default function RefundPolicyPage() {
  return (
    <>
      <Script
        id="refund-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Refund Policy - Devora",
            "description": "Devora's refund policy outlining our fair and transparent refund practices for web development services.",
            "url": "https://www.devora.co.uk/refund-policy"
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
                <Shield className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
                <span className="font-medium">Fair & Transparent Refunds</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Refund Policy
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Our commitment to fair and transparent refund practices that protect{" "}
                <span className="text-white font-semibold">both parties</span>
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
                    { icon: <RefreshCw className="w-4 h-4" />, text: "Cancellation Policy", href: "#cancellation" },
                    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Service Guarantee", href: "#guarantee" },
                    { icon: <CreditCard className="w-4 h-4" />, text: "Refund Process", href: "#process" },
                    { icon: <XCircle className="w-4 h-4" />, text: "Exceptions", href: "#exceptions" }
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
                  
                  <div id="overview" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Overview</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      At Devora, we strive to ensure complete satisfaction with our services. Our refund policy is designed to be fair to both our clients and our business, whilst maintaining the highest standards of service quality.
                    </p>
                    <div className="p-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl border border-blue-200/30">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Our Commitment</h4>
                          <p className="text-slate-600 text-sm">
                            We're committed to delivering exceptional results and will work with you to address any concerns before considering refunds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="cancellation" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                        <RefreshCw className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Project Cancellation</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      If you need to cancel a project, the following terms apply based on the project stage:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          stage: "Before Project Commencement",
                          refund: "Full refund minus administrative fees",
                          description: "If you cancel before we begin any work on your project",
                          color: "from-green-500 to-emerald-500",
                          bgColor: "from-green-50/50 to-emerald-50/50",
                          borderColor: "border-green-200/30"
                        },
                        {
                          stage: "Initial Planning Phase",
                          refund: "75% refund of total project cost",
                          description: "During strategy, planning, and initial design phases",
                          color: "from-blue-500 to-cyan-500",
                          bgColor: "from-blue-50/50 to-cyan-50/50",
                          borderColor: "border-blue-200/30"
                        },
                        {
                          stage: "Development Phase",
                          refund: "Prorated refund based on work completed",
                          description: "During active development and implementation",
                          color: "from-orange-500 to-yellow-500",
                          bgColor: "from-orange-50/50 to-yellow-50/50",
                          borderColor: "border-orange-200/30"
                        },
                        {
                          stage: "After Project Completion",
                          refund: "No refund available",
                          description: "Once the project has been delivered and approved",
                          color: "from-red-500 to-pink-500",
                          bgColor: "from-red-50/50 to-pink-50/50",
                          borderColor: "border-red-200/30"
                        }
                      ].map((item, index) => (
                        <div key={index} className={`p-4 bg-gradient-to-r ${item.bgColor} rounded-xl border ${item.borderColor}`}>
                          <div className="flex items-start">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mr-3 mt-0.5`}>
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 mb-1">{item.stage}</h4>
                              <p className="text-slate-700 font-medium text-sm mb-1">{item.refund}</p>
                              <p className="text-slate-600 text-sm">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="guarantee" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Service Quality Guarantee</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      If you are not satisfied with our services, we will work with you to address your concerns. This includes:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Revisions as outlined in your service agreement",
                        "Technical support for issues related to our deliverables",
                        "Clear communication throughout the resolution process",
                        "Additional consultations to understand your concerns",
                        "Alternative solutions to meet your requirements",
                        "Escalation to senior team members when needed"
                      ].map((guarantee, index) => (
                        <div key={index} className="flex items-center p-3 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-lg border border-green-200/30">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{guarantee}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="process" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Refund Process</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      To request a refund, please follow these steps:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          step: "1",
                          title: "Contact Our Support Team",
                          description: "Reach out to us with your refund request and provide details about your concerns",
                          timeframe: "Immediate"
                        },
                        {
                          step: "2", 
                          title: "Provide Request Details",
                          description: "Include your project details, reason for refund, and any supporting documentation",
                          timeframe: "Within 24 hours"
                        },
                        {
                          step: "3",
                          title: "Review Process",
                          description: "Our team will review your request and may schedule a call to discuss solutions",
                          timeframe: "Up to 5 business days"
                        },
                        {
                          step: "4",
                          title: "Refund Processing",
                          description: "If approved, refunds will be processed back to your original payment method",
                          timeframe: "Within 10 business days"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl border border-purple-200/30">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4 mt-0.5">
                            <span className="text-white font-bold text-sm">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-slate-900">{item.title}</h4>
                              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                {item.timeframe}
                              </span>
                            </div>
                            <p className="text-slate-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="exceptions" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mr-4">
                        <XCircle className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Exceptions</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Certain situations may not be eligible for refunds:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Completed & Approved Services",
                          description: "Services that have been fully delivered and approved by the client"
                        },
                        {
                          title: "Custom Development Work",
                          description: "Bespoke development work that has been completed to specification"
                        },
                        {
                          title: "Specification Compliance",
                          description: "Instances where project specifications and requirements were met"
                        },
                        {
                          title: "Third-Party Costs",
                          description: "External costs such as domain names, hosting, or third-party licenses"
                        },
                        {
                          title: "Change of Mind",
                          description: "Refunds due to change of business direction after project approval"
                        }
                      ].map((exception, index) => (
                        <div key={index} className="flex items-start p-4 bg-gradient-to-r from-red-50/50 to-pink-50/50 rounded-xl border border-red-200/30">
                          <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">{exception.title}</h4>
                            <p className="text-slate-600 text-sm">{exception.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="dispute-resolution" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Dispute Resolution</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      We believe in resolving issues through open communication. If you have concerns:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-xl border border-indigo-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Direct Communication</h4>
                        <p className="text-slate-600 text-sm mb-3">
                          We encourage direct communication to resolve any issues quickly and effectively.
                        </p>
                        <div className="flex items-center text-sm text-indigo-600">
                          <Phone className="w-4 h-4 mr-2" />
                          Schedule a call with our team
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-xl border border-indigo-200/30">
                        <h4 className="font-semibold text-slate-900 mb-2">Mediation</h4>
                        <p className="text-slate-600 text-sm mb-3">
                          If direct resolution isn't possible, we're open to third-party mediation services.
                        </p>
                        <div className="flex items-center text-sm text-indigo-600">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact us for mediation options
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="contact" className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">Contact Us</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      If you have questions about our refund policy or need to request a refund, please contact our support team:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 rounded-xl border border-cyan-200/30">
                        <div className="flex items-center mb-3">
                          <Mail className="w-5 h-5 text-cyan-600 mr-3" />
                          <h4 className="font-semibold text-slate-900">Email Support</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-2">For refund requests and general enquiries</p>
                        <a href="mailto:support@devora.co.uk" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 hover:decoration-blue-500 transition-colors">
                          support@devora.co.uk
                        </a>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 rounded-xl border border-cyan-200/30">
                        <div className="flex items-center mb-3">
                          <Phone className="w-5 h-5 text-cyan-600 mr-3" />
                          <h4 className="font-semibold text-slate-900">Phone Support</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-2">Speak directly with our team</p>
                        <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 hover:decoration-blue-500 transition-colors">
                          Schedule a call
                        </Link>
                      </div>
                    </div>
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
                <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Refunds?</span>
              </h2>
              <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
                We're here to ensure your satisfaction. If you have any questions about our refund policy or need assistance, don't hesitate to reach out.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-6 text-lg font-semibold shadow-2xl transition-all duration-300">
                    Contact Support
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