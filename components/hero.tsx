"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const heroImages = [
    {
      image: "/fried-fish-golden-brown-nigerian-cuisine.jpg",
      title: "Golden Fried Fish Perfection",
      subtitle: "Crispy, creamy, and delicious",
    },
    {
      image: "/grilled-nile-perch-on-wooden-tray-ugandan-style.jpg",
      title: "Happy Customers Enjoying Our Olusaniya",
      subtitle: "Fresh from our kitchen to your table",
    },
    {
      image: "/fried-tilapia-golden-brown-ugandan-cuisine-traditi.jpg",
      title: "Traditional Ugandan Fish Preparation",
      subtitle: "Served with love in Kabusu",
    },
    {
      image: "/mixed-fish-platter-nile-perch-tilapia-ugandan-feas.jpg",
      title: "Family Feast Experience",
      subtitle: "Bringing families together",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide ? "bg-orange-500" : "bg-white/50"}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Mobile-first design */}
          <div className="flex items-center justify-center space-x-1 mb-4 md:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500" />
            ))}
            <span className="ml-2 text-xs md:text-sm font-medium">Premium Quality Since 2020</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-balance leading-tight">
            <span className="text-orange-500">Olusaniya</span>
            <br className="md:hidden" />
            <span className="hidden md:inline"> - </span>
            <br className="md:hidden" />
            Kampala Fried Fish
            <br />
            <span className="text-orange-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Kabusu's Finest</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 max-w-3xl mx-auto text-pretty px-2">
            {heroImages[currentSlide].subtitle} - Experience the authentic taste of Uganda's premium Nile perch and
            tilapia, served fresh daily in Kabusu.
          </p>

          {/* Mobile-optimized buttons */}
          <div className="flex flex-col gap-3 md:gap-4 justify-center items-center px-4">
            <Button 
              size="lg" 
              className="w-full max-w-sm md:max-w-none bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Order Fresh Fish
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full max-w-sm md:max-w-none border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl bg-transparent transition-all duration-300"
            >
              View Menu
            </Button>
          </div>

          {/* Mobile touch indicators */}
          <div className="md:hidden mt-6 text-center">
            <p className="text-xs text-gray-300">Swipe to see more</p>
          </div>
        </div>
      </div>
    </section>
  )
}
