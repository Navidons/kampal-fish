import dotenv from 'dotenv'
import admin from 'firebase-admin'

dotenv.config()

const products = [
  { id: 1, name: 'Small Lusaniya', description: 'Perfect for 1-2 people. Best fried fish in Kampala - Nile Perch on massive plates, fried to perfection with authentic Ugandan spices.', price: 'UGX 30,000', image: '/fish-with-tomatoes-super-fried002.jpg', popular: true, fishType: 'Nile Perch', serving: '1-2 People', icon: '👥', unitPrice: 30000 },
  { id: 2, name: 'Medium Lusaniya', description: 'Ideal for 3-4 people. Premium Olusaniya in Kampala - generous portions of golden fried Nile Perch from Kabusu Market.', price: 'UGX 60,000', image: '/fish-with-tomatoes-super-fried007.jpg', popular: true, fishType: 'Nile Perch', serving: '3-4 People', icon: '👨‍👩‍👧', unitPrice: 30000 },
  { id: 3, name: 'Large Lusaniya', description: 'Perfect for families and groups. Best fish delivery in Kampala - massive plates of crispy fried Nile Perch in Rubaga Division.', price: 'UGX 90,000', image: '/fish-with-tomatoes-super-fried001.jpg', popular: true, fishType: 'Nile Perch', serving: '5+ People', icon: '👨‍👩‍👧‍👦', unitPrice: 30000 },
]

const customOrdersRaw = [
  { id: 1, weight: '1/2 kg', unitPrice: 30000 },
  { id: 2, weight: '1 kg', unitPrice: 30000 },
  { id: 3, weight: '2 kg', unitPrice: 30000 },
  { id: 4, weight: '4 kg', unitPrice: 30000 },
  { id: 5, weight: '6 kg', unitPrice: 30000 },
  { id: 6, weight: '8 kg', unitPrice: 30000 },
]

function parseWeightToKg(weight) {
  if (weight.includes('1/2')) return 0.5
  if (weight.includes('1 kg')) return 1
  if (weight.includes('2 kg')) return 2
  if (weight.includes('4 kg')) return 4
  if (weight.includes('6 kg')) return 6
  if (weight.includes('8 kg')) return 8
  const match = weight.match(/(\d+(?:\.\d+)?)/)
  return match ? parseFloat(match[1]) : 1
}

const customOrders = customOrdersRaw.map((order) => {
  const weightInKg = parseWeightToKg(order.weight)
  const totalPrice = weightInKg * order.unitPrice
  return { ...order, price: `UGX ${totalPrice.toLocaleString()}` }
})

function initFirebase() {
  if (admin.apps.length > 0) return admin.app()
  const path = process.env.GOOGLE_APPLICATION_CREDENTIALS
  if (path) {
    return admin.initializeApp({ credential: admin.credential.applicationDefault() })
  }
  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Set GOOGLE_APPLICATION_CREDENTIALS or FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY in .env')
  }
  return admin.initializeApp({
    credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
  })
}

async function seed() {
  console.log('Seeding Firestore...')
  initFirebase()
  const db = admin.firestore()

  const productsCol = db.collection('products')
  for (const p of products) {
    await productsCol.doc(String(p.id)).set(p)
    console.log('  product:', p.name)
  }

  const ordersCol = db.collection('customOrders')
  for (const o of customOrders) {
    await ordersCol.doc(String(o.id)).set(o)
    console.log('  custom order:', o.weight, o.price)
  }

  console.log('Done. Products and custom orders are in Firestore.')
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
