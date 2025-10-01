import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"

export function About() {
  const stats = [
    { icon: Award, label: "Years of Excellence", value: "5+" },
    { icon: Users, label: "Happy Customers", value: "5000+" },
    { icon: Clock, label: "Daily Fresh Deliveries", value: "100+" },
    { icon: Heart, label: "Family Satisfaction", value: "99%" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">About Kampala Fried Fish</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              A Ugandan tradition of freshness and <span className="text-primary">quality</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Kampala Fried Fish has been proudly serving the Kabusu community and greater Uganda with our
              signature Olusaniya (fried fish on large plates) and exceptional service. We source our fish from Uganda's pristine waters, including Lake
              Victoria, ensuring the highest quality for our customers.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Our commitment extends beyond just selling fish - we provide a complete dining experience with family
              tables, traditional Ugandan Olusaniya preparations, and personalized service that celebrates our rich culinary
              heritage.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <img
                src="/frying-fish-landscape.jpg"
                alt="Kampala Fried Fish traditional Olusaniya preparation - Fresh fish being deep-fried to perfection in Kabusu Market, Rubaga Division"
                className="w-full h-80 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                loading="lazy"
                fetchPriority="low"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group">
                  <CardContent className="p-4">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground text-pretty">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
