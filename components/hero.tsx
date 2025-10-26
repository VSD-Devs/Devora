"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const teamMembers = [
    { src: "/placeholder-user.jpg", alt: "Devora team member - Web Designer" },
    { src: "/placeholder-user.jpg", alt: "Devora team member - Web Developer" },
    { src: "/placeholder-user.jpg", alt: "Devora team member - UX Designer" },
    { src: "/placeholder-user.jpg", alt: "Devora team member - Project Manager" },
  ]

  return (
    <section 
      className="relative bg-primary text-primary-foreground pt-32 pb-12 md:pt-32 md:pb-20 px-4 md:px-6"
      aria-label="Hero section - Affordable web design for start-ups"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="hidden sm:inline-flex items-center gap-2 bg-primary-foreground/10 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 overflow-x-auto" role="banner">
              <span aria-hidden="true" className="flex-shrink-0">★</span>
              <span className="whitespace-nowrap">BUILT FOR START-UPS • FLEXIBLE PRICING • RAPID DELIVERY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2 md:mb-6 text-balance leading-tight md:leading-normal">
              <span className="sr-only">Affordable Web Design and Development for Start-ups - </span>
              Web design and development
              <br className="hidden sm:block" />
              {" "}<span className="font-serif italic font-normal">that makes you look good.</span>
            </h1>

            <Link href="#contact" aria-label="Get started with affordable web design" className="inline-block mt-3 md:mt-8">
              <Button size="lg" className="rounded-full gap-2 w-full sm:w-auto justify-center md:justify-start px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
                Get started
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="space-y-3 mt-2 sm:mt-4 lg:mt-0">
            <p className="text-base md:text-lg leading-relaxed">
              We help start-ups launch and grow with professional web design and custom development. Flexible pricing means you only pay for what you need.  No hidden costs, no unnecessary extras.
            </p>

            <div className="flex flex-row items-center gap-2 sm:gap-4 pt-2 md:pt-4" role="group" aria-label="Client testimonials and ratings">
              <div className="hidden sm:flex -space-x-2" aria-label="Team members">
                {teamMembers.map((member, index) => (
                  <div key={index} className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/20 border-2 border-primary flex-shrink-0">
                    <Image 
                      src={member.src} 
                      alt={member.alt} 
                      width={40} 
                      height={40}
                      className="rounded-full w-full h-full"
                      loading="eager"
                      priority={true}
                    />
                  </div>
                ))}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1" role="img" aria-label="5 out of 5 star rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current flex-shrink-0" aria-hidden="true" />
                  ))}
                  <span className="ml-2 font-semibold text-xs sm:text-base">5/5</span>
                </div>
                <p className="text-xs sm:text-sm opacity-90">80+ Start-ups supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
