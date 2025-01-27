import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: 'Thank You | Devora - Web Development for Startups',
  description: 'Thank you for submitting your project inquiry. We\'ll be in touch within 24 hours to discuss your startup\'s web development needs.',
}

const SuccessIcon = () => (
  <div className="relative mx-auto w-24 h-24">
    {/* Outer glow effect */}
    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl" />
    
    {/* Circle background */}
    <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
      {/* Checkmark */}
      <svg
        className="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  </div>
)

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900 pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <SuccessIcon />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 mt-8">
          Thank You!
        </h1>
        
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg mb-8">
          <p className="text-xl text-gray-700 mb-6">
            We've received your project inquiry and we're excited to learn more about your vision.
          </p>
          
          <div className="space-y-4 text-left text-gray-600">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">What's Next?</h2>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 rounded-full p-2 mt-1">
                <span className="text-sm font-bold text-gray-700">1</span>
              </div>
              <p>Our team will review your project details within the next 24 hours.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 rounded-full p-2 mt-1">
                <span className="text-sm font-bold text-gray-700">2</span>
              </div>
              <p>We'll reach out to schedule your consultation or discuss your project requirements in detail.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 rounded-full p-2 mt-1">
                <span className="text-sm font-bold text-gray-700">3</span>
              </div>
              <p>We'll provide you with a detailed proposal tailored to your specific needs and budget.</p>
            </div>
          </div>
        </div>
        
        <div>
          <Link href="/">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-medium">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 