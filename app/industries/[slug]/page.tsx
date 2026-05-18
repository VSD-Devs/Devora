import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { JsonLd } from "@/components/JsonLd"
import { getIndustryPage, getServicePage, industryPages, SITE_URL } from "@/lib/seo-pages"
import { absoluteUrl, breadcrumbSchema, faqSchema, graphSchema, serviceSchema, webPageSchema } from "@/lib/schema"

type IndustryPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getIndustryPage(slug)

  if (!page) return { title: "Industry Not Found" }

  const path = `/industries/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: `${page.metaTitle} | Devora`,
      description: page.metaDescription,
      url: absoluteUrl(path),
      type: "website",
      locale: "en_GB",
      images: [{ url: "/devora-office.png", width: 1200, height: 630, alt: `${page.title} by Devora` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | Devora`,
      description: page.metaDescription,
      images: ["/devora-office.png"],
    },
    robots: { index: true, follow: true },
  }
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params
  const page = getIndustryPage(slug)

  if (!page) notFound()

  const path = `/industries/${page.slug}`
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: page.title, href: path },
  ]

  const relatedServices = (page.relatedServices || [])
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary px-4 pb-16 pt-32 text-primary-foreground md:px-6 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-primary-foreground/70">Industry</p>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] md:text-7xl">{page.h1}</h1>
              </div>
              <div className="border-l border-primary-foreground/20 pl-6">
                <p className="text-lg leading-8 text-primary-foreground/85">{page.intro}</p>
                <Link href="/#contact" className="mt-7 inline-flex">
                  <Button size="lg" className="rounded-full bg-background px-7 font-bold text-foreground hover:bg-background/90">
                    Start a project
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em]">Who it serves</h2>
              <ul className="mt-8 space-y-3">
                {page.audience.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-black/10 pb-3 text-sm font-semibold text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em]">What matters</h2>
              <ul className="mt-8 space-y-3">
                {page.included.map((item) => (
                  <li key={item} className="border-b border-black/10 pb-3 text-sm font-semibold text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em]">How we build it</h2>
              <ol className="mt-8 space-y-3">
                {page.process.map((item, index) => (
                  <li key={item} className="border-b border-black/10 pb-3 text-sm font-semibold text-muted-foreground">
                    <span className="mr-3 font-serif text-xl italic text-accent">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Sector strategy</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Built around how buyers choose.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              {page.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                For the full build, see our{" "}
                <Link href="/services/web-design" className="font-bold text-foreground underline underline-offset-4">web design</Link>,{" "}
                <Link href="/services/web-development" className="font-bold text-foreground underline underline-offset-4">web development</Link> and{" "}
                <Link href="/services/local-seo" className="font-bold text-foreground underline underline-offset-4">local SEO</Link> services.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Related services</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Support pages.</h2>
            </div>
            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
              {relatedServices.map((related) => (
                <Link key={related.slug} href={`/services/${related.slug}`} className="group bg-white p-6 hover:bg-foreground">
                  <h3 className="text-2xl font-black tracking-[-0.03em] group-hover:text-background">{related.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-background/75">{related.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">FAQs</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Sector questions.</h2>
            </div>
            <div className="space-y-px overflow-hidden border border-black/10 bg-black/10">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="bg-white p-6">
                  <summary className="cursor-pointer text-lg font-black tracking-[-0.02em]">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">Need a website that fits your market?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/85">
              We will map the service pages, proof, industry content and conversion routes your buyers need before they enquire.
            </p>
            <Link href="/#contact" className="mt-8 inline-flex">
              <Button size="lg" className="rounded-full bg-background px-7 font-bold text-foreground hover:bg-background/90">
                Book a discovery call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <JsonLd
        data={graphSchema([
          webPageSchema({ path, name: page.h1, description: page.metaDescription }),
          serviceSchema({ path, name: page.title, description: page.intro }),
          faqSchema(page.faqs, path),
          breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.name, url: `${SITE_URL}${item.href === "/" ? "" : item.href}` }))),
        ])}
      />
      <Footer />
    </div>
  )
}
