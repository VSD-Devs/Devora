import { notFound } from "next/navigation"
import { ArrowRight, Code, MapPin, Palette, Search, ShieldCheck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getLocationBySlug, ukLocations } from "@/lib/locations"

interface LocationPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    return {
      title: "Location Not Found",
      description: "The requested location could not be found.",
    }
  }

  const title = `Web Design ${location.name} | Website Development for Businesses | Devora`
  const description = `Bespoke web design and website development in ${location.name}. Devora builds business websites from the ground up with strategy, technical SEO, performance, and conversion in mind.`

  return {
    title,
    description,
    keywords: [
      `web design ${location.name}`,
      `website development ${location.name}`,
      `business website design ${location.name}`,
      `web development ${location.name}`,
      `website designer ${location.name}`,
      `custom website development ${location.name}`,
      `SEO web design ${location.name}`,
      `web agency ${location.name}`,
      `build a website from scratch ${location.name}`,
      `bespoke website ${location.region}`,
    ],
    alternates: {
      canonical: `https://www.devora.co.uk/locations/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.devora.co.uk/locations/${slug}`,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: "/devora-office.png",
          width: 1200,
          height: 630,
          alt: `Devora web design and website development for ${location.name} businesses`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/devora-office.png"],
      creator: "@devora",
    },
  }
}

export async function generateStaticParams() {
  return ukLocations.map((location) => ({
    slug: location.slug,
  }))
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const title = `Web design and website development in ${location.name}`
  const description = `Devora builds bespoke websites from the ground up for businesses in ${location.name}, ${location.region}.`

  const services = [
    {
      icon: Palette,
      title: `Website design in ${location.name}`,
      description: `Clear positioning, page structure, responsive UI, and visual direction for ${location.name} businesses that need to look credible fast.`,
      features: ["Bespoke page layouts", "Conversion-led design", "Mobile-first UX", "Brand-aligned visuals"],
    },
    {
      icon: Code,
      title: "Ground-up website development",
      description: "Clean Next.js builds, maintainable components, fast loading times, and technical foundations that avoid template bloat.",
      features: ["Custom codebase", "Performance-first build", "CMS-ready structure", "Secure deployment"],
    },
    {
      icon: Search,
      title: `Local SEO for ${location.name}`,
      description: `Metadata, service pages, schema, internal links, and search-friendly copy focused on ${location.name} and ${location.region} intent.`,
      features: ["Local keyword mapping", "Schema markup", "Sitemap coverage", "Search-ready content"],
    },
    {
      icon: ShieldCheck,
      title: "Technical foundations",
      description: "Accessibility, Core Web Vitals, analytics, security, and clean indexing signals built into the site from day one.",
      features: ["Core Web Vitals", "Accessible markup", "Analytics setup", "Security hygiene"],
    },
    {
      icon: Wrench,
      title: "Launch and support",
      description: "Testing, deployment, training, and post-launch improvements so your website continues to work after it goes live.",
      features: ["Browser testing", "Content handover", "Ongoing support", "Growth iterations"],
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.devora.co.uk/#organization",
        "name": "Devora",
        "url": "https://www.devora.co.uk",
        "logo": "https://www.devora.co.uk/devora-bw.png",
        "description": "Business website design and development agency building bespoke websites from the ground up.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+44-1234-567890",
          "contactType": "Customer Support",
          "email": "hello@devora.co.uk"
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://www.devora.co.uk/locations/${slug}#webpage`,
        "url": `https://www.devora.co.uk/locations/${slug}`,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": "https://www.devora.co.uk/#website"
        }
      },
      {
        "@type": "Service",
        "@id": `https://www.devora.co.uk/locations/${slug}#service`,
        "name": `Website design and development in ${location.name}`,
        "description": description,
        "serviceType": ["Website Design", "Website Development", "Custom Website Builds", "Local SEO"],
        "provider": {
          "@id": "https://www.devora.co.uk/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": location.name,
          "addressRegion": location.region,
          "addressCountry": "GB"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.devora.co.uk/locations/${slug}#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": location.name,
            "item": `https://www.devora.co.uk/locations/${slug}`
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative bg-primary px-6 py-12 pt-32 text-primary-foreground md:py-20 md:pt-40">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/areas-we-cover"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
              Areas we cover
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 border border-primary-foreground/20 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {location.region}, {location.country}
                </div>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] md:text-7xl">
                  Web design {location.name}
                  <span className="block font-serif font-normal italic tracking-[-0.06em] text-primary-foreground/80">
                    built from the ground up.
                  </span>
                </h1>
              </div>

              <div className="border-l border-primary-foreground/20 pl-6">
                <p className="text-lg leading-8 text-primary-foreground/85">
                  We create fast, distinctive, conversion-led business websites for companies in {location.name} and across {location.region}. No generic template polish: strategy, design, development, SEO, and launch planning are handled as one joined-up build.
                </p>
                <Link href="/#contact" className="mt-7 inline-flex">
                  <Button size="lg" className="rounded-full bg-background px-7 font-bold text-foreground hover:bg-background/90">
                    Start a {location.name} website project
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Website services in {location.name}</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">
                A complete website build, not a patched-together presence.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Each project is planned around your business model, customer journey, search demand, and the practical realities of launching a website that can keep improving.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-5">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <article key={service.title} className={`bg-white p-6 ${index === 0 ? "lg:col-span-2" : ""}`}>
                    <Icon className="mb-8 h-6 w-6 text-accent" strokeWidth={1.75} aria-hidden="true" />
                    <h3 className="text-2xl font-black leading-tight tracking-[-0.03em]">{service.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.description}</p>
                    <ul className="mt-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm font-semibold text-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Local search intent</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">
                Built for how your customers actually search.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                A business website in {location.name} needs more than a good-looking homepage. It needs a clear service architecture, fast pages, helpful content, and location signals that help Google understand who you serve.
              </p>
              <p>
                We structure pages around phrases such as web design {location.name}, website development {location.name}, business website design {location.region}, and bespoke website builds for UK businesses, while keeping the copy readable for real people.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              Ready to build your {location.name} business website?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/85">
              Tell us what the website needs to achieve and we will map the route from first idea to launch-ready build.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/#contact">
                <Button size="lg" className="w-full rounded-full bg-background px-7 font-bold text-foreground hover:bg-background/90 sm:w-auto">
                  Get in touch
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/areas-we-cover">
                <Button size="lg" variant="outline" className="w-full rounded-full border-primary-foreground bg-transparent px-7 font-bold text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto">
                  View all areas
                </Button>
              </Link>
            </div>
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
