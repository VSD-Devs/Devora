"use client"

import { ArrowRight, Shield, Scale, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function TermsPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 relative">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-b from-white/50 to-white/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" />
      
      {/* Dark overlay for nav */}
      <div className="fixed inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-900/60 via-gray-900/1 to-transparent z-[1]" />

      {/* Content wrapper */}
      <div className="relative z-[2] pt-40">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-black/5 backdrop-blur-sm rounded-full border border-black/10 mb-6">
                <Scale className="w-5 h-5 text-black mr-2" />
                <span className="text-sm font-medium text-black">Terms of Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Simple, Fair and Clear Terms
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                We believe in transparency. Here's everything you need to know about working with us.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Section 1: Agreement */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/2">
                    <div className="sticky top-8">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mb-4">1</div>
                      <h2 className="text-2xl font-bold mb-4">The Agreement</h2>
                      <div className="prose prose-gray">
                        <p className="text-gray-600">
                          By engaging our services, you agree to these terms. This agreement is between you ("the Client") and Devora ("we," "us," or "our").
                        </p>
                        <ul className="mt-6 space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Clear project scope and deliverables</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Transparent pricing and payment terms</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Protected intellectual property rights</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h3 className="text-lg font-semibold mb-4">What This Means</h3>
                      <div className="space-y-6 text-gray-600">
                        <p>
                          Think of this as our handshake agreement. When you choose to work with us:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-blue-600">1</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Project Clarity</strong>
                              We'll define exactly what we're building, how we'll build it, and when we'll deliver it.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-blue-600">2</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Fair Pricing</strong>
                              You'll know exactly what you're paying for, with no hidden fees or surprises.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-blue-600">3</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Your Rights</strong>
                              Once paid in full, you own all custom code and design work we create for you.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Services */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/2">
                    <div className="sticky top-8">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold mb-4">2</div>
                      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                      <div className="prose prose-gray">
                        <p className="text-gray-600">
                          We specialise in creating modern, high-performance websites and web-applications for startups and growing businesses.
                        </p>
                        <ul className="mt-6 space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Custom web development</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">UI/UX design</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Ongoing maintenance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h3 className="text-lg font-semibold mb-4">What This Means</h3>
                      <div className="space-y-6 text-gray-600">
                        <p>
                          We're your digital partner, handling everything from design to deployment:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-purple-600">1</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Full Service</strong>
                              We handle design, development, testing, and deployment – everything you need to get your project live.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-purple-600">2</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Quality First</strong>
                              We use modern technologies and best practices to ensure your project is fast, secure, and scalable.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-purple-600">3</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Ongoing Support</strong>
                              We don't just build and leave – we offer maintenance plans to keep your site running smoothly.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue with more sections... */}

              {/* Contact Section */}
              <div className="bg-black rounded-2xl p-8 text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
                  <p className="text-gray-300 mb-6">
                    Our team is here to walk you through any part of our terms and answer your questions.
                  </p>
                  <Button 
                    onClick={() => router.push('/contact')}
                    className="bg-white hover:bg-gray-100 text-black"
                  >
                    Schedule a Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 