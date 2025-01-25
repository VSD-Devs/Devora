"use client"

import { ArrowRight, RefreshCcw, Shield, CheckCircle2, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function RefundPolicyPage() {
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
                <RefreshCcw className="w-5 h-5 text-black mr-2" />
                <span className="text-sm font-medium text-black">Refund Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Fair and Transparent Refunds
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                We believe in delivering value. Here's our commitment to your satisfaction.
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
              {/* Section 1: Refund Eligibility */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/2">
                    <div className="sticky top-8">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mb-4">1</div>
                      <h2 className="text-2xl font-bold mb-4">Refund Eligibility</h2>
                      <div className="prose prose-gray">
                        <p className="text-gray-600">
                          Our refund policy is designed to protect both clients and our team:
                        </p>
                        <ul className="mt-6 space-y-3">
                          <li className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Request within 7 days of project start</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Valid for incomplete milestones</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Project-specific assessment</span>
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
                          Here's how our refund process works:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-blue-600">1</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Early Assessment</strong>
                              You have 7 days from project start to request a refund if you're not satisfied.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-blue-600">2</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Milestone-Based</strong>
                              Refunds apply to work not yet completed or delivered.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-blue-600">3</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Fair Evaluation</strong>
                              Each request is reviewed based on project specifics and progress.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Refund Process */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/2">
                    <div className="sticky top-8">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold mb-4">2</div>
                      <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
                      <div className="prose prose-gray">
                        <p className="text-gray-600">
                          Our refund process is straightforward and transparent:
                        </p>
                        <ul className="mt-6 space-y-3">
                          <li className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Processing within 14 business days</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Secure payment handling</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <RefreshCcw className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Original payment method refund</span>
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
                          Here's what happens when you request a refund:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-purple-600">1</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Quick Review</strong>
                              We assess your request and respond within 2 business days.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-purple-600">2</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Safe Processing</strong>
                              Approved refunds are processed securely through your original payment method.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-purple-600">3</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Clear Communication</strong>
                              We keep you informed throughout the entire process.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-black rounded-2xl p-8 text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl font-bold mb-4">Need to Request a Refund?</h2>
                  <p className="text-gray-300 mb-6">
                    Our team is here to help you understand our refund process and handle your request.
                  </p>
                  <Button 
                    onClick={() => router.push('/contact')}
                    className="bg-white hover:bg-gray-100 text-black"
                  >
                    Contact Support Team <ArrowRight className="ml-2 w-4 h-4" />
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