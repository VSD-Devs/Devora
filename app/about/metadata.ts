import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Devora | Professional Web Development for Startups",
  description: "Led by Khalil, Devora delivers tailored, affordable web development services for ambitious startups and small businesses. With years of experience, we understand your unique needs and budget constraints.",
  keywords: ["web development agency", "startup web development", "affordable web design", "professional web developer", "startup-friendly agency", "UK web development", "London web developer", "custom website solutions", "React developer for startups", "Next.js development services"],
  openGraph: {
    title: "About Devora | Professional Web Development for Startups",
    description: "Led by Khalil, Devora delivers tailored, affordable web development services for ambitious startups and small businesses. With years of experience, we understand your unique needs and budget constraints.",
    type: "website",
    images: [
      {
        url: "/about-og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Devora - Professional Web Development Team",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Devora | Professional Web Development for Startups",
    description: "Led by Khalil, Devora delivers tailored, affordable web development services for ambitious startups and small businesses.",
    images: ["/about-og-image.jpg"],
  },
} 