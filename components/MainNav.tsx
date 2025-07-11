"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { Logo } from "./Logo"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import WebsiteAuditForm from "./WebsiteAuditForm"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuditOpen, setIsAuditOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  // Hide navigation on project-inquiry pages
  const isProjectInquiry = pathname?.startsWith('/project-inquiry')
  
  // Keyboard trap for mobile menu

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]


  
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

  // Don't render navigation on project-inquiry pages - MOVED AFTER ALL HOOKS
  if (isProjectInquiry) {
    return null
  }

  return (
    <>
      {/* Navigation Bar - Using home page styling for all pages */}
      <div 
        className="fixed top-0 left-0 right-0 z-50"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(8px)'}}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo - Using home page logo for all pages */}
            <div className="flex items-center">
              <Link 
                href="/" 
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                aria-label="Devora - Home"
              >
                <Image
                  src="/DEVORA.png"
                  alt=""
                  width={220}
                  height={68}
                  className="h-12 sm:h-14 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <nav 
                className="bg-black/80 backdrop-blur-md border border-gray-800/50 rounded-full px-3 py-1.5"
                aria-label="Main navigation"
              >
                                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-5 py-2.5 rounded-full transition-all duration-300 text-base font-medium focus:outline-none focus:ring-2 text-white hover:bg-white/10 focus:ring-white/50 ${pathname === item.href ? 'bg-white/10' : ''}`}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="ml-4">
                <Dialog open={isAuditOpen} onOpenChange={setIsAuditOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-blue-600 text-white hover:bg-blue-700 px-5 shadow-md border border-blue-500"
                    >
                      Free Audit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] bg-gray-900 border-gray-700">
                    <WebsiteAuditForm variant="inline" />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Mobile Menu Button and CTA */}
            <div className="md:hidden flex items-center gap-3">
              {/* Mobile CTA Button - Centered */}
              <Dialog open={isAuditOpen} onOpenChange={setIsAuditOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="sm"
                    className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 border border-blue-500"
                  >
                    Free Audit
                  </Button>
                </DialogTrigger>
                <DialogContent className="mx-4 w-[calc(100vw-2rem)] max-w-[500px] bg-gray-900 border-gray-700">
                  <WebsiteAuditForm variant="inline" />
                </DialogContent>
              </Dialog>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 text-white focus:ring-white/50"
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
      {isOpen && (
        <div
          ref={navRef}
          className="fixed inset-0 top-[57px] z-40 overflow-y-auto md:hidden flex flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <>
            <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gray-500/5 rounded-full blur-[120px] z-0" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-gray-400/5 rounded-full blur-[100px] z-0" />
          </>
          <div className="px-4 pt-6 pb-6 flex flex-col h-full space-y-6 relative z-[2]">
            <nav className="space-y-1.5 flex-1">
                            {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-4 text-lg font-medium rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-white/10 text-white'
                      : 'text-white/90 hover:bg-white/5'
                  } focus:outline-none focus:ring-2 focus:ring-white/30`}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="border-t pt-6 border-white/10">
              <div className="flex items-center justify-center space-x-6">
                <a 
                  href="https://linkedin.com" 
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full p-1"
                  aria-label="Visit our LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full p-1"
                  aria-label="Visit our Twitter/X"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a 
                  href="mailto:hello@devora.co.uk" 
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full p-1"
                  aria-label="Send us an email"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 