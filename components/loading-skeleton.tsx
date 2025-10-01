"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function ProductSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-gray-200 animate-pulse" />
      <CardHeader>
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
        </div>
        <div className="h-10 bg-gray-200 rounded animate-pulse mt-4" />
      </CardContent>
    </Card>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen bg-gray-200 animate-pulse flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="h-16 bg-gray-300 rounded animate-pulse w-96 mx-auto" />
        <div className="h-8 bg-gray-300 rounded animate-pulse w-64 mx-auto" />
        <div className="h-12 bg-gray-300 rounded animate-pulse w-48 mx-auto" />
      </div>
    </div>
  )
}

export function OrderFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-8 bg-gray-200 rounded animate-pulse w-48" />
      <div className="space-y-4">
        <div className="h-12 bg-gray-200 rounded animate-pulse" />
        <div className="h-12 bg-gray-200 rounded animate-pulse" />
        <div className="h-12 bg-gray-200 rounded animate-pulse" />
        <div className="h-24 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="h-12 bg-gray-200 rounded animate-pulse" />
    </div>
  )
}
