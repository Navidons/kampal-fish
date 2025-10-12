import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const products = [
  {
    name: "Small Lusaniya",
    description: "Perfect for 1-2 people. Best fried fish in Kampala - Nile Perch on massive plates, fried to perfection with authentic Ugandan spices.",
    price: "UGX 30,000",
    image: "/fish-with-tomatoes-super-fried002.jpg",
    popular: true,
    fishType: "Nile Perch",
    serving: "1-2 People",
    icon: "👥",
    unitPrice: 30000, // 30,000 UGX per kg
  },
  {
    name: "Medium Lusaniya",
    description: "Ideal for 3-4 people. Premium Olusaniya in Kampala - generous portions of golden fried Nile Perch from Kabusu Market.",
    price: "UGX 60,000",
    image: "/fish-with-tomatoes-super-fried007.jpg",
    popular: true,
    fishType: "Nile Perch",
    serving: "3-4 People",
    icon: "👨‍👩‍👧",
    unitPrice: 30000, // 30,000 UGX per kg
  },
  {
    name: "Large Lusaniya",
    description: "Perfect for families and groups. Best fish delivery in Kampala - massive plates of crispy fried Nile Perch in Rubaga Division.",
    price: "UGX 90,000",
    image: "/fish-with-tomatoes-super-fried001.jpg",
    popular: true,
    fishType: "Nile Perch",
    serving: "5+ People",
    icon: "👨‍👩‍👧‍👦",
    unitPrice: 30000, // 30,000 UGX per kg
  },
]

const customOrders = [
  { weight: "1/2 kg", unitPrice: 30000 },
  { weight: "1 kg", unitPrice: 30000 },
  { weight: "2 kg", unitPrice: 30000 },
  { weight: "4 kg", unitPrice: 30000 },
  { weight: "6 kg", unitPrice: 30000 },
  { weight: "8 kg", unitPrice: 30000 },
]

async function main() {
  console.log('🌱 Seeding products and custom orders...')
  
  // Clear existing data
  await prisma.customOrder.deleteMany()
  await prisma.product.deleteMany()
  console.log('🗑️ Cleared existing data')
  
  // Create products
  for (const product of products) {
    await prisma.product.create({
      data: product
    })
    console.log(`✅ Created product: ${product.name}`)
  }
  
  // Create custom orders
  for (const order of customOrders) {
    await prisma.customOrder.create({
      data: order
    })
    console.log(`✅ Created custom order: ${order.weight}`)
  }
  
  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
