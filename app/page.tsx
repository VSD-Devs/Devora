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

export const metadata: Metadata = {
  title: "Business Website Design & Development in Sheffield and the UK | Devora",
  description: "Sheffield-based web design and development business building bespoke business websites from the ground up. Strategy, design, development, SEO, launch, and ongoing support across the UK.",
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
    title: "Business Website Design & Development in Sheffield and the UK | Devora",
    description: "Bespoke business websites built from the ground up with strategy, design, development, SEO, launch, and support.",
    url: "https://www.devora.co.uk",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora - business web design and website development business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Website Design & Development | Devora",
    description: "Bespoke websites built from the ground up for ambitious UK businesses.",
    images: ["/devora-office.png"],
    creator: "@devora",
  },
}

export default function Home() {
  // Consolidated JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.devora.co.uk/#organization",
        "name": "Devora",
        "url": "https://www.devora.co.uk",
        "logo": "https://www.devora.co.uk/devora-bw.png",
        "description": "Business website design and development business building bespoke websites from the ground up.",
        "sameAs": [
          "https://www.facebook.com/share/14UKFzshvcq/?mibextid=wwXIfr",
          "https://www.instagram.com/devoraltd?igsh=MTBvNGQxbmhrb28xaA==",
          "https://www.linkedin.com/company/devora-web-design-development/",
          "https://x.com/DevoraLtd38083"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sheffield",
          "addressLocality": "Sheffield",
          "addressRegion": "South Yorkshire",
          "postalCode": "S1",
          "addressCountry": "GB"
        },
        "contact": {
          "@type": "ContactPoint",
          "telephone": "+44-1234-567890",
          "contactType": "Customer Support",
          "email": "hello@devora.co.uk"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.devora.co.uk/#website",
        "url": "https://www.devora.co.uk",
        "name": "Devora - Business Website Design & Development",
        "description": "Bespoke business website design and development business serving Sheffield and the UK.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.devora.co.uk/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@id": "https://www.devora.co.uk/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.devora.co.uk/#services",
        "name": "Web Design & Development",
        "provider": {
          "@id": "https://www.devora.co.uk/#organization"
        },
        "areaServed": [
          { "@type": "City", "name": "Sheffield" },
          { "@type": "AdministrativeArea", "name": "South Yorkshire" },
          { "@type": "AdministrativeArea", "name": "Yorkshire" },
          { "@type": "Country", "name": "United Kingdom" }
        ],
        "serviceType": ["Web Design", "Website Development", "Custom Website Builds", "Local SEO", "Branding"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.devora.co.uk/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.devora.co.uk"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.devora.co.uk/#localbusiness",
        "name": "Devora",
        "image": "https://www.devora.co.uk/devora-office.png",
        "description": "Award-winning web design and development business",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sheffield",
          "addressLocality": "Sheffield",
          "addressRegion": "South Yorkshire",
          "postalCode": "S1",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 53.3811,
          "longitude": -1.4701
        },
        "areaServed": [
          { "@type": "City", "name": "Sheffield" },
          { "@type": "AdministrativeArea", "name": "South Yorkshire" },
          { "@type": "AdministrativeArea", "name": "Yorkshire" },
          { "@type": "Country", "name": "United Kingdom" }
        ],
        "url": "https://www.devora.co.uk",
        "telephone": "+44-1234-567890",
        "priceRange": "$$"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.devora.co.uk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Devora offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Devora specialises in bespoke web design, website development, branding, local SEO, and digital strategy for businesses."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a typical project take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Project timelines vary based on complexity, but we pride ourselves on rapid deployment."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      {/* Consolidated JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
