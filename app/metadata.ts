import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devora | Professional Web Development for Startups & Growing Businesses",
  description: "Transform your business with affordable, professional web development services tailored for startups. Expert Next.js & React development, responsive design, and performance optimization.",
  keywords: ["startup web development", "affordable web design", "professional web services", "React development agency", "Next.js development", "UK web developer", "custom website solutions", "website performance optimization", "responsive web design", "SEO-friendly websites", "web development for startups", "mobile-friendly websites"],
  openGraph: {
    title: "Devora | Professional Web Development for Startups & Growing Businesses",
    description: "Transform your business with affordable, professional web development services tailored for startups. Expert Next.js & React development, responsive design, and performance optimization.",
    type: "website",
    locale: "en_GB",
    url: "https://devora.dev",
    siteName: "Devora",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Devora - Professional Web Development for Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devora | Professional Web Development for Startups",
    description: "Transform your business with affordable, professional web development services. Expert Next.js & React solutions.",
    images: ["/og-home.jpg"],
    creator: "@devoradev",
    site: "@devoradev",
  },
} 