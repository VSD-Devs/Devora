import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Thank You for Your Enquiry",
    description: "Thank you for contacting Devora. We've received your enquiry and will be in touch within 24 hours.",
    robots: {
        index: false,
        follow: false,
    },
}

export default function ThankYouPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4">
                <div className="max-w-2xl mx-auto text-center py-24">
                    {/* Success Icon */}
                    <div className="mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/20">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
                        Thank You!
                    </h1>

                    {/* Message */}
                    <p className="text-xl text-gray-300 font-light mb-4">
                        We've received your enquiry and appreciate you reaching out.
                    </p>
                    <p className="text-lg text-gray-400 font-light mb-8">
                        Our team will review your request and get back to you within <span className="text-white font-medium">24 hours</span>.
                    </p>

                    {/* What happens next */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 mb-8 text-left">
                        <h2 className="text-lg font-light text-white mb-4">What happens next?</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-sm text-white flex-shrink-0 mt-0.5">1</span>
                                <span className="text-gray-300 font-light">We'll review your submission and prepare a tailored response</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-sm text-white flex-shrink-0 mt-0.5">2</span>
                                <span className="text-gray-300 font-light">A member of our team will reach out via email</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-sm text-white flex-shrink-0 mt-0.5">3</span>
                                <span className="text-gray-300 font-light">We'll schedule a call to discuss your project in detail</span>
                            </li>
                        </ul>
                    </div>

                    {/* Back to Home */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-light hover:bg-gray-100 transition-all duration-200"
                    >
                        Return to Homepage
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    {/* Additional contact info */}
                    <p className="text-sm text-gray-500 mt-8 font-light">
                        Have an urgent question? Email us directly at{" "}
                        <a href="mailto:hello@devora.co.uk" className="text-gray-300 hover:text-white transition-colors">
                            hello@devora.co.uk
                        </a>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
