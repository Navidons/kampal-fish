import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const customOrders = await prisma.customOrder.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    // Calculate prices based on unit price
    const ordersWithPrices = customOrders.map(order => {
      const weightInKg = parseWeightToKg(order.weight)
      const totalPrice = weightInKg * order.unitPrice
      
      return {
        ...order,
        price: `UGX ${totalPrice.toLocaleString()}`
      }
    })
    
    return NextResponse.json(ordersWithPrices)
  } catch (error) {
    console.error('Error fetching custom orders:', error)
    return NextResponse.json(
      { error: 'Failed to fetch custom orders' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { weight, unitPrice } = body
    
    const customOrder = await prisma.customOrder.create({
      data: {
        weight,
        unitPrice
      }
    })
    
    return NextResponse.json(customOrder, { status: 201 })
  } catch (error) {
    console.error('Error creating custom order:', error)
    return NextResponse.json(
      { error: 'Failed to create custom order' },
      { status: 500 }
    )
  }
}

// Helper function to parse weight string to kg
function parseWeightToKg(weight: string): number {
  if (weight.includes('1/2')) return 0.5
  if (weight.includes('1 kg')) return 1
  if (weight.includes('2 kg')) return 2
  if (weight.includes('4 kg')) return 4
  if (weight.includes('6 kg')) return 6
  if (weight.includes('8 kg')) return 8
  
  // Extract number from string (fallback)
  const match = weight.match(/(\d+(?:\.\d+)?)/)
  return match ? parseFloat(match[1]) : 1
}
