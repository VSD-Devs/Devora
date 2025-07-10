"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'

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
    <div className="min-h-screen">
      <Toaster />
      
      {/* Hero + Contact Form Section - Split Layout */}
      <section className="relative min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              
              {/* Left Side - Hero Content */}
              <div className="lg:sticky lg:top-32">
                {/* Subtle status indicator */}
                <div className="inline-flex items-center gap-3 mb-12">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <span className="text-sm text-gray-400 font-light tracking-wide">Get in touch</span>
                </div>
                
                {/* Main headline - Ultra clean typography */}
                <div className="mb-16">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.85] tracking-tighter mb-8">
                    <span className="block text-white font-extralight">Let's</span>
                    <span className="block text-gray-300 font-extralight italic">connect</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide mb-12">
                    Ready to work together? We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </div>
                nnec
                {/* Contact info */}
                <div className="space-y-8 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider font-light">Email</div>
                      <a href="mailto:hello@devora.co.uk" className="text-white hover:text-gray-300 transition-colors font-light text-lg tracking-wide">
                        hello@devora.co.uk
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider font-light">Response time</div>
                      <div className="text-white font-light text-lg tracking-wide">Within 24 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider font-light">Office hours</div>
                      <div className="text-white font-light text-lg tracking-wide">Mon-Fri 9am-6pm GMT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 lg:p-16">
                {/* Form header */}
                <div className="mb-12">
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-4">Send us a message</div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white leading-[0.9] tracking-tighter">
                    Start your project
                  </h2>
                </div>
                
                {/* Contact form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm text-gray-300 uppercase tracking-wider font-light">
                        First name *
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="h-12 border-0 border-b border-gray-600 rounded-none bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-0 px-0 font-light text-lg"
                        required
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm text-gray-300 uppercase tracking-wider font-light">
                        Last name *
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="h-12 border-0 border-b border-gray-600 rounded-none bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-0 px-0 font-light text-lg"
                        required
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label className="text-sm text-gray-300 uppercase tracking-wider font-light">
                      Email address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="h-12 border-0 border-b border-gray-600 rounded-none bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-0 px-0 font-light text-lg"
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-3">
                    <label className="text-sm text-gray-300 uppercase tracking-wider font-light">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="h-12 border-0 border-b border-gray-600 rounded-none bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-0 px-0 font-light text-lg"
                      autoComplete="organization"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-3">
                    <label className="text-sm text-gray-300 uppercase tracking-wider font-light">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 123 456 7890"
                      className="h-12 border-0 border-b border-gray-600 rounded-none bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-0 px-0 font-light text-lg"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <label className="text-sm text-gray-300 uppercase tracking-wider font-light">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] border-0 border-b border-gray-600 rounded-none bg-transparent text-white placeholder-gray-500 focus:border-white focus:ring-0 px-0 py-4 font-light text-lg resize-none"
                      required
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-8 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-300 font-light">
                          We'll respond within 24 hours
                        </span>
                      </div>
                      
                      <Button 
                        type="submit"
                        variant="ghost"
                        className="text-white hover:text-gray-300 p-0 h-auto font-light text-lg tracking-wide border-b border-white border-opacity-30 rounded-none pb-1 transition-colors group"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Send message"}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section - Simplified */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Simple header */}
            <div className="mb-16">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-6">Prefer another way?</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-[0.9] tracking-tighter mb-6">
                Other contact options
              </h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                Choose the method that works best for you
              </p>
            </div>
            
            {/* Contact methods grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-light text-white mb-2">Direct Email</h3>
                <a href="mailto:hello@devora.co.uk" className="text-gray-300 hover:text-white transition-colors font-light">
                  hello@devora.co.uk
                </a>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-light text-white mb-2">Quick Response</h3>
                <p className="text-gray-300 font-light">Within 24 hours</p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-light text-white mb-2">Office Hours</h3>
                <p className="text-gray-300 font-light">Mon-Fri 9am-6pm GMT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}