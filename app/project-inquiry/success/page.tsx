import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: 'Thank You | Devora - Web Development for Startups',
  description: 'Thank you for submitting your project inquiry. We\'ll be in touch within 24 hours to discuss your startup\'s web development needs.',
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <CheckCircle className="w-20 h-20 mx-auto mb-8 text-green-400" />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          Thank You!
        </h1>
        
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 mb-8">
          <p className="text-xl text-gray-200 mb-6">
            We've received your project inquiry and we're excited to learn more about your vision.
          </p>
          
          <div className="space-y-4 text-left text-gray-300">
            <h2 className="text-2xl font-semibold text-white text-center mb-6">What's Next?</h2>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 rounded-full p-2 mt-1">
                <span className="text-sm font-bold">1</span>
              </div>
              <p>Our team will review your project details within the next 24 hours.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 rounded-full p-2 mt-1">
                <span className="text-sm font-bold">2</span>
              </div>
              <p>We'll reach out to schedule your consultation or discuss your project requirements in detail.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 rounded-full p-2 mt-1">
                <span className="text-sm font-bold">3</span>
              </div>
              <p>We'll provide you with a detailed proposal tailored to your specific needs and budget.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button variant="outline" className="mr-4">
              Return to Homepage
            </Button>
          </Link>
          
          <Link href="/portfolio">
            <Button className="bg-white text-black hover:bg-gray-100">
              View Our Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 