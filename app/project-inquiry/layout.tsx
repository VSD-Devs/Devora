import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Start Your Project | Devora",
  description: "Begin your web development journey with Devora. Get a custom quote for your startup's website or application.",
  robots: "noindex, nofollow" // Since this is a form page, we typically don't want it indexed
}

export default function ProjectInquiryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
      {children}
    </div>
  )
} 