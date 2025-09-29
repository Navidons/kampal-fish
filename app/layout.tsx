import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kampala Fried Fish - Premium Olusaniya | Kabusu",
  description:
    "Premium Olusaniya (fried fish on large plates) delivery in Kabusu. Fresh fish, whole and parts. Family tables available. Order online for fast delivery.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
