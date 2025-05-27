import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ChevronRight, ArrowUpRight } from 'lucide-react'
import { Button } from './ui/button'
import { Logo } from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-300 relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" aria-hidden="true" />
      <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px]" aria-hidden="true" />
      <div className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px]" aria-hidden="true" />
      
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center">
              <Logo variant="footer" />
            </div>
            <p className="text-sm md:text-base text-gray-400 max-w-md">
              Empowering startups with innovative, high-quality web development solutions that drive growth and success in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Devora on LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Devora on Facebook">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Devora on Instagram">
                <Instagram size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services#web-development" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  <span>Web Development</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#ui-ux-design" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  <span>UI/UX Design</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#ecommerce" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  <span>E-commerce Solutions</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#seo" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  <span>SEO Optimisation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/#portfolio" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-gray-400">Sheffield Science Park Cooper Buildings, Arundel St, Sheffield City Centre, Sheffield S1 2NS</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:hello@devora.co.uk" className="text-sm text-gray-400 hover:text-white transition-colors">
                  hello@devora.co.uk
                </a>
              </li>
            </ul>
            
            <div className="pt-4">
              <Button 
                asChild
                variant="outline"
                className="bg-transparent border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white hover:bg-blue-950/30 transition-all mt-2"
              >
                <Link href="/project-inquiry" className="flex items-center gap-2">
                  <span>Start Project</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Devora. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 