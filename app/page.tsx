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
    slogan: "Web design and development built for start-ups",
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
    description: "Web design and development agency specialising in custom solutions for start-ups",
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
    description: "Professional web design and development services for start-ups with expert design and rapid deployment",
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Devora",
    image: "https://www.devora.co.uk/devora-bw.png",
    description: "Award-winning web design and development agency specialising in custom digital solutions for start-ups",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "United Kingdom",
    },
    telephone: "+44 (0)123 456 7890",
    email: "hello@devora.co.uk",
    url: "https://www.devora.co.uk",
    priceRange: "££",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "80",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should I choose Devora for web design and development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Devora specialises in high-quality web design and development solutions for start-ups. We offer expert design, rapid deployment, no lock-in contracts, and transparent communication. With 80+ successful launches, we understand the unique needs of growing businesses.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in your web design and development services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services include custom web design, web development, UI/UX design, web applications, branding, and digital marketing. All services are tailored to your start-up's budget and growth stage.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you deliver a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialise in rapid deployment. Our flexible approach means we can typically deliver websites quickly without compromising quality. Timeline depends on project scope and requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer ongoing support after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ongoing support is included with all our services. We're committed to supporting your start-up every step of the way, not just at launch.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Devora different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We understand that every start-up has different needs at different growth stages. Our expert team adapts to whether you're bootstrapped or funded, delivering transparent results without hidden fees.",
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
