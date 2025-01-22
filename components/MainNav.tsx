"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { Logo } from "./Logo"
import { Menu, X } from "lucide-react"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ]

  return (
    <>
      {/* Dark gradient overlay */}
      <div className="fixed top-0 left-0 right-0 h-64 z-40 pointer-events-none bg-gradient-to-b from-black/90 via-black/50 to-transparent" />
      
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="bg-black/20 backdrop-blur-sm rounded-full p-1">
                  {menuItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-sm text-white">
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Contact Button - Desktop */}
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105">
                Contact Us
              </Button>
            </Link>

            {/* Hamburger Menu - Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-gray-300 py-2 text-lg font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-block"
                  >
                    <Button className="w-full bg-white hover:bg-gray-100 text-black transition-colors">
                      Contact Us
                    </Button>
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
} 