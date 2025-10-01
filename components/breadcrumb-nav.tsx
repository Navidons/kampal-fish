"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export function BreadcrumbNav() {
  const pathname = usePathname()

  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean)
    const breadcrumbs = [
      { name: 'Home', href: '/', current: pathname === '/' }
    ]

    let currentPath = ''
    paths.forEach((path, index) => {
      currentPath += `/${path}`
      const isLast = index === paths.length - 1
      
      let name = path.charAt(0).toUpperCase() + path.slice(1)
      
      // Customize names for specific routes
      if (path === 'order') name = 'Order'
      if (path === 'contact') name = 'Contact'
      if (path === 'about') name = 'About'
      if (path === 'how-to-order') name = 'How to Order'

      breadcrumbs.push({
        name,
        href: currentPath,
        current: isLast
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              
              {breadcrumb.current ? (
                <span className="text-gray-900 font-medium flex items-center">
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {breadcrumb.name}
                </span>
              ) : (
                <Link 
                  href={breadcrumb.href}
                  className="text-gray-600 hover:text-orange-600 transition-colors flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
