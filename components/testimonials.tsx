import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Nakamura",
      location: "Kabusu Central",
      rating: 5,
      text: "Kampala Fish has been our family's go-to for fresh fish for over 3 years. The Olusaniya special is absolutely delicious!",
      image: "/customer-testimonial-uganda-woman-happy.jpg",
    },
    {
      name: "David Ssemakula",
      location: "Kabusu East",
      rating: 5,
      text: "The delivery service is exceptional. Always fresh, always on time. Best fish supplier in all of Kabusu!",
      image: "/customer-testimonial-uganda-man-satisfied.jpg",
    },
    {
      name: "Grace Namukasa",
      location: "Kabusu West",
      rating: 5,
      text: "Perfect for family gatherings. The large family tables are exactly what we needed for our celebrations.",
      image: "/customer-testimonial-uganda-family-happy.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            What our <span className="text-primary">customers</span> say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from families across Kabusu who trust Kampala Fish for their dining needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic text-pretty pl-6">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
