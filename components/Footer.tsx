import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Devora</h3>
            <p className="text-sm">
              Empowering startups with affordable, high-quality web development solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://facebook.com" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors">
                  Mobile Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-sm">Sheffield Science Park Cooper Buildings, Arundel St, Sheffield City Centre, Sheffield S1 2NS</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-sm">+61 XXX XXX ]XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-sm">hello@devora.dev</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Devora. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 