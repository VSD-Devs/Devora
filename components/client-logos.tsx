"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ClientLogos() {
  const logos = [
    { src: "/white-logo.png", alt: "Devora - Web design agency client logo" },
    { src: "/lr-talent-logo-white.png", alt: "LR Talent - Recruitment platform client", width: 240, height: 140 },
    { src: "/nl-education-white.png", alt: "NL Education - E-learning platform client", width: 240, height: 140 },
    { src: "/rectify-logo-white.png", alt: "Rectify - Business software client", width: 140, height: 60 },
    { src: "/rfw-logo-white.png", alt: "RFW - Corporate web development client" },
    { src: "/Envirotech-Logo (BW).png", alt: "EnviroTech Emergency Plumbing - Service platform client" },
    { src: "/Slush-Logo (BW) (1).png", alt: "Slush Dating - Video dating app client" },
    { src: "/Sandalwood-Memorials-BW.png", alt: "Sandalwood Memorials - E-commerce website client" },
  ]

  const doubledLogos = [...logos, ...logos];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    containScroll: false,
    dragFree: true,
    skipSnaps: false,
  }, [
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  ])

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [isClient, setIsClient] = useState(false)

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }

    emblaApi.on('init', onSelect)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('init', onSelect)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="bg-primary text-primary-foreground py-8 px-4 md:px-6" aria-label="Trusted by leading start-ups and businesses">
      <div className="container mx-auto">
        <h2 className="sr-only">Our Clients - Trusted Web Design and Development Partner</h2>
        
        {/* Carousel for All Devices */}
        <div className="relative">
          {isClient && (
            <>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4 md:gap-8">
                  {doubledLogos.map((logo, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-center h-16 md:h-32 bg-primary-foreground/10 rounded-lg relative flex-[0_0_calc(50%-0.5rem)] sm:flex-[0_0_calc(33.333%-1rem)] md:flex-[0_0_calc(25%-1.5rem)] min-w-0"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width || 200}
                        height={logo.height || 120}
                        className={`object-contain ${logo.width ? 'max-w-[140px] max-h-[70px] md:max-w-[220px] md:max-h-[130px]' : 'max-w-[120px] max-h-[60px] md:max-w-[180px] md:max-h-[90px]'}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {/* Add spacing after last logo to prevent connection with first logo on loop */}
                  <div className="flex-[0_0_2rem] sm:flex-[0_0_3rem] md:flex-[0_0_4rem] min-w-0" />
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <button
                  onClick={scrollPrev}
                  disabled={prevBtnDisabled}
                  className="p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous client logos"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={nextBtnDisabled}
                  className="p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next client logos"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
