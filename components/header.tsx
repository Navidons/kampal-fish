"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 touch-target">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">KF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-foreground">Kampala Fish</h1>
              <p className="text-xs text-muted-foreground">Olusaniya • Premium Fish • Uganda</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </a>
            <Link href="/menu" className="text-foreground hover:text-primary transition-colors font-medium">
              Menu
            </Link>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="hidden lg:inline">Kabusu, Uganda</span>
            </div>
            <Link href="/order" className="hidden sm:block">
              <Button className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 h-10 px-4">
                <Phone className="w-4 h-4 mr-1" />
                <span className="hidden md:inline">Order Now</span>
                <span className="md:hidden">Order</span>
              </Button>
            </Link>
            <button
              className="lg:hidden touch-target p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-1 mt-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 touch-target rounded-lg hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#products"
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 touch-target rounded-lg hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <Link
                href="/menu"
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 touch-target rounded-lg hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 touch-target rounded-lg hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 touch-target rounded-lg hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-medium py-3 px-2 touch-target rounded-lg hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2">
                <Link href="/order" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-primary hover:bg-primary/90 w-full h-12 text-base font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
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
