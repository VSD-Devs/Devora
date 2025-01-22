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



const steps = [
  { id: 1, title: "About You", description: "Your contact details" },
  { id: 2, title: "Project Basics", description: "Type and budget" },
  { id: 3, title: "Your Vision", description: "Goals and timeline" },
  { id: 4, title: "Package", description: "Choose your package" },
  { id: 5, title: "Final Details", description: "Almost there!" }
]

export default function ProjectInquiryPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<Record<string, any>>({})

  const updateFormData = (data: Record<string, any>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-white to-gray-200">
            Tell Us About Your Project
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Help us understand your vision so we can bring it to life.
          </p>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-8 relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-700 -z-10" />
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  currentStep >= step.id ? "text-white" : "text-gray-500"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-colors ${
                    currentStep >= step.id
                      ? "bg-blue-600"
                      : "bg-gray-700"
                  }`}
                >
                  {currentStep > step.id ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <div className="text-xs font-medium hidden md:block">{step.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                      About You
                    </h2>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-200">Name *</Label>
                        <Input
                          id="name"
                          required
                          placeholder="Your full name"
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-200">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-200">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                      Project Basics
                    </h2>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="website-type" className="text-gray-200">Website Type *</Label>
                        <Select required>
                          <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
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
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-gray-200">Budget Range *</Label>
                        <Select required>
                          <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under £1,000</SelectItem>
                            <SelectItem value="1000-5000">£1,000 - £5,000</SelectItem>
                            <SelectItem value="5000-plus">£5,000+</SelectItem>
                            <SelectItem value="flexible">Flexible/Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                      Your Vision
                    </h2>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="purpose" className="text-gray-200">Primary Purpose *</Label>
                        <Select required>
                          <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
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
                        <Label htmlFor="inspiration" className="text-gray-200">Website Inspiration</Label>
                        <Textarea
                          placeholder="Share links to websites you love or describe the style you're looking for"
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-gray-200">Desired Timeline *</Label>
                        <Select required>
                          <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
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
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                      What's Your Budget Range?
                    </h2>
                    <p className="text-gray-300 mb-4">This helps us recommend the most suitable package for your needs.</p>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                      <RadioGroup defaultValue="not-sure" className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-900/50 data-[state=checked]:bg-white/10 data-[state=checked]:border-white/20 border border-transparent rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="small" id="small" className="border-gray-500 text-white data-[state=checked]:border-white data-[state=checked]:text-white" />
                          <Label htmlFor="small" className="flex-grow cursor-pointer">
                            <span className="font-semibold text-white">£500 - £1,000</span>
                            <span className="block text-sm text-gray-300">Best for simple portfolio sites or landing pages</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-900/50 data-[state=checked]:bg-white/10 data-[state=checked]:border-white/20 border border-transparent rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="medium" id="medium" className="border-gray-500 text-white data-[state=checked]:border-white data-[state=checked]:text-white" />
                          <Label htmlFor="medium" className="flex-grow cursor-pointer">
                            <span className="font-semibold text-white">£1,000 - £2,500</span>
                            <span className="block text-sm text-gray-300">Ideal for business websites with custom features</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-900/50 data-[state=checked]:bg-white/10 data-[state=checked]:border-white/20 border border-transparent rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="large" id="large" className="border-gray-500 text-white data-[state=checked]:border-white data-[state=checked]:text-white" />
                          <Label htmlFor="large" className="flex-grow cursor-pointer">
                            <span className="font-semibold text-white">£2,500+</span>
                            <span className="block text-sm text-gray-300">Perfect for complex web applications or e-commerce</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-900/50 data-[state=checked]:bg-white/10 data-[state=checked]:border-white/20 border border-transparent rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="not-sure" id="not-sure" className="border-gray-500 text-white data-[state=checked]:border-white data-[state=checked]:text-white" />
                          <Label htmlFor="not-sure" className="flex-grow cursor-pointer">
                            <span className="font-semibold text-white">I'm not sure yet</span>
                            <span className="block text-sm text-gray-300">Let's discuss what's best for your needs</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                      Final Details
                    </h2>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="additional-info" className="text-gray-200">Any other details you'd like to share?</Label>
                        <Textarea
                          placeholder="Tell us anything else that might help us understand your project better"
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="consultation"
                          className="data-[state=checked]:bg-blue-600"
                        />
                        <Label 
                          htmlFor="consultation" 
                          className="text-gray-200 cursor-pointer"
                        >
                          I'd like to schedule a free 15-minute consultation
                        </Label>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className={`${
                  currentStep === 1 ? "opacity-0 pointer-events-none" : ""
                } bg-transparent border-gray-600 text-white hover:bg-gray-800`}
              >
                Previous
              </Button>
              
              {currentStep < steps.length ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-white hover:bg-gray-100 text-black px-8"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                >
                  Submit Project Inquiry
                </Button>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="text-center text-sm text-gray-400 pt-4">
              Step {currentStep} of {steps.length}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 