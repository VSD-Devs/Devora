import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { JsonLd } from "@/components/JsonLd"
import { servicePages, SITE_URL } from "@/lib/seo-pages"
import { breadcrumbSchema, graphSchema, serviceSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Web Design & Development Services Sheffield",
  description:
    "Bespoke web design, web development, branding, local SEO, website redesign and Next.js development for Sheffield and UK businesses.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Web Design & Development Services Sheffield | Devora",
    description:
      "Premium, conversion-led website services for Sheffield, South Yorkshire and UK businesses.",
    url: `${SITE_URL}/services`,
    images: [{ url: "/devora-office.png", width: 1200, height: 630, alt: "Devora website services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services Sheffield | Devora",
    description: "Bespoke website services built for search, speed and enquiries.",
    images: ["/devora-office.png"],
  },
}

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background px-4 pb-16 pt-32 md:px-6 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Services</p>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] md:text-7xl">
                  Web design and development services for serious businesses.
                </h1>
              </div>
              <div className="border-l border-black/10 pl-6">
                <p className="text-lg leading-8 text-muted-foreground">
                  Devora plans, designs, builds and improves websites that need to look sharper, load faster, rank better and generate more useful enquiries.
                </p>
                <Link href="/#contact" className="mt-7 inline-flex">
                  <Button size="lg" className="rounded-full bg-foreground px-7 font-bold text-background hover:bg-accent">
                    Discuss your website
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-4">
            {servicePages.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white p-6 transition-colors hover:bg-foreground">
                <div className="mb-8 flex items-center justify-between">
                  <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-background" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-black leading-tight tracking-[-0.03em] group-hover:text-background">{service.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground group-hover:text-background/75">{service.intro}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <JsonLd
        data={graphSchema([
          webPageSchema({
            path: "/services",
            name: "Web design and development services",
            description: "Web design, development, branding, local SEO and website redesign services from Devora.",
          }),
          ...servicePages.map((page) =>
            serviceSchema({
              path: `/services/${page.slug}`,
              name: page.title,
              description: page.intro,
            }),
          ),
          breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.name, url: `${SITE_URL}${item.href === "/" ? "" : item.href}` }))),
        ])}
      />
      <Footer />
    </div>
  )
}
