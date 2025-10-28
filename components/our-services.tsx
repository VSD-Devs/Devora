"use client"

import { Code, Palette, Smartphone, Megaphone, Wrench } from "lucide-react"

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
    {
      icon: Wrench,
      title: "Website Maintenance & Support",
      description: "Keep your website running smoothly and up-to-date with regular maintenance and support.",
      image: "/support.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6" aria-labelledby="services-list-heading">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="inline-block bg-transparent px-0 py-1 text-sm md:text-base font-medium mb-4 md:mb-6" role="banner">
            <span aria-hidden="true" className="inline-block w-2 h-2 bg-primary mr-2.5 rounded-[2px]" /> OUR SERVICES
          </div>

          <h2 id="services-list-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance max-w-4xl leading-tight">
            Everything your <span className="font-serif italic font-normal">start-up</span> needs to launch and scale
          </h2>
        </div>

        {/* Schema markup for services */}
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <article
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 transition-colors hover:border-primary/50"
                role="listitem"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
