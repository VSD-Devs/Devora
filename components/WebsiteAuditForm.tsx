"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Loader2, ArrowRight, Globe, CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface WebsiteAuditFormProps {
  className?: string
  variant?: "hero" | "inline"
}

function AuditFormContent({ onFormSubmit }: { onFormSubmit: () => void }) {
  const [formData, setFormData] = useState({
    email: "",
    websiteUrl: "",
    company: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const response = await fetch('/api/website-audit', {
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

      toast.success("Audit request received! We'll send your report within 24 hours.", {
        duration: 5000,
      })

      // Reset form
      setFormData({
        email: "",
        websiteUrl: "",
        company: "",
      })

      onFormSubmit()
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to submit audit request. Please try again.', {
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Globe className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-light text-white mb-2">Free Website Audit</h3>
        <p className="text-gray-400 font-light">
          Get a comprehensive analysis of your website's performance, SEO, and user experience.
        </p>
      </div>

      {/* What's included */}
      <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
        <h4 className="text-white font-light mb-4">What you'll receive:</h4>
        <div className="space-y-3">
          {[
            "Performance & speed analysis",
            "SEO optimisation recommendations",
            "Mobile responsiveness review",
            "User experience assessment",
            "Conversion opportunities"
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-300 font-light text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-2 font-light">
              Website URL *
            </label>
            <Input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
              className="h-12 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-0"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2 font-light">
              Email address *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="h-12 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-0"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2 font-light">
              Company name
            </label>
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className="h-12 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-0"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 bg-white text-gray-900 hover:bg-gray-200 font-light transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Submitting...
            </>
          ) : (
            <>
              Get My Free Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>

      <p className="text-xs text-gray-500 text-center font-light">
        No spam, just valuable insights delivered within 24 hours
      </p>
    </div>
  )
}

export default function WebsiteAuditForm({ className = "", variant = "inline" }: WebsiteAuditFormProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (variant === "hero") {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className={`group cursor-pointer ${className}`}>
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-light text-lg">Free Website Audit</h3>
                    <p className="text-gray-400 text-sm font-light">Get insights in 24 hours</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] bg-gray-900 border-gray-700">
          <DialogHeader className="sr-only">
            <DialogTitle>Website Audit Request</DialogTitle>
            <DialogDescription>
              Request a free comprehensive audit of your website
            </DialogDescription>
          </DialogHeader>
          <AuditFormContent onFormSubmit={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    )
  }

  // Inline variant
  return (
    <div className={`bg-gray-900 border border-gray-800 rounded-2xl p-8 ${className}`}>
      <AuditFormContent onFormSubmit={() => {}} />
    </div>
  )
} 