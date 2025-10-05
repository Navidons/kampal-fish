"use client"

import { useEffect } from "react"

export function StructuredData() {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": "https://kampalafriedfish.online/#restaurant",
      "name": "Kampala Fried Fish",
      "alternateName": "Olusaniya Kampala",
      "description": "Best fried fish in Kampala! Premium Olusaniya (Nile Perch on massive plates) delivery in Kabusu, Rubaga Division. Fresh fish, authentic Ugandan spices, family dining since 2018.",
      "url": "https://kampalafriedfish.online",
      "logo": "https://kampalafriedfish.online/kampala-fried-fish-logo-removed-bg.png",
      "image": [
        "https://kampalafriedfish.online/fish-with-tomatoes-super-fried10.jpg",
        "https://kampalafriedfish.online/fish-with-tomatoes-super-fried001.jpg",
        "https://kampalafriedfish.online/fish-with-tomatoes-super-fried002.jpg",
        "https://kampalafriedfish.online/fish-with-tomatoes-super-fried007.jpg",
        "https://kampalafriedfish.online/fish-with-tomatoes-super-fried-ovacado.jpg"
      ],
      "telephone": "+256792460182",
      "email": "Kffug@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kabusu Market Area",
        "addressLocality": "Rubaga Division",
        "addressRegion": "Central Region",
        "addressCountry": "UG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "0.3163",
        "longitude": "32.5822"
      },
      "openingHours": "Mo-Su 06:00-24:00",
      "priceRange": "$$",
      "servesCuisine": ["Ugandan", "African", "Seafood"],
      "hasMenu": "https://kampalafriedfish.online/#products",
      "acceptsReservations": true,
      "paymentAccepted": ["Cash", "Mobile Money"],
      "currenciesAccepted": "UGX",
      "foundingDate": "2018",
      "areaServed": {
        "@type": "City",
        "name": "Kampala",
        "containedInPlace": {
          "@type": "Country",
          "name": "Uganda"
        }
      },
      "sameAs": [
        "https://www.facebook.com/kampalafriedfish",
        "https://www.instagram.com/kampalafriedfish",
        "https://wa.me/256792460182"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sandra N."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Best fried fish in Kampala! The Olusaniya is absolutely delicious and the portions are generous. Highly recommended!"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Muyomba Edison."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Authentic Ugandan fish experience. The Nile Perch is fresh and perfectly fried. Great family restaurant!"
        }
      ]
    }

    // Food Establishment Schema
    const foodEstablishmentSchema = {
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      "name": "Kampala Fried Fish",
      "description": "Premium Olusaniya (fried fish on large plates) restaurant in Kabusu, Kampala",
      "url": "https://kampalafriedfish.online",
      "telephone": "+256792460182",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kabusu Market Area",
        "addressLocality": "Rubaga Division",
        "addressRegion": "Central Region",
        "addressCountry": "UG"
      },
      "servesCuisine": ["Ugandan", "African", "Seafood"],
      "hasMenu": {
        "@type": "Menu",
        "name": "Olusaniya Menu",
        "description": "Premium fried fish menu",
        "hasMenuSection": [
          {
            "@type": "MenuSection",
            "name": "Olusaniya Specials",
            "description": "Our signature fried fish dishes",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Small Lusaniya",
                "description": "Perfect for 1-2 people. Nile Perch on massive plates, fried to perfection.",
                "offers": {
                  "@type": "Offer",
                  "price": "30000",
                  "priceCurrency": "UGX"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Medium Lusaniya",
                "description": "Ideal for 3-4 people. Generous portions of golden fried Nile Perch.",
                "offers": {
                  "@type": "Offer",
                  "price": "60000",
                  "priceCurrency": "UGX"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Large Lusaniya",
                "description": "Perfect for families and groups. Massive plates of crispy fried Nile Perch.",
                "offers": {
                  "@type": "Offer",
                  "price": "90000",
                  "priceCurrency": "UGX"
                }
              }
            ]
          }
        ]
      }
    }

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kampala Fried Fish",
      "alternateName": "Olusaniya Kampala",
      "url": "https://kampalafriedfish.online",
      "logo": "https://kampalafriedfish.online/kampala-fried-fish-logo-removed-bg.png",
      "description": "Best fried fish in Kampala! Premium Olusaniya (Nile Perch on massive plates) delivery in Kabusu, Rubaga Division.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kabusu Market Area",
        "addressLocality": "Rubaga Division",
        "addressRegion": "Central Region",
        "addressCountry": "UG"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+256792460182",
        "contactType": "customer service",
        "availableLanguage": ["English", "Luganda"]
      },
      "sameAs": [
        "https://www.facebook.com/kampalafriedfish",
        "https://www.instagram.com/kampalafriedfish",
        "https://wa.me/256792460182"
      ],
      "foundingDate": "2018",
      "areaServed": {
        "@type": "City",
        "name": "Kampala"
      }
    }

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kampalafriedfish.online"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://kampalafriedfish.online/#products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Order",
          "item": "https://kampalafriedfish.online/order"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://kampalafriedfish.online/contact"
        }
      ]
    }

    // Add all schemas to the page
    const schemas = [
      localBusinessSchema,
      foodEstablishmentSchema,
      organizationSchema,
      breadcrumbSchema
    ]

    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      script.id = `structured-data-${index}`
      document.head.appendChild(script)
    })

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`)
        if (script) {
          script.remove()
        }
      })
    }
  }, [])

  return null
}
