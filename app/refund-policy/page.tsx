"use client"

import { motion } from "framer-motion"

export default function RefundPolicyPage() {
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
            Refund Policy
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our commitment to fair and transparent refund practices
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-600 mb-8">
                At Devora, we strive to ensure complete satisfaction with our services. Our refund policy is designed to be fair to both our clients and our business, while maintaining the highest standards of service quality.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Project Cancellation</h2>
              <p className="text-gray-600 mb-8">
                If you need to cancel a project, the following terms apply:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Cancellation before project commencement: Full refund minus any administrative fees</li>
                <li>Cancellation during initial planning phase: 75% refund of the total project cost</li>
                <li>Cancellation during development phase: Refund will be prorated based on work completed</li>
                <li>Cancellation after project completion: No refund available</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Service Quality Guarantee</h2>
              <p className="text-gray-600 mb-8">
                If you are not satisfied with our services, we will work with you to address your concerns. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Revisions as outlined in your service agreement</li>
                <li>Technical support for issues related to our deliverables</li>
                <li>Clear communication throughout the resolution process</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Refund Process</h2>
              <p className="text-gray-600 mb-8">
                To request a refund:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 mb-8">
                <li>Contact our support team with your request</li>
                <li>Provide details about your reason for requesting a refund</li>
                <li>Allow up to 5 business days for our team to review your request</li>
                <li>If approved, refunds will be processed within 10 business days</li>
              </ol>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Exceptions</h2>
              <p className="text-gray-600 mb-8">
                Certain situations may not be eligible for refunds:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Services that have been fully delivered and approved</li>
                <li>Custom development work that has been completed</li>
                <li>Instances where project specifications were met</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about our refund policy or need to request a refund, please contact our support team. We're here to help ensure your satisfaction with our services.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 