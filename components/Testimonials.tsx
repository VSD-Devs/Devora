"use client"

const testimonials = [
  {
    quote: "Devora transformed our startup's online presence. Their team delivered a beautiful, high-converting website in just 3 weeks, and our lead generation increased by 156% in the first month.",
    author: "Sarah Chen",
    role: "CEO at TechFlow Solutions",
    rating: 5,
    initials: "SC"
  },
  {
    quote: "What sets Devora apart is their deep understanding of startup needs. They didn't just build us a website - they created a powerful digital platform that helped us secure our seed round.",
    author: "Michael Rodriguez",
    role: "Founder of LaunchPad AI",
    rating: 5,
    initials: "MR"
  },
  {
    quote: "Working with Devora was a game-changer. They delivered enterprise-level quality at startup-friendly prices. Our conversion rate doubled within weeks of launching.",
    author: "Emily Watson",
    role: "CMO at GrowthMetrics",
    rating: 5,
    initials: "EW"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-white" id="testimonials">
      {/* Modern geometric decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Trusted by Innovative Startups
          </h2>
          <p className="text-gray-600 text-lg">
            Join the growing community of startups who've transformed their digital presence with our expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-200 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-100 font-semibold border border-gray-600">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 