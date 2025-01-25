"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, Shield } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Function to check if consent was already given
    const hasConsent = () => {
      // Check both localStorage and cookie
      const localStorageConsent = localStorage.getItem("cookie-consent");
      const cookieConsent = document.cookie.split(';').some(item => item.trim().startsWith('cookie-consent='));
      return localStorageConsent || cookieConsent;
    };

    // Add a small delay to prevent flash on page load
    const timer = setTimeout(() => {
      if (!hasConsent()) {
        setShowConsent(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    // Set a persistent cookie with 1 year expiry
    const oneYear = 365 * 24 * 60 * 60 * 1000;
    document.cookie = `cookie-consent=all; path=/; max-age=${oneYear}; SameSite=Strict`;
    setShowConsent(false);
    // Here you would initialize your analytics and other cookie-dependent services
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    // Set a persistent cookie with 1 year expiry
    const oneYear = 365 * 24 * 60 * 60 * 1000;
    document.cookie = `cookie-consent=essential; path=/; max-age=${oneYear}; SameSite=Strict`;
    setShowConsent(false);
    // Here you would only initialize essential cookies
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-5">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95">
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-blue-100 p-2">
                <Cookie className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-black">Cookie Settings</h3>
                  <p className="text-base text-black leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    Read our{" "}
                    <Link href="/cookies" className="font-medium underline underline-offset-4 hover:text-primary text-black">
                      cookie policy
                    </Link>{" "}
                    to learn more.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                  <Button 
                    onClick={acceptAll}
                    className="flex-1 gap-2"
                  >
                    <Shield className="h-4 w-4" />
                    Accept All
                  </Button>
                  <Button 
                    onClick={acceptEssential}
                    variant="outline" 
                    className="flex-1 gap-2"
                  >
                    <Settings className="h-4 w-4" />
                    Essential Only
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 