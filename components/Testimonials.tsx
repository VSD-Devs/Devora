"use client"

const testimonials = [
  {
    quote: "Devora transformed our startup's online presence. Their team delivered a beautiful, high-converting website in just 3 weeks, and our lead generation increased by 156% in the first month.",
    author: "Sarah Chen",
    role: "CEO at TechFlow Solutions",
    rating: 5,
    initials: "SC",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    quote: "What sets Devora apart is their deep understanding of startup needs. They didn't just build us a website - they created a powerful digital platform that helped us secure our seed round.",
    author: "Michael Rodriguez",
    role: "Founder of LaunchPad AI",
    rating: 5,
    initials: "MR",
    gradient: "from-emerald-500/20 to-blue-500/20"
  },
  {
    quote: "Working with Devora was a game-changer. They delivered enterprise-level quality at startup-friendly prices. Our conversion rate doubled within weeks of launching.",
    author: "Emily Watson",
    role: "CMO at GrowthMetrics",
    rating: 5,
    initials: "EW",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white" id="testimonials">
      {/* Modern geometric decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-900 px-4 sm:px-6 py-2 rounded-full mb-6 backdrop-blur-sm border border-gray-200">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-medium text-sm">Client Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Trusted by Innovative Startups
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Join the growing community of startups who've transformed their digital presence with our expertise
          </p>
        </div>

        {/* Mobile Layout: Stacked cards with alternating alignments */}
        <div className="md:hidden space-y-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`relative max-w-sm mx-auto ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}
            >
              <div className={`relative bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-6 shadow-xl border border-gray-100`}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-800 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-gray-900 font-semibold text-sm border border-gray-200 shadow-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                    <div className="text-gray-600 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className={`relative bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-8 shadow-xl border border-gray-100`}
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
              <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-gray-900 font-semibold border border-gray-200 shadow-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 