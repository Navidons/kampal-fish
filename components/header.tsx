"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin, Fish, Star } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="relative">
              <img 
                src="/kampala-fried-fish-logo-removed-bg.png" 
                alt="Kampala Fried Fish Logo - Best Fried Fish in Kampala, Olusaniya, Nile Perch, Kabusu Market, Rubaga Division" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-all duration-300"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                Kampala Fried Fish
              </h1>
              <p className="text-xs text-gray-600 font-medium">
                Olusaniya • Premium Fried Fish • Uganda
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Location - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="hidden lg:inline font-medium">Kabusu, Uganda</span>
            </div>

            {/* Order Button - Always visible but smaller on mobile */}
            <Link href="/order" className="block">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-9 md:h-11 px-3 md:px-6 rounded-full font-semibold group text-sm md:text-base">
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Order Now</span>
                <span className="sm:hidden">Order</span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link href="/order" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 text-base font-semibold rounded-lg shadow-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Order Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
