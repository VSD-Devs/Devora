"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast'

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      toast.success("Message sent! We'll get back to you soon.", {
        duration: 5000,
        position: 'top-center',
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      })
    } catch (error) {
      console.error('Form submission error:', error);
      
      // More specific error message
      let errorMessage = 'Failed to send message';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      toast.error(errorMessage, {
        duration: 5000,
        position: 'top-center',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 relative overflow-hidden">
      <Toaster />
      {/* Dark overlay for nav */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-900/80 to-transparent z-[3]" />
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-white/30 z-[1]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 z-[2]" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse z-[1]" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse z-[1]" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
            >
              Let's Build Something Amazing Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600"
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Get in Touch</h2>
                <p className="text-base md:text-lg text-gray-600 mb-8">
                  Ready to take your startup to the next level? We're here to help you build something extraordinary.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 backdrop-blur-sm flex items-center justify-center border border-blue-500/20">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Email Us</h3>
                    <p className="text-gray-600">hello@devora.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 backdrop-blur-sm flex items-center justify-center border border-purple-500/20">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+44 (0) 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/10 backdrop-blur-sm flex items-center justify-center border border-pink-500/20">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm GMT</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">First Name</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone (optional)</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 min-h-[120px] md:min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-black hover:bg-gray-900 text-white text-base md:text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Frequently Asked Questions</h2>
            <div className="space-y-4 md:space-y-8">
              <div className="text-left bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">What is your typical project timeline?</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Most projects take 4-8 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              <div className="text-left bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Do you offer ongoing support?</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Yes, we provide ongoing maintenance and support packages to ensure your website continues to perform optimally.
                </p>
              </div>
              <div className="text-left bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">What is your pricing structure?</h3>
                <p className="text-sm md:text-base text-gray-600">
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