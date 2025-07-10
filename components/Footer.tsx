import Link from 'next/link'
import { Logo } from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white border-t border-gray-800 border-opacity-30" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16">
          {/* Company Info */}
          <div className="md:col-span-6 space-y-8">
            <div className="flex items-center">
              <Logo variant="footer" />
            </div>
            <p className="text-gray-400 font-light leading-relaxed max-w-md tracking-wide">
              We create digital experiences that help startups grow and succeed in today's competitive landscape.
            </p>
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-light mb-2">Email</div>
              <a 
                href="mailto:hello@devora.co.uk" 
                className="text-white hover:text-gray-300 transition-colors font-light text-lg tracking-wide border-b border-white border-opacity-30 pb-1"
              >
                hello@devora.co.uk
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-8">
            <div className="text-sm text-gray-500 uppercase tracking-wider font-light">Navigation</div>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/work", label: "Work" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-3 space-y-8">
            <div className="text-sm text-gray-500 uppercase tracking-wider font-light">Get started</div>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-gray-300 transition-colors font-light tracking-wide border-b border-white border-opacity-30 pb-1"
                >
                  Enquire
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-white transition-colors font-light tracking-wide"
                >
                  Get in touch
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:hello@devora.co.uk" 
                  className="text-gray-400 hover:text-white transition-colors font-light tracking-wide"
                >
                  Send an email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social and legal links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-16 border-t border-gray-800 border-opacity-30">
          {/* Social links */}
          <div className="space-y-4">
            <div className="text-sm text-gray-500 uppercase tracking-wider font-light">Follow us</div>
            <div className="flex gap-8">
              <a 
                href="https://linkedin.com" 
                className="text-gray-400 hover:text-white transition-colors font-light tracking-wide"
                aria-label="Devora on LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com" 
                className="text-gray-400 hover:text-white transition-colors font-light tracking-wide"
                aria-label="Devora on Twitter"
              >
                Twitter
              </a>
              <a 
                href="https://instagram.com" 
                className="text-gray-400 hover:text-white transition-colors font-light tracking-wide"
                aria-label="Devora on Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Legal links */}
          <div className="space-y-4">
            <div className="text-sm text-gray-500 uppercase tracking-wider font-light">Legal</div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors font-light tracking-wide text-sm"
              >
                Terms of Service
              </Link>
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors font-light tracking-wide text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-400 hover:text-white transition-colors font-light tracking-wide text-sm"
              >
                Cookie Policy
              </Link>
              <Link 
                href="/refund-policy" 
                className="text-gray-400 hover:text-white transition-colors font-light tracking-wide text-sm"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-gray-800 border-opacity-30 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-light text-sm tracking-wide">
              © {currentYear} Devora. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
              <span className="text-gray-500 font-light text-sm tracking-wide">
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer