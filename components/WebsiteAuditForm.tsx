"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Loader2, ArrowRight } from "lucide-react"

interface WebsiteAuditFormProps {
  className?: string
  variant?: "hero" | "inline"
}

export default function WebsiteAuditForm({ className = "", variant = "inline" }: WebsiteAuditFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    websiteUrl: "",
    company: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email.trim() || !formData.websiteUrl.trim()) {
      toast.error("Please fill in your email and website URL")
      return
    }

    setIsSubmitting(true)

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

      toast.success("Website audit request submitted! We'll be in touch soon.")
      
      // Reset form
      setFormData({
        email: "",
        websiteUrl: "",
        company: ""
      })
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === "hero") {
    return (
      <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 ${className}`}>
        <div className="mb-6">
          <h3 className="text-2xl font-light text-white mb-2 tracking-wide">
            Free Website Audit
          </h3>
          <p className="text-gray-400 font-light">
            Get a detailed analysis of your website's performance, SEO, and user experience.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/15 focus:border-white/30 font-light"
              required
            />
            <Input
              type="text"
              placeholder="Company name (optional)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="h-12 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/15 focus:border-white/30 font-light"
            />
          </div>
          
          <Input
            type="url"
            placeholder="https://yourwebsite.com"
            value={formData.websiteUrl}
            onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
            className="h-12 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/15 focus:border-white/30 font-light"
            required
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-white text-black hover:bg-gray-100 font-light tracking-wide transition-colors group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get Free Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </div>
    )
  }

  // Inline variant
  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-6 ${className}`}>
      <div className="mb-4">
        <h3 className="text-xl font-light text-black mb-2 tracking-wide">
          Free Website Audit
        </h3>
        <p className="text-gray-600 font-light text-sm">
          Get a detailed analysis of your website's performance and potential improvements.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-10 font-light"
            required
          />
          <Input
            type="text"
            placeholder="Company (optional)"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="h-10 font-light"
          />
        </div>
        
        <Input
          type="url"
          placeholder="https://yourwebsite.com"
          value={formData.websiteUrl}
          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
          className="h-10 font-light"
          required
        />
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-10 font-light tracking-wide transition-colors group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Get Free Audit
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
} 