"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock, CheckCircle, Truck, Phone } from "lucide-react"

interface OrderStatus {
  id: string
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered'
  estimatedTime?: string
  phoneNumber: string
  orderTime: string
}

export function OrderTracking() {
  const [orderId, setOrderId] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const statusConfig = {
    pending: { 
      label: "Order Received", 
      color: "bg-yellow-100 text-yellow-800", 
      icon: Clock,
      description: "We've received your order and will confirm shortly"
    },
    confirmed: { 
      label: "Confirmed", 
      color: "bg-blue-100 text-blue-800", 
      icon: CheckCircle,
      description: "Your order has been confirmed and is being prepared"
    },
    preparing: { 
      label: "Preparing", 
      color: "bg-orange-100 text-orange-800", 
      icon: Clock,
      description: "Our chefs are preparing your delicious fish"
    },
    ready: { 
      label: "Ready for Pickup", 
      color: "bg-green-100 text-green-800", 
      icon: CheckCircle,
      description: "Your order is ready! Come pick it up or we'll deliver soon"
    },
    delivered: { 
      label: "Delivered", 
      color: "bg-green-100 text-green-800", 
      icon: CheckCircle,
      description: "Enjoy your meal! Thank you for choosing Kampala Fried Fish"
    }
  }

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!orderId || !phoneNumber) {
      setError("Please enter both order ID and phone number")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call - in real implementation, this would call your backend
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock order status - replace with actual API call
      const mockOrder: OrderStatus = {
        id: orderId,
        status: 'preparing',
        estimatedTime: '30-45 minutes',
        phoneNumber,
        orderTime: new Date().toLocaleString()
      }
      
      setOrderStatus(mockOrder)
    } catch (err) {
      setError("Order not found. Please check your order ID and phone number.")
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusIcon = (status: keyof typeof statusConfig) => {
    const Icon = statusConfig[status].icon
    return <Icon className="w-5 h-5" />
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Track Your Order</CardTitle>
          <p className="text-center text-muted-foreground">
            Enter your order ID and phone number to check your order status
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTrackOrder} className="space-y-4">
            <div>
              <Label htmlFor="orderId">Order ID</Label>
              <Input
                id="orderId"
                type="text"
                placeholder="e.g., KF-1234567890"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="+256 708 923758"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-orange-600 hover:bg-orange-700"
              disabled={isLoading}
            >
              {isLoading ? "Tracking..." : "Track Order"}
            </Button>
          </form>

          {orderStatus && (
            <div className="mt-8 space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">Order Status</h3>
                <p className="text-sm text-muted-foreground">Order ID: {orderStatus.id}</p>
              </div>

              <div className="flex items-center justify-center">
                <Badge className={`${statusConfig[orderStatus.status].color} px-4 py-2 text-lg`}>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(orderStatus.status)}
                    <span>{statusConfig[orderStatus.status].label}</span>
                  </div>
                </Badge>
              </div>

              <div className="text-center text-muted-foreground">
                <p>{statusConfig[orderStatus.status].description}</p>
                {orderStatus.estimatedTime && (
                  <p className="mt-2 font-medium">
                    Estimated time: {orderStatus.estimatedTime}
                  </p>
                )}
              </div>

              <div className="text-center">
                <Button 
                  variant="outline" 
                  className="mr-2"
                  onClick={() => window.open(`tel:+256708923758`)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open(`https://wa.me/256708923758?text=Hi, I'd like to check on my order ${orderStatus.id}`)}
                >
                  <Truck className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
