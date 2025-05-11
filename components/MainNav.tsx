"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Logo } from "./Logo"
import { Menu, X, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLegalOpen, setIsLegalOpen] = useState(false)
  const legalButtonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  // Keyboard trap for mobile menu
  const navRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ]

  const legalItems = [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
  ]

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    setIsLegalOpen(false)
    router.push(href)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        legalButtonRef.current &&
        !legalButtonRef.current.contains(event.target as Node)
      ) {
        setIsLegalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  // Handle keyboard navigation and focus trap in mobile menu
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }
      
      if (e.key === 'Tab' && navRef.current) {
        const focusableElements = navRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      {/* Navigation Bar - Consistent styling for all pages */}
      <div 
        className="fixed top-0 left-0 right-0 z-50"
        style={isHomePage ? 
          {backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(8px)'} : 
          {backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)'}}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                href="/" 
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                aria-label="Devora - Home"
              >
                <Image
                  src={isHomePage ? "/DEVORA.png" : "/devora-bw.png"}
                  alt=""
                  width={isHomePage ? 220 : 180}
                  height={isHomePage ? 68 : 56}
                  className={`${isHomePage ? 'h-12 sm:h-14' : 'h-10 sm:h-12 md:h-14'} w-auto object-contain`}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <nav 
                className={`${isHomePage ? 'bg-slate-800/80 backdrop-blur-md border border-slate-700/50' : 'bg-white/80 backdrop-blur-md border border-gray-200'} rounded-full px-3 py-1.5`}
                aria-label="Main navigation"
              >
                {menuItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className={`px-5 py-2.5 rounded-full transition-all duration-300 text-base font-medium focus:outline-none focus:ring-2 ${
                      isHomePage 
                        ? 'text-white hover:bg-white/10 focus:ring-white/50' 
                        : 'text-gray-900 hover:bg-gray-100 focus:ring-blue-500/40'
                    } ${pathname === item.href ? isHomePage ? 'bg-white/10' : 'bg-gray-100' : ''}`}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Legal Dropdown */}
                <div className="relative inline-block">
                  <button
                    ref={legalButtonRef}
                    onClick={() => setIsLegalOpen(!isLegalOpen)}
                    className={`px-5 py-2.5 rounded-full transition-all duration-300 text-base font-medium flex items-center gap-1 focus:outline-none focus:ring-2 ${
                      isHomePage 
                        ? 'text-white hover:bg-white/10 focus:ring-white/50' 
                        : 'text-gray-900 hover:bg-gray-100 focus:ring-blue-500/40'
                    }`}
                    aria-expanded={isLegalOpen}
                    aria-haspopup="true"
                  >
                    Legal
                    {isLegalOpen ? (
                      <ChevronUp className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {isLegalOpen && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute right-0 mt-2 rounded-xl overflow-hidden border shadow-lg z-10 ${
                          isHomePage 
                            ? 'bg-slate-800/90 backdrop-blur-md border-slate-700' 
                            : 'bg-white border-gray-200'
                        }`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="legal-menu"
                      >
                        <div className="py-1">
                          {legalItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isHomePage 
                                  ? 'text-gray-200 hover:bg-slate-700 hover:text-white' 
                                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                              } focus:outline-none focus:bg-blue-50 focus:text-blue-600`}
                              onClick={() => setIsLegalOpen(false)}
                              role="menuitem"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
              
              <div className="ml-4">
                <Button 
                  asChild
                  variant={isHomePage ? "secondary" : "default"}
                  className={`${
                    isHomePage 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } px-5 shadow-md`}
                >
                  <Link href="/project-inquiry" className="flex items-center gap-1.5">
                    Start a Project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <Button 
                asChild
                variant={isHomePage ? "secondary" : "default"}
                size="sm"
                className={`${
                  isHomePage 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } hidden sm:flex`}
              >
                <Link href="/project-inquiry" className="flex items-center gap-1">
                  <span className="text-sm">Start a Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Button>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md focus:outline-none focus:ring-2 ${
                  isHomePage 
                    ? 'text-white focus:ring-white/50' 
                    : 'text-gray-900 focus:ring-blue-500'
                }`}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={navRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 top-[57px] z-40 overflow-y-auto md:hidden flex flex-col ${
              isHomePage 
                ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
                : 'bg-white text-gray-900'
            }`}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {isHomePage && (
              <>
                <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] z-0" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-0" />
              </>
            )}
            <div className="px-4 pt-6 pb-6 flex flex-col h-full space-y-6 relative z-[2]">
              <nav className="space-y-1.5 flex-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-4 text-lg font-medium rounded-lg transition-colors ${
                      isHomePage
                        ? pathname === item.href
                          ? 'bg-white/10 text-white'
                          : 'text-white/90 hover:bg-white/5'
                        : pathname === item.href
                          ? 'bg-gray-100 text-blue-600'
                          : 'text-gray-900 hover:bg-gray-50'
                    } focus:outline-none focus:ring-2 ${isHomePage ? 'focus:ring-white/30' : 'focus:ring-blue-500'}`}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Legal section on mobile */}
                <div className={`pt-4 mt-4 border-t ${isHomePage ? 'border-white/10' : 'border-gray-200'}`}>
                  <p className={`px-4 text-sm font-medium uppercase mb-2 ${isHomePage ? 'text-white/50' : 'text-gray-500'}`}>Legal</p>
                  {legalItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-3 text-base rounded-lg focus:outline-none focus:ring-2 ${
                        isHomePage
                          ? 'text-white/80 hover:bg-white/5 focus:ring-white/30'
                          : 'text-gray-800 hover:bg-gray-50 focus:ring-blue-500'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
              
              <div className={`border-t pt-6 ${isHomePage ? 'border-white/10' : 'border-gray-200'}`}>
                <Button
                  asChild
                  className={`w-full py-6 shadow-md text-base ${
                    isHomePage
                      ? 'bg-white hover:bg-gray-100 text-gray-900'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Link href="/project-inquiry" className="flex items-center justify-center gap-2">
                    Start Your Project Today
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                
                <div className="mt-6 flex items-center justify-center space-x-6">
                  <a 
                    href="https://linkedin.com" 
                    className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1`}
                    aria-label="Visit our LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1`}
                    aria-label="Visit our Twitter/X"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:hello@devora.co.uk" 
                    className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1`}
                    aria-label="Send us an email"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 