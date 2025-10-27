import { Check, X } from "lucide-react"

export function WhyUs() {
  const withoutUs = [
    "Overpriced agencies with minimum project costs",
    "Hidden fees and surprise charges during development",
    "Locked into long contracts with no flexibility",
    "No support after launch, left stranded",
    "One-size-fits-all solutions that don't match your budget",
    "Slow turnaround that delays your launch",
    "Complex jargon that leaves you confused",
  ]

  const withUs = [
    "Transparent pricing and honest communication",
    "No hidden costs, only pay for what you build",
    "Expert team that understands start-up needs",
    "Ongoing support included, every step of the way",
    "Custom solutions tailored to your vision",
    "Fast deployment to get you to market quickly",
    "Plain English communication, always",
  ]

  return (
    <section id="services" className="py-16 md:py-32 px-4 md:px-6 bg-foreground text-background" aria-labelledby="services-heading">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block bg-background text-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-4 md:mb-6" role="banner">
            <span aria-hidden="true">★</span> THE DIFFERENCE
          </div>
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance">
            Why choose <span className="font-serif italic font-normal">Devora</span> for your <strong>web design</strong> and <strong>development</strong>?
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto text-sm md:text-base lg:text-xl leading-relaxed">
            We specialise in <strong>custom web design solutions</strong> for <strong>start-ups</strong>. Expert team, no lock-in contracts, rapid deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 max-w-5xl mx-auto">
          {/* Without Us Column */}
          <div className="space-y-2 md:space-y-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-8">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 md:w-5 md:h-5 text-background/70" />
              </div>
              <h3 className="text-base md:text-2xl font-bold">Without Us</h3>
            </div>

            <div className="space-y-1.5 md:space-y-3">
              {withoutUs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 md:gap-3 p-2 md:p-5 bg-background/5 border border-background/10 rounded-lg md:rounded-xl hover:bg-background/10 transition-colors"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 text-background/50" />
                  <span className="text-sm md:text-base leading-tight md:leading-relaxed text-background/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With Us Column */}
          <div className="space-y-2 md:space-y-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-8">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>
              <h3 className="text-base md:text-2xl font-bold">With Devora</h3>
            </div>

            <div className="space-y-1.5 md:space-y-3">
              {withUs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 md:gap-3 p-2 md:p-5 bg-primary rounded-lg md:rounded-xl hover:scale-[1.02] transition-transform shadow-lg"
                >
                  <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 text-primary-foreground" />
                  <span className="text-sm md:text-base leading-tight md:leading-relaxed text-primary-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
