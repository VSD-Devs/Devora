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
      
      {/* Hero Section - Ultra Minimalist */}
      <section className="relative min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-5xl mx-auto">
            {/* Subtle status indicator */}
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-400 font-light tracking-wide">Get in touch</span>
            </div>
            
            {/* Main headline - Ultra clean typography */}
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                <span className="block text-white font-extralight">Let's</span>
                <span className="block text-gray-300 font-extralight italic">connect</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                Ready to work together? We'd love to hear from you.
              </p>
            </div>
            
            {/* Minimal contact options */}
            <div className="flex items-center gap-8 mb-20">
              <a href="mailto:hello@devora.co.uk" className="text-white hover:text-gray-300 transition-colors font-light text-lg tracking-wide border-b border-white border-opacity-30 pb-1">
                hello@devora.co.uk
              </a>
              <span className="text-gray-500 font-light">or</span>
              <span className="text-gray-400 font-light text-lg tracking-wide">
                Fill out the form below
              </span>
            </div>
            
            {/* Minimal info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-gray-800 border-opacity-30">
              {[
                { label: "Email", value: "hello@devora.co.uk" },
                { label: "Response time", value: "Within 24 hours" },
                { label: "Office hours", value: "Mon-Fri 9am-6pm GMT" }
              ].map((info, index) => (
                <div key={index}>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-light mb-2">{info.label}</div>
                  <div className="text-lg font-light text-white tracking-wide">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Ultra Minimalist */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Ultra minimal header */}
            <div className="mb-24">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">Send us a message</div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                Contact form
              </h2>
            </div>
            
            {/* Clean form */}
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                    First name *
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                    Last name *
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                  Email address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                  required
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              {/* Company */}
              <div className="space-y-3">
                <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                  Company
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                  autoComplete="organization"
                />
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                  Phone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 123 456 7890"
                  className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="min-h-[120px] border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 py-4 font-light text-lg resize-none"
                  required
                />
              </div>

              {/* Submit button */}
              <div className="pt-12 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-500 font-light">
                      We'll respond within 24 hours
                    </span>
                  </div>
                  
                  <Button 
                    type="submit"
                    variant="ghost"
                    className="text-black hover:text-gray-600 p-0 h-auto font-light text-lg tracking-wide border-b border-black border-opacity-30 rounded-none pb-1 transition-colors group"
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
      </section>

      {/* Alternative Contact Section - Ultra Minimalist */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Ultra minimal header */}
            <div className="mb-24">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-light mb-8">Other ways to reach us</div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tighter">
                Get in touch
              </h2>
            </div>
            
            {/* Simple contact list */}
            <div className="space-y-16">
              {[
                {
                  method: "Email",
                  value: "hello@devora.co.uk",
                  description: "Best for project inquiries and detailed discussions",
                  link: "mailto:hello@devora.co.uk"
                },
                {
                  method: "Project Inquiry",
                  value: "Detailed form",
                  description: "For comprehensive project requirements and quotes",
                  link: "/contact"
                },
                {
                  method: "Office Hours",
                  value: "Monday - Friday, 9am - 6pm GMT",
                  description: "We typically respond within 24 hours during business days"
                }
              ].map((contact, index) => (
                <div key={index} className="group flex items-start justify-between py-8 border-b border-gray-200 last:border-b-0">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-light text-black mb-2 tracking-wide">
                      {contact.method}
                    </h3>
                    <p className="text-lg text-gray-600 font-light mb-2">
                      {contact.value}
                    </p>
                    <p className="text-gray-500 font-light leading-relaxed max-w-xl">
                      {contact.description}
                    </p>
                  </div>
                  {contact.link && (
                    <div className="ml-8">
                      {contact.link.startsWith('mailto:') ? (
                        <a 
                          href={contact.link}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ArrowRight className="w-5 h-5 text-black" />
                        </a>
                      ) : (
                        <Link 
                          href={contact.link}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ArrowRight className="w-5 h-5 text-black" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}