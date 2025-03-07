"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, Shield, X } from "lucide-react";
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

  // Set focus to the dialog when it appears
  useEffect(() => {
    if (showConsent) {
      const dialogEl = document.getElementById('cookie-consent-dialog');
      if (dialogEl) {
        dialogEl.focus();
      }
    }
  }, [showConsent]);

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
    <div 
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 md:pb-6"
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="cookie-consent-title"
      id="cookie-consent-dialog"
      tabIndex={-1}
    >
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-lg animate-in slide-in-from-bottom-5">
          {/* Light gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-gray-50/50" aria-hidden="true"></div>
          
          <div className="relative p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="hidden sm:flex rounded-full bg-blue-100 p-2.5 h-12 w-12 items-center justify-center flex-shrink-0">
                <Cookie className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 sm:hidden">
                      <Cookie className="h-5 w-5 text-blue-600" aria-hidden="true" />
                      <h3 
                        id="cookie-consent-title" 
                        className="text-lg font-semibold tracking-tight text-gray-900"
                      >
                        Cookie Settings
                      </h3>
                    </div>
                    <h3 
                      id="cookie-consent-title-desktop" 
                      className="hidden sm:block text-xl font-semibold tracking-tight text-gray-900"
                    >
                      Cookie Settings
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalised content, and analyse our website traffic. 
                      Read our{" "}
                      <Link 
                        href="/cookies" 
                        className="font-medium text-blue-600 hover:text-blue-700 underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                      >
                        cookie policy
                      </Link>{" "}
                      to learn more.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col xs:flex-row gap-3">
                  <Button 
                    onClick={acceptAll}
                    className="bg-blue-600 hover:bg-blue-700 text-white gap-2 h-auto py-2.5 px-4 shadow-sm focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Shield className="h-4 w-4" aria-hidden="true" />
                    <span>Accept All Cookies</span>
                  </Button>
                  <Button 
                    onClick={acceptEssential}
                    variant="outline" 
                    className="border-gray-300 text-gray-800 hover:bg-gray-50 gap-2 h-auto py-2.5 px-4 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Settings className="h-4 w-4" aria-hidden="true" />
                    <span>Essential Only</span>
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