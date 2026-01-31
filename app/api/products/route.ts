import { NextResponse } from 'next/server'
import { getProductsFromFirestore } from '@/lib/firestore-products'
import { products } from '@/lib/products-data'

export async function GET() {
  const firestoreProducts = await getProductsFromFirestore()
  const data = firestoreProducts ?? products
  return NextResponse.json(data)
}

export async function POST() {
  return NextResponse.json(
    { error: 'Product creation is not available' },
    { status: 501 }
  )
}
