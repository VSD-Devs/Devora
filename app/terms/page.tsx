"use client"

import Link from "next/link";
import Script from 'next/script';

export default function TermsPage() {
  return (
    <>
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - Devora",
            "description": "Devora's terms of service outlining the conditions for using our web development services.",
            "url": "https://www.devora.co.uk/terms"
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
                  <span className="block text-white font-extralight">Terms of</span>
                  <span className="block text-gray-300 font-extralight italic">Service</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                  Please read these terms carefully before using our services. We believe in clear communication and fair practices.
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
                    { text: "Agreement to Terms", href: "#agreement" },
                    { text: "Services", href: "#services" },
                    { text: "User Responsibilities", href: "#responsibilities" },
                    { text: "Payment Terms", href: "#payment" },
                    { text: "Intellectual Property", href: "#intellectual-property" },
                    { text: "Limitations", href: "#limitations" }
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
                
                <div id="agreement" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">1. Agreement to Terms</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>
                      By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any part of these terms, you may not access our services.
                    </p>
                    <p>
                      These terms apply to all visitors, users, and others who access or use our service.
                    </p>
                  </div>
                </div>

                <div id="services" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">2. Services</h2>
                  <div className="space-y-6 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>We provide comprehensive web development and design services, including but not limited to:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-2 border-gray-200 pl-6">
                        <p>• Website development and design</p>
                      </div>
                      <div className="border-l-2 border-gray-200 pl-6">
                        <p>• UI/UX design services</p>
                      </div>
                      <div className="border-l-2 border-gray-200 pl-6">
                        <p>• E-commerce solutions</p>
                      </div>
                      <div className="border-l-2 border-gray-200 pl-6">
                        <p>• SEO optimisation</p>
                      </div>
                      <div className="border-l-2 border-gray-200 pl-6">
                        <p>• Website maintenance and support</p>
                      </div>
                      <div className="border-l-2 border-gray-200 pl-6">
                        <p>• Custom web applications</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="intellectual-property" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">3. Intellectual Property</h2>
                  <div className="space-y-6 text-gray-600 font-light leading-relaxed tracking-wide">
                    <div className="border-l-2 border-gray-200 pl-6">
                      <h3 className="text-xl font-light text-black mb-2 tracking-wide">Our Intellectual Property</h3>
                      <p>The service and all materials therein, including software, images, text, graphics, logos, patents, trademarks, service marks, copyrights, and all intellectual property rights are the exclusive property of Devora, except where otherwise noted.</p>
                    </div>
                    
                    <div className="border-l-2 border-gray-200 pl-6">
                      <h3 className="text-xl font-light text-black mb-2 tracking-wide">Client Ownership</h3>
                      <p>Upon full payment, clients retain ownership of custom content, designs, and code specifically created for their project, subject to any third-party licensing restrictions.</p>
                    </div>
                  </div>
                </div>

                <div id="responsibilities" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">4. User Responsibilities</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>As a user of our services, you agree to:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Provide accurate and complete information</li>
                      <li>• Use our services only for lawful purposes</li>
                      <li>• Not interfere with or disrupt our services</li>
                      <li>• Respect intellectual property rights</li>
                      <li>• Maintain the confidentiality of your account</li>
                      <li>• Notify us of any security breaches</li>
                    </ul>
                  </div>
                </div>

                <div id="payment" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">5. Payment Terms</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>Our payment terms are as follows:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• All fees are quoted in British Pounds (GBP)</li>
                      <li>• Payment is typically required 50% upfront, 50% on completion</li>
                      <li>• Late payments may incur additional charges</li>
                      <li>• Refunds are subject to our <Link href="/refund-policy" className="text-black border-b border-black border-opacity-30 hover:border-opacity-100 transition-colors">Refund Policy</Link></li>
                      <li>• We reserve the right to suspend services for non-payment</li>
                    </ul>
                  </div>
                </div>

                <div id="limitations" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">6. Limitations of Liability</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>To the maximum extent permitted by law:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• We shall not be liable for any indirect, incidental, or consequential damages</li>
                      <li>• Our total liability shall not exceed the amount paid for our services</li>
                      <li>• We do not warrant that our services will be uninterrupted or error-free</li>
                      <li>• We are not responsible for third-party content or services</li>
                    </ul>
                  </div>
                </div>

                <div id="termination" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">7. Termination</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>Either party may terminate these terms:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• With written notice for convenience</li>
                      <li>• Immediately for breach of these terms</li>
                      <li>• For non-payment of fees</li>
                    </ul>
                    <p>Upon termination, all rights and obligations shall cease, except those that by their nature should survive.</p>
                  </div>
                </div>

                <div id="contact" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">8. Contact Us</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>If you have any questions about these Terms of Service, please contact us:</p>
                    <div className="space-y-2">
                      <p>Email: <a href="mailto:hello@devora.co.uk" className="text-black border-b border-black border-opacity-30 hover:border-opacity-100 transition-colors">hello@devora.co.uk</a></p>
                      <p>Address: Sheffield Science Park Cooper Buildings, Arundel St, Sheffield City Centre, Sheffield S1 2NS</p>
                    </div>
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