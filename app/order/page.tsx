"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, User, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function OrderPage() {
  const searchParams = useSearchParams()
  const [productName, setProductName] = useState("")
  const [fishType, setFishType] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  useEffect(() => {
    setProductName(searchParams.get("product") || "")
    setFishType(searchParams.get("type") || "")
  }, [searchParams])

  const productSizes = {
    "Creamy Fried Nile Perch (Olusaniya Special)": [
      { name: "Small (1-2kg)", price: "UGX 18,000" },
      { name: "Medium (2-3kg)", price: "UGX 28,000" },
      { name: "Large (3-4kg)", price: "UGX 38,000" },
      { name: "Family (4kg+)", price: "UGX 48,000" },
    ],
    "Golden Fried Tilapia Whole": [
      { name: "Small (500g-1kg)", price: "UGX 12,000" },
      { name: "Medium (1-2kg)", price: "UGX 18,000" },
      { name: "Large (2-3kg)", price: "UGX 25,000" },
    ],
    "Fried Fish Pieces (Mixed)": [
      { name: "Small Pack (1kg)", price: "UGX 15,000" },
      { name: "Medium Pack (2kg)", price: "UGX 28,000" },
      { name: "Large Pack (3kg)", price: "UGX 40,000" },
      { name: "Party Pack (5kg)", price: "UGX 65,000" },
    ],
  }

  const currentSizes = productSizes[productName as keyof typeof productSizes] || []

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phoneNumber) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: productName || "General Fish Order",
          fishType: fishType || "Mixed",
          phoneNumber,
          customerName,
          selectedSize: selectedSize || "To be discussed",
          specialRequests,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setOrderSubmitted(true)
      } else {
        alert(`Order submission failed: ${result.error}`)
      }
    } catch (error) {
      alert("Order submission failed. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (orderSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
        <div className="px-4 py-8 max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">Order Received!</h1>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your order has been sent to our admin team. We'll call or WhatsApp you within 30 minutes to confirm your order.
            </p>

            <div className="bg-orange-50 rounded-xl p-4 mb-6 text-left">
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 text-orange-600 mr-2" />
                <span className="font-medium text-sm">What's Next:</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Confirmation call/WhatsApp</li>
                <li>• Order & delivery details</li>
                <li>• Fresh fish preparation</li>
              </ul>
            </div>

            <Link href="/">
              <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-medium">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      <div className="px-4 py-6 max-w-md mx-auto">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4 touch-target">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mb-2">Place Your Order</h1>
          <p className="text-muted-foreground text-sm">We'll contact you to finalize details</p>
        </div>

        {productName && (
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground text-sm">{productName}</h3>
              <Badge variant="secondary" className="text-xs">
                {fishType}
              </Badge>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Select Size:</Label>
              {currentSizes.map((size, index) => (
                <div
                  key={index}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all touch-target ${
                    selectedSize === `${size.name} - ${size.price}`
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedSize(`${size.name} - ${size.price}`)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{size.name}</span>
                    <span className="text-primary font-bold text-sm">{size.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center text-sm font-medium">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+256 708 923758"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="h-12 text-base border-2 focus:border-primary"
              />
              <p className="text-xs text-muted-foreground">For order confirmation call/WhatsApp</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center text-sm font-medium">
                <User className="w-4 h-4 mr-2 text-primary" />
                Your Name (Optional)
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="h-12 text-base border-2 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requests" className="text-sm font-medium">
                Special Requests (Optional)
              </Label>
              <Textarea
                id="requests"
                placeholder="Any special instructions..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                rows={3}
                className="text-base border-2 focus:border-primary resize-none"
              />
            </div>

            <div className="bg-orange-50 rounded-xl p-4">
              <h4 className="font-semibold text-foreground mb-2 text-sm">Quick Process:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Submit order → Get confirmation call</li>
                <li>• Confirm details → Fresh fish delivered</li>
              </ul>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 h-14 text-base font-semibold rounded-xl"
              disabled={!phoneNumber || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Place Order"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
