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
    default: "Web Design & Development for Start-ups in Sheffield | Devora",
    template: "%s | Devora"
  },
  description: "Sheffield-based web design & development agency for start-ups. Custom digital solutions with rapid deployment, 80+ launches, and ongoing support. Serving Sheffield, South Yorkshire & Yorkshire.",
  keywords: [
    "web design Sheffield",
    "web development Sheffield",
    "web agency Sheffield",
    "startup web design Sheffield",
    "web design South Yorkshire",
    "web agency Yorkshire",
    "digital agency Sheffield",
    "website design near me Sheffield",
    "Sheffield web developers",
    "affordable web design Sheffield",
    "web development for start-ups",
    "start-up website design",
    "custom web development",
    "responsive web design",
    "ecommerce development Sheffield",
    "web application development"
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
    title: "Web Design & Development for Start-ups",
    description: "Award-winning web design and development agency specialising in custom digital solutions for start-ups. Expert design, rapid deployment, and ongoing support.",
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
    title: "Web Design & Development for Start-ups",
    description: "Award-winning web design and development agency specialising in custom digital solutions for start-ups.",
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
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/devora-bw.png', sizes: '192x192', type: 'image/png' },
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
        <link rel="dns-prefetch" href="https://cdn.vercel-insights.com" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JPTSQ7E77S"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JPTSQ7E77S');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {/* Analytics loaded with defer for non-critical performance impact */}
        <Analytics />
        {/* Cookie banner loads after content */}
        <CookieBanner />
      </body>
    </html>
  )
}
