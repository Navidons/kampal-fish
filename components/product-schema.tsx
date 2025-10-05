"use client"

import { useEffect } from "react"

export function ProductSchema() {
  useEffect(() => {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Kampala Fried Fish Menu",
      "description": "Premium Olusaniya (Nile Perch) sizes and custom orders",
      "url": "https://kampalafriedfish.online/#products",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Small Lusaniya",
          "description": "Perfect for 1-2 people. Best fried fish in Kampala - Nile Perch on massive plates, fried to perfection with authentic Ugandan spices.",
          "image": "https://kampalafriedfish.online/fish-with-tomatoes-super-fried002.jpg",
          "brand": {
            "@type": "Brand",
            "name": "Kampala Fried Fish"
          },
          "offers": {
            "@type": "Offer",
            "price": "30000",
            "priceCurrency": "UGX",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Kampala Fried Fish"
            },
            "priceValidUntil": "2025-12-31"
          },
          "category": "Food",
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Serving Size",
              "value": "1-2 People"
            },
            {
              "@type": "PropertyValue",
              "name": "Fish Type",
              "value": "Nile Perch"
            },
            {
              "@type": "PropertyValue",
              "name": "Preparation",
              "value": "Fried"
            }
          ]
        },
        {
          "@type": "Product",
          "name": "Medium Lusaniya",
          "description": "Ideal for 3-4 people. Premium Olusaniya in Kampala - generous portions of golden fried Nile Perch from Kabusu Market.",
          "image": "https://kampalafriedfish.online/fish-with-tomatoes-super-fried007.jpg",
          "brand": {
            "@type": "Brand",
            "name": "Kampala Fried Fish"
          },
          "offers": {
            "@type": "Offer",
            "price": "60000",
            "priceCurrency": "UGX",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Kampala Fried Fish"
            },
            "priceValidUntil": "2025-12-31"
          },
          "category": "Food",
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Serving Size",
              "value": "3-4 People"
            },
            {
              "@type": "PropertyValue",
              "name": "Fish Type",
              "value": "Nile Perch"
            },
            {
              "@type": "PropertyValue",
              "name": "Preparation",
              "value": "Fried"
            }
          ]
        },
        {
          "@type": "Product",
          "name": "Large Lusaniya",
          "description": "Perfect for families and groups. Best fish delivery in Kampala - massive plates of crispy fried Nile Perch in Rubaga Division.",
          "image": "https://kampalafriedfish.online/fish-with-tomatoes-super-fried001.jpg",
          "brand": {
            "@type": "Brand",
            "name": "Kampala Fried Fish"
          },
          "offers": {
            "@type": "Offer",
            "price": "90000",
            "priceCurrency": "UGX",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Kampala Fried Fish"
            },
            "priceValidUntil": "2025-12-31"
          },
          "category": "Food",
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Serving Size",
              "value": "5+ People"
            },
            {
              "@type": "PropertyValue",
              "name": "Fish Type",
              "value": "Nile Perch"
            },
            {
              "@type": "PropertyValue",
              "name": "Preparation",
              "value": "Fried"
            }
          ]
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(productSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
