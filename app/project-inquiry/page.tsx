"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, CheckCircle2, ChevronRight, ChevronLeft, Send } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const steps = [
  { id: 1, title: "About You", description: "Your contact details" },
  { id: 2, title: "Project Basics", description: "Type and requirements" },
  { id: 3, title: "Your Vision", description: "Goals and timeline" },
  { id: 4, title: "Budget", description: "Choose your package" },
  { id: 5, title: "Final Details", description: "Almost there!" }
]

export default function ProjectInquiryPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const updateFormData = (data: Record<string, any>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
      
      // Scroll to top when moving to next step (mobile)
      if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      
      // Scroll to top when moving to previous step (mobile)
      if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const submitForm = async () => {
    try {
      setIsSubmitting(true)
      
      const response = await fetch('/api/project-inquiry', {
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

      // Redirect to success page
      router.push('/project-inquiry/success')
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit form. Please try again.')
      setIsSubmitting(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleBack = () => {
    router.push('/')
  }

  // Hide footer on mobile
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.classList.add('md:block', 'hidden')
    }
    
    // Cleanup: remove classes when component unmounts
    return () => {
      if (footer) {
        footer.classList.remove('md:block', 'hidden')
      }
    }
  }, [])

  return (
    <div className="min-h-[100dvh] flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Accessibility skip link */}
      <a href="#inquiry-form" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md">
        Skip to form
      </a>

      {/* Mobile-optimized header - Only visible on mobile */}
      <div className="sticky top-0 z-50 bg-white pb-4 pt-4 px-4 md:hidden shadow-sm">
        <button
          onClick={handleBack}
          className="inline-flex items-center text-gray-700 hover:text-gray-900 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
          aria-label="Back to homepage"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          <span className="text-base">Back</span>
        </button>
      </div>

      {/* Desktop Back Button - Only visible on desktop */}
      <div className="hidden md:block absolute top-6 left-8 z-50">
        <button
          onClick={handleBack}
          className="inline-flex items-center text-gray-700 hover:text-gray-900 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
          aria-label="Back to homepage"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          <span className="text-base">Back</span>
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:pt-20">
        {/* Form Card */}
        <div className="relative flex-1 flex flex-col md:container md:mx-auto md:px-4">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-t-xl md:rounded-xl blur-xl" aria-hidden="true" />
          
          {/* Card */}
          <div id="inquiry-form" className="relative bg-white rounded-t-xl md:rounded-xl border-t md:border border-gray-200 shadow-lg flex-1 flex flex-col overflow-hidden md:max-w-3xl md:mx-auto">
            {/* Form Header with Title */}
            <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" aria-hidden="true" />
              
              {/* Desktop Title */}
              <div className="hidden md:block relative px-8 pt-8 pb-4 text-center">
                <div className="inline-block mb-4 sm:mb-6 p-1.5 sm:p-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-100">
                  <span className="px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium bg-blue-600 text-white rounded-full">
                    Start Your Journey
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                  Start Your Project
                </h1>
                <p className="text-base text-gray-600 max-w-xl mx-auto">
                  Tell us about your vision and let's create something extraordinary together
                </p>
              </div>

              {/* Mobile Title */}
              <div className="text-center md:hidden p-4">
                <h1 className="text-2xl font-bold mb-2 text-gray-900">
                  Tell Us About Your Project
                </h1>
                <p className="text-sm text-gray-600">
                  Help us understand your vision so we can bring it to life.
                </p>
              </div>

              {/* Progress Steps */}
              <div className="px-4 sm:px-6 pb-4" aria-label={`Step ${currentStep} of ${steps.length}: ${steps[currentStep - 1].title}`}>
                {/* Mobile Progress Bar */}
                <div className="block sm:hidden">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${(currentStep / steps.length) * 100}%` }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-600 text-center">
                    Step {currentStep} of {steps.length}: <span className="font-medium">{steps[currentStep - 1].title}</span>
                  </div>
                </div>

                {/* Desktop Progress Steps */}
                <div className="hidden sm:flex justify-between items-center relative mt-6">
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10" aria-hidden="true" />
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`flex flex-col items-center ${
                        currentStep >= step.id ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-1.5 transition-colors shadow-sm ${
                          currentStep > step.id
                            ? "bg-blue-600 text-white"
                            : currentStep === step.id
                            ? "bg-blue-600 text-white ring-4 ring-blue-100"
                            : "bg-white border border-gray-200"
                        }`}
                        aria-current={currentStep === step.id ? "step" : undefined}
                        aria-label={`Step ${step.id}: ${step.title}`}
                      >
                        {currentStep > step.id ? (
                          <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                        ) : (
                          <span className="text-xs font-semibold">{step.id}</span>
                        )}
                      </div>
                      <div className="text-xs font-medium">
                        {step.title}
                      </div>
                      <div className="text-[10px] text-gray-500">{step.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Content - Scrollable Area */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="min-h-[50vh] sm:min-h-0"
                    >
                      {currentStep === 1 && (
                        <div className="space-y-5">
                          <div className="border-b border-gray-100 pb-3 mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">
                              About You
                            </h2>
                            <p className="mt-2 text-base text-gray-600">Tell us a bit about yourself so we can get in touch.</p>
                          </div>
                          <div className="grid gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-base text-gray-900 font-medium">Name <span className="text-blue-600">*</span></Label>
                              <Input
                                id="name"
                                required
                                placeholder="Your full name"
                                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-11 text-base"
                                value={formData.name || ''}
                                onChange={(e) => updateFormData({ name: e.target.value })}
                                aria-required="true"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-base text-gray-900 font-medium">Email <span className="text-blue-600">*</span></Label>
                              <Input
                                id="email"
                                type="email"
                                required
                                placeholder="your@email.com"
                                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-11 text-base"
                                value={formData.email || ''}
                                onChange={(e) => updateFormData({ email: e.target.value })}
                                aria-required="true"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone" className="text-base text-gray-900 font-medium">Phone (Optional)</Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="Your phone number"
                                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-11 text-base"
                                value={formData.phone || ''}
                                onChange={(e) => updateFormData({ phone: e.target.value })}
                                aria-required="false"
                              />
                              <p className="text-xs text-gray-500">We'll only use this for urgent project updates</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-5">
                          <div className="border-b border-gray-100 pb-3 mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">
                              Project Basics
                            </h2>
                            <p className="mt-2 text-base text-gray-600">Let us know what type of project you're looking to build.</p>
                          </div>
                          <div className="grid gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="website-type" className="text-base text-gray-900 font-medium">Website Type *</Label>
                              <Select 
                                required
                                value={formData.websiteType || ''}
                                onValueChange={(value) => updateFormData({ websiteType: value })}
                              >
                                <SelectTrigger className="bg-white border-gray-300 text-gray-900 h-11 text-base">
                                  <SelectValue placeholder="Select website type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="portfolio">Portfolio Website</SelectItem>
                                  <SelectItem value="ecommerce">E-commerce Website</SelectItem>
                                  <SelectItem value="corporate">Corporate Website</SelectItem>
                                  <SelectItem value="blog">Blog</SelectItem>
                                  <SelectItem value="web-app">Web Application</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-5">
                          <div className="border-b border-gray-100 pb-3 mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">
                              Your Vision
                            </h2>
                            <p className="mt-2 text-base text-gray-600">Share your goals and timeline for the project.</p>
                          </div>
                          <div className="grid gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="purpose" className="text-base text-gray-900 font-medium">Primary Purpose *</Label>
                              <Select 
                                required
                                value={formData.purpose || ''}
                                onValueChange={(value) => updateFormData({ purpose: value })}
                              >
                                <SelectTrigger className="bg-white border-gray-300 text-gray-900 h-11 text-base">
                                  <SelectValue placeholder="Select primary purpose" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="leads">Generate Leads</SelectItem>
                                  <SelectItem value="sales">Sell Products</SelectItem>
                                  <SelectItem value="credibility">Build Credibility</SelectItem>
                                  <SelectItem value="showcase">Showcase Work</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="inspiration" className="text-base text-gray-900 font-medium">Website Inspiration</Label>
                              <Textarea
                                placeholder="Share links to websites you love or describe the style you're looking for"
                                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[100px] text-base"
                                value={formData.inspiration || ''}
                                onChange={(e) => updateFormData({ inspiration: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="timeline" className="text-base text-gray-900 font-medium">Desired Timeline *</Label>
                              <Select 
                                required
                                value={formData.timeline || ''}
                                onValueChange={(value) => updateFormData({ timeline: value })}
                              >
                                <SelectTrigger className="bg-white border-gray-300 text-gray-900 h-11 text-base">
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="asap">ASAP</SelectItem>
                                  <SelectItem value="1-month">Within 1 month</SelectItem>
                                  <SelectItem value="1-3-months">1-3 months</SelectItem>
                                  <SelectItem value="3-plus-months">3+ months</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 4 && (
                        <div className="space-y-5">
                          <div className="border-b border-gray-100 pb-3 mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">
                              What's Your Budget Range?
                            </h2>
                            <p className="mt-2 text-base text-gray-600">This helps us recommend the most suitable package for your needs.</p>
                          </div>
                          <div className="space-y-3">
                            <RadioGroup 
                              defaultValue={formData.budgetRange || "not-sure"} 
                              className="space-y-3"
                              onValueChange={(value) => updateFormData({ budgetRange: value })}
                            >
                              <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-100 transition-colors cursor-pointer data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-50/50">
                                <RadioGroupItem value="small" id="small" className="w-5 h-5 border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20" />
                                <Label htmlFor="small" className="flex-grow cursor-pointer">
                                  <span className="font-medium text-base text-gray-900">£500 - £1,000</span>
                                  <span className="text-sm text-gray-600 block">Best for simple portfolio sites or landing pages</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-100 transition-colors cursor-pointer data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-50/50">
                                <RadioGroupItem value="medium" id="medium" className="w-5 h-5 border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20" />
                                <Label htmlFor="medium" className="flex-grow cursor-pointer">
                                  <span className="font-medium text-base text-gray-900">£1,000 - £2,500</span>
                                  <span className="text-sm text-gray-600 block">Ideal for business websites with custom features</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-100 transition-colors cursor-pointer data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-50/50">
                                <RadioGroupItem value="large" id="large" className="w-5 h-5 border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20" />
                                <Label htmlFor="large" className="flex-grow cursor-pointer">
                                  <span className="font-medium text-base text-gray-900">£2,500+</span>
                                  <span className="text-sm text-gray-600 block">Perfect for complex web applications or e-commerce</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-100 transition-colors cursor-pointer data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-50/50">
                                <RadioGroupItem value="not-sure" id="not-sure" className="w-5 h-5 border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20" />
                                <Label htmlFor="not-sure" className="flex-grow cursor-pointer">
                                  <span className="font-medium text-base text-gray-900">I'm not sure yet</span>
                                  <span className="text-sm text-gray-600 block">Let's discuss what's best for your needs</span>
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      )}

                      {currentStep === 5 && (
                        <div className="space-y-5">
                          <div className="border-b border-gray-100 pb-3 mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">
                              Final Details
                            </h2>
                            <p className="mt-2 text-base text-gray-600">Add any additional information that might help us understand your project better.</p>
                          </div>
                          <div className="grid gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="additional-info" className="text-base text-gray-900 font-medium">Additional Details</Label>
                              <Textarea
                                placeholder="Tell us anything else that might help us understand your project better"
                                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[100px] text-base"
                                value={formData.additionalInfo || ''}
                                onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
                              />
                            </div>
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                id="consultation"
                                className="w-5 h-5 border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 rounded"
                                checked={formData.wantsConsultation || false}
                                onCheckedChange={(checked) => updateFormData({ wantsConsultation: checked })}
                              />
                              <Label 
                                htmlFor="consultation" 
                                className="text-base text-gray-900 cursor-pointer"
                              >
                                I'd like to schedule a free 15-minute consultation
                              </Label>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </form>
              </div>
            </div>

            {/* Form Navigation Buttons */}
            <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 sm:p-6 flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1 || isSubmitting}
                className="flex items-center gap-1 border-gray-300 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Back</span>
              </Button>
              
              {currentStep < steps.length ? (
                <Button
                  type="button"
                  variant="default"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-600/30 focus:ring-offset-2 text-white flex items-center gap-1"
                  aria-label="Next step"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="default"
                  onClick={submitForm}
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-600/30 focus:ring-offset-2 text-white flex items-center gap-1"
                  aria-label="Submit form"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" aria-hidden="true" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-4 h-4 ml-1" aria-hidden="true" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 