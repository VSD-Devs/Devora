"use client"

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  type?: "contact" | "audit"
}

export function SuccessModal({
  isOpen,
  onClose,
  title = "Message Sent Successfully!",
  description,
  type = "contact",
}: SuccessModalProps) {
  const defaultDescription =
    type === "audit"
      ? "We've received your audit request. We'll analyse your website and send you a comprehensive report within two working days."
      : "Thanks for getting in touch! We've received your message and will respond within two working days."

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-primary text-primary-foreground border-primary rounded-3xl shadow-2xl">
        {/* Visually hidden title for accessibility */}
        <DialogTitle className="sr-only">
          {title}
        </DialogTitle>

        <div className="text-center pt-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base leading-relaxed text-primary-foreground/90 mb-8">
            {description || defaultDescription}
          </p>

          {/* Info Card */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/20 rounded-2xl p-6 mb-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary-foreground font-light">★</span>
                <div className="text-left">
                  <p className="text-sm text-primary-foreground font-light">
                    We'll review your {type === "audit" ? "website" : "enquiry"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-foreground font-light">★</span>
                <div className="text-left">
                  <p className="text-sm text-primary-foreground font-light">
                    Our team will prepare {type === "audit" ? "your audit report" : "a response"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-foreground font-light">★</span>
                <div className="text-left">
                  <p className="text-sm text-primary-foreground font-light">
                    We'll be in touch within <span className="font-semibold">2 working days</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <Button
            onClick={onClose}
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full py-6 font-light text-base transition-all duration-300"
          >
            Understood
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
