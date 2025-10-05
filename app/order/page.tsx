"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function OrderPage() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Auto-redirect to WhatsApp when page loads
    const productName = searchParams.get("product") || ""
    const fishType = searchParams.get("type") || ""
    const weight = searchParams.get("weight") || ""
    const price = searchParams.get("price") || ""
    
    const phoneNumber = "256792460182"
    let message = `Hello! I'd like to order from Kampala Fried Fish.\n\n`
    
    if (productName) {
      message += `Product: ${productName}\n`
    }
    if (fishType) {
      message += `Fish Type: ${fishType}\n`
    }
    if (weight) {
      message += `Weight: ${weight}\n`
    }
    if (price) {
      message += `Price: ${price}\n`
    }
    
    message += `\nPlease confirm availability and delivery details. Thank you!`
    
    const encodedMessage = message.replace(/ /g, '%20').replace(/\n/g, '%0A')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }, [searchParams])

  const handleWhatsAppRedirect = () => {
    const productName = searchParams.get("product") || ""
    const fishType = searchParams.get("type") || ""
    const weight = searchParams.get("weight") || ""
    const price = searchParams.get("price") || ""
    
    const phoneNumber = "256792460182"
    let message = `Hello! I'd like to order from Kampala Fried Fish.\n\n`
    
    if (productName) {
      message += `Product: ${productName}\n`
    }
    if (fishType) {
      message += `Fish Type: ${fishType}\n`
    }
    if (weight) {
      message += `Weight: ${weight}\n`
    }
    if (price) {
      message += `Price: ${price}\n`
    }
    
    message += `\nPlease confirm availability and delivery details. Thank you!`
    
    const encodedMessage = message.replace(/ /g, '%20').replace(/\n/g, '%0A')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      <div className="px-4 py-8 max-w-md mx-auto">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4 touch-target">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mb-2">Order via WhatsApp</h1>
          <p className="text-muted-foreground text-sm">All orders are processed through WhatsApp for better service</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h2 className="text-xl font-bold text-foreground mb-3">Redirecting to WhatsApp...</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            You're being redirected to WhatsApp to place your order. This ensures faster communication and better service.
          </p>

          <div className="bg-green-50 rounded-xl p-4 mb-6 text-left">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              <span className="font-medium text-sm">WhatsApp Benefits:</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Instant communication</li>
              <li>• Photo sharing for fish selection</li>
              <li>• Real-time order updates</li>
              <li>• Direct delivery coordination</li>
              </ul>
            </div>

            <Button
            onClick={handleWhatsAppRedirect}
            className="w-full bg-green-500 hover:bg-green-600 h-12 text-base font-medium mb-4"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Open WhatsApp Now
          </Button>

          <Link href="/">
            <Button variant="outline" className="w-full h-12 text-base font-medium">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
