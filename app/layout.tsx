import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainNav } from '@/components/MainNav';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { CookieConsent } from '@/components/CookieConsent';
import { OrganizationStructuredData, WebsiteStructuredData } from '@/components/seo/structured-data';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.devora.co.uk'),
  title: {
    default: "Devora |  Web Design, Web Development, Digital Solutions",
    template: "%s | Devora"
  },
  description: "Transform your startup with professional, affordable web development services. Specialising in React & Next.js development, UI/UX design, and SEO optimization tailored for growing businesses.",
  keywords: ["startup web development", "affordable web design", "React development", "Next.js agency", "startup-friendly developer", "professional web services", "SEO optimization", "UK web developer", "responsive website design", "ecommerce development", "mobile-friendly websites", "web performance optimization", "business website development", "custom web solutions", "professional web design"],
  authors: [{ name: "Khalil" }],
  creator: "Devora",
  publisher: "Devora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Devora',
  },
  applicationName: 'Devora',
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.devora.co.uk",
    title: "Devora | Affordable Web Development for Startups",
    description: "Transform your startup with professional, affordable web development services. Specialising in React & Next.js development, UI/UX design, and SEO optimization tailored for growing businesses.",
    siteName: "Devora",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devora - Professional Web Development for Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devora | Affordable Web Development for Startups",
    description: "Transform your startup with professional, affordable web development services. Specialising in React & Next.js development, UI/UX design, and SEO optimization.",
    images: ["/og-image.jpg"],
    creator: "@devoradev",
    site: "@devoradev",
  },
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
  verification: {
    google: "ADD-YOUR-GOOGLE-VERIFICATION-CODE",
    other: {
      me: ["ADD-YOUR-YANDEX-VERIFICATION-CODE", "ADD-YOUR-BING-VERIFICATION-CODE"]
    }
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/grid.svg" />
        <link rel="preload" as="image" href="/DEVORA.png" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Performance optimization meta tags */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Resource hints for third-party services */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Enhanced Structured Data */}
        <OrganizationStructuredData
          name="Devora"
          url="https://www.devora.co.uk"
          logo="https://www.devora.co.uk/DEVORA.png"
          description="Professional web development services tailored for startups and growing businesses. Specialising in React, Next.js, and modern web technologies."
          address={{
            addressCountry: 'UK',
            addressRegion: 'England'
          }}
          contactPoint={{
            contactType: 'customer service',
            email: 'contact@devora.co.uk'
          }}
          sameAs={[
            'https://twitter.com/devoradev',
            'https://linkedin.com/company/devora',
            'https://github.com/devora'
          ]}
        />
        
        <WebsiteStructuredData
          name="Devora"
          url="https://www.devora.co.uk"
          description="Professional web development services for startups and growing businesses"
          potentialAction={{
            target: 'https://www.devora.co.uk/search?q={search_term_string}',
            queryInput: 'required name=search_term_string'
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MainNav />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}