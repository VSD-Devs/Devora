"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Logo } from "./Logo"
import { Menu, X, ChevronDown } from "lucide-react"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLegalOpen, setIsLegalOpen] = useState(false)
  const legalButtonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

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
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-8">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="bg-black/30 backdrop-blur-md rounded-full px-3 py-2 border border-white/10">
                {menuItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className="px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 text-base font-medium text-white hover:scale-105"
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Legal Dropdown */}
                <div className="relative inline-block">
                  <button
                    ref={legalButtonRef}
                    onClick={() => setIsLegalOpen(!isLegalOpen)}
                    className="px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 text-base font-medium text-white hover:scale-105 flex items-center"
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
                        className="absolute right-0 mt-2 w-[240px] rounded-xl bg-black/95 backdrop-blur-lg shadow-2xl ring-1 ring-white/10"
                        style={{ 
                          transformOrigin: 'top right',
                        }}
                      >
                        <div className="py-2 px-2">
                          {legalItems.map((item, index) => (
                            <div key={item.href}>
                              <Link
                                href={item.href}
                                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                onClick={() => setIsLegalOpen(false)}
                              >
                                {item.label}
                              </Link>
                              {index < legalItems.length - 1 && (
                                <div className="mx-2 my-1 h-px bg-white/10" />
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
              <Button className="bg-white hover:bg-gray-100 text-black px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Contact Us
              </Button>
            </Link>

            {/* Hamburger Menu - Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white hover:bg-white/10 rounded-lg transition-colors"
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