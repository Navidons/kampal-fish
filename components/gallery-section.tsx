import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function GallerySection() {
  const galleryImages = [
    {
      src: "/kampala-fish-market-fresh-catch-uganda.jpg",
      title: "Fresh Market Display",
      category: "Fresh Fish",
    },
    {
      src: "/olusaniya-fish-tray-traditional-preparation.jpg",
      title: "Olusaniya Special Tray",
      category: "Signature Dish",
    },
    {
      src: "/ugandan-fish-preparation-cooking-process.jpg",
      title: "Expert Preparation",
      category: "Cooking Process",
    },
    {
      src: "/family-dining-fish-meal-uganda-restaurant.jpg",
      title: "Family Dining Experience",
      category: "Dining",
    },
    {
      src: "/fried-fish-golden-crispy-uganda-style.jpg",
      title: "Golden Fried Fish",
      category: "Fried Specialties",
    },
    {
      src: "/fish-delivery-service-kabusu-uganda.jpg",
      title: "Delivery Service",
      category: "Service",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Visual Gallery</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            See the <span className="text-primary">Kampala Fish</span> experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From our fresh catches to your dining table - witness the quality and care in every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="mb-2 bg-primary/80 text-white border-none">{image.category}</Badge>
                  <h3 className="text-lg font-semibold text-balance">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
