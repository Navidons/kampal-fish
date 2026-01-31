import { NextResponse } from 'next/server'
import { getCustomOrdersFromFirestore } from '@/lib/firestore-products'
import { customOrders } from '@/lib/products-data'

export async function GET() {
  const firestoreOrders = await getCustomOrdersFromFirestore()
  const data = firestoreOrders ?? customOrders
  return NextResponse.json(data)
}

export async function POST() {
  return NextResponse.json(
    { error: 'Custom order creation is not available' },
    { status: 501 }
  )
}
