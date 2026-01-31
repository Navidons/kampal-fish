import {
  getApps,
  initializeApp,
  type App,
  cert,
  applicationDefault,
  type ServiceAccount,
} from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

const projectId = 'kampalafriedfish-d8e96'

function getFirebaseAdmin(): App {
  const existing = getApps().find((app: App) => app.name === '[DEFAULT]')
  if (existing) return existing

  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  const hasEnvCreds =
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY

  if (credentialsPath) {
    return initializeApp({
      projectId,
      credential: applicationDefault(),
    })
  }

  if (hasEnvCreds) {
    const serviceAccount: ServiceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }
    return initializeApp({ projectId, credential: cert(serviceAccount) })
  }

  throw new Error(
    'Firebase Admin: set GOOGLE_APPLICATION_CREDENTIALS to the path of your service account JSON, or set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in .env'
  )
}

let adminApp: App | null = null

export function getAdminApp(): App {
  if (!adminApp) adminApp = getFirebaseAdmin()
  return adminApp
}

export function getAdminFirestore() {
  return getFirestore(getAdminApp())
}

export function getAdminStorage() {
  return getStorage(getAdminApp())
}
