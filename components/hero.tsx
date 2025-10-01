"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const heroImages = [
    {
      image: "/fish-plate-square.webp",
      title: "Empuuta ku Lusaniya",
      subtitle: "Nile Perch on massive plates",
    },
    {
      image: "/hot-fish-rack-landscape.webp",
      title: "Fried to Perfection",
      subtitle: "Golden crispy exterior",
    },
    {
      image: "/hot-spice-fish-rack-portrait.webp",
      title: "Authentic Spices",
      subtitle: "Traditional Ugandan flavors",
    },
    {
      image: "/spiced-fish-plate-square.webp",
      title: "Family Experience",
      subtitle: "Perfect for sharing",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Enhanced Background with Smooth Transitions */}
      <div className="absolute inset-0">
        {heroImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
            aria-label={`${slide.title} - Best Fried Fish in Kampala, Olusaniya, Nile Perch, Kabusu Market, Rubaga Division`}
          />
        ))}
      </div>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-orange-500 scale-125 shadow-lg shadow-orange-500/50" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Main Content with Modern Design */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Rating Badge */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm font-medium">Since 2018</span>
            </div>
          </div>

          {/* Modern Title with Gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Best Fried Fish in Kampala
            </span>
            <br />
            <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Premium Olusaniya - Nile Perch on Massive Plates
            </span>
          </h1>

          {/* Dynamic Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto text-pretty px-4">
            {heroImages[currentSlide].subtitle} - Kabusu Market, Rubaga Division
          </p>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link href="/order">
              <Button 
                size="lg" 
                className="group relative w-full max-w-sm sm:max-w-none bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            
            <Link href="/#products">
              <Button
                size="lg"
                variant="outline"
                className="group w-full max-w-sm sm:max-w-none border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold rounded-2xl bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                View Product
              </Button>
            </Link>
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="md:hidden mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
              <span className="text-xs text-gray-300">Swipe to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
