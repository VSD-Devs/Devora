"use client";

import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer for startups?",
    answer: "We provide end-to-end web development services including UI/UX design, full-stack development, SEO optimization, and digital marketing strategies - all tailored specifically for startups."
  },
  {
    question: "How much does a typical project cost?",
    answer: "Our project costs vary based on requirements, but we offer flexible pricing models designed specifically for startups. We work with you to find a solution that fits your budget while delivering maximum value."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on complexity, but typically range from 4-12 weeks. We follow an agile methodology to ensure rapid development and continuous delivery."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your website continues to perform optimally and evolve with your business needs."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.015]" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-black text-white text-lg px-8 py-6 shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Have More Questions? <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 