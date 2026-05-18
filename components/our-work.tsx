"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OurWork() {
  const projects = [
    {
      name: "The Teacher's Surgery",
      slug: "teachers-surgery",
      description: "A warm, conversion-focused Next.js platform helping a charitable education community connect teachers, parents, and families.",
      image: "/case-studies/teachers-surgery-landing.png",
      sector: "Charitable education",
      result: "Growing community",
    },
    {
      name: "Luma Education Recruitment",
      slug: "luma-education",
      description: "A polished recruitment platform with CRM-connected vacancies, Google Jobs integration, and a brighter market position.",
      image: "/case-studies/luma-education-full.png",
      sector: "Education recruitment",
      result: "Live vacancy engine",
    },
    {
      name: "Sandalwood Memorials",
      slug: "sandalwood-memorials",
      description: "Headless commerce with WordPress product management, Next.js speed, and 3D memorial rendering.",
      image: "/case-studies/sandalwood-memorials.png",
      sector: "E-commerce",
      result: "3D product experience",
    },
    {
      name: "LR Talent",
      slug: "lr-talent",
      description: "Brand identity and website for a specialist HR recruitment business serving candidates and employers.",
      image: "/case-studies/lr-talent.png",
      sector: "HR recruitment",
      result: "Brand plus website",
    },
    {
      name: "Rectify International",
      slug: "rectify",
      description: "A focused energy recruitment platform with a clearer proposition and sharper credibility cues.",
      image: "/case-studies/rectify.png",
      sector: "Energy recruitment",
      result: "Specialist positioning",
    },
  ]

  return (
    <section id="work" className="bg-card px-4 py-20 md:px-6 md:py-28" aria-labelledby="work-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Selected work</p>
            <h2 id="work-heading" className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">
              Proof that the pixels know what they are doing.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-foreground/76">
            Recent projects span charitable education, recruitment, commerce, wellbeing, and specialist B2B. Different sectors, same standard: clear proposition, premium interface, fast build.
          </p>
        </div>

        <div className="mt-14 space-y-px overflow-hidden border border-black/15 bg-black/15">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group grid bg-card transition-colors hover:bg-background md:grid-cols-[0.8fr_1.1fr_0.9fr]"
              aria-label={`View ${project.name} case study`}
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[19rem]">
                <Image
                  src={project.image}
                  alt={`${project.name} website case study`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 32vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className="flex flex-col justify-between border-y border-black/10 p-6 md:border-x md:border-y-0 md:p-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-accent">{project.sector}</span>
                  <h3 className="mt-5 max-w-xl text-3xl font-black leading-none tracking-[-0.035em] md:text-5xl">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-6 max-w-xl text-base leading-7 text-foreground/72">{project.description}</p>
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-foreground/62">Outcome</p>
                  <p className="mt-4 text-2xl font-black tracking-[-0.03em]">{project.result}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-foreground transition-colors group-hover:text-accent">
                  View case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/case-studies" aria-label="View all case studies">
            <Button size="lg" variant="outline" className="rounded-full border-black/25 bg-card px-7 font-bold shadow-sm hover:border-accent hover:text-accent-foreground">
              View all case studies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
