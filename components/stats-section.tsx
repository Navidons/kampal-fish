import { TrendingUp, Users, MapPin, Star } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "5,000+",
      label: "Happy Customers",
      description: "Families served across Kabusu",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      number: "50+",
      label: "Fish Varieties",
      description: "Fresh from Uganda's waters",
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      number: "24/7",
      label: "Delivery Service",
      description: "Available throughout Kabusu",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      number: "4.9★",
      label: "Customer Rating",
      description: "Consistently excellent service",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground text-pretty">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
