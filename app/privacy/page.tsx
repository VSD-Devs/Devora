"use client"

import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Mail, 
  ArrowRight,
  CheckCircle2,
  Globe,
  Users,
  Clock
} from "lucide-react";
import Link from "next/link";
import Script from 'next/script';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script
        id="privacy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - Devora",
            "description": "Devora's privacy policy outlining how we collect, use, and protect your personal information.",
            "url": "https://www.devora.co.uk/privacy"
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
                <span className="font-medium">Your Privacy Matters</span>
                <div className="ml-2 md:ml-3 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your information with{" "}
                <span className="text-white font-semibold">complete transparency</span>
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
                    { icon: <FileText className="w-4 h-4" />, text: "Information We Collect", href: "#collect" },
                    { icon: <Eye className="w-4 h-4" />, text: "How We Use Data", href: "#use" },
                    { icon: <Users className="w-4 h-4" />, text: "Data Sharing", href: "#sharing" },
                    { icon: <Shield className="w-4 h-4" />, text: "Your Rights", href: "#rights" }
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
                  
                  <div id="introduction" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">1. Introduction</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Welcome to Devora. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and protect information that we gather through our website and services. We believe in complete transparency about how your data is handled.
                    </p>
                  </div>

                  <div id="collect" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">2. Information We Collect</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      We may collect the following types of information:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Personal Information",
                          description: "Name, email address, phone number, and other contact details you provide when you fill out contact forms or project inquiry forms."
                        },
                        {
                          title: "Usage Data",
                          description: "Information about how you interact with our website, including pages visited, time spent on pages, and other browsing patterns."
                        },
                        {
                          title: "Technical Data",
                          description: "IP address, browser type and version, operating system, device information, and other technology identifiers."
                        },
                        {
                          title: "Cookies and Similar Technologies",
                          description: "Information collected through cookies and similar tracking technologies."
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start p-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl border border-blue-200/30">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                            <p className="text-slate-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-600 mt-4">
                      For more information about cookies, please see our{" "}
                      <Link href="/cookies" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 hover:decoration-blue-500 transition-colors">
                        Cookie Policy
                      </Link>.
                    </p>
                  </div>

                  <div id="use" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">3. How We Use Your Information</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      We use your information for the following purposes:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "To provide and maintain our services",
                        "To communicate with you about your project or inquiry",
                        "To improve our website and services",
                        "To send you marketing communications (only with your consent)",
                        "To comply with legal obligations",
                        "To protect against fraud and abuse"
                      ].map((purpose, index) => (
                        <div key={index} className="flex items-center p-3 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-lg border border-purple-200/30">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 mr-3 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{purpose}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="legal-basis" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">4. Legal Basis for Processing</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      We process your personal data in accordance with the General Data Protection Regulation (GDPR) on the following legal grounds:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Contract",
                          description: "When processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract."
                        },
                        {
                          title: "Legitimate Interest",
                          description: "When processing is necessary for our legitimate interests, provided those interests do not override your rights and freedoms."
                        },
                        {
                          title: "Consent",
                          description: "When you have given us explicit consent to process your data for specific purposes."
                        },
                        {
                          title: "Legal Obligation",
                          description: "When processing is necessary to comply with our legal obligations."
                        }
                      ].map((basis, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-orange-50/50 to-red-50/50 rounded-xl border border-orange-200/30">
                          <h4 className="font-semibold text-slate-900 mb-2">{basis.title}</h4>
                          <p className="text-slate-600 text-sm">{basis.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="sharing" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">5. Data Sharing and Third Parties</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      We may share your personal information with:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Service Providers",
                          description: "Third-party vendors who help us operate our business and website."
                        },
                        {
                          title: "Professional Advisers",
                          description: "Including lawyers, accountants, and insurers who provide consultancy, legal, insurance, and accounting services."
                        },
                        {
                          title: "Authorities",
                          description: "Government bodies, regulators, and other authorities where required by law."
                        }
                      ].map((party, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-teal-50/50 to-blue-50/50 rounded-xl border border-teal-200/30">
                          <h4 className="font-semibold text-slate-900 mb-2">{party.title}</h4>
                          <p className="text-slate-600 text-sm">{party.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl border border-blue-300/50">
                      <p className="text-slate-700 text-sm font-medium">
                        <Shield className="w-4 h-4 inline mr-2 text-blue-600" />
                        We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
                      </p>
                    </div>
                  </div>

                  <div id="security" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mr-4">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">6. Data Security</h2>
                    </div>
                    <p className="text-slate-600">
                      We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees, agents, and third parties who have a business need to know.
                    </p>
                  </div>

                  <div id="retention" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">7. Data Retention</h2>
                    </div>
                    <p className="text-slate-600">
                      We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                    </p>
                  </div>

                  <div id="rights" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">8. Your Rights</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Under data protection laws, you have rights including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          title: "Right to Access",
                          description: "You can request copies of your personal data."
                        },
                        {
                          title: "Right to Rectification",
                          description: "You can request that we correct any information you believe is inaccurate."
                        },
                        {
                          title: "Right to Erasure",
                          description: "You can request that we erase your personal data, under certain conditions."
                        },
                        {
                          title: "Right to Restrict Processing",
                          description: "You can request that we restrict the processing of your personal data."
                        },
                        {
                          title: "Right to Object",
                          description: "You can object to our processing of your personal data."
                        },
                        {
                          title: "Right to Data Portability",
                          description: "You can request that we transfer your data to another organisation."
                        }
                      ].map((right, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-xl border border-pink-200/30">
                          <h4 className="font-semibold text-slate-900 mb-2">{right.title}</h4>
                          <p className="text-slate-600 text-sm">{right.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl border border-blue-300/50">
                      <p className="text-slate-700 text-sm">
                        If you wish to exercise any of these rights, please contact us at{" "}
                        <a href="mailto:privacy@devora.co.uk" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 hover:decoration-blue-500 transition-colors">
                          privacy@devora.co.uk
                        </a>
                      </p>
                    </div>
                  </div>

                  <div id="changes" className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">9. Changes to This Privacy Policy</h2>
                    </div>
                    <p className="text-slate-600">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
                    </p>
                  </div>

                  <div id="contact" className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-0">10. Contact Us</h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center p-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-xl border border-green-200/30">
                        <Mail className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <span className="text-slate-700 font-medium">Email: </span>
                          <a href="mailto:privacy@devora.co.uk" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 hover:decoration-blue-500 transition-colors">
                            privacy@devora.co.uk
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start p-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-xl border border-green-200/30">
                        <Globe className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <span className="text-slate-700 font-medium">Address: </span>
                          <span className="text-slate-600">Sheffield Science Park, Cooper Buildings, Arundel St, Sheffield City Centre, Sheffield S1 2NS</span>
                        </div>
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
                Questions About Your{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">Privacy?</span>
              </h2>
              <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
                We're committed to transparency and protecting your data. If you have any questions about our privacy practices, we're here to help.
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