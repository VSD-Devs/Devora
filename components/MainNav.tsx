"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Logo } from "./Logo"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLegalOpen, setIsLegalOpen] = useState(false)
  const legalButtonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ]

  const legalItems = [
    { href: "/terms", label: "Terms of Service" },
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

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 ${!isHomePage ? 'bg-white/80 backdrop-blur-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo - Desktop Only */}
            <div className="hidden md:block">
              <Link href="/">
                <Image
                  src={isHomePage ? "/DEVORA.png" : "/DEVORA BW.png"}
                  alt="Devora"
                  width={220}
                  height={68}
                  className={`${isHomePage ? 'h-14' : 'h-16'} w-auto`}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className={`${isHomePage ? 'bg-black/30 backdrop-blur-md border border-white/10' : 'bg-white/80 backdrop-blur-md border border-gray-200'} rounded-full px-3 py-1.5`}>
                {menuItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className={`px-6 py-3 rounded-full transition-all duration-300 text-base font-medium hover:scale-105 ${
                      isHomePage 
                        ? 'text-white hover:bg-white/20' 
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Legal Dropdown */}
                <div className="relative inline-block">
                  <button
                    ref={legalButtonRef}
                    onClick={() => setIsLegalOpen(!isLegalOpen)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 text-base font-medium hover:scale-105 flex items-center ${
                      isHomePage 
                        ? 'text-white hover:bg-white/20' 
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    Legal 
                    <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isLegalOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isLegalOpen && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute right-0 mt-2 w-[240px] rounded-xl shadow-2xl ${
                          isHomePage 
                            ? 'bg-black/95 backdrop-blur-lg ring-1 ring-white/10' 
                            : 'bg-white/95 backdrop-blur-lg border border-gray-200'
                        }`}
                        style={{ 
                          transformOrigin: 'top right',
                        }}
                      >
                        <div className="py-2 px-2">
                          {legalItems.map((item, index) => (
                            <div key={item.href}>
                              <Link
                                href={item.href}
                                className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                                  isHomePage 
                                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                                    : 'text-black hover:text-black hover:bg-gray-100'
                                }`}
                                onClick={() => setIsLegalOpen(false)}
                              >
                                {item.label}
                              </Link>
                              {index < legalItems.length - 1 && (
                                <div className={`mx-2 my-1 h-px ${isHomePage ? 'bg-white/10' : 'bg-gray-200'}`} />
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Contact Button - Desktop */}
            <Link href="/contact" className="hidden md:block">
              <Button className={`${
                isHomePage 
                  ? 'bg-white hover:bg-gray-100 text-black' 
                  : 'bg-black hover:bg-gray-900 text-white'
              } px-8 py-5 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}>
                Contact Us
              </Button>
            </Link>

            {/* Mobile Logo */}
            <div className="md:hidden">
              <Link href="/">
                <Image
                  src={isHomePage ? "/DEVORA.png" : "/DEVORA BW.png"}
                  alt="Devora"
                  width={220}
                  height={68}
                  className={`${isHomePage ? 'h-10' : 'h-12'} w-auto`}
                  priority
                />
              </Link>
            </div>

            {/* Hamburger Menu - Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 transition-colors ${
                isHomePage 
                  ? "text-white hover:bg-white/10 rounded-lg" 
                  : "text-black hover:text-gray-700"
              }`}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-5">
                  {menuItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavigation(item.href)}
                      className="text-left text-white hover:text-gray-300 py-3 text-xl font-medium transition-colors hover:pl-2 duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="h-px bg-gray-800 my-4" />
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider pl-2">Legal</p>
                    {legalItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left text-gray-400 hover:text-gray-300 py-2 text-sm font-medium transition-colors hover:pl-2 duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="w-full"
                  >
                    <div className="bg-white hover:bg-gray-100 text-black py-6 text-lg transition-colors rounded-lg">
                      Contact Us
                    </div>
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
} 