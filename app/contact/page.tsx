"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
            >
              Let's Build Something Amazing Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400"
            >
              Get in touch with us to start your next digital project
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Get in Touch</h2>
                <p className="text-base md:text-lg text-gray-400 mb-8">
                  Ready to take your startup to the next level? We're here to help you build something extraordinary.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 backdrop-blur-sm flex items-center justify-center border border-blue-500/20">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Email Us</h3>
                    <p className="text-gray-300">hello@devora.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 backdrop-blur-sm flex items-center justify-center border border-purple-500/20">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Call Us</h3>
                    <p className="text-gray-300">+44 (0) 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/10 backdrop-blur-sm flex items-center justify-center border border-pink-500/20">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white">Office Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9am - 6pm GMT</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-800/50 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">First Name</label>
                    <Input
                      type="text"
                      placeholder="John"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Company</label>
                  <Input
                    type="text"
                    placeholder="Your Company Name"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 min-h-[120px] md:min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white hover:bg-gray-200 text-black text-base md:text-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Frequently Asked Questions</h2>
            <div className="space-y-4 md:space-y-8">
              <div className="text-left bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-xl p-4 md:p-6 rounded-xl border border-gray-800/50">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">What is your typical project timeline?</h3>
                <p className="text-sm md:text-base text-gray-300">
                  Most projects take 4-8 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              <div className="text-left bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-xl p-4 md:p-6 rounded-xl border border-gray-800/50">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">Do you offer ongoing support?</h3>
                <p className="text-sm md:text-base text-gray-300">
                  Yes, we provide ongoing maintenance and support packages to ensure your website continues to perform optimally.
                </p>
              </div>
              <div className="text-left bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-xl p-4 md:p-6 rounded-xl border border-gray-800/50">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">What is your pricing structure?</h3>
                <p className="text-sm md:text-base text-gray-300">
                  We offer flexible pricing based on project scope. Contact us for a custom quote tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}