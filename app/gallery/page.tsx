import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/fresh-nile-perch-display-kabusu-market-uganda.jpg",
      title: "Fresh Nile Perch Display",
      description: "Premium Nile perch fresh from Lake Victoria",
    },
    {
      src: "/tilapia-fish-market-fresh-uganda-kabusu.jpg",
      title: "Fresh Tilapia Selection",
      description: "Quality tilapia ready for preparation",
    },
    {
      src: "/fried-fish-tray-olusaniya-special-ugandan-cuisine.jpg",
      title: "Olusaniya Special Tray",
      description: "Our signature fried fish preparation",
    },
    {
      src: "/fish-market-kabusu-uganda-kampala-fish-vendor.jpg",
      title: "Our Kabusu Location",
      description: "Kampala Fish market stall in Kabusu",
    },
    {
      src: "/grilled-nile-perch-ugandan-spices-traditional-cook.jpg",
      title: "Grilled Nile Perch",
      description: "Traditional grilling with authentic spices",
    },
    {
      src: "/fish-preparation-cleaning-nile-perch-tilapia-profe.jpg",
      title: "Fish Preparation",
      description: "Professional cleaning and preparation",
    },
    {
      src: "/smoked-fish-traditional-ugandan-preservation-metho.jpg",
      title: "Traditional Smoking",
      description: "Authentic Ugandan fish preservation",
    },
    {
      src: "/fish-delivery-truck-uganda-kabusu-fresh-transport.jpg",
      title: "Fresh Delivery Service",
      description: "We deliver fresh fish across the region",
    },
    {
      src: "/family-fish-meal-ugandan-dining-nile-perch-tilapia.jpg",
      title: "Family Fish Meals",
      description: "Perfect for family gatherings and celebrations",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-orange-500/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Fish Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              See our fresh Nile perch and tilapia, preparation methods, and satisfied customers
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative">
                    <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-64 object-cover" />
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">Kampala Fish</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
