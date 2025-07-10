"use client"

import Link from "next/link";
import Script from 'next/script';

export default function CookiesPage() {
  return (
    <>
      <Script
        id="cookies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookie Policy - Devora",
            "description": "Devora's cookie policy explaining how we use cookies and similar technologies on our website.",
            "url": "https://www.devora.co.uk/cookies"
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
                  <span className="block text-white font-extralight">Cookie</span>
                  <span className="block text-gray-300 font-extralight italic">Policy</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                  This policy explains how we use cookies and similar technologies on our website to improve your experience.
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
                    { text: "What Are Cookies", href: "#what-are-cookies" },
                    { text: "How We Use Cookies", href: "#how-we-use" },
                    { text: "Types of Cookies", href: "#types" },
                    { text: "Managing Cookies", href: "#managing" },
                    { text: "Third-Party Cookies", href: "#third-party" },
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
                
                <div id="what-are-cookies" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">1. What Are Cookies</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>
                      Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                    </p>
                    <p>
                      Cookies do not contain any information that personally identifies you, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
                    </p>
                  </div>
                </div>

                <div id="how-we-use" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">2. How We Use Cookies</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>We use cookies for the following purposes:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• To remember your preferences and settings</li>
                      <li>• To improve the performance of our website</li>
                      <li>• To analyze how our website is used</li>
                      <li>• To provide personalized content and advertisements</li>
                      <li>• To ensure the security of our website</li>
                      <li>• To remember items in your shopping cart (for e-commerce features)</li>
                    </ul>
                  </div>
                </div>

                <div id="types" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">3. Types of Cookies We Use</h2>
                  <div className="space-y-6 text-gray-600 font-light leading-relaxed tracking-wide">
                    
                    <div className="border-l-2 border-gray-200 pl-6">
                      <h3 className="text-xl font-light text-black mb-2 tracking-wide">Essential Cookies</h3>
                      <p>These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.</p>
                    </div>
                    
                    <div className="border-l-2 border-gray-200 pl-6">
                      <h3 className="text-xl font-light text-black mb-2 tracking-wide">Performance Cookies</h3>
                      <p>These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve our website performance.</p>
                    </div>
                    
                    <div className="border-l-2 border-gray-200 pl-6">
                      <h3 className="text-xl font-light text-black mb-2 tracking-wide">Functionality Cookies</h3>
                      <p>These cookies allow the website to remember choices you make and provide enhanced, more personal features.</p>
                    </div>
                    
                    <div className="border-l-2 border-gray-200 pl-6">
                      <h3 className="text-xl font-light text-black mb-2 tracking-wide">Targeting Cookies</h3>
                      <p>These cookies are used to deliver advertisements that are more relevant to you and your interests.</p>
                    </div>
                  </div>
                </div>

                <div id="managing" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">4. Managing Cookies</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>You can control and manage cookies in various ways:</p>
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Browser Settings</h3>
                        <p>Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Cookie Preferences</h3>
                        <p>You can set your cookie preferences when you first visit our website, and you can change these preferences at any time.</p>
                      </div>
                      
                      <div className="border-l-2 border-gray-200 pl-6">
                        <h3 className="text-lg font-light text-black mb-2 tracking-wide">Blocking Cookies</h3>
                        <p>Please note that blocking all cookies will have a negative impact upon the usability of many websites, including this one.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="third-party" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">5. Third-Party Cookies</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>We may use third-party services that place cookies on your device:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Google Analytics - for website analytics</li>
                      <li>• Social media platforms - for social sharing features</li>
                      <li>• Marketing platforms - for advertising and retargeting</li>
                      <li>• Customer support tools - for chat and help features</li>
                    </ul>
                    <p>These third parties have their own privacy policies and cookie policies which govern their use of cookies.</p>
                  </div>
                </div>

                <div id="updates" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">6. Updates to This Policy</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                    </p>
                    <p>
                      Please check this page regularly to stay informed about our use of cookies and related technologies.
                    </p>
                  </div>
                </div>

                <div id="contact" className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light text-black tracking-wide">7. Contact Us</h2>
                  <div className="space-y-4 text-gray-600 font-light leading-relaxed tracking-wide">
                    <p>If you have any questions about our use of cookies, please contact us:</p>
                    <div className="space-y-2">
                      <p>Email: <a href="mailto:hello@devora.co.uk" className="text-black border-b border-black border-opacity-30 hover:border-opacity-100 transition-colors">hello@devora.co.uk</a></p>
                      <p>Address: Sheffield Science Park Cooper Buildings, Arundel St, Sheffield City Centre, Sheffield S1 2NS</p>
                    </div>
                    <p>For more information about our data practices, please see our <Link href="/privacy" className="text-black border-b border-black border-opacity-30 hover:border-opacity-100 transition-colors">Privacy Policy</Link>.</p>
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