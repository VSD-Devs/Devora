import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.devora.co.uk'),
  title: {
    default: "Devora - Affordable Web Design & Development for Start-ups | UK",
    template: "%s | Devora"
  },
  description: "Award-winning web design and development agency specialising in affordable digital solutions for start-ups. Flexible pricing, rapid deployment, and ongoing support. Launch your start-up with confidence.",
  keywords: [
    "web design agency UK",
    "web development for start-ups",
    "affordable web design",
    "start-up website design",
    "custom web development",
    "responsive web design",
    "ecommerce development",
    "web application development",
    "digital agency UK",
    "website design London",
    "start-up web solutions",
    "flexible pricing web design",
    "rapid website deployment",
    "professional web services"
  ],
  authors: [{ name: "Devora" }],
  creator: "Devora",
  publisher: "Devora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.devora.co.uk",
    siteName: "Devora",
    title: "Devora - Affordable Web Design & Development for Start-ups",
    description: "Award-winning web design and development agency specialising in affordable digital solutions for start-ups. Flexible pricing, rapid deployment, and ongoing support.",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora - Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devora - Affordable Web Design & Development for Start-ups",
    description: "Award-winning web design and development agency specialising in affordable digital solutions for start-ups.",
    images: ["/devora-office.png"],
    creator: "@devora",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.devora.co.uk",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "technology",
  icons: {
    icon: [
      { url: '/devora-bw.png', sizes: '32x32', type: 'image/png' },
      { url: '/devora-bw.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/devora-bw.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/devora-bw.png',
      },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  )
}
