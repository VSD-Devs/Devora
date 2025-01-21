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

export const metadata = {
  title: 'Start Your Project | Devora - Affordable Web Development for Startups',
  description: 'Tell us about your project and let\'s create something amazing together. Get started with our affordable web development services tailored for startups.',
  keywords: 'web development project, startup website, affordable web development, project consultation',
}

export default function ProjectInquiryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Tell Us About Your Project
          </h1>
          <p className="text-xl text-gray-300">
            Help us understand your vision so we can bring it to life.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-8 bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700">
          {/* Basic Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Basic Contact Info</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">Name *</Label>
                <Input
                  id="name"
                  required
                  placeholder="Your full name"
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  aria-required="true"
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
                  aria-required="true"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-200">Phone (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  aria-required="false"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Project Details</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="website-type" className="text-gray-200">Website Type *</Label>
                <Select required>
                  <SelectTrigger id="website-type" className="bg-gray-700/50 border-gray-600 text-white">
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
                  <SelectTrigger id="budget" className="bg-gray-700/50 border-gray-600 text-white">
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

          {/* Goals and Vision */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Goals and Vision</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="purpose" className="text-gray-200">Primary Purpose *</Label>
                <Select required>
                  <SelectTrigger id="purpose" className="bg-gray-700/50 border-gray-600 text-white">
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
                  id="inspiration"
                  placeholder="Share links to websites you love or describe the style you're looking for"
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-gray-200">Desired Timeline *</Label>
                <Select required>
                  <SelectTrigger id="timeline" className="bg-gray-700/50 border-gray-600 text-white">
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

          {/* Package Selection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Package Selection</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <RadioGroup defaultValue="not-sure" className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="starter" id="starter" aria-label="Starter Package" />
                  <Label htmlFor="starter" className="flex-grow cursor-pointer">
                    <span className="font-semibold text-white">Starter Package</span>
                    <span className="block text-sm text-gray-300">£500 - £750</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="growth" id="growth" aria-label="Growth Package" />
                  <Label htmlFor="growth" className="flex-grow cursor-pointer">
                    <span className="font-semibold text-white">Growth Package</span>
                    <span className="block text-sm text-gray-300">£1,000 - £2,000</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="scale" id="scale" aria-label="Scale Package" />
                  <Label htmlFor="scale" className="flex-grow cursor-pointer">
                    <span className="font-semibold text-white">Scale Package</span>
                    <span className="block text-sm text-gray-300">£2,500+</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="not-sure" id="not-sure" aria-label="Not sure yet" />
                  <Label htmlFor="not-sure" className="flex-grow cursor-pointer">
                    <span className="font-semibold text-white">I'm not sure yet</span>
                    <span className="block text-sm text-gray-300">Let's discuss options</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Additional Details</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="additional-info" className="text-gray-200">Any other details you'd like to share?</Label>
                <Textarea
                  id="additional-info"
                  placeholder="Tell us anything else that might help us understand your project better"
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consultation"
                  className="data-[state=checked]:bg-blue-600"
                  aria-label="Request consultation"
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

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-white hover:bg-gray-100 text-black py-6 text-lg font-semibold"
            aria-label="Submit project inquiry"
          >
            Submit Project Inquiry
          </Button>

          <p className="text-sm text-gray-400 text-center mt-4">
            We'll get back to you within 24 hours to discuss your project or schedule your consultation.
          </p>
        </form>
      </div>
    </div>
  )
} 