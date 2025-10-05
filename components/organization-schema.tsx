"use client"

import { useEffect } from "react"

export function OrganizationSchema() {
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kampala Fried Fish",
      "alternateName": "Olusaniya Kampala",
      "url": "https://kampalafriedfish.online",
      "logo": "https://kampalafriedfish.online/kampala-fried-fish-logo-removed-bg.png",
      "description": "Best fried fish in Kampala! Premium Olusaniya (Nile Perch on massive plates) delivery in Kabusu, Rubaga Division. Fresh fish, authentic Ugandan spices, family dining since 2018.",
      "foundingDate": "2018",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kabusu Market Area",
        "addressLocality": "Rubaga Division",
        "addressRegion": "Central Region",
        "addressCountry": "UG"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+256792460182",
          "contactType": "customer service",
          "availableLanguage": ["English", "Luganda"],
          "areaServed": "UG",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "06:00",
            "closes": "24:00"
          }
        },
        {
          "@type": "ContactPoint",
          "telephone": "+256757159282",
          "contactType": "customer service",
          "availableLanguage": ["English", "Luganda"],
          "areaServed": "UG"
        }
      ],
      "email": "Kffug@gmail.com",
      "sameAs": [
        "https://wa.me/256792460182",
        "https://kampalafriedfish.online"
      ],
      "knowsAbout": [
        "Fried Fish",
        "Nile Perch",
        "Ugandan Cuisine",
        "Olusaniya",
        "Fish Delivery",
        "Kabusu Market"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Kampala",
        "containedInPlace": {
          "@type": "Country",
          "name": "Uganda"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kampala Fried Fish Menu",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Small Lusaniya",
              "description": "Perfect for 1-2 people"
            },
            "price": "30000",
            "priceCurrency": "UGX"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Medium Lusaniya",
              "description": "Ideal for 3-4 people"
            },
            "price": "60000",
            "priceCurrency": "UGX"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Large Lusaniya",
              "description": "Perfect for families and groups"
            },
            "price": "90000",
            "priceCurrency": "UGX"
          }
        ]
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(organizationSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
