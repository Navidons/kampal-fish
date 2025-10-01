"use client"

import { useEffect } from "react"

export function StructuredData() {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": "https://kampalafriedfish.ug/#restaurant",
      "name": "Kampala Fried Fish",
      "alternateName": "Olusaniya Kampala",
      "description": "Best fried fish in Kampala! Premium Olusaniya (Nile Perch on massive plates) delivery in Kabusu, Rubaga Division. Fresh fish, authentic Ugandan spices, family dining since 2018.",
      "url": "https://kampalafriedfish.ug",
      "logo": "https://kampalafriedfish.ug/kampala-fried-fish-logo-removed-bg.png",
      "image": [
        "https://kampalafriedfish.ug/fish-plate-square.webp",
        "https://kampalafriedfish.ug/hot-fish-rack-landscape.webp",
        "https://kampalafriedfish.ug/spiced-fish-plate-square.webp"
      ],
      "telephone": "+256708923758",
      "email": "info@kampalafriedfish.ug",
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
      "openingHours": "Mo-Su 08:00-22:00",
      "priceRange": "$$",
      "servesCuisine": ["Ugandan", "African", "Seafood"],
      "hasMenu": "https://kampalafriedfish.ug/#products",
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
        "https://wa.me/256708923758"
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
            "name": "Sarah M."
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
      "url": "https://kampalafriedfish.ug",
      "telephone": "+256708923758",
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
                  "price": "18000",
                  "priceCurrency": "UGX"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Medium Lusaniya",
                "description": "Ideal for 3-4 people. Generous portions of golden fried Nile Perch.",
                "offers": {
                  "@type": "Offer",
                  "price": "28000",
                  "priceCurrency": "UGX"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Large Lusaniya",
                "description": "Perfect for families and groups. Massive plates of crispy fried Nile Perch.",
                "offers": {
                  "@type": "Offer",
                  "price": "38000",
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
      "url": "https://kampalafriedfish.ug",
      "logo": "https://kampalafriedfish.ug/kampala-fried-fish-logo-removed-bg.png",
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
        "telephone": "+256708923758",
        "contactType": "customer service",
        "availableLanguage": ["English", "Luganda"]
      },
      "sameAs": [
        "https://www.facebook.com/kampalafriedfish",
        "https://www.instagram.com/kampalafriedfish",
        "https://wa.me/256708923758"
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
          "item": "https://kampalafriedfish.ug"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://kampalafriedfish.ug/#products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Order",
          "item": "https://kampalafriedfish.ug/order"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://kampalafriedfish.ug/contact"
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
