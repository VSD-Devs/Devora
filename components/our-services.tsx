"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Braces, ChartNoAxesCombined, Layers3, Paintbrush, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OurServices() {
  const services = [
    {
      icon: Paintbrush,
      title: "Premium website design",
      description: "Positioning, page structure, UI direction, and polished responsive layouts that feel bespoke from the first interaction.",
      image: "/design-ux.jpg",
    },
    {
      icon: Braces,
      title: "Next.js development",
      description: "Fast, robust websites and web apps built with modern code, maintainable components, and clean deployment workflows.",
      image: "/development.jpg",
    },
    {
      icon: Search,
      title: "UK local SEO foundations",
      description: "Location-led content architecture, metadata, technical hygiene, and pages built for discoverability across major UK areas.",
      image: "/web-dev.png",
    },
    {
      icon: Layers3,
      title: "Brand systems",
      description: "Visual identity, typography, colour, content patterns, and reusable design systems for teams that need consistency.",
      image: "/strategy-planning.jpg",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Conversion refinement",
      description: "Sharper offers, stronger calls to action, analytics visibility, landing pages, and post-launch iteration.",
      image: "/growth.jpg",
    },
  ]

  return (
    <section id="services" className="bg-background px-4 py-20 md:px-6 md:py-28" aria-labelledby="services-list-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Services</p>
            <h2 id="services-list-heading" className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">
              Everything needed to launch a website people remember.
            </h2>
          </div>
          <p className="text-lg leading-8 text-foreground/76">
            Strategy, design, development, SEO, and iteration under one roof, so your website feels cohesive instead of assembled.
          </p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
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

        <div className="mt-14 grid gap-px overflow-hidden border border-black/15 bg-black/15 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="group bg-card">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-black/15">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale-[12%] transition-transform duration-700 group-hover:scale-105"
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 40vw" : "(max-width: 1024px) 100vw, 20vw"}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} aria-hidden="true" />
                    <span className="font-serif text-4xl italic text-stroke-soft">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-black leading-tight tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-foreground/72">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm font-semibold leading-6 text-foreground/72">
            Need the whole thing done properly? We can take you from rough idea to a ground-up business website, then keep improving it after launch.
          </p>
          <Link href="#contact" aria-label="Discuss a web design project">
            <Button size="lg" className="w-full rounded-full bg-foreground px-7 font-bold text-background hover:bg-accent md:w-auto">
              Discuss your project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
