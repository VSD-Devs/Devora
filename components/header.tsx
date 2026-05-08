"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X, ScanSearch } from "lucide-react"
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

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", isMenuOpen)

    return () => {
      document.body.classList.remove("mobile-nav-open")
    }
  }, [isMenuOpen])

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
    { href: "/areas-we-cover", label: "Areas We Cover", ariaLabel: "Web design and website development areas covered" },
    { href: getNavHref("#services"), label: "Services" },
  ]

  return (
    <Dialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen}>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/15 bg-card/95 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-card/82" role="banner">
        <div className="mx-auto max-w-7xl px-4 py-2.5 md:px-6 md:py-3">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Devora - Home">
            <Image 
              src="/devora-bw.png" 
              alt="Devora logo - Affordable web design and development agency" 
              width={48} 
              height={48} 
              className="h-10 w-10 rounded-md"
              priority={true}
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-base font-black tracking-[-0.03em]">Devora</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Sheffield web studio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-sm font-semibold text-foreground/76 hover:text-foreground transition-colors duration-200"
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <DialogTrigger asChild>
              <Button variant="outline" className="h-10 rounded-full gap-2 border-black/25 bg-card px-4 text-sm font-semibold hover:border-accent hover:text-accent-foreground">
                <ScanSearch className="w-4 h-4" />
                Free Audit
              </Button>
            </DialogTrigger>
            
            <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services">
              <Button className="h-10 rounded-full gap-2 bg-foreground px-5 text-sm font-semibold text-background hover:bg-accent">
                Get in touch
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - min 44x44px touch target (WCAG 2.5.5) */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            className="relative z-50 flex min-h-12 min-w-12 items-center justify-center rounded-full border border-black/10 bg-background/80 shadow-sm transition-colors hover:bg-muted active:bg-muted md:hidden"
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMenuOpen}
            type="button"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
          <nav 
            className="fixed inset-x-0 top-[65px] z-40 max-h-[calc(100dvh-65px)] overflow-y-auto border-b border-black/15 bg-card/98 px-4 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 md:hidden" 
            aria-label="Mobile navigation"
            onClick={(e) => {
              // Close menu when clicking on nav links
              const target = e.target as HTMLElement
              if (target.tagName === 'A') {
                setIsMenuOpen(false)
              }
            }}
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex min-h-14 items-center justify-between border border-black/10 bg-background px-4 text-lg font-black tracking-[-0.02em] text-foreground shadow-sm transition-colors duration-200 hover:text-primary active:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-accent" aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <DialogTrigger asChild>
                <Button variant="outline" className="h-12 rounded-full gap-2 w-full justify-center border-black/15 text-sm font-bold hover:border-accent hover:text-accent-foreground" onClick={() => setIsMenuOpen(false)}>
                  <ScanSearch className="w-4 h-4" aria-hidden="true" />
                  Free audit
                </Button>
              </DialogTrigger>

              <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services" onClick={() => setIsMenuOpen(false)} className="block">
                <Button className="h-12 rounded-full gap-2 w-full justify-center bg-foreground text-sm font-bold text-background hover:bg-accent">
                  Contact
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </nav>
          )}
        </div>
      </header>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/15 bg-card/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-[0.9fr_1.1fr] gap-3">
          <DialogTrigger asChild>
            <Button variant="outline" className="h-12 rounded-full gap-2 border-black/20 bg-card text-sm font-bold hover:border-accent hover:text-accent-foreground">
              <ScanSearch className="h-4 w-4" aria-hidden="true" />
              Audit
            </Button>
          </DialogTrigger>

          <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services">
            <Button className="h-12 w-full rounded-full gap-2 bg-foreground text-sm font-bold text-background hover:bg-accent">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto bg-background p-0 sm:max-w-[500px]">
        <DialogHeader className="sr-only">
          <DialogTitle>Free Website Audit</DialogTitle>
          <DialogDescription>
            Request a free comprehensive audit of your website
          </DialogDescription>
        </DialogHeader>
        <WebsiteAuditForm variant="inline" />
      </DialogContent>
    </Dialog>
  )
}
