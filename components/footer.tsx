import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6" role="contentinfo">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/devora-logo-white.png" alt="Devora logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-semibold">Devora</span>
            </div>
            <p className="text-sm opacity-90 md:opacity-80"><strong>Start-up specialists</strong> building expert <strong>web design</strong> and <strong>development solutions</strong>.</p>
          </div>

          <nav aria-label="Services navigation">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-90 md:opacity-80">
              <li>
                <Link href="#services" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="#services" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm opacity-90 md:opacity-80">
              <li>
                <Link href="#about" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#work" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal navigation">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm opacity-90 md:opacity-80">
              <li>
                <Link href="/privacy" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="inline-flex items-center min-h-[44px] py-2 hover:opacity-100 transition-opacity touch-manipulation">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2026 Devora. All rights reserved. <span className="sr-only">Affordable web design and development for start-ups in Sheffield, South Yorkshire, and across the UK.</span></p>
          <nav aria-label="Social media navigation">
            <ul className="flex flex-wrap gap-4 md:gap-6">
              <li>
                <Link href="https://www.facebook.com/share/14UKFzshvcq/?mibextid=wwXIfr" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center min-h-[44px] min-w-[44px] justify-center hover:opacity-100 transition-opacity touch-manipulation" aria-label="Follow Devora on Facebook">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/devoraltd?igsh=MTBvNGQxbmhrb28xaA==" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center min-h-[44px] min-w-[44px] justify-center hover:opacity-100 transition-opacity touch-manipulation" aria-label="Follow Devora on Instagram">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/devora-web-design-development/" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center min-h-[44px] min-w-[44px] justify-center hover:opacity-100 transition-opacity touch-manipulation" aria-label="Follow Devora on LinkedIn">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://x.com/DevoraLtd38083" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center min-h-[44px] min-w-[44px] justify-center hover:opacity-100 transition-opacity touch-manipulation" aria-label="Follow Devora on X (Twitter)">
                  X
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
