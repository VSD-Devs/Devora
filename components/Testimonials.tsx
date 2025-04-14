"use client"

import Image from "next/image"

const testimonials = [
  {
    quote: "Devora transformed our startup's online presence. Their team delivered a beautiful, high-converting website in just 3 weeks, and our lead generation increased by 156% in the first month.",
    author: "Sarah Chen",
    role: "CEO at TechFlow Solutions",
    rating: 5,
    avatar: "/avatars/sarah.jpg",
    gradient: "from-blue-500/10 to-indigo-500/10"
  },
  {
    quote: "What sets Devora apart is their deep understanding of startup needs. They didn't just build us a website - they created a powerful digital platform that helped us secure our seed round.",
    author: "Michael Rodriguez",
    role: "Founder of LaunchPad AI",
    rating: 5,
    avatar: "/avatars/michael.jpg",
    gradient: "from-teal-500/10 to-blue-500/10"
  },
  {
    quote: "Working with Devora was a game-changer. They delivered enterprise-level quality at startup-friendly prices. Our conversion rate doubled within weeks of launching.",
    author: "Emily Watson",
    role: "CMO at GrowthMetrics",
    rating: 5,
    avatar: "/avatars/emily.jpg",
    gradient: "from-purple-500/10 to-blue-500/10"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background elements - Light theme */}
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.03] z-[1]" />
      <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-40 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-[3]">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 mb-4">
            <span className="mr-1 h-2 w-2 rounded-full bg-blue-500"></span>
            <span>Client testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            What our <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">clients</span> say
          </h2>
          
          <p className="text-slate-600 text-lg">
            Join the growing community of startups who've transformed their digital presence
          </p>
        </div>

        {/* Testimonials - Fluid Layout - Light theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 overflow-hidden"
            >
              {/* Subtle gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient.replace('/10', '/70')}`}></div>
              
              {/* Quote marks */}
              <div className="absolute top-6 right-6 text-5xl text-slate-100 font-serif">"</div>
              
              {/* Rating stars */}
              <div className="flex items-center mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 