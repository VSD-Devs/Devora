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
import { ArrowLeft, CheckCircle2, ChevronRight, ChevronLeft, Send, Sparkles, Rocket, Target } from "lucide-react"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-pulse"></div>
        
        {/* Floating geometric shapes - Hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-10 w-6 h-6 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
        <div className="hidden md:block absolute top-40 right-20 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce"></div>
        <div className="hidden md:block absolute bottom-40 left-20 w-8 h-8 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-l from-blue-600/10 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Accessibility skip link */}
      <a href="#inquiry-form" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md">
        Skip to form
      </a>

      {/* Back Button */}
      <div className="absolute top-6 left-4 md:left-8 z-50">
        <button
          onClick={handleBack}
          className="inline-flex items-center text-blue-200 hover:text-white group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md p-2 backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 hover:bg-slate-700/50 transition-all"
          aria-label="Back to homepage"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          <span className="text-base">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced badge */}
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm text-white mb-6 md:mb-8 shadow-lg">
              <Rocket className="w-3 md:w-4 h-3 md:h-4 mr-2 text-blue-400 animate-pulse" />
              <span className="font-medium">Start Your Journey</span>
              <div className="ml-2 md:ml-3 flex space-x-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Let's Build</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Something Amazing</span>
            </h1>
            
            <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
              Tell us about your vision and let's create something extraordinary together. This will only take a few minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Form Card */}
          <div className="relative">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl md:rounded-3xl blur-xl" aria-hidden="true" />
            
            {/* Card */}
            <div id="inquiry-form" className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Progress Steps */}
              <div className="border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-4 md:p-6" aria-label={`Step ${currentStep} of ${steps.length}: ${steps[currentStep - 1].title}`}>
                {/* Mobile Progress Bar */}
                <div className="block sm:hidden">
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-3">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                      style={{ width: `${(currentStep / steps.length) * 100}%` }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm text-blue-200 text-center">
                    Step {currentStep} of {steps.length}: <span className="font-medium text-white">{steps[currentStep - 1].title}</span>
                  </div>
                </div>

                {/* Desktop Progress Steps */}
                <div className="hidden sm:flex justify-between items-center relative">
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-700 -z-10" aria-hidden="true" />
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`flex flex-col items-center ${
                        currentStep >= step.id ? "text-white" : "text-slate-400"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all shadow-lg ${
                          currentStep > step.id
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                            : currentStep === step.id
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white ring-4 ring-blue-400/30"
                            : "bg-slate-700 border border-slate-600"
                        }`}
                        aria-current={currentStep === step.id ? "step" : undefined}
                        aria-label={`Step ${step.id}: ${step.title}`}
                      >
                        {currentStep > step.id ? (
                          <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                        ) : (
                          <span className="text-sm font-semibold">{step.id}</span>
                        )}
                      </div>
                      <div className="text-sm font-medium">
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-400">{step.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="min-h-[400px]"
                    >
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-4">
                              <Target className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              About You
                            </h2>
                            <p className="text-blue-200">Tell us a bit about yourself so we can get in touch.</p>
                          </div>
                          <div className="grid gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-base text-white font-medium">Name <span className="text-blue-400">*</span></Label>
                              <Input
                                id="name"
                                required
                                placeholder="Your full name"
                                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 text-base backdrop-blur-sm"
                                value={formData.name || ''}
                                onChange={(e) => updateFormData({ name: e.target.value })}
                                aria-required="true"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-base text-white font-medium">Email <span className="text-blue-400">*</span></Label>
                              <Input
                                id="email"
                                type="email"
                                required
                                placeholder="your@email.com"
                                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 text-base backdrop-blur-sm"
                                value={formData.email || ''}
                                onChange={(e) => updateFormData({ email: e.target.value })}
                                aria-required="true"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone" className="text-base text-white font-medium">Phone (Optional)</Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="Your phone number"
                                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 text-base backdrop-blur-sm"
                                value={formData.phone || ''}
                                onChange={(e) => updateFormData({ phone: e.target.value })}
                                aria-required="false"
                              />
                              <p className="text-xs text-slate-400">We'll only use this for urgent project updates</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-4">
                              <Sparkles className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              Project Basics
                            </h2>
                            <p className="text-blue-200">Let us know what type of project you're looking to build.</p>
                          </div>
                          <div className="grid gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="website-type" className="text-base text-white font-medium">Website Type <span className="text-blue-400">*</span></Label>
                              <Select 
                                required
                                value={formData.websiteType || ''}
                                onValueChange={(value) => updateFormData({ websiteType: value })}
                              >
                                <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white h-12 text-base backdrop-blur-sm">
                                  <SelectValue placeholder="Select website type" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-800 border-slate-600">
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
                        <div className="space-y-6">
                          <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-4">
                              <Target className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              Your Vision
                            </h2>
                            <p className="text-blue-200">Share your goals and timeline for the project.</p>
                          </div>
                          <div className="grid gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="purpose" className="text-base text-white font-medium">Primary Purpose <span className="text-blue-400">*</span></Label>
                              <Select 
                                required
                                value={formData.purpose || ''}
                                onValueChange={(value) => updateFormData({ purpose: value })}
                              >
                                <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white h-12 text-base backdrop-blur-sm">
                                  <SelectValue placeholder="Select primary purpose" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-800 border-slate-600">
                                  <SelectItem value="leads">Generate Leads</SelectItem>
                                  <SelectItem value="sales">Sell Products</SelectItem>
                                  <SelectItem value="credibility">Build Credibility</SelectItem>
                                  <SelectItem value="showcase">Showcase Work</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="inspiration" className="text-base text-white font-medium">Website Inspiration</Label>
                              <Textarea
                                placeholder="Share links to websites you love or describe the style you're looking for"
                                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[120px] text-base backdrop-blur-sm"
                                value={formData.inspiration || ''}
                                onChange={(e) => updateFormData({ inspiration: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="timeline" className="text-base text-white font-medium">Desired Timeline <span className="text-blue-400">*</span></Label>
                              <Select 
                                required
                                value={formData.timeline || ''}
                                onValueChange={(value) => updateFormData({ timeline: value })}
                              >
                                <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white h-12 text-base backdrop-blur-sm">
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-800 border-slate-600">
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
                        <div className="space-y-6">
                          <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-4">
                              <Target className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              What's Your Budget Range?
                            </h2>
                            <p className="text-blue-200">This helps us recommend the most suitable package for your needs.</p>
                          </div>
                          <div className="space-y-4">
                            <RadioGroup 
                              defaultValue={formData.budgetRange || "not-sure"} 
                              className="space-y-4"
                              onValueChange={(value) => updateFormData({ budgetRange: value })}
                            >
                              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 border border-slate-600 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500/10 backdrop-blur-sm">
                                <RadioGroupItem value="small" id="small" className="w-5 h-5 border-slate-500 text-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                                <Label htmlFor="small" className="flex-grow cursor-pointer">
                                  <span className="font-medium text-base text-white">£250 - £750</span>
                                  <span className="text-sm text-slate-300 block">Best for simple portfolio sites or landing pages</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 border border-slate-600 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500/10 backdrop-blur-sm">
                                <RadioGroupItem value="medium" id="medium" className="w-5 h-5 border-slate-500 text-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                                <Label htmlFor="medium" className="flex-grow cursor-pointer">
                                  <span className="font-medium text-base text-white">£1,000 - £2,500</span>
                                  <span className="text-sm text-slate-300 block">Ideal for business websites with custom features</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 border border-slate-600 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500/10 backdrop-blur-sm">
                                <RadioGroupItem value="large" id="large" className="w-5 h-5 border-slate-500 text-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                                <Label htmlFor="large" className="flex-grow cursor-pointer">
                                  <span className="font-medium text-base text-white">£2,500+</span>
                                  <span className="text-sm text-slate-300 block">Perfect for complex web applications or e-commerce</span>
                                </Label>
                              </div>
                              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 border border-slate-600 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500/10 backdrop-blur-sm">
                                <RadioGroupItem value="not-sure" id="not-sure" className="w-5 h-5 border-slate-500 text-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                                <Label htmlFor="not-sure" className="flex-grow cursor-pointer">
                                  <span className="font-medium text-base text-white">I'm not sure yet</span>
                                  <span className="text-sm text-slate-300 block">Let's discuss what's best for your needs</span>
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      )}

                      {currentStep === 5 && (
                        <div className="space-y-6">
                          <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-4">
                              <Sparkles className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              Final Details
                            </h2>
                            <p className="text-blue-200">Add any additional information that might help us understand your project better.</p>
                          </div>
                          <div className="grid gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="additional-info" className="text-base text-white font-medium">Additional Details</Label>
                              <Textarea
                                placeholder="Tell us anything else that might help us understand your project better"
                                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[120px] text-base backdrop-blur-sm"
                                value={formData.additionalInfo || ''}
                                onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
                              />
                            </div>
                            <div className="flex items-center space-x-3 p-4 bg-slate-800/30 border border-slate-600 rounded-xl">
                              <Checkbox
                                id="consultation"
                                className="w-5 h-5 border-slate-500 text-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded"
                                checked={formData.wantsConsultation || false}
                                onCheckedChange={(checked) => updateFormData({ wantsConsultation: checked })}
                              />
                              <Label 
                                htmlFor="consultation" 
                                className="text-base text-white cursor-pointer"
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

              {/* Form Navigation Buttons */}
              <div className="border-t border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 flex items-center justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1 || isSubmitting}
                  className="flex items-center gap-2 border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500 focus:ring-2 focus:ring-blue-500/20 backdrop-blur-sm"
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
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:ring-2 focus:ring-blue-500/20 text-white flex items-center gap-2 shadow-lg"
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
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:ring-2 focus:ring-blue-500/20 text-white flex items-center gap-2 shadow-lg"
                    aria-label="Submit form"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 