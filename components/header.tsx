"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Helper function to handle navigation - if not on home, go to home with hash, otherwise just use hash
  const getNavHref = (hash: string) => {
    return isHomePage ? hash : `/#${hash.replace("#", "")}`
  }

  const navLinks = [
    { href: getNavHref("#about"), label: "About" },
    { href: "/case-studies", label: "Portfolio" },
    { href: "/blog", label: "Blog", ariaLabel: "Web design and development blog" },
    { href: getNavHref("#services"), label: "Services" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm" role="banner">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Devora - Home">
            <Image 
              src="/devora-bw.png" 
              alt="Devora logo - Affordable web design and development agency" 
              width={48} 
              height={48} 
              className="w-12 h-12"
              priority={true}
            />
            <span className="text-lg font-bold hidden sm:inline">Devora</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Get in Touch Button */}
          <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services" className="hidden md:inline-block">
            <Button className="rounded-full gap-2">
              Get in touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Get in Touch Button - Middle of Mobile Nav */}
            <div className="px-4 pt-2">
              <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services" onClick={() => setIsMenuOpen(false)}>
                <Button className="rounded-full gap-2 w-full justify-center">
                  Get in touch
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
