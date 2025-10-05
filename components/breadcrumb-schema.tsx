"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function BreadcrumbSchema() {
  const pathname = usePathname()

  useEffect(() => {
    const getBreadcrumbs = () => {
      const segments = pathname.split('/').filter(Boolean)
      const breadcrumbs = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kampalafriedfish.online"
        }
      ]

      let currentPath = ""
      segments.forEach((segment, index) => {
        currentPath += `/${segment}`
        const position = index + 2
        let name = segment.charAt(0).toUpperCase() + segment.slice(1)
        
        // Customize names for specific pages
        switch (segment) {
          case "order":
            name = "Order"
            break
          case "contact":
            name = "Contact"
            break
          case "about":
            name = "About Us"
            break
          case "track-order":
            name = "Track Order"
            break
          case "how-to-order":
            name = "How to Order"
            break
        }

        breadcrumbs.push({
          "@type": "ListItem",
          "position": position,
          "name": name,
          "item": `https://kampalafriedfish.online${currentPath}`
        })
      })

      return breadcrumbs
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": getBreadcrumbs()
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [pathname])

  return null
}
