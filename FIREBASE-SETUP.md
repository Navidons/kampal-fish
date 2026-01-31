# Firebase Admin setup

The project uses Firebase (Firestore / Storage) with the service account file you added.

## 1. Keep the key file private

The file `*firebase*adminsdk*.json` is in `.gitignore`. **Do not commit it.**

## 2. Local development

Point the environment to your service account JSON:

**Option A – env file (recommended)**  
Create or edit `.env.local` in the project root:

```env
GOOGLE_APPLICATION_CREDENTIALS=./kampalafriedfish-d8e96-firebase-adminsdk-fbsvc-ed7cde8ad0.json
```

Use a path relative to the project root, or an absolute path.

**Option B – system env**  
Set the same variable in your shell or system environment.

## 3. Production (e.g. Vercel)

Do not upload the JSON file. Use environment variables instead:

- `FIREBASE_PROJECT_ID` – from the JSON `project_id`
- `FIREBASE_CLIENT_EMAIL` – from the JSON `client_email`
- `FIREBASE_PRIVATE_KEY` – from the JSON `private_key` (keep the `\n` line breaks as in the file, or use `\\n` in the env value)

Set these in your host’s dashboard (e.g. Vercel → Project → Settings → Environment Variables).

## 4. Using Firestore / Storage in code

```ts
import { getAdminFirestore, getAdminStorage } from '@/lib/firebase-admin'

const db = getAdminFirestore()
const bucket = getAdminStorage().bucket()
```

Install the Admin SDK if needed: `pnpm add firebase-admin`
