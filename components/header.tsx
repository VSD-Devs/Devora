"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Helper function to handle navigation - if not on home, go to home with hash, otherwise just use hash
  const getNavHref = (hash: string) => {
    return isHomePage ? hash : `/#${hash.replace("#", "")}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border" role="banner">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Devora - Home">
            <Image 
              src="/devora-bw.png" 
              alt="Devora logo - Affordable web design and development agency" 
              width={48} 
              height={48} 
              className="w-12 h-12"
              priority={true}
            />
            <span className="text-xl font-semibold">Devora</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link href={getNavHref("#about")} className="text-sm hover:text-primary transition-colors font-light">
              About
            </Link>
            <Link href="/case-studies" className="text-sm hover:text-primary transition-colors font-light">
              Portfolio
            </Link>
            <Link href="/blog" className="text-sm hover:text-primary transition-colors font-light" aria-label="Web design and development blog">
              Blog
            </Link>
            <Link href={getNavHref("#services")} className="text-sm hover:text-primary transition-colors font-light">
              Services
            </Link>
            <Link href={getNavHref("#contact")} className="text-sm hover:text-primary transition-colors font-light">
              Contact
            </Link>
          </nav>

          <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services">
            <Button className="rounded-full gap-2">
              Get in touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
