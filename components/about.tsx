import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6" aria-labelledby="about-heading">
      <div className="container mx-auto">
        <article className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-block bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-4 md:mb-6" role="banner">
              <span aria-hidden="true">★</span> ABOUT US
            </div>

            <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
              We <span className="font-serif italic font-normal">are</span> start-up builders, experts in{" "}
              <span className="font-serif italic font-normal">design</span> and{" "}
              <span className="font-serif italic font-normal">development.</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              We partner with ambitious <strong>start-ups</strong> to create exceptional <strong>digital solutions</strong> that drive growth. Our <strong>expert team</strong> adapts to your needs, whether you're bootstrapped or funded, delivering <strong>professional web design</strong> and <strong>development</strong> that makes an impact.
            </p>

            <Link href="#contact" aria-label="Get started with Devora web design services">
              <Button className="rounded-full gap-2 w-full md:w-auto">
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
