"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { SuccessModal } from "@/components/success-modal"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      setShowSuccessModal(true)

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error('Form submission error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      toast.error(errorMessage, {
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section id="contact" className="py-12 md:py-24 px-4 md:px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="mb-8 md:mb-16">
            <div className="inline-block bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-3 md:mb-6">
              ★ GET IN TOUCH
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance max-w-2xl">
              Interested? Let's <span className="font-serif italic font-normal">discuss.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-3 md:mt-4 max-w-2xl">
              Let's discuss how we can help your start-up grow with affordable, scalable digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6 md:space-y-8">
              <div className="flex gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm md:text-base mb-0.5 md:mb-1">Email</h3>
                  <p className="text-muted-foreground text-xs md:text-sm break-all">hello@devora.co.uk</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm md:text-base mb-0.5 md:mb-1">Phone</h3>
                  <p className="text-muted-foreground text-xs md:text-sm break-all">+44 (0)123 456 7890</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm md:text-base mb-0.5 md:mb-1">Location</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-card border border-border rounded-2xl p-5 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 text-sm rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colours"
                      required
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 text-sm rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colours"
                      required
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 text-sm rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colours"
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+44 (0)123 456 7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 text-sm rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colours"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 text-sm rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colours"
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What's your vision?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 md:px-4 py-2 text-sm rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary focus:outline-none transition-colours resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="rounded-full gap-2 w-full md:w-auto text-sm md:text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        type="contact"
      />
    </>
  )
}
