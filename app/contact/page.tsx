"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MessageSquare, ChevronLeft, MapPin, Phone } from "lucide-react"
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
    <div className="relative overflow-hidden">
      <Toaster />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] z-0" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm mb-6">
              <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
              <span>Get in touch</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Let's Discuss</span>
              <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent"> Further</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get in touch with us to start your next digital project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] z-[1]" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-[3]">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Contact Info - Left Side */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm">
                  <span className="mr-1 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>Contact us</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Ready to <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">connect</span> with us?
                </h2>
                
                <p className="text-lg text-slate-600">
                  We're here to help you build something extraordinary for your startup. Get in touch and let's discuss your project.
                </p>
              </div>
              
              {/* Contact Cards */}
              <div className="grid gap-6">
                <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-900">Email Us</h3>
                    <a href="mailto:hello@devora.com" className="text-slate-600 hover:text-teal-600 transition-colors">
                      hello@devora.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-500/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-900">Office Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9am - 6pm GMT</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/10 to-teal-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-900">Phone</h3>
                    <p className="text-slate-600">+44 123 456 7890</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Quick Contact Options - Only visible on small screens */}
              <div className="flex md:hidden justify-center space-x-4 py-6">
                <a href="mailto:hello@devora.com" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-teal-600 hover:shadow-md transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:+441234567890" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-teal-600 hover:shadow-md transition-all">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-teal-600 hover:shadow-md transition-all">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Contact Form - Right Side */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">First Name</label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="h-11 rounded-lg border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        required
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Last Name</label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="h-11 rounded-lg border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        required
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="h-11 rounded-lg border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Company</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="h-11 rounded-lg border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone (optional)</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                      className="h-11 rounded-lg border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] rounded-lg border-slate-200 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white border-0 rounded-xl px-6 py-6 font-medium text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"} 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}