import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainNav } from '@/components/MainNav';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://devora.dev'),
  title: {
    default: "Devora | Affordable Web Development for Startups",
    template: "%s | Devora"
  },
  description: "Transform your startup with professional, affordable web development services. Expert React & Next.js development, UI/UX design, and SEO optimization tailored for startups.",
  keywords: ["startup web development", "affordable web design", "React development", "Next.js agency", "startup-friendly developer", "professional web services", "SEO optimization"],
  authors: [{ name: "Khalil" }],
  creator: "Devora",
  publisher: "Devora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devora.dev",
    title: "Devora | Affordable Web Development for Startups",
    description: "Transform your startup with professional, affordable web development services. Expert React & Next.js development, UI/UX design, and SEO optimization tailored for startups.",
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
    description: "Transform your startup with professional, affordable web development services. Expert React & Next.js development, UI/UX design, and SEO optimization.",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://devora.dev" />
        <meta name="theme-color" content="#000000" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Devora',
              url: 'https://devora.dev',
              logo: 'https://devora.dev/logo.png',
              description: 'Professional web development services tailored for startups',
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
                'https://twitter.com/devora',
                'https://linkedin.com/company/devora',
                'https://github.com/devora'
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <MainNav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}