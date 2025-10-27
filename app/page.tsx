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
  title: "Web Design & Development for Start-ups | Devora",
  description: "Award-winning web design and development agency specialising in custom digital solutions for start-ups. Expert design, rapid deployment, and ongoing support. Build your start-up with us.",
  keywords: [
    "web design agency UK",
    "web development for start-ups",
    "start-up website design",
    "custom web development agency",
    "responsive web design",
    "web design agency London",
    "startup web solutions",
  ],
  alternates: {
    canonical: "https://www.devora.co.uk",
  },
  openGraph: {
    title: "Web Design & Development for Start-ups | Devora",
    description: "Award-winning web design and development agency specialising in custom digital solutions for start-ups. Expert design, rapid deployment, and ongoing support.",
    url: "https://www.devora.co.uk",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora - Award-winning Web Design & Development Agency for Start-ups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development for Start-ups | Devora",
    description: "Award-winning web design and development agency specialising in custom digital solutions for start-ups.",
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
        "description": "Award-winning web design and development agency specialising in custom digital solutions for start-ups.",
        "sameAs": [
          "https://www.linkedin.com/company/devora",
          "https://twitter.com/devora",
          "https://instagram.com/devora"
        ],
        "address": {
          "@type": "PostalAddress",
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
        "name": "Devora - Web Design & Development for Start-ups",
        "description": "Award-winning web design and development agency specialising in custom digital solutions for start-ups.",
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
        "areaServed": "GB",
        "serviceType": ["Web Design", "Web Development", "Branding", "Digital Marketing"]
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
        "description": "Award-winning web design and development agency",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "GB"
        },
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
              "text": "Devora specializes in web design, web development, branding, and digital marketing solutions for start-ups."
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
        <Contact />
        <Footer />
      </main>
    </>
  )
}
