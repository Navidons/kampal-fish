"use client"

import { Home, ShoppingCart, Phone, User, Menu, Package } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MobileBottomNav() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/"
    },
    {
      href: "/#products",
      label: "Products",
      icon: ShoppingCart,
      active: pathname.includes("products") || pathname === "/"
    },
    {
      href: "/order",
      label: "Order",
      icon: Menu,
      active: pathname === "/order"
    },
    {
      href: "tel:+256708923758",
      label: "Call",
      icon: Phone,
      active: false
    },
    {
      href: "/track-order",
      label: "Track",
      icon: Package,
      active: pathname === "/track-order"
    }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 md:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 min-w-0 flex-1",
                item.active
                  ? "text-orange-600 bg-orange-50"
                  : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 mb-1 transition-all duration-200",
                item.active ? "scale-110" : "scale-100"
              )} />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
