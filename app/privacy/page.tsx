"use client"

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
                  <span className="block text-white font-extralight">Privacy</span>
                  <span className="block text-gray-300 font-extralight italic">Policy</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                  Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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
                    { text: "Information We Collect", href: "#collect" },
                    { text: "How We Use Data", href: "#use" },
                    { text: "Data Sharing", href: "#sharing" },
                    { text: "Your Rights", href: "#rights" },
                    { text: "Data Security", href: "#security" },
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
                
                <div id="introduction" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">1. Introduction</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>
                      Welcome to Devora. We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and protect information that we gather through our website and services.
                    </p>
                    <p>
                      We believe in complete transparency about how your data is handled and your rights regarding that data.
                    </p>
                  </div>
                </div>

                <div id="collect" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">2. Information We Collect</h2>
                  <div className="space-y-6 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>We may collect the following types of information:</p>
                    
                    <div className="space-y-6">
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-xl font-light text-black mb-2 tracking-wide">Personal Information</h3>
                        <p>Name, email address, phone number, and other contact details you provide when you fill out contact forms or project inquiry forms.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-xl font-light text-black mb-2 tracking-wide">Usage Data</h3>
                        <p>Information about how you interact with our website, including pages visited, time spent on pages, and other browsing patterns.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-xl font-light text-black mb-2 tracking-wide">Technical Data</h3>
                        <p>IP address, browser type and version, operating system, device information, and other technology identifiers.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-xl font-light text-black mb-2 tracking-wide">Cookies and Similar Technologies</h3>
                        <p>Information collected through cookies and similar tracking technologies. For more information about cookies, please see our <Link href="/cookies" className="text-black border-b border-black border-opacity-30 hover:border-opacity-100 transition-colors">Cookie Policy</Link>.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="use" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">3. How We Use Your Information</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>We use your information for the following purposes:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• To provide and maintain our services</li>
                      <li>• To communicate with you about your project or inquiry</li>
                      <li>• To improve our website and services</li>
                      <li>• To analyze usage patterns and trends</li>
                      <li>• To ensure security and prevent fraud</li>
                      <li>• To comply with legal obligations</li>
                    </ul>
                  </div>
                </div>

                <div id="sharing" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">4. Data Sharing</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• With your explicit consent</li>
                      <li>• To comply with legal requirements</li>
                      <li>• To protect our rights, property, or safety</li>
                      <li>• With trusted service providers who assist us in operating our website</li>
                    </ul>
                  </div>
                </div>

                <div id="rights" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">5. Your Rights</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>Under UK GDPR, you have the following rights regarding your personal data:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Right to access your personal data</li>
                      <li>• Right to rectify inaccurate data</li>
                      <li>• Right to erase your personal data</li>
                      <li>• Right to restrict processing</li>
                      <li>• Right to data portability</li>
                      <li>• Right to object to processing</li>
                    </ul>
                  </div>
                </div>

                <div id="security" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">6. Data Security</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>
                    <p>However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                  </div>
                </div>

                <div id="contact" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">7. Contact Us</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
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