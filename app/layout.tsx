import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactFormButton } from "@/components/contact-form-button"
import { InstallPrompt } from "@/components/install-prompt"
import { PWARegistration } from "@/components/pwa-registration"
import { StructuredData } from "@/components/structured-data"
import { SEOHead } from "@/components/seo-head"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Kampala Fried Fish - Best Olusaniya in Kampala | Kabusu Market",
    template: "%s | Kampala Fried Fish - Best Olusaniya in Kampala"
  },
  description: "Best fried fish in Kampala! Premium Olusaniya (Nile Perch on massive plates) delivery in Kabusu, Rubaga Division. Fresh fish, authentic Ugandan spices, family dining since 2018. Order now!",
  keywords: [
    "fried fish kampala",
    "olusaniya kampala",
    "nile perch kampala",
    "fish delivery kampala",
    "kabusu fish market",
    "rubaga fish restaurant",
    "best fried fish in kampala",
    "kampala fish takeaway",
    "uganda fish restaurant",
    "kampala fish delivery"
  ],
  authors: [{ name: "Kampala Fried Fish" }],
  creator: "Kampala Fried Fish",
  publisher: "Kampala Fried Fish",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://kampalafriedfish.ug",
  },
  category: "Food & Restaurant",
  classification: "Restaurant",
  generator: "Next.js",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kampala Fried Fish",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://kampalafriedfish.ug",
    siteName: "Kampala Fried Fish",
    title: "Kampala Fried Fish - Best Olusaniya in Kampala | Kabusu Market",
    description: "Best fried fish in Kampala! Premium Olusaniya (Nile Perch on massive plates) delivery in Kabusu, Rubaga Division. Fresh fish, authentic Ugandan spices, family dining since 2018.",
    images: [
      {
        url: "/fish-plate-square.webp",
        width: 1200,
        height: 630,
        alt: "Kampala Fried Fish - Premium Olusaniya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampala Fried Fish - Best Olusaniya in Kampala",
    description: "Best fried fish in Kampala! Premium Olusaniya (Nile Perch on massive plates) delivery in Kabusu, Rubaga Division.",
    images: ["/fish-plate-square.webp"],
    creator: "@kampalafriedfish",
  },
  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#f97316",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kampala Fried Fish" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <ContactFormButton />
        <WhatsAppButton />
        <InstallPrompt />
        <PWARegistration />
        <StructuredData />
        <SEOHead />
        <Analytics />
      </body>
    </html>
  )
}
