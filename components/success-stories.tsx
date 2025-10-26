"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef } from "react"

export function SuccessStories() {
  const testimonials = [
    {
      stars: 5,
      quote: "I have loved working with Khalil, he has really brought my vision to life and created a fantastic website!! I'm amazed at his speed and efficiency and communication throughout. I will definitely be recommending Khalil to others, so grateful for what he's created for me.",
      name: "Katy",
      role: "Founder of LR Talent",
    },
    {
      stars: 5,
      quote: "I was amazed by the speed, quality and efficiency that Khalil had to deliver a website for my new company. I was under time pressure due to business registration, I outlined my requirements and Khalil was able to turnaround my project rapidly. I would highly recommend Khalil for anyone who needs such services.",
      name: "Isaac",
      role: "Founder of Rectify International",
    },
    {
      stars: 5,
      quote: "Working with Devora was such a great experience. They were quick to understand what I wanted, super easy to communicate with, and always open to feedback. Khalil really took the time to understand my vision and turned it into something even better than I imagined. The entire experience felt professional yet personal. If you're looking for a team that's friendly, fast, and great at what they do, I can't recommend Devora enough.",
      name: "Michael",
      role: "HV Direct",
    },
  ]

  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
    loop: true,
  }, [autoplayPlugin.current])

  useEffect(() => {
    if (!emblaApi) return
  }, [emblaApi])

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-6">
          <div>
            <div className="inline-block bg-background text-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-3 md:mb-6">
              ★ TESTIMONIALS
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-white">
              <span className="font-serif italic font-normal">Feedback</span> from our{" "}
              <span className="font-serif italic font-normal">clients</span>
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/10"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/10"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* JSON-LD Schema for Testimonials */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: testimonials.length,
          }) }}
        />

        {/* Mobile Carousel - Auto-scrolling */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="bg-white/5 border border-white/20 rounded-2xl p-5 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.stars)].map((_, starIndex) => (
                        <span key={starIndex} className="text-yellow-400 text-base">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed mb-4 text-white/90 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-4 border-t border-white/20">
                      <div className="font-semibold text-sm text-white">{testimonial.name}</div>
                      <div className="text-xs text-white/70">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-colours">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.stars)].map((_, starIndex) => (
                  <span key={starIndex} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6 text-white/90">
                "{testimonial.quote}"
              </p>
              <div className="pt-4 border-t border-white/20">
                <div className="font-semibold text-sm text-white">{testimonial.name}</div>
                <div className="text-xs text-white/70">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
