import { Card, CardContent } from "@/components/ui/card"
import { Truck, Clock, Fish, Users, Shield, Heart } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Fish,
      title: "Fresh Daily Catch",
      description:
        "We source the freshest fish daily from Uganda's pristine waters, ensuring premium quality for every order.",
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick delivery service throughout Kabusu and surrounding areas in Uganda with temperature-controlled transport.",
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open daily with extended hours from 5 AM to 9 PM to serve you when you need us most.",
      gradient: "from-orange-500/10 to-amber-500/10",
    },
    {
      icon: Users,
      title: "Family Tables",
      description: "Comfortable dining space for families and groups, perfect for traditional Ugandan fish meals.",
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our fish products with rigorous quality control standards.",
      gradient: "from-red-500/10 to-rose-500/10",
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "Proudly serving the Kabusu community with traditional Ugandan hospitality and care.",
      gradient: "from-indigo-500/10 to-blue-500/10",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-muted/30 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">Our Core Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Excellence in every <span className="text-primary">aspect</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kampala Fried Fish delivers comprehensive services that go beyond just selling fish - we create memorable
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4 text-balance">{service.title}</h4>
                <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
