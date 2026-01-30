"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import WebsiteAuditForm from "@/components/website-audit-form"

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false)

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement
      const header = document.querySelector('header')
      // Close menu if click is outside the header
      if (header && !header.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    // Use both mouse and touch events for better mobile support
    // Small delay to avoid immediate closure when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  // Helper function to handle navigation - if not on home, go to home with hash, otherwise just use hash
  const getNavHref = (hash: string) => {
    return isHomePage ? hash : `/#${hash.replace("#", "")}`
  }

  const navLinks = [
    { href: getNavHref("#about"), label: "About" },
    { href: "/case-studies", label: "Portfolio" },
    { href: "/blog", label: "Blog", ariaLabel: "Web design and development blog" },
    { href: "/locations", label: "Locations", ariaLabel: "Web development services by location" },
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
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
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

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Dialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="rounded-full gap-2 border-primary/20 hover:border-primary/40">
                  <Globe className="w-4 h-4" />
                  Free Audit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-background border-border p-0">
                <DialogHeader className="sr-only">
                  <DialogTitle>Free Website Audit</DialogTitle>
                  <DialogDescription>
                    Request a free comprehensive audit of your website
                  </DialogDescription>
                </DialogHeader>
                <WebsiteAuditForm variant="inline" />
              </DialogContent>
            </Dialog>
            
            <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services">
              <Button className="rounded-full gap-2">
                Get in touch
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            className="md:hidden p-2 rounded-lg hover:bg-muted active:bg-muted transition-colors touch-manipulation z-50 relative"
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMenuOpen}
            type="button"
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
          <nav 
            className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-200" 
            aria-label="Mobile navigation"
            onClick={(e) => {
              // Close menu when clicking on nav links
              const target = e.target as HTMLElement
              if (target.tagName === 'A') {
                setIsMenuOpen(false)
              }
            }}
          >
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

            {/* Free Audit Button - Mobile Nav */}
            <div className="px-4 pt-2">
              <Dialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="rounded-full gap-2 w-full justify-center border-primary/20 hover:border-primary/40" onClick={() => setIsMenuOpen(false)}>
                    <Globe className="w-4 h-4" />
                    Free Website Audit
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-background border-border p-0">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Free Website Audit</DialogTitle>
                    <DialogDescription>
                      Request a free comprehensive audit of your website
                    </DialogDescription>
                  </DialogHeader>
                  <WebsiteAuditForm variant="inline" />
                </DialogContent>
              </Dialog>
            </div>

            {/* Get in Touch Button - Mobile Nav */}
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
