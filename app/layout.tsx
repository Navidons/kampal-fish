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
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { FAQSchema } from "@/components/faq-schema"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ProductSchema } from "@/components/product-schema"
import { ReviewSchema } from "@/components/review-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { OrganizationSchema } from "@/components/organization-schema"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://kampalafriedfish.online'),
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
    "kampala fish delivery",
    "fresh fish kampala",
    "fish restaurant kampala",
    "kampala seafood",
    "ugandan fish dishes",
    "lake victoria fish",
    "fish and chips kampala",
    "kampala fish menu",
    "fish delivery service kampala",
    "traditional ugandan fish",
    "kampala fish prices"
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
    canonical: "https://kampalafriedfish.online",
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
    url: "https://kampalafriedfish.online",
    siteName: "Kampala Fried Fish",
    title: "Kampala Fried Fish - Best Olusaniya in Kampala | Kabusu Market",
    description: "Best fried fish in Kampala! Premium Olusaniya (Nile Perch on massive plates) delivery in Kabusu, Rubaga Division. Fresh fish, authentic Ugandan spices, family dining since 2018.",
    images: [
      {
        url: "/fish-with-tomatoes-super-fried10.jpg",
        width: 1200,
        height: 630,
        alt: "Kampala Fried Fish - Premium Olusaniya with Tomatoes",
      },
      {
        url: "/fish-with-tomatoes-super-fried001.jpg",
        width: 1200,
        height: 630,
        alt: "Large Lusaniya - Family Size Fried Fish",
      },
      {
        url: "/fish-with-tomatoes-super-fried-ovacado.jpg",
        width: 1200,
        height: 630,
        alt: "Fresh Fish with Avocado - Healthy Option",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampala Fried Fish - Best Olusaniya in Kampala",
    description: "Best fried fish in Kampala! Premium Olusaniya (Nile Perch on massive plates) delivery in Kabusu, Rubaga Division.",
    images: ["/fish-with-tomatoes-super-fried10.jpg"],
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
    google: "google8226a6f5ec1e05d6",
    yandex: "90993c6596863023",
    other: {
      "msvalidate.01": "F28096D64E8C1368F12E8802EBB6C455"
    }
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
        
        {/* Favicons for all browsers and devices */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
        
        {/* PWA Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="msapplication-TileImage" content="/icon-192x192.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <ContactFormButton />
        <WhatsAppButton />
        <InstallPrompt />
        <PWARegistration />
        <StructuredData />
        <SEOHead />
        <MobileBottomNav />
        <FAQSchema />
        <BreadcrumbNav />
        <ProductSchema />
        <ReviewSchema />
        <BreadcrumbSchema />
        <OrganizationSchema />
        <Analytics />
      </body>
    </html>
  )
}
