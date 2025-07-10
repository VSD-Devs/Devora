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
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const steps = [
  { id: 1, title: "Contact Details" },
  { id: 2, title: "Project Type" },
  { id: 3, title: "Your Vision" },
  { id: 4, title: "Budget Range" },
  { id: 5, title: "Final Details" }
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
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
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

      router.push('/project-inquiry/success')
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit form. Please try again.')
      setIsSubmitting(false)
    }
  }

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Ultra Minimalist */}
      <section className="relative min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-light mb-12 group"
              aria-label="Back to homepage"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to home</span>
            </button>

            {/* Subtle status indicator */}
            <div className="inline-flex items-center gap-3 mb-12">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-400 font-light tracking-wide">Start your project</span>
            </div>
            
            {/* Main headline - Ultra clean typography */}
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.85] tracking-tighter mb-8">
                <span className="block text-white font-extralight">Tell us about</span>
                <span className="block text-gray-300 font-extralight italic">your project</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed tracking-wide">
                A few questions to understand your needs and provide you with an accurate quote.
              </p>
            </div>
            
            {/* Progress indicator */}
            <div className="flex items-center gap-8 mb-20">
              <span className="text-gray-400 font-light text-lg tracking-wide">
                Step {currentStep} of {steps.length}
              </span>
              <div className="flex-1 max-w-xs">
                <div className="h-0.5 bg-gray-800 rounded-full">
                  <div 
                    className="h-full bg-white transition-all duration-300 rounded-full"
                    style={{ width: `${(currentStep / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            
            {/* Current step title */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                {steps[currentStep - 1].title}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Ultra Minimalist */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <form className="space-y-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  {/* Step 1: Contact Details */}
                  {currentStep === 1 && (
                    <div className="space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                            First name *
                          </label>
                          <Input
                            type="text"
                            value={formData.firstName || ''}
                            onChange={(e) => updateFormData({ firstName: e.target.value })}
                            placeholder="John"
                            className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                            required
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                            Last name *
                          </label>
                          <Input
                            type="text"
                            value={formData.lastName || ''}
                            onChange={(e) => updateFormData({ lastName: e.target.value })}
                            placeholder="Doe"
                            className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Email address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email || ''}
                          onChange={(e) => updateFormData({ email: e.target.value })}
                          placeholder="john@company.com"
                          className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                          required
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Company name
                        </label>
                        <Input
                          type="text"
                          value={formData.company || ''}
                          onChange={(e) => updateFormData({ company: e.target.value })}
                          placeholder="Your Company"
                          className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Phone number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone || ''}
                          onChange={(e) => updateFormData({ phone: e.target.value })}
                          placeholder="+44 123 456 7890"
                          className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 font-light text-lg"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Type */}
                  {currentStep === 2 && (
                    <div className="space-y-12">
                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Project type *
                        </label>
                        <Select 
                          value={formData.projectType || ''}
                          onValueChange={(value) => updateFormData({ projectType: value })}
                        >
                          <SelectTrigger className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black focus:border-black focus:ring-0 px-0 font-light text-lg">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200">
                            <SelectItem value="website">Business Website</SelectItem>
                            <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                            <SelectItem value="app">Web Application</SelectItem>
                            <SelectItem value="redesign">Website Redesign</SelectItem>
                            <SelectItem value="maintenance">Maintenance & Updates</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Key features needed
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            'Contact forms',
                            'Blog/News section',
                            'Online booking',
                            'Payment processing',
                            'User accounts',
                            'Content management',
                            'SEO optimisation',
                            'Analytics setup'
                          ].map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                              <Checkbox
                                id={feature}
                                checked={formData.features?.includes(feature) || false}
                                onCheckedChange={(checked) => {
                                  const currentFeatures = formData.features || []
                                  const newFeatures = checked 
                                    ? [...currentFeatures, feature]
                                    : currentFeatures.filter((f: string) => f !== feature)
                                  updateFormData({ features: newFeatures })
                                }}
                                className="border-gray-300 text-black"
                              />
                              <Label htmlFor={feature} className="text-gray-600 font-light cursor-pointer">
                                {feature}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Project description
                        </label>
                        <Textarea
                          value={formData.description || ''}
                          onChange={(e) => updateFormData({ description: e.target.value })}
                          placeholder="Tell us about your project..."
                          className="min-h-[120px] border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 py-4 font-light text-lg resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Vision */}
                  {currentStep === 3 && (
                    <div className="space-y-12">
                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Primary purpose *
                        </label>
                        <Select 
                          value={formData.purpose || ''}
                          onValueChange={(value) => updateFormData({ purpose: value })}
                        >
                          <SelectTrigger className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black focus:border-black focus:ring-0 px-0 font-light text-lg">
                            <SelectValue placeholder="Select primary purpose" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200">
                            <SelectItem value="leads">Generate Leads</SelectItem>
                            <SelectItem value="sales">Sell Products</SelectItem>
                            <SelectItem value="credibility">Build Credibility</SelectItem>
                            <SelectItem value="showcase">Showcase Work</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Design inspiration
                        </label>
                        <Textarea
                          value={formData.inspiration || ''}
                          onChange={(e) => updateFormData({ inspiration: e.target.value })}
                          placeholder="Share links to websites you love or describe the style you're looking for"
                          className="min-h-[120px] border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 py-4 font-light text-lg resize-none"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Timeline *
                        </label>
                        <Select 
                          value={formData.timeline || ''}
                          onValueChange={(value) => updateFormData({ timeline: value })}
                        >
                          <SelectTrigger className="h-12 border-0 border-b border-gray-200 rounded-none bg-transparent text-black focus:border-black focus:ring-0 px-0 font-light text-lg">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200">
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="1-3-months">1-3 months</SelectItem>
                            <SelectItem value="3-plus-months">3+ months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Budget */}
                  {currentStep === 4 && (
                    <div className="space-y-12">
                      <div className="space-y-8">
                        <RadioGroup 
                          value={formData.budgetRange || "not-sure"} 
                          onValueChange={(value) => updateFormData({ budgetRange: value })}
                          className="space-y-6"
                        >
                          {[
                            {
                              value: "small",
                              label: "£250 - £750",
                              description: "Simple portfolio sites or landing pages"
                            },
                            {
                              value: "medium", 
                              label: "£1,000 - £2,500",
                              description: "Business websites with custom features"
                            },
                            {
                              value: "large",
                              label: "£2,500+", 
                              description: "Complex web applications or e-commerce"
                            },
                            {
                              value: "not-sure",
                              label: "I'm not sure yet",
                              description: "Let's discuss what's best for your needs"
                            }
                          ].map((option) => (
                            <div key={option.value} className="group flex items-start gap-4 py-6 border-b border-gray-100 last:border-b-0">
                              <RadioGroupItem 
                                value={option.value} 
                                id={option.value} 
                                className="mt-1 border-gray-300 text-black"
                              />
                              <div className="flex-1">
                                <Label htmlFor={option.value} className="cursor-pointer">
                                  <div className="text-lg font-light text-black mb-1 group-hover:text-gray-600 transition-colors">
                                    {option.label}
                                  </div>
                                  <div className="text-gray-500 font-light text-sm">
                                    {option.description}
                                  </div>
                                </Label>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Final Details */}
                  {currentStep === 5 && (
                    <div className="space-y-12">
                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 uppercase tracking-wider font-light">
                          Additional information
                        </label>
                        <Textarea
                          value={formData.additionalInfo || ''}
                          onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
                          placeholder="Anything else that might help us understand your project better?"
                          className="min-h-[120px] border-0 border-b border-gray-200 rounded-none bg-transparent text-black placeholder-gray-400 focus:border-black focus:ring-0 px-0 py-4 font-light text-lg resize-none"
                        />
                      </div>

                      <div className="flex items-center gap-3 py-6 border-b border-gray-100">
                        <Checkbox
                          id="consultation"
                          checked={formData.wantsConsultation || false}
                          onCheckedChange={(checked) => updateFormData({ wantsConsultation: checked })}
                          className="border-gray-300 text-black"
                        />
                        <Label htmlFor="consultation" className="text-gray-600 font-light cursor-pointer">
                          I'd like to schedule a free 15-minute consultation call
                        </Label>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-12 border-t border-gray-100">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={prevStep}
                  disabled={currentStep === 1 || isSubmitting}
                  className="text-gray-400 hover:text-black p-0 h-auto font-light text-lg tracking-wide transition-colors group disabled:opacity-50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Previous
                </Button>
                
                {currentStep < steps.length ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={nextStep}
                    className="text-black hover:text-gray-600 p-0 h-auto font-light text-lg tracking-wide border-b border-black border-opacity-30 rounded-none pb-1 transition-colors group"
                  >
                    Next step
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={submitForm}
                    disabled={isSubmitting}
                    className="text-black hover:text-gray-600 p-0 h-auto font-light text-lg tracking-wide border-b border-black border-opacity-30 rounded-none pb-1 transition-colors group disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit project'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}