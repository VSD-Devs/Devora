"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState } from "react"

export function OurWork() {
  const projects = [
    {
      name: "Luma Education Recruitment",
      slug: "luma-education",
      description:
        "A specialist education recruitment platform connecting bright talent with bright futures. We created a modern, conversion-focused website featuring seamless HelloEduN CRM integration for real-time vacancy display and Google Jobs integration to maximise visibility.",
      image: "/case-studies/luma-education.png",
      tags: ["Recruitment Platform", "Web Design"],
      featured: true,
    },
    {
      name: "NL Education",
      slug: "nl-education",
      description:
        "A leading teacher recruitment platform connecting qualified educators with top-rated schools across England. We built a comprehensive platform that streamlines the hiring process for both teachers and schools.",
      image: "/case-studies/nl-education.png",
      tags: ["Recruitment Platform", "Web App", "Development"],
      featured: false,
    },
    {
      name: "LR Talent",
      slug: "lr-talent",
      description:
        "A startup recruitment platform for HR and executive support professionals. We developed a complete brand identity including logo design, plus a professional website with dedicated sections for candidates and employers.",
      image: "/case-studies/lr-talent.png",
      tags: ["Startup Website", "Brand Development", "Recruitment"],
      featured: false,
    },
    {
      name: "Rectify International",
      slug: "rectify",
      description:
        "An energy recruitment and consultancy specialist's digital platform showcasing expertise in sourcing talent for the energy sector.",
      image: "/case-studies/rectify.png",
      tags: ["Recruitment", "Portfolio", "Web Design"],
      featured: false,
    },
    {
      name: "Sandalwood Memorials",
      slug: "sandalwood-memorials",
      description:
        "Hybrid headless platform: Next.js for speed, WordPress/WooCommerce for product management, Three.js for 3D memorial rendering, and GraphQL for seamless data flow.",
      image: "/case-studies/sandalwood-memorials.png",
      tags: ["Headless Commerce", "Three.js", "GraphQL"],
      featured: false,
    },
    {
      name: "HV Direct",
      slug: "hv-direct",
      description:
        "A high-voltage electrical connections provider's digital platform showcasing their expertise in delivering reliable electrical solutions.",
      image: "/case-studies/hv-direct.png",
      tags: ["Portfolio", "Web Design", "B2B Platform"],
      featured: false,
    },
    {
      name: "Resilience Fitness Wellbeing",
      slug: "rfw",
      description:
        "A health and wellbeing consultancy platform for a leading fitness and wellness professional with service details and booking capabilities.",
      image: "/case-studies/rfw.png",
      tags: ["Services", "Professional Portfolio", "Web Design"],
      featured: false,
    },
  ]

  const featuredProject = projects.find((p) => p.featured) ?? projects[0]
  const otherProjects = projects.filter((p) => !p.featured)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev())
      setNextBtnEnabled(emblaApi.canScrollNext())
    }

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.destroy()
    }
  }, [emblaApi])

  return (
    <section id="work" className="py-20 md:py-28 px-4 md:px-6 relative" aria-labelledby="work-heading">
      {/* Section background - subtle differentiation */}
      <div className="absolute inset-0 bg-muted/30 dark:bg-muted/10 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto relative">
        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 text-sm md:text-base font-medium mb-5 md:mb-6" role="banner">
            <span aria-hidden="true" className="text-primary">★</span>
            <span className="tracking-[0.2em] uppercase">Our Work</span>
          </div>

          <h2 id="work-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance max-w-3xl leading-[1.1] mb-4 md:mb-6">
            Crafting <span className="font-serif italic font-normal">exceptional</span> digital experiences for <strong>start-ups</strong>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
            From start-ups to established brands, we've helped businesses transform their digital presence with thoughtful web design and powerful development.
          </p>
        </div>

        {/* Featured project - editorial hero */}
        <article className="group mb-12 md:mb-20">
          <Link
            href={`/case-studies/${featuredProject.slug}`}
            className="block"
            aria-label={`View ${featuredProject.name} case study`}
          >
            <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-border/60 bg-card hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={`${featuredProject.name} - Web design and development case study`}
                  fill
                  className={`${featuredProject.slug === "sky-limit-travels" ? "object-cover object-top" : "object-cover"} group-hover:scale-[1.03] transition-transform duration-700`}
                  sizes="100vw"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mb-2 md:mb-3">
                    {featuredProject.name}
                  </h3>
                  <p className="text-white/95 text-sm md:text-base lg:text-lg max-w-2xl line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {featuredProject.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 md:mt-6 text-white font-medium group-hover:gap-3 transition-all drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    View case study
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </article>

        {/* Mobile carousel - for other projects */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {otherProjects.map((project, i) => (
                <div key={i} className="flex-[0_0_85%] min-w-0">
                  <ProjectCard project={project} compact />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!prevBtnEnabled}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!nextBtnEnabled}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop grid - 3-column */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherProjects.map((project, i) => (
            <ProjectCard key={i} project={project} compact={false} />
          ))}
        </div>

        <div className="flex justify-center mt-14 md:mt-20">
          <Link href="/case-studies" aria-label="View all case studies">
            <Button size="lg" className="rounded-full gap-2">
              View all case studies
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  compact,
}: {
  project: { name: string; slug: string; description: string; image: string; tags: string[] }
  compact?: boolean
}) {
  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className="group block"
      aria-label={`View ${project.name} case study`}
    >
      <article className="h-full flex flex-col rounded-2xl overflow-hidden border border-border/60 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        <div
          className={`relative overflow-hidden bg-muted ${compact ? "aspect-[4/3]" : "aspect-[4/3]"}`}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.name} - Web design case study`}
            fill
            className={`${project.slug === "sky-limit-travels" ? "object-cover object-top" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
            sizes={compact ? "85vw" : "33vw"}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className={`flex flex-col flex-1 p-5 ${compact ? "md:p-6" : "p-6"}`}>
          <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors ${compact ? "text-lg" : "text-xl"}`}>
            {project.name}
          </h3>
          <p
            className={`text-muted-foreground leading-relaxed flex-1 ${compact ? "text-sm line-clamp-2" : "text-sm line-clamp-2"}`}
          >
            {project.description}
          </p>
          <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary group-hover:gap-3 transition-all">
            View case study
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </article>
    </Link>
  )
}
