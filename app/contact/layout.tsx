import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Devora - Web Development Agency",
  description: "Get in touch with Devora for expert web development, design, and digital marketing services. We help startups build amazing digital experiences.",
  keywords: "contact devora, web development agency contact, startup web development contact, affordable web design contact",
  openGraph: {
    title: "Contact Devora - Web Development Agency",
    description: "Get in touch with us to discuss your next digital project. We specialize in startup-focused web development solutions.",
    type: "website",
    images: [{ url: "/og-contact.jpg", width: 1200, height: 630, alt: "Contact Devora" }]
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 