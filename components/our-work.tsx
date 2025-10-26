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
      name: "NL Education",
      slug: "nl-education",
      description:
        "A leading teacher recruitment platform connecting qualified educators with top-rated schools across England. We built a comprehensive platform that streamlines the hiring process for both teachers and schools with advanced matching algorithms and intuitive dashboards.",
      image: "/case-studies/nl-education.png",
      tags: ["Recruitment Platform", "Web App", "Development"],
    },
    {
      name: "LR Talent",
      slug: "lr-talent",
      description:
        "A specialized recruitment agency platform for HR and executive support professionals. We developed a professional website with dedicated sections for candidates and employers, enabling streamlined talent matching and relationship-driven recruitment.",
      image: "/case-studies/lr-talent.png",
      tags: ["Recruitment", "Corporate Website", "Web Design"],
    },
    {
      name: "Rectify International",
      slug: "rectify",
      description:
        "An energy recruitment and consultancy specialist's digital platform showcasing expertise in sourcing talent for the energy sector. We created a professional showcase highlighting their services, successful placements, and industry expertise.",
      image: "/case-studies/rectify.png",
      tags: ["Recruitment", "Corporate Website", "Portfolio"],
    },
    {
      name: "Sandalwood Memorials",
      slug: "sandalwood-memorials",
      description:
        "A premium memorial and headstone design service with an elegant product showcase and intuitive quote system. Our design captures the dignity and professionalism of their service whilst providing an intuitive browsing experience for grieving families.",
      image: "/case-studies/sandalwood-memorials.png",
      tags: ["E-commerce", "Product Showcase", "Web Design"],
    },
    {
      name: "HV Direct",
      slug: "hv-direct",
      description:
        "A high-voltage electrical connections provider's digital platform showcasing their expertise in delivering reliable electrical solutions to residential, commercial, and industrial sectors. We built a professional showcase that highlights their technical capabilities and project portfolio.",
      image: "/case-studies/hv-direct.png",
      tags: ["Corporate Website", "Portfolio", "Web Design"],
    },
    {
      name: "Resilience Fitness Wellbeing",
      slug: "rfw",
      description:
        "A health and wellbeing consultancy platform for a leading fitness and wellness professional. We built a modern, professional website showcasing expertise in workplace health coaching and personal fitness consulting with service details and booking capabilities.",
      image: "/case-studies/rfw.png",
      tags: ["Services", "Professional Portfolio", "Web Design"],
    },
  ]

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
    <section id="work" className="py-8 md:py-24 px-4 md:px-6 bg-muted/60" aria-labelledby="work-heading">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-3 md:mb-6" role="banner">
            <span aria-hidden="true">★</span> OUR WORK
          </div>

          <h2 id="work-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance max-w-2xl">
            Crafting <span className="font-serif italic font-normal">exceptional</span> digital experiences for <strong>start-ups</strong>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mt-2 md:mt-4 max-w-2xl">
            From <strong>start-ups</strong> to established brands, we've helped businesses transform their <strong>digital presence</strong> with
            thoughtful <strong>web design</strong> and powerful <strong>development</strong>.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {projects.map((project, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0">
                  <div className="group bg-card rounded-2xl overflow-hidden border border-border">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.name} - Web design and development case study showcase`}
                        fill
                        className={`${project.slug === 'sky-limit-travels' ? 'object-cover object-top' : 'object-contain'} group-hover:scale-105 transition-transform duration-500`}
                        loading="lazy"
                        sizes="100vw"
                      />
                    </div>
                    <article className="p-5">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                      <Link href={`/case-studies/${project.slug}`} aria-label={`View ${project.name} case study`}>
                        <Button variant="ghost" size="sm" className="gap-2 px-0 hover:gap-3 transition-all">
                          View Case Study
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Button>
                      </Link>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!prevBtnEnabled}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!nextBtnEnabled}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden md:grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.name} - Web design and development case study showcase`}
                  fill
                  className={`${project.slug === 'sky-limit-travels' ? 'object-cover object-top' : 'object-contain'} group-hover:scale-105 transition-transform duration-500`}
                  loading="lazy"
                  sizes="50vw"
                />
              </div>
              <article className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <Link href={`/case-studies/${project.slug}`} aria-label={`View ${project.name} case study`}>
                  <Button variant="ghost" className="gap-2 px-0 hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </Link>
              </article>
            </div>
          ))}
        </div>

        {/* View All Case Studies Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link href="/case-studies">
            <Button size="lg" className="gap-2">
              View some of our case studies
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
