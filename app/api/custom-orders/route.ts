import { NextResponse } from 'next/server'
import { customOrders } from '@/lib/products-data'

export async function GET() {
  return NextResponse.json(customOrders)
}

export async function POST() {
  return NextResponse.json(
    { error: 'Custom order creation is not available' },
    { status: 501 }
  )
}
