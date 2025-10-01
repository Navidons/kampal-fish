"use client"

import { Mail, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactFormButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    phoneNumber: "",
    inquiry: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.phoneNumber || !formData.inquiry) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ phoneNumber: "", inquiry: "" })
        setTimeout(() => {
          setIsSubmitted(false)
          setIsOpen(false)
        }, 2000)
      }
    } catch (error) {
      console.error("Contact form submission failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Floating Contact Form Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Contact us via form"
      >
        <Mail className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Quick Contact
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Contact Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Quick Contact</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isSubmitted ? (
                /* Success Message */
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    We'll get back to you within 30 minutes.
                  </p>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="phoneNumber" className="text-sm font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="+256 708 923758"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry" className="text-sm font-medium">
                      Your Order or Inquiry *
                    </Label>
                    <Textarea
                      id="inquiry"
                      name="inquiry"
                      placeholder="Tell us about your order or any questions you have..."
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1 resize-none"
                    />
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-800">
                    <p className="font-medium mb-1">What happens next?</p>
                    <ul className="space-y-1 text-xs">
                      <li>• We'll call you within 30 minutes</li>
                      <li>• Confirm your order details</li>
                      <li>• Arrange delivery or pickup</li>
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={!formData.phoneNumber || !formData.inquiry || isSubmitting}
                      className="flex-1 bg-blue-500 hover:bg-blue-600"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
