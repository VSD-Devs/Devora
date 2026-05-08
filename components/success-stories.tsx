"use client"

import { Star } from "lucide-react"

export function SuccessStories() {
  const testimonials = [
    {
      quote: "Khalil really brought my vision to life and created a fantastic website. I was amazed at the speed, efficiency and communication throughout.",
      name: "Katy",
      role: "Founder of LR Talent",
    },
    {
      quote: "I was under time pressure and Khalil was able to turn my project around rapidly. The speed, quality and efficiency were excellent.",
      name: "Isaac",
      role: "Founder of Rectify International",
    },
    {
      quote: "The entire experience felt professional yet personal. Devora understood my vision and turned it into something even better than I imagined.",
      name: "Michael",
      role: "HV Direct",
    },
  ]

  return (
    <section className="bg-foreground px-4 py-20 text-background md:px-6 md:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-background/55">Client signal</p>
            <h2 id="testimonials-heading" className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">
              Fast, personal, exacting.
            </h2>
          </div>
          <p className="text-lg leading-8 text-background/70">
            The feedback we care about is simple: clients feel heard, the work lands quickly, and the final website feels better than what they had in their head.
          </p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: testimonials.length,
          }) }}
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="flex min-h-[22rem] flex-col justify-between bg-foreground p-6 md:p-8">
              <div>
                <div className="mb-8 flex gap-1" aria-label="5 out of 5 star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-xl font-semibold leading-8 tracking-[-0.02em] text-background">"{testimonial.quote}"</p>
              </div>
              <div className="mt-10 border-t border-white/15 pt-5">
                <div className="font-black">{testimonial.name}</div>
                <div className="mt-1 text-sm text-background/55">{testimonial.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
