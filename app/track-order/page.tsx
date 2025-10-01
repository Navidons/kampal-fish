import { OrderTracking } from "@/components/order-tracking"

export default function TrackOrderPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Track Your Order
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check the status of your Kampala Fried Fish order in real-time
          </p>
        </div>
        
        <OrderTracking />
      </div>
    </main>
  )
}
