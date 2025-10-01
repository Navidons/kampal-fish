"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "256708923758" // Remove + for WhatsApp link
    const message = "Hello! I'd like to order fresh Olusaniya from Kampala Fried Fish. Please let me know about availability and pricing."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse hover:animate-none touch-target"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      
      {/* Tooltip - Hidden on mobile */}
      <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Order on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  )
}
