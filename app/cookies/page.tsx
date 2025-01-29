"use client"

import { motion } from "framer-motion"

export default function CookiePolicyPage() {
  return (
    <section className="min-h-[100dvh] flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/30 z-[1]" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
        opacity-5 z-[2]" 
      />

      <div className="container mx-auto px-4 relative z-[30] flex-1 flex flex-col pt-32 md:pt-32">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Cookie Policy
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            How we use cookies to improve your experience
          </p>
        </div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto w-full mb-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Are Cookies</h2>
              <p className="text-gray-600 mb-8">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
              <p className="text-gray-600 mb-8">
                We use cookies to understand how you use our website and to improve your experience. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Remembering your preferences and settings</li>
                <li>Understanding how you move around our website</li>
                <li>Keeping you signed in to your account</li>
                <li>Analyzing website performance and usage patterns</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Cookies</h3>
              <p className="text-gray-600 mb-6">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Cookies</h3>
              <p className="text-gray-600 mb-6">
                We use analytics cookies to understand how visitors interact with our website, helping us improve our site and services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Functionality Cookies</h3>
              <p className="text-gray-600 mb-8">
                These cookies allow the website to remember choices you make and provide enhanced features and content.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Managing Cookies</h2>
              <p className="text-gray-600 mb-8">
                Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of our website.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 