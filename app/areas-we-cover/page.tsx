import { ArrowRight, Building2, Globe2, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getLocationsByCountry, ukLocations, ukRegionGroups } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Areas We Cover | UK Web Design & Website Development | Devora",
  description: "Devora builds bespoke business websites from the ground up for companies across the UK. See the major cities, regions, and local SEO areas we cover.",
  keywords: [
    "areas we cover web design",
    "UK web design business",
    "website development UK",
    "business website design UK",
    "bespoke website development UK",
    "web design near me",
    "local SEO website development",
    "web development company UK",
    "build a website from scratch UK",
  ],
  alternates: {
    canonical: "https://www.devora.co.uk/areas-we-cover",
  },
  openGraph: {
    title: "Areas We Cover | UK Web Design & Website Development | Devora",
    description: "Bespoke business website design and development from the ground up, serving Sheffield and major UK locations.",
    url: "https://www.devora.co.uk/areas-we-cover",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora UK web design and website development areas covered",
      },
    ],
  },
}

export default function AreasWeCoverPage() {
  const groupedLocations = getLocationsByCountry()
  const featuredLocations = ukLocations.filter((location) => location.priority)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.devora.co.uk/areas-we-cover#webpage",
        "url": "https://www.devora.co.uk/areas-we-cover",
        "name": "Areas We Cover",
        "description": "UK service area page for business website design and website development from the ground up.",
        "isPartOf": {
          "@id": "https://www.devora.co.uk/#website"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.devora.co.uk/areas-we-cover#website-development-service",
        "name": "Bespoke business website design and development",
        "serviceType": ["Website Design", "Website Development", "Custom Website Builds", "Local SEO"],
        "provider": {
          "@id": "https://www.devora.co.uk/#organization"
        },
        "areaServed": ukLocations.map((location) => ({
          "@type": "City",
          "name": location.name,
          "addressRegion": location.region,
          "addressCountry": location.country === "England" ? "GB-ENG" : location.country === "Scotland" ? "GB-SCT" : location.country === "Wales" ? "GB-WLS" : "GB-NIR"
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.devora.co.uk/areas-we-cover#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.devora.co.uk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Areas We Cover",
            "item": "https://www.devora.co.uk/areas-we-cover"
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-background px-4 pb-16 pt-32 md:px-6 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 border border-black/10 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-foreground shadow-sm">
                  <Globe2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  UK website development areas
                </div>

                <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-foreground md:text-7xl">
                  Areas we cover for
                  <span className="block font-serif font-normal italic tracking-[-0.06em] text-accent">business websites.</span>
                </h1>
              </div>

              <div className="border-l border-black/10 pl-6">
                <p className="text-lg leading-8 text-muted-foreground">
                  Devora designs and develops bespoke websites from the ground up for businesses across Sheffield, Yorkshire, England, Scotland, Wales, and Northern Ireland. Each location page is structured for local search intent, technical SEO, and conversion.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Link href="/#contact">
                    <Button size="lg" className="w-full rounded-full bg-foreground px-7 font-bold text-background hover:bg-accent sm:w-auto">
                      Build my website
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="/locations/sheffield">
                    <Button size="lg" variant="outline" className="w-full rounded-full border-black/15 bg-white px-7 font-bold hover:border-accent hover:text-accent-foreground sm:w-auto">
                      Sheffield web design
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
              {[
                { icon: Building2, label: "Built from scratch", copy: "Custom strategy, design, development, copy structure, and launch planning." },
                { icon: Search, label: "Local SEO structure", copy: "Location-led metadata, internal links, schema, and service content." },
                { icon: Globe2, label: "UK coverage", copy: `${ukLocations.length} major UK cities and service areas indexed through the sitemap.` },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="bg-white p-6">
                    <Icon className="mb-8 h-6 w-6 text-accent" strokeWidth={1.75} aria-hidden="true" />
                    <h2 className="text-2xl font-black tracking-[-0.03em]">{item.label}</h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Featured locations</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">
                High-intent web design pages for major UK cities.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-4">
              {featuredLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group bg-white p-6 transition-colors hover:bg-foreground"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-background" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-black tracking-[-0.03em] group-hover:text-background">
                    Web design {location.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-background/75">
                    Ground-up website development for businesses in {location.name} and {location.region}.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">All areas</p>
                <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">
                  UK regions and cities we cover.
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  We work remotely and collaboratively, so your business can get a properly built website whether you are around the corner in South Yorkshire or scaling nationally.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {ukRegionGroups.map((region) => (
                    <span key={region} className="border border-black/10 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {Object.entries(groupedLocations).map(([country, locations]) => (
                  <div key={country}>
                    <h3 className="mb-3 border-b border-black/10 pb-3 text-xl font-black tracking-[-0.02em]">{country}</h3>
                    <div className="grid grid-cols-2 gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-3">
                      {locations.map((location) => (
                        <Link
                          key={location.slug}
                          href={`/locations/${location.slug}`}
                          className="bg-white px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {location.name}
                          <span className="block pt-1 text-xs font-normal text-muted-foreground">{location.region}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              Want a business website built properly from day one?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/85">
              We plan, design, build, optimise, and launch websites with the technical foundations Google expects and the commercial clarity your customers need.
            </p>
            <Link href="/#contact" className="mt-8 inline-flex">
              <Button size="lg" className="rounded-full bg-background px-7 font-bold text-foreground hover:bg-background/90">
                Start a website project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Footer />
    </div>
  )
}
