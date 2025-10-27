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
            <p className="text-sm opacity-80"><strong>Start-up specialists</strong> building expert <strong>web design</strong> and <strong>development solutions</strong>.</p>
          </div>

          <nav aria-label="Services navigation">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:opacity-100 transition-opacity">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#about" className="hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:opacity-100 transition-opacity">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:opacity-100 transition-opacity">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal navigation">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© 2025 Devora. All rights reserved. <span className="sr-only">Affordable web design and development for start-ups in the UK.</span></p>
          <nav aria-label="Social media navigation">
            <ul className="flex gap-6">
              <li>
                <Link href="https://linkedin.com/company/devora" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="Follow Devora on LinkedIn">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/devora" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="Follow Devora on Twitter">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/devora" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="Follow Devora on Instagram">
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
