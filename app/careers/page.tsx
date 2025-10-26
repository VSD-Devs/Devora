import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Careers - Devora",
  description: "Join our team and help start-ups transform their digital presence",
}

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Remote",
      description: "Build scalable web applications for start-ups with modern tech stack.",
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote",
      description: "Create beautiful, accessible digital experiences for emerging brands.",
    },
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Hybrid",
      description: "Lead projects from concept to launch, ensuring client satisfaction.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Join the <span className="font-serif italic font-normal">Devora</span> team
            </h1>
            <p className="text-lg opacity-90">
              We're looking for talented individuals passionate about helping start-ups succeed. Build your career with us.
            </p>
          </div>
        </section>

        {/* Openings */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-12">Open Positions</h2>

            <div className="grid gap-6">
              {openings.map((job, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex gap-3 text-sm text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{job.type}</span>
                        <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{job.description}</p>
                  <Button variant="outline" className="gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-muted/50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6">Don't see your role?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Send us a message and tell us about yourself. We're always interested in connecting with talented individuals.
            </p>
            <Link href="#contact">
              <Button size="lg" className="rounded-full gap-2">
                Get in touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
