"use client"

import { useEffect } from "react"

export function FAQSchema() {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Olusaniya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Olusaniya is our signature dish - Nile Perch fried to perfection and served on massive plates. It's a traditional Ugandan way of serving fish that's perfect for sharing with family and friends."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Kampala Fried Fish located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are located in Kabusu Market Area, Rubaga Division, Central Region, Uganda. We serve the greater Kampala area with fresh fish delivery."
          }
        },
        {
          "@type": "Question",
          "name": "What types of fish do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in Nile Perch, which we source fresh from Uganda's pristine waters including Lake Victoria. All our fish is fried to perfection with authentic Ugandan spices."
          }
        },
        {
          "@type": "Question",
          "name": "How can I place an order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can place an order by calling us at +256 792 460182, visiting our order page on the website, or contacting us via WhatsApp. We offer both pickup and delivery services."
          }
        },
        {
          "@type": "Question",
          "name": "What are your operating hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open daily from early morning to midnight, seven days a week. We serve fresh fish throughout the day to ensure you get the best quality."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer delivery services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer delivery services throughout Kampala, especially in Kabusu, Rubaga Division, and surrounding areas. Contact us via WhatsApp or phone to arrange delivery."
          }
        },
        {
          "@type": "Question",
          "name": "What payment methods do you accept?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept cash payments and mobile money transfers. Payment can be made upon delivery or pickup. Contact us for specific payment arrangements."
          }
        },
        {
          "@type": "Question",
          "name": "How fresh is your fish?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our fish is sourced fresh from Lake Victoria and other pristine Ugandan waters. We prepare and fry the fish daily to ensure maximum freshness and quality."
          }
        },
        {
          "@type": "Question",
          "name": "Can I customize my order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We offer custom orders by weight (1/2 kg to 8 kg) and can accommodate special requests. Contact us via WhatsApp to discuss your specific needs."
          }
        },
        {
          "@type": "Question",
          "name": "What makes your fish special?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our fish is fried to perfection using traditional Ugandan spices and cooking methods. We use only the freshest Nile Perch and serve it on massive plates (Lusaniya style) for an authentic experience."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have vegetarian options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in fresh fish dishes. However, we can provide fresh vegetables and accompaniments. Please contact us to discuss available options."
          }
        },
        {
          "@type": "Question",
          "name": "How long does delivery take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Delivery time varies by location within Kampala. Generally, we aim for 30-60 minutes depending on distance and current orders. We'll provide an estimated time when you place your order."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer delivery services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer delivery services throughout Kampala. Contact us to check if we deliver to your area and to get delivery time estimates."
          }
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(faqSchema)
    script.id = 'faq-schema'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('faq-schema')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}
