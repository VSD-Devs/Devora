"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-[100dvh] flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/30 z-[1]" aria-hidden="true" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] 
        opacity-5 z-[2]" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-[30] flex-1 flex flex-col pt-32 md:pt-32">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Privacy Policy
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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
              <p className="text-gray-600 mb-8">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-600 mb-8">
                Welcome to Devora. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and protect information that we gather through our website and services.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="text-gray-600 mb-8">
                <li className="mb-2"><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when you fill out contact forms or project inquiry forms.</li>
                <li className="mb-2"><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent on pages, and other browsing patterns.</li>
                <li className="mb-2"><strong>Technical Data:</strong> IP address, browser type and version, operating system, device information, and other technology identifiers.</li>
                <li className="mb-2"><strong>Cookies and Similar Technologies:</strong> Information collected through cookies and similar tracking technologies. For more information, please see our <Link href="/cookies" className="text-blue-600 hover:text-blue-800 underline">Cookie Policy</Link>.</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="text-gray-600 mb-8">
                <li className="mb-2">To provide and maintain our services</li>
                <li className="mb-2">To communicate with you about your project or inquiry</li>
                <li className="mb-2">To improve our website and services</li>
                <li className="mb-2">To send you marketing communications (only with your consent)</li>
                <li className="mb-2">To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">4. Legal Basis for Processing</h2>
              <p className="text-gray-600 mb-8">
                We process your personal data in accordance with the General Data Protection Regulation (GDPR) on the following legal grounds:
              </p>
              <ul className="text-gray-600 mb-8">
                <li className="mb-2"><strong>Contract:</strong> When processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.</li>
                <li className="mb-2"><strong>Legitimate Interest:</strong> When processing is necessary for our legitimate interests, provided those interests do not override your rights and freedoms.</li>
                <li className="mb-2"><strong>Consent:</strong> When you have given us explicit consent to process your data for specific purposes.</li>
                <li className="mb-2"><strong>Legal Obligation:</strong> When processing is necessary to comply with our legal obligations.</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">5. Data Sharing and Third Parties</h2>
              <p className="text-gray-600 mb-8">
                We may share your personal information with:
              </p>
              <ul className="text-gray-600 mb-8">
                <li className="mb-2"><strong>Service Providers:</strong> Third-party vendors who help us operate our business and website.</li>
                <li className="mb-2"><strong>Professional Advisers:</strong> Including lawyers, accountants, and insurers who provide consultancy, legal, insurance, and accounting services.</li>
                <li className="mb-2"><strong>Authorities:</strong> Government bodies, regulators, and other authorities where required by law.</li>
              </ul>
              <p className="text-gray-600 mb-8">
                We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">6. Data Security</h2>
              <p className="text-gray-600 mb-8">
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees, agents, and third parties who have a business need to know.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
              <p className="text-gray-600 mb-8">
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">8. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Under data protection laws, you have rights including:
              </p>
              <ul className="text-gray-600 mb-8">
                <li className="mb-2"><strong>Right to Access:</strong> You can request copies of your personal data.</li>
                <li className="mb-2"><strong>Right to Rectification:</strong> You can request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                <li className="mb-2"><strong>Right to Erasure:</strong> You can request that we erase your personal data, under certain conditions.</li>
                <li className="mb-2"><strong>Right to Restrict Processing:</strong> You can request that we restrict the processing of your personal data, under certain conditions.</li>
                <li className="mb-2"><strong>Right to Object:</strong> You can object to our processing of your personal data, under certain conditions.</li>
                <li className="mb-2"><strong>Right to Data Portability:</strong> You can request that we transfer the data we have collected to another organisation, or directly to you, under certain conditions.</li>
              </ul>
              <p className="text-gray-600 mb-8">
                If you wish to exercise any of these rights, please contact us at <a href="mailto:privacy@devora.co.uk" className="text-blue-600 hover:text-blue-800 underline">privacy@devora.co.uk</a>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-8">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
              <p className="text-gray-600 mb-8">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-gray-600 mb-8">
                <li className="mb-2">By email: <a href="mailto:privacy@devora.co.uk" className="text-blue-600 hover:text-blue-800 underline">privacy@devora.co.uk</a></li>
                <li className="mb-2">By post: Sheffield Science Park, Cooper Buildings, Arundel St, Sheffield City Centre, Sheffield S1 2NS</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 