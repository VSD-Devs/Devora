"use client"

import { Code, Palette, Smartphone, Zap, Megaphone } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function OurServices() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom-built websites and web applications optimised for performance and scalability.",
      image: "/web-dev.png",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions for your start-up.",
      image: "/ui-ux-professional.png",
    },
    {
      icon: Smartphone,
      title: "Web Apps",
      description: "Progressive web applications and responsive platforms that work across all devices.",
      image: "/mobile-apps.png",
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Strategic brand identity and design that reflects your start-up's vision and values.",
      image: "/strategy-planning.jpg",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Growth-focused marketing strategies to get your product in front of the right audience.",
      image: "/growth.jpg",
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

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
      setSelectedIndex(emblaApi.selectedScrollSnap())
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
    <section className="py-16 md:py-24 px-4 md:px-6" aria-labelledby="services-list-heading">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-4 md:mb-6" role="banner">
            <span aria-hidden="true">★</span> OUR SERVICES
          </div>

          <h2 id="services-list-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance max-w-4xl">
            Everything your <strong>start-up</strong> needs to <span className="font-serif italic font-normal">launch and scale</span>
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden">
          {isClient && (
            <>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                  {services.map((service, i) => {
                    const Icon = service.icon
                    return (
                      <div key={i} className="flex flex-col gap-3 flex-[0_0_100%] min-w-0">
                        <div className="relative h-40 rounded-xl overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg border border-primary/30 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-sm font-bold">{service.title}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground leading-tight">{service.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <button
                  onClick={scrollPrev}
                  disabled={prevBtnDisabled}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={nextBtnDisabled}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === selectedIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to service ${i + 1}`}
                    aria-current={i === selectedIndex ? 'true' : 'false'}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Desktop Alternating Layout */}
        <div className="hidden sm:block space-y-12 md:space-y-20" role="list">
          {services.map((service, i) => {
            const Icon = service.icon
            const isEven = i % 2 === 0
            return (
              <article 
                key={i} 
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16" 
                role="listitem"
              >
                {/* Image Container */}
                <div className={`w-full md:w-1/2 ${!isEven ? 'md:order-2' : ''}`}>
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Container */}
                <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
