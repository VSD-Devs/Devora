"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Please read these terms carefully before using our services.
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-8">
                By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">2. Services</h2>
              <p className="text-gray-600 mb-8">
                We provide web development and design services. Our services include but are not limited to website development, UI/UX design, and digital marketing solutions.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">3. Intellectual Property</h2>
              <p className="text-gray-600 mb-8">
                The service and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, music and all Intellectual Property Rights related thereto, are the exclusive property of Devora.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
              <p className="text-gray-600 mb-8">
                You are responsible for providing accurate information and maintaining the confidentiality of your account information. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
              <p className="text-gray-600 mb-8">
                Payment terms are outlined in your service agreement. All fees are non-refundable unless otherwise specified in writing.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-8">
                In no event shall Devora, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">7. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of these terms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 