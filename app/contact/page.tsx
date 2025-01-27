"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MessageSquare, ChevronLeft } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-black relative">
        <Toaster />
        
        {/* Background elements */}
        <div className="fixed inset-0 bg-gradient-to-b from-white/50 to-white/30 pointer-events-none" />
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" />
        
        {/* Mobile Header - Only visible on mobile */}
        <header className="relative z-10 px-4 py-4 flex md:hidden items-center justify-between bg-white/80 backdrop-blur-lg border-b border-gray-200">
          <Link href="/" className="flex items-center text-black hover:text-gray-900">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span>Back</span>
          </Link>
          <h1 className="text-lg font-medium text-black">Contact Us</h1>
          <div className="w-14" /> {/* Spacer for centering */}
        </header>

        {/* Desktop Hero Section - Only visible on desktop */}
        <section className="relative hidden md:block mb-20 pt-40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-[1.2] text-black">
                Let's Discuss Further
              </h1>
              <p className="text-xl text-black mb-10 max-w-2xl mx-auto leading-relaxed">
                Get in touch with us to start your next digital project
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="md:py-20 px-4 pt-6 md:pt-0">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {/* Contact Info - Only visible on desktop */}
              <div className="hidden md:block space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">Get in Touch</h2>
                  <p className="text-base md:text-lg text-black mb-8">
                    Ready to take your startup to the next level? We're here to help you build something extraordinary.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-black">Email Us</h3>
                      <a href="mailto:hello@devora.com" className="text-black hover:text-blue-600 transition-colors">hello@devora.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/10 flex items-center justify-center border border-pink-500/20">
                      <MessageSquare className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-black">Office Hours</h3>
                      <p className="text-black">Monday - Friday: 9am - 6pm GMT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options - Only visible on mobile */}
              <div className="flex md:hidden justify-center space-x-4 mb-6">
                <a href="mailto:hello@devora.com" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+1234567890" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-1">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-800">First Name</label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="h-12 rounded-xl border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                          required
                          autoComplete="given-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-800">Last Name</label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="h-12 rounded-xl border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                          required
                          autoComplete="family-name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-800">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="h-12 rounded-xl border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        required
                        autoComplete="email"
                        inputMode="email"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-800">Company</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="h-12 rounded-xl border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        autoComplete="organization"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-800">Phone (optional)</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (123) 456-7890"
                        className="h-12 rounded-xl border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-800">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="rounded-xl border-gray-300 bg-white shadow-sm focus:border-gray-500 focus:ring-gray-500 min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gray-900 hover:bg-black text-white font-semibold transition-all duration-300 active:scale-95 h-12 rounded-xl text-base shadow-lg"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}