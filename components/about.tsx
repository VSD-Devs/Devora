import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6" aria-labelledby="about-heading">
      <div className="container mx-auto">
        <article className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-block bg-transparent px-0 py-1 text-sm md:text-base font-medium mb-4 md:mb-6" role="banner">
              <span aria-hidden="true" className="inline-block w-2 h-2 bg-primary mr-2.5 rounded-[2px]" /> ABOUT US
            </div>

            <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8 text-balance leading-tight">
              We <span className="font-serif italic font-normal">are</span> start-up builders, <span className="font-serif italic font-normal">experts</span> in design and development.
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
              We partner with ambitious start-ups to create <strong>exceptional digital solutions</strong> that drive growth. Our team adapts to your needs, whether you're bootstrapped or funded, delivering professional web design and development that makes an impact.
            </p>

            <Link href="#contact" aria-label="Get started with Devora web design services">
              <Button className="rounded-full gap-2 w-full md:w-auto px-8 py-6 text-lg" size="lg">
                Get started
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mt-8 lg:mt-0">
            <img 
              src="/devora-office.png" 
              alt="Devora web design and development team collaborating in modern office space" 
              className="w-full h-full object-cover"
              loading="lazy"
              width="800"
              height="500"
            />
          </div>
        </article>
      </div>
    </section>
  )
}
