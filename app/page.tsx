import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { OurServices } from "@/components/our-services"
import { OurWork } from "@/components/our-work"
import { SuccessStories } from "@/components/success-stories"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affordable Web Design & Development for Start-ups",
  description: "Launch your start-up with confidence. Devora offers flexible pricing, transparent costs, and rapid deployment for start-ups. 100+ successful launches. Get started with affordable web design and development tailored to your budget.",
  alternates: {
    canonical: "https://www.devora.co.uk",
  },
  openGraph: {
    title: "Affordable Web Design & Development for Start-ups | Devora",
    description: "Launch your start-up with confidence. Flexible pricing, transparent costs, and rapid deployment. 100+ successful launches.",
    url: "https://www.devora.co.uk",
    type: "website",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora - Affordable Web Design & Development for Start-ups",
      },
    ],
  },
}

export default function Home() {
  // JSON-LD Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Devora",
    url: "https://www.devora.co.uk",
    logo: "https://www.devora.co.uk/devora-bw.png",
    description: "Award-winning web design and development agency specialising in affordable digital solutions for start-ups",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "England",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://linkedin.com/company/devora",
      "https://twitter.com/devora",
      "https://instagram.com/devora",
    ],
    foundingDate: "2020",
    slogan: "We create, you grow. simple as that.",
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Start-up Solutions",
      "Custom Development",
      "Responsive Design",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Devora",
    url: "https://www.devora.co.uk",
    description: "Affordable web design and development agency for start-ups",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.devora.co.uk/blog?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Devora Web Design & Development",
    url: "https://www.devora.co.uk",
    image: "https://www.devora.co.uk/devora-office.png",
    description: "Professional web design and development services for start-ups with flexible pricing and rapid deployment",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: [
      "Web Design",
      "Web Development",
      "Custom Development",
      "Start-up Web Solutions",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design & Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Design",
            description: "Professional web design services for start-ups",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom web development solutions",
          },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.devora.co.uk",
      },
    ],
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
        <Contact />
        <Footer />
      </main>
    </>
  )
}
