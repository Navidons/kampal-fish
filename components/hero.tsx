"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      image: "/fried-fish-golden-brown-nigerian-cuisine.jpg",
      title: "Golden Fried Fish Perfection",
      subtitle: "Crispy, creamy, and delicious",
    },
    {
      image: "/grilled-nile-perch-on-wooden-tray-ugandan-style.jpg",
      title: "Happy Customers Enjoying Olusaniya",
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 hero-gradient" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-primary" : "bg-white/50"}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm">Premium Quality Since 2020</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-primary">Olusaniya</span> - Kampala Fish
            <br />
            <span className="text-accent">Kabusu's Finest</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto text-pretty">
            {heroImages[currentSlide].subtitle} - Experience the authentic taste of Uganda's premium Nile perch and
            tilapia, served fresh daily in Kabusu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Order Fresh Fish
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg bg-transparent"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
