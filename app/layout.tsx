import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainNav } from '@/components/MainNav';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { CookieConsent } from '@/components/CookieConsent';
import { headers } from 'next/headers';
import dynamic from 'next/dynamic';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devora.dev'),
  title: {
    default: "Devora | Affordable Web Development for Startups",
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
    url: "https://devora.dev",
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

// Client component for conditional navigation
const NavigationWrapper = dynamic(() => import('@/components/NavigationWrapper'), {
  ssr: false
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const isProjectInquiry = pathname.startsWith("/project-inquiry");
  
  // Create dynamic canonical URL based on current path
  const canonicalUrl = `https://devora.dev${pathname}`;

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/grid.svg" />
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
        
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Devora',
              url: 'https://devora.dev',
              logo: 'https://devora.dev/logo.png',
              description: 'Professional web development services tailored for startups and growing businesses',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'UK'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'contact@devora.dev'
              },
              sameAs: [
                'https://twitter.com/devoradev',
                'https://linkedin.com/company/devora',
                'https://github.com/devora'
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '27',
                bestRating: '5',
                worstRating: '1'
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <NavigationWrapper>
          <MainNav />
        </NavigationWrapper>
        <main>
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}