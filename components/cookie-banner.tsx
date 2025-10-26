"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("devora-cookie-consent")
    if (!cookieConsent) {
      // Small delay to let page load
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("devora-cookie-consent", "all")
    // Enable analytics and tracking
    window.location.reload()
  }

  const handleRejectAll = () => {
    localStorage.setItem("devora-cookie-consent", "essential")
    setIsVisible(false)
  }

  const handleAcceptEssential = () => {
    localStorage.setItem("devora-cookie-consent", "essential")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-2xl">
      <div className="container mx-auto px-4 py-6 md:py-8">
        {showDetails ? (
          // Details View
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">Cookie Settings</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {/* Essential Cookies */}
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="essential"
                    checked={true}
                    disabled
                    className="mt-1 cursor-not-allowed"
                  />
                  <div className="flex-1">
                    <label htmlFor="essential" className="font-medium cursor-not-allowed">
                      Essential Cookies (Required)
                    </label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Necessary for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="analytics"
                    defaultChecked={false}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="analytics" className="font-medium">
                      Analytics Cookies
                    </label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Help us understand how visitors use our website. Data is anonymized and used to improve your experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="marketing"
                    defaultChecked={false}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor="marketing" className="font-medium">
                      Marketing Cookies
                    </label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Used to track your interests and show you relevant advertising. Optional and can be disabled.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={() => setShowDetails(false)}
                className="flex-1"
              >
                Back
              </Button>
              <Button onClick={handleAcceptEssential} className="flex-1">
                Save Settings
              </Button>
            </div>
          </div>
        ) : (
          // Main View
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">We use cookies</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your experience, analyse site traffic, and serve targeted advertising. 
                <Link href="/privacy" className="font-medium text-primary hover:underline ml-1">
                  Learn more
                </Link>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
              <Button
                variant="outline"
                onClick={() => setShowDetails(true)}
                className="whitespace-nowrap"
              >
                Customize
              </Button>
              <Button
                variant="outline"
                onClick={handleRejectAll}
                className="whitespace-nowrap"
              >
                Reject All
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="whitespace-nowrap"
              >
                Accept All
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
