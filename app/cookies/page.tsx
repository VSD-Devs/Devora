"use client"

import { ArrowRight, Cookie, Shield, CheckCircle2, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CookiesPage() {
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
                <Cookie className="w-5 h-5 text-black mr-2" />
                <span className="text-sm font-medium text-black">Cookie Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Transparent Data Practices
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                We respect your privacy. Here's how we use cookies to improve your experience.
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
              {/* Section 1: What Are Cookies */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/2">
                    <div className="sticky top-8">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mb-4">1</div>
                      <h2 className="text-2xl font-bold mb-4">Understanding Cookies</h2>
                      <div className="prose prose-gray">
                        <p className="text-gray-600">
                          Cookies are small text files stored on your device when you visit our website. They help us:
                        </p>
                        <ul className="mt-6 space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Remember your preferences</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Analyze site performance</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Provide personalized experience</span>
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
                          Think of cookies as your website preferences memory:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-blue-600">1</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Better Experience</strong>
                              We remember your preferences so you don't have to set them every time.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-blue-600">2</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Site Improvement</strong>
                              We learn how people use our site to make it better for everyone.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-blue-600">3</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Your Control</strong>
                              You can always choose which cookies to accept or decline.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Types of Cookies */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/2">
                    <div className="sticky top-8">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold mb-4">2</div>
                      <h2 className="text-2xl font-bold mb-4">Cookie Types</h2>
                      <div className="prose prose-gray">
                        <p className="text-gray-600">
                          We use different types of cookies to optimize your experience:
                        </p>
                        <ul className="mt-6 space-y-3">
                          <li className="flex items-start gap-3">
                            <Lock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Essential cookies for site functionality</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Analytics cookies for improvement</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Cookie className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">Optional preference cookies</span>
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
                          We categorize cookies based on their purpose:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-purple-600">1</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Essential Cookies</strong>
                              Required for basic site functions. You can't disable these as they make the site work.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-purple-600">2</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Analytics Cookies</strong>
                              Help us understand how people use our site so we can make it better.
                            </p>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-sm font-medium text-purple-600">3</span>
                            </div>
                            <p className="text-sm">
                              <strong className="block text-gray-900">Preference Cookies</strong>
                              Remember your settings and choices to personalize your experience.
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
                  <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
                  <p className="text-gray-300 mb-6">
                    Our team is here to explain how we protect your data and respect your privacy.
                  </p>
                  <Button 
                    onClick={() => router.push('/contact')}
                    className="bg-white hover:bg-gray-100 text-black"
                  >
                    Contact Privacy Team <ArrowRight className="ml-2 w-4 h-4" />
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