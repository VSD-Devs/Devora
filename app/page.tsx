import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { OurServices } from "@/components/our-services"
import { OurWork } from "@/components/our-work"
import { SuccessStories } from "@/components/success-stories"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { JsonLd } from "@/components/JsonLd"
import {
  breadcrumbSchema,
  faqSchema,
  graphSchema,
  localBusinessSchema,
  organisationSchema,
  serviceSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/schema"

export const metadata: Metadata = {
  title: "Web Design & Development in Sheffield | Devora",
  description: "Devora builds bespoke, fast and conversion-led websites for Sheffield and UK businesses that need to look sharper, rank better and generate more enquiries.",
  keywords: [
    "web design Sheffield",
    "web development Sheffield",
    "web development business Sheffield",
    "business website design Sheffield",
    "website development for businesses",
    "build a website from scratch UK",
    "bespoke website development UK",
    "web design South Yorkshire",
    "web design UK",
    "website development business Sheffield",
    "website design near me",
    "Sheffield web developers",
    "SEO website design UK",
  ],
  alternates: {
    canonical: "https://www.devora.co.uk",
  },
  openGraph: {
    title: "Web Design & Development in Sheffield | Devora",
    description: "Bespoke, fast and conversion-led websites for Sheffield and UK businesses.",
    url: "https://www.devora.co.uk",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora Sheffield web design and website development studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development in Sheffield | Devora",
    description: "Bespoke websites built to win trust, rank better and generate enquiries.",
    images: ["/devora-office.png"],
    creator: "@devora",
  },
}

export default function Home() {
  const homeFaqs = [
    {
      question: "What services does Devora offer?",
      answer:
        "Devora provides bespoke web design, web development, branding, local SEO, website redesign and Next.js development for Sheffield and UK businesses.",
    },
    {
      question: "Do you build websites from the ground up?",
      answer:
        "Yes. Our preference is to plan, design, and develop business websites from the ground up rather than forcing your goals into a generic template.",
    },
  ]

  return (
    <>
      <JsonLd
        data={graphSchema([
          organisationSchema(),
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema({
            path: "/",
            name: "Web Design & Development in Sheffield",
            description:
              "Devora builds bespoke, fast and conversion-led websites for Sheffield and UK businesses.",
          }),
          serviceSchema({
            path: "/services/web-design",
            name: "Web design and development",
            description: "Bespoke web design, web development, branding and local SEO for Sheffield and UK businesses.",
          }),
          faqSchema(homeFaqs, "/"),
          breadcrumbSchema([{ name: "Home", url: "https://www.devora.co.uk" }]),
        ])}
      />

      <main className="min-h-screen">
        <Header />
        <Hero />
        <ClientLogos />
        <About />
        <WhyUs />
        <OurServices />
        <OurWork />
        <SuccessStories />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
