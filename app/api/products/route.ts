import { NextResponse } from 'next/server'
import { products } from '@/lib/products-data'

export async function GET() {
  return NextResponse.json(products)
}

export async function POST() {
  return NextResponse.json(
    { error: 'Product creation is not available' },
    { status: 501 }
  )
}
