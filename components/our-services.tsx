"use client"

import Link from "next/link"
import { Code, Palette, Smartphone, Megaphone, Wrench } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function OurServices() {
  const FeaturedIcon = Code
  const featured = {
    title: "Web Development",
    description: "Custom-built websites and web applications optimised for performance and scalability. From landing pages to complex platforms.",
    image: "/web-dev.png",
  }

  const services = [
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
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Keep your website running smoothly and up-to-date with regular maintenance and support.",
      image: "/support.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden" aria-labelledby="services-list-heading">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.94_0.002_264/0.5),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.2_0_0/0.3),transparent)] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto relative">
        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 text-sm md:text-base font-medium mb-5 md:mb-6" role="banner">
            <span aria-hidden="true" className="inline-block w-2 h-2 bg-primary rounded-full" />
            <span className="tracking-[0.2em] uppercase">Our Services</span>
          </div>

          <h2 id="services-list-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-4xl leading-[1.1]">
            Everything your <span className="font-serif italic font-normal">start-up</span> needs to launch and scale
          </h2>
        </div>

        {/* Schema markup for services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [featured, ...services].map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                image: service.image,
              },
            })),
          }) }}
        />

        {/* Featured service - full width, editorial style */}
        <article className="group mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-center rounded-2xl md:rounded-3xl overflow-hidden bg-muted/40 dark:bg-muted/20 border border-border/60">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] order-2 md:order-1">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-transparent to-transparent md:from-black/10 md:via-transparent md:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center order-1 md:order-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FeaturedIcon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{featured.title}</h3>
              </div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">{featured.description}</p>
              <Link href="#contact" aria-label="Enquire about web development services">
                <Button variant="outline" size="lg" className="gap-2 w-fit rounded-full group/btn">
                  Enquire about this
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </article>

        {/* Bento-style grid - asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            const isWide = i === 1 || i === 3
            return (
              <article
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/40 transition-all duration-300 ${
                  isWide ? "sm:col-span-2" : ""
                }`}
                role="listitem"
              >
                <div className={`relative overflow-hidden ${isWide ? "aspect-[2/1] sm:aspect-[21/10]" : "aspect-[4/3]"}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={isWide ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 25vw"}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-primary-foreground/90" strokeWidth={2} aria-hidden="true" />
                      <h3 className="text-lg md:text-xl font-bold text-primary-foreground">{service.title}</h3>
                    </div>
                    <p className="text-sm text-primary-foreground/85 leading-relaxed line-clamp-2">{service.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link href="#contact" aria-label="Get in touch about our services">
            <Button size="lg" className="rounded-full gap-2">
              Discuss your project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
