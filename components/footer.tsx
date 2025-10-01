import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl">KF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Kampala Fried Fish</h3>
                <p className="text-sm text-background/70">Olusaniya • Premium Fried Fish</p>
              </div>
            </div>
            <p className="text-background/70 text-pretty mb-6">
              Your trusted source for fresh, quality Olusaniya (fried fish on large plates) in Kabusu, Uganda. Serving the community with excellence and
              traditional Ugandan hospitality since 2018.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
              <MessageCircle className="w-5 h-5 text-background/70 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-background/70 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/70 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Product</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-background/70">Empuuta ku Lusaniya</span>
              </li>
              <li>
                <span className="text-background/70">Nile Perch on Massive Plates</span>
              </li>
              <li>
                <span className="text-background/70">Fried to Perfection</span>
              </li>
              <li>
                <span className="text-background/70">Authentic Ugandan Spices</span>
              </li>
              <li>
                <span className="text-background/70">Family Dining Experience</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70">
                  Kabusu Market Area
                  <br />
                  Rubaga Division
                  <br />
                  Central Region, Uganda
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/70">0787 012041 / +256708923758</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-background/70">WhatsApp: +256 708 923758</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/70">info@kampalafriedfish.ug</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/70">
            © 2025 Kampala Fried Fish. All rights reserved. | Proudly serving Kabusu, Uganda with fresh Olusaniya
            excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
