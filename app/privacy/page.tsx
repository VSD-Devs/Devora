import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Devora",
  description: "Our privacy policy and commitment to protecting your data",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-12">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  At Devora, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your name, email address, and phone number when you contact us</li>
                  <li>Information about your company and project requirements</li>
                  <li>Technical information about your device and browsing activity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customised experience. Specifically, we may use information collected about you via the site to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Respond to your enquiries and provide customer service</li>
                  <li>Send marketing and promotional emails</li>
                  <li>Generate a personal profile about you so that future visits to our site will be personalised</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclosure of Your Information</h2>
                <p>
                  We do not sell, trade, or rent your personal identification information to third parties. We may disclose generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates for the purposes outlined above.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Security of Your Information</h2>
                <p>
                  We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorised access, alteration, disclosure, or destruction of your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p>
                  If you have questions or concerns regarding this Privacy Policy, please contact us at hello@devora.co.uk or visit our contact page.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
