"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Loader2, ArrowRight, Globe, CheckCircle, ChevronDown } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface WebsiteAuditFormProps {
  className?: string
  variant?: "hero" | "inline"
}

function AuditFormContent({ onFormSubmit, router }: { onFormSubmit: () => void; router: ReturnType<typeof useRouter> }) {
  const [formData, setFormData] = useState({
    email: "",
    websiteUrl: "",
    company: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

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

      // Close dialog if open
      onFormSubmit()

      // Redirect to thank you page for Google Ads conversion tracking
      router.push('/thank-you')
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to submit audit request. Please try again.', {
        duration: 5000,
      })
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-3 sm:space-y-6 p-1 sm:p-2 md:p-0 max-h-[85vh] sm:max-h-[75vh] overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-3 sm:mb-6">
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-1 sm:mb-3">
          <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>
        <h3 className="text-base sm:text-xl font-light text-white">Free Website Audit</h3>
        <p className="text-gray-400 font-light text-xs sm:text-sm px-2 sm:px-6">
          Quick insights to improve performance.
        </p>
      </div>

      {/* What's included */}
      <Collapsible open={isFeaturesOpen} onOpenChange={setIsFeaturesOpen} className="bg-gray-800/50 rounded-lg sm:rounded-xl p-2 sm:p-4 mx-2 sm:mx-0">
        <CollapsibleTrigger className="flex justify-between items-center w-full">
          <h4 className="text-white font-light text-xs sm:text-sm">What you'll receive:</h4>
          <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2 sm:pt-4">
          <div className="space-y-1 sm:space-y-2">
            {[
              "Performance & speed analysis",
              "SEO optimisation recommendations",
              "Mobile responsiveness review",
              "User experience assessment",
              "Conversion opportunities"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-light text-xs leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 px-2 sm:px-0">
        <div className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs text-gray-300 mb-1 font-light">
              Website URL *
            </label>
            <Input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
              className="h-10 sm:h-11 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-0 text-sm"
              required
              autoFocus={false}
              autoComplete="url"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-300 mb-1 font-light">
              Email address *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="h-10 sm:h-11 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-0 text-sm"
              required
              autoComplete="email"
              inputMode="email"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-300 mb-1 font-light">
              Company name
            </label>
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className="h-10 sm:h-11 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-0 text-sm"
              autoComplete="organization"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-10 sm:h-11 bg-white text-gray-900 hover:bg-gray-200 font-light transition-all duration-200 text-sm"
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

      <p className="text-xs text-gray-500 text-center font-light px-2 sm:px-0">
        No spam, just valuable insights delivered within 24 hours
      </p>
    </div>
  )
}

export default function WebsiteAuditForm({ className = "", variant = "inline" }: WebsiteAuditFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

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
          <AuditFormContent onFormSubmit={() => setIsOpen(false)} router={router} />
        </DialogContent>
      </Dialog>
    )
  }

  // Inline variant
  return (
    <div className={`bg-gray-900 border border-gray-800 rounded-2xl p-8 ${className}`}>
      <AuditFormContent onFormSubmit={() => { }} router={router} />
    </div>
  )
}
