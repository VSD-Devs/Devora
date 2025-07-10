"use client"

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
            "description": "Devora's refund policy outlining our terms for refunds and cancellations.",
            "url": "https://www.devora.co.uk/refund-policy"
          })
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Ultra Minimalist */}
        <section className="relative min-h-screen bg-black text-white">
          <div className="container mx-auto px-6 py-32">
            <div className="max-w-4xl mx-auto">
              {/* Subtle status indicator */}
              <div className="inline-flex items-center gap-3 mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-400 font-light tracking-wide">Legal</span>
              </div>
              
              {/* Main headline - Ultra clean typography */}
              <div className="mb-16">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                  <span className="block text-white font-extralight">Refund</span>
                  <span className="block text-gray-300 font-extralight italic">Policy</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                  Our refund policy outlines the terms and conditions for refunds and cancellations of our services.
                </p>
              </div>
              
              {/* Last updated */}
              <div className="text-gray-500 font-light text-sm tracking-wide">
                Last updated: {new Date().toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section - Ultra Minimalist */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              {/* Quick Navigation */}
              <div className="mb-20 pb-12 border-b border-gray-100">
                <h2 className="text-2xl font-light text-black mb-8 tracking-wide">Contents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: "Refund Eligibility", href: "#eligibility" },
                    { text: "Refund Process", href: "#process" },
                    { text: "Cancellation Policy", href: "#cancellation" },
                    { text: "Non-Refundable Items", href: "#non-refundable" },
                    { text: "Processing Time", href: "#processing-time" },
                    { text: "Contact Us", href: "#contact" }
                  ].map((item, index) => (
                    <a 
                      key={index} 
                      href={item.href} 
                      className="text-gray-600 hover:text-black transition-colors font-light tracking-wide border-b border-gray-200 border-opacity-30 pb-1 hover:border-black hover:border-opacity-30"
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-20">
                
                <div id="overview" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">Overview</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>
                      At Devora, we strive to provide exceptional web development services and ensure client satisfaction. This refund policy outlines the circumstances under which refunds may be provided.
                    </p>
                    <p>
                      We believe in fair and transparent business practices, and this policy is designed to protect both our clients and our business interests.
                    </p>
                  </div>
                </div>

                <div id="eligibility" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">1. Refund Eligibility</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>Refunds may be considered under the following circumstances:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Services were not delivered as agreed upon in the contract</li>
                      <li>• Technical issues on our end prevented project completion</li>
                      <li>• Client cancellation within 48 hours of contract signing (before work begins)</li>
                      <li>• Mutual agreement between client and Devora to terminate the project</li>
                    </ul>
                    <p>
                      All refund requests must be submitted in writing with detailed justification for the request.
                    </p>
                  </div>
                </div>

                <div id="process" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">2. Refund Process</h2>
                  <div className="space-y-6 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>To request a refund, please follow these steps:</p>
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Step 1: Contact Us</h3>
                        <p>Email us at hello@devora.co.uk with your refund request, including project details and reason for the refund.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Step 2: Review Process</h3>
                        <p>We will review your request within 5 business days and may request additional information or documentation.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Step 3: Decision</h3>
                        <p>You will receive a written response regarding the approval or denial of your refund request.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Step 4: Processing</h3>
                        <p>If approved, the refund will be processed within 10 business days to your original payment method.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="cancellation" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">3. Cancellation Policy</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>Project cancellations are handled as follows:</p>
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Before Work Begins</h3>
                        <p>Full refund available if cancelled within 48 hours of contract signing and before any work has commenced.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Work in Progress</h3>
                        <p>Partial refund may be available based on work completed. You will be charged for completed milestones and any deliverables provided.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Near Completion</h3>
                        <p>If the project is more than 75% complete, no refund will be available as the majority of resources have been invested.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="non-refundable" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">4. Non-Refundable Items</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>The following items are generally non-refundable:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Domain name registrations and renewals</li>
                      <li>• Third-party software licenses and subscriptions</li>
                      <li>• Hosting setup fees and monthly hosting charges</li>
                      <li>• Premium plugins, themes, or stock imagery purchases</li>
                      <li>• Time spent on consultation calls and strategy sessions</li>
                      <li>• Work completed and delivered according to contract specifications</li>
                    </ul>
                    <p>
                      These costs are typically passed through to third parties and cannot be recovered by Devora.
                    </p>
                  </div>
                </div>

                <div id="processing-time" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">5. Processing Time</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>Refund processing times vary by payment method:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Credit/Debit Cards: 5-10 business days</li>
                      <li>• PayPal: 3-5 business days</li>
                      <li>• Bank Transfer: 3-7 business days</li>
                      <li>• Stripe: 5-10 business days</li>
                    </ul>
                    <p>
                      Please note that processing times may vary depending on your bank or payment provider's policies.
                    </p>
                  </div>
                </div>

                <div id="disputes" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">6. Dispute Resolution</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>
                      If you disagree with our refund decision, we encourage open communication to resolve the matter amicably.
                    </p>
                    <p>
                      We are committed to finding fair solutions and maintaining positive client relationships. Please contact us to discuss any concerns.
                    </p>
                  </div>
                </div>

                <div id="changes" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">7. Changes to This Policy</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>
                      We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting on our website.
                    </p>
                    <p>
                      Existing contracts will remain subject to the policy in effect at the time of signing unless otherwise agreed in writing.
                    </p>
                  </div>
                </div>

                <div id="contact" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">8. Contact Us</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>If you have questions about our refund policy or need to request a refund, please contact us:</p>
                    <div className="space-y-2">
                      <p>Email: <a href="mailto:hello@devora.co.uk" className="text-black border-b border-black border-opacity-30 hover:border-opacity-100 transition-colors">hello@devora.co.uk</a></p>
                      <p>Address: Sheffield Science Park Cooper Buildings, Arundel St, Sheffield City Centre, Sheffield S1 2NS</p>
                    </div>
                    <p>For general inquiries about our services, please see our <Link href="/contact" className="text-black border-b border-black border-opacity-30 hover:border-opacity-100 transition-colors">Contact Page</Link>.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 