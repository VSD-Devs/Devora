"use client"

import { useState } from "react"
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 relative">
      <Toaster />
      
      {/* Background elements - Fixed positioning and pointer-events-none */}
      <div className="fixed inset-0 bg-gradient-to-b from-white/50 to-white/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" />
      
      {/* Dark overlay for nav */}
      <div className="fixed inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-900/60 via-gray-900/1 to-transparent z-[1]" />

      {/* Content wrapper */}
      <div className="relative z-[2] pt-40">
        {/* Hero Section */}
        <section className="relative mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.2] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Let's Discuss Further
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get in touch with us to start your next digital project
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-20 pb-40">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Get in Touch</h2>
                  <p className="text-base md:text-lg text-gray-600 mb-8">
                    Ready to take your startup to the next level? We're here to help you build something extraordinary.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900">Email Us</h3>
                      <p className="text-gray-600">hello@devora.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/10 flex items-center justify-center border border-pink-500/20">
                      <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-900">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 6pm GMT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Darker background */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 to-white/60 rounded-2xl pointer-events-none" />
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 relative z-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 relative z-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 relative z-10"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Company</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 relative z-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone (optional)</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                      className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 relative z-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="bg-white/80 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 min-h-[120px] relative z-10"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black hover:bg-gray-900 text-white font-semibold transition-all duration-300 hover:scale-105 relative z-10"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}