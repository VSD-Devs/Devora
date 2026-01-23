import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Web Development Services Near You | Locations | Devora",
  description: "Find web design and development services in your area. We serve Sheffield, Leeds, Manchester, Birmingham, and surrounding areas. Local expertise, global standards.",
  keywords: ["web development locations", "web design near me", "local web agency", "Sheffield web developers", "Yorkshire web design", "website development services", "web agency locations", "local digital agency"],
}

export default function LocationsPage() {
  const locations = [
    { name: "Sheffield", slug: "sheffield", distance: "0 miles" },
    { name: "Leeds", slug: "leeds", distance: "30 miles" },
    { name: "Manchester", slug: "manchester", distance: "35 miles" },
    { name: "Birmingham", slug: "birmingham", distance: "75 miles" },
    { name: "Nottingham", slug: "nottingham", distance: "45 miles" },
    { name: "Derby", slug: "derby", distance: "50 miles" },
    { name: "Hull", slug: "hull", distance: "55 miles" },
    { name: "Newcastle", slug: "newcastle", distance: "125 miles" },
    { name: "Liverpool", slug: "liverpool", distance: "80 miles" },
    { name: "Bradford", slug: "bradford", distance: "40 miles" },
    { name: "Chesterfield", slug: "chesterfield", distance: "15 miles" },
    { name: "Doncaster", slug: "doncaster", distance: "20 miles" },
    { name: "Rotherham", slug: "rotherham", distance: "5 miles" },
    { name: "Barnsley", slug: "barnsley", distance: "12 miles" },
    { name: "Wakefield", slug: "wakefield", distance: "25 miles" },
    { name: "Huddersfield", slug: "huddersfield", distance: "28 miles" },
  ]


  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 px-4 md:px-6 pt-32 md:pt-48 bg-gradient-to-br from-background via-background to-secondary/5">
          <div className="container mx-auto">
            <div className="mb-8 md:mb-16">
              <div className="inline-block bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-3 md:mb-6">
                <span aria-hidden="true">★</span> LOCATIONS
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance max-w-2xl mb-4">
                <span className="font-serif italic font-normal">Web Development</span> Services Near You
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl">
                Based in Sheffield, we provide expert web design and development services across Yorkshire and beyond. Find your local service area below.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="mb-12 md:mb-16">
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-light mb-8 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Service areas
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[0.9] tracking-tighter mb-6">
                Find Us Near You
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl">
                We serve businesses across Yorkshire and the surrounding regions with our Sheffield-based expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group block bg-card border border-border hover:border-primary/50 transition-all duration-300 p-6 rounded-2xl hover:shadow-lg"
                >
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-xl group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground font-light text-sm">
                    Web development services
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-primary-foreground mb-6 leading-tight tracking-tight">
              Ready to grow your online presence?
            </h2>
            <p className="text-lg text-primary-foreground/90 font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business with web design and development solutions in your area.
            </p>

            <Link href="/#contact">
              <Button size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 font-light gap-2">
                Get in touch
                <MapPin className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}