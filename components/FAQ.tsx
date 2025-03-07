"use client";

import { Button } from "./ui/button"
import { ArrowRight, Plus, Minus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

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
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.03] z-[1]" />
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px] z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-[3]">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 backdrop-blur-sm mb-4">
            <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
            <span>FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className="text-white/70 text-lg">
            Get answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all"
              >
                <button 
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-teal-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-white/70" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-white/70">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90 rounded-xl px-6 py-6 font-medium text-base"
              >
                Have More Questions? <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 