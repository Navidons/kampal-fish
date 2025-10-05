"use client"

import { useEffect } from "react"

export function ReviewSchema() {
  useEffect(() => {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Kampala Fried Fish",
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
            "name": "Richard Ssebbowa."
          },
          "datePublished": "2024-01-15",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Absolutely amazing fish! The Olusaniya is perfectly fried and the portions are generous. Best fish in Kampala!"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Muyomba Edison."
          },
          "datePublished": "2024-01-10",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Fresh fish delivered right to our door. The spices are authentic and the fish is always crispy. Highly recommended!"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Maama Muto."
          },
          "datePublished": "2024-01-08",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "reviewBody": "Great fish and excellent service. The family loves the large Lusaniya portion. Perfect for our weekend meals."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mose L."
          },
          "datePublished": "2024-01-05",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Consistently fresh and delicious. The WhatsApp ordering is so convenient. Fish is always hot and crispy when delivered."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sandra N."
          },
          "datePublished": "2024-01-03",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Authentic Ugandan fish preparation. The Nile Perch is always fresh from Lake Victoria. Best fish restaurant in Kabusu!"
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(reviewSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
