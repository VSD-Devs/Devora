"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, Loader2 } from "lucide-react"
import { toast } from "sonner"

export function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    website: "", // Honeypot field - bots will fill this
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    console.log('Form submit triggered', { isLoading, formData })
    
    // Prevent double submission
    if (isLoading) {
      console.log('Already loading, preventing double submission')
      return
    }
    
    // Honeypot check - if website field is filled, it's likely a bot
    if (formData.website) {
      console.log('Bot detected via honeypot')
      toast.error('Invalid submission detected. Please try again.', {
        duration: 5000,
      })
      return
    }

    // Basic validation
    if (!formData.message || formData.message.trim().length < 10) {
      toast.error('Please provide a more detailed message (at least 10 characters).', {
        duration: 5000,
      })
      return
    }

    if (formData.message.length > 2000) {
      toast.error('Message is too long. Please keep it under 2000 characters.', {
        duration: 5000,
      })
      return
    }

    console.log('Starting form submission...')
    setIsLoading(true)

    try {
      console.log('Sending request to /api/contact')
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        }),
      })
      
      console.log('Response received:', { status: response.status, ok: response.ok })

      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        // If response is not JSON, check status
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`)
        }
        data = {}
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      // Show success message
      toast.success('Message sent successfully! Redirecting...', {
        duration: 2000,
      })

      // Clear form data on success (only after successful response)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        website: "",
      })

      // Small delay to ensure form state is cleared before navigation
      setTimeout(() => {
        // Redirect to thank you page for Google Ads conversion tracking
        router.push('/thank-you')
      }, 500)
    } catch (error) {
      console.error('Form submission error:', error)
      
      // Handle network errors specifically
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast.error('Network error. Please check your connection and try again.', {
          duration: 5000,
        })
      } else {
        const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
        toast.error(errorMessage, {
          duration: 5000,
        })
      }
      
      setIsLoading(false)
      // Don't reset form on error - keep user's data
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
              Let's discuss how we can help your start-up grow with expert web design and development solutions.
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
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm md:text-base mb-0.5 md:mb-1">Location</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">Sheffield, South Yorkshire</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-card border border-border rounded-2xl p-5 md:p-8">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4 md:space-y-6"
                noValidate
                onKeyDown={(e) => {
                  // Prevent form submission on Enter key if loading
                  if (e.key === 'Enter' && isLoading) {
                    e.preventDefault()
                    e.stopPropagation()
                  }
                }}
                onClick={(e) => {
                  // Prevent accidental form submission on mobile
                  const target = e.target as HTMLElement
                  if (target.type === 'submit' && isLoading) {
                    e.preventDefault()
                    e.stopPropagation()
                  }
                }}
              >
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
                    minLength={10}
                    maxLength={2000}
                  />
                </div>

                {/* Honeypot field - hidden from users but visible to bots */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    opacity: 0,
                    pointerEvents: 'none'
                  }}
                  aria-hidden="true"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full gap-2 w-full md:w-auto text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                  onClick={(e) => {
                    // Prevent double clicks/taps on mobile
                    if (isLoading) {
                      e.preventDefault()
                      e.stopPropagation()
                      return
                    }
                  }}
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
