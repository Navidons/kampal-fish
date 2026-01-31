import { getAdminFirestore } from '@/lib/firebase-admin'

const PRODUCTS_COLLECTION = 'products'
const CUSTOM_ORDERS_COLLECTION = 'customOrders'

export interface FirestoreProduct {
  id: number
  name: string
  description: string
  price: string
  image: string
  popular: boolean
  fishType: string
  serving: string
  icon: string
  unitPrice: number
}

export interface FirestoreCustomOrder {
  id: number
  weight: string
  unitPrice: number
  price: string
}

export async function getProductsFromFirestore(): Promise<FirestoreProduct[] | null> {
  try {
    const db = getAdminFirestore()
    const snapshot = await db.collection(PRODUCTS_COLLECTION).get()
    if (snapshot.empty) return null
    const products = snapshot.docs
      .map((doc: { data: () => Record<string, unknown> }) => {
        const d = doc.data()
        return {
          id: d.id as number,
          name: d.name as string,
          description: d.description as string,
          price: d.price as string,
          image: d.image as string,
          popular: d.popular as boolean,
          fishType: d.fishType as string,
          serving: d.serving as string,
          icon: d.icon as string,
          unitPrice: d.unitPrice as number,
        }
      })
      .sort((a: FirestoreProduct, b: FirestoreProduct) => a.id - b.id)
    return products.length ? products : null
  } catch {
    return null
  }
}

export async function getCustomOrdersFromFirestore(): Promise<FirestoreCustomOrder[] | null> {
  try {
    const db = getAdminFirestore()
    const snapshot = await db.collection(CUSTOM_ORDERS_COLLECTION).get()
    if (snapshot.empty) return null
    const orders = snapshot.docs
      .map((doc: { data: () => Record<string, unknown> }) => {
        const d = doc.data()
        return {
          id: d.id as number,
          weight: d.weight as string,
          unitPrice: d.unitPrice as number,
          price: d.price as string,
        }
      })
      .sort((a: FirestoreCustomOrder, b: FirestoreCustomOrder) => a.id - b.id)
    return orders.length ? orders : null
  } catch {
    return null
  }
}

export { PRODUCTS_COLLECTION, CUSTOM_ORDERS_COLLECTION }
