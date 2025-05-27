import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devora | Professional Web Development for Startups & Growing Businesses",
  description: "Transform your business with affordable, professional web development services tailored for startups. Expert Next.js & React development, responsive design, and performance optimisation.",
  keywords: [
    // Primary keywords
    "startup web development", "affordable web design", "professional web services", 
    "React development agency", "Next.js development", "UK web developer",
    // Secondary keywords
    "custom website solutions", "website performance optimisation", "responsive web design", 
    "SEO-friendly websites", "web development for startups", "mobile-friendly websites",
    // Long-tail keywords
    "startup website development UK", "affordable React development", "professional Next.js developer",
    "small business web development", "e-commerce website development", "web application development",
    // Technical keywords
    "TypeScript development", "modern web development", "JAMstack development",
    "headless CMS development", "API development", "web performance optimisation"
  ],
  authors: [{ name: "Devora Team", url: "https://www.devora.co.uk/about" }],
  creator: "Devora",
  publisher: "Devora",
  category: "Web Development",
  classification: "Business Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Devora | Professional Web Development for Startups & Growing Businesses",
    description: "Transform your business with affordable, professional web development services tailored for startups. Expert Next.js & React development, responsive design, and performance optimisation.",
    type: "website",
    locale: "en_GB",
    url: "https://www.devora.co.uk",
    siteName: "Devora",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Devora - Professional Web Development for Startups",
        type: "image/jpeg",
      },
      {
        url: "/og-home-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Devora - Professional Web Development for Startups",
        type: "image/jpeg",
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
  alternates: {
    canonical: "https://www.devora.co.uk",
    languages: {
      'en-GB': 'https://www.devora.co.uk',
      'en-US': 'https://www.devora.co.uk',
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION || '',
    },
  },
  other: {
    'theme-color': '#3b82f6',
    'color-scheme': 'light',
    'format-detection': 'telephone=no',
  },
} 