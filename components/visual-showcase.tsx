import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Award, Users } from "lucide-react"

export function VisualShowcase() {
  const highlights = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Kabusu, Uganda",
      description: "Proudly serving the local community",
      image: "/uganda-landscape-lake-victoria-fishing-boats.jpg",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fresh Daily",
      description: "Caught and prepared fresh every morning",
      image: "/early-morning-fishing-uganda-lake-victoria.jpg",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Premium Quality",
      description: "Award-winning fish preparation methods",
      image: "/premium-fish-preparation-uganda-style.jpg",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Family Tables",
      description: "Perfect for family gatherings and celebrations",
      image: "/ugandan-family-enjoying-fish-meal-together.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Why Choose Kampala Fried Fish</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Experience the <span className="text-primary">Olusaniya</span> difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover what makes us Uganda's most trusted fish supplier in Kabusu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={highlight.image || "/placeholder.svg"}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">{highlight.icon}</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-balance">{highlight.title}</h3>
                <p className="text-muted-foreground text-pretty">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
