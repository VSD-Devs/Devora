import { Button } from "@/components/ui/button"
import { CheckCircle, Home, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Thank You | Devora",
    description: "Thank you for getting in touch with Devora. We've received your message and will get back to you shortly.",
    robots: {
        index: false,
        follow: false,
    },
}

export default function ThankYouPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-grow flex items-center justify-center py-20 px-4">
                <div className="max-w-2xl w-full text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
                            <CheckCircle className="w-10 h-10 text-primary" strokeWidth={1.5} />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Thank <span className="font-serif italic font-normal">You!</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto">
                        Your message has been received. Our team will review your enquiry and get back to you within <span className="text-foreground font-semibold">2 working days</span>.
                    </p>

                    <div className="grid gap-4 sm:flex sm:justify-center">
                        <Link href="/">
                            <Button size="lg" className="rounded-full gap-2 px-8 py-6 text-lg w-full sm:w-auto">
                                <Home className="w-5 h-5" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/case-studies">
                            <Button size="lg" variant="outline" className="rounded-full gap-2 px-8 py-6 text-lg w-full sm:w-auto">
                                View Our Work
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-16 pt-10 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                            Need immediate assistance? Email us at{" "}
                            <a href="mailto:hello@devora.co.uk" className="text-primary hover:underline font-medium">
                                hello@devora.co.uk
                            </a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
