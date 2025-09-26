import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Fish, Star, Phone } from "lucide-react"
import Link from "next/link"

export default function MenuPage() {
  const menuCategories = [
    {
      category: "Nile Perch Specialties",
      description: "Premium Nile perch from Lake Victoria",
      items: [
        {
          name: "Whole Nile Perch",
          sizes: ["1-2kg", "2-3kg", "3-4kg", "4kg+"],
          prices: ["UGX 18,000", "UGX 32,000", "UGX 45,000", "UGX 60,000"],
          description: "Fresh whole Nile perch, cleaned and ready for cooking",
          popular: true,
          image: "/nile-perch-fillets-cuts-professional-food-photogra.jpg",
        },
        {
          name: "Nile Perch Fillets",
          sizes: ["500g", "1kg", "2kg", "3kg"],
          prices: ["UGX 12,000", "UGX 22,000", "UGX 42,000", "UGX 60,000"],
          description: "Premium boneless fillets, perfect for grilling or frying",
          image: "/fish-fillets-and-cuts-professional-food-photograph.jpg",
        },
        {
          name: "Nile Perch Steaks",
          sizes: ["500g", "1kg", "1.5kg"],
          prices: ["UGX 15,000", "UGX 28,000", "UGX 40,000"],
          description: "Thick cut steaks with bone, ideal for traditional preparation",
          image: "/whole-fresh-fish-on-ice-market-display.jpg",
        },
      ],
    },
    {
      category: "Tilapia Selection",
      description: "Fresh tilapia from local sources",
      items: [
        {
          name: "Whole Fresh Tilapia",
          sizes: ["Small (300-500g)", "Medium (500g-1kg)", "Large (1-2kg)"],
          prices: ["UGX 6,000", "UGX 10,000", "UGX 18,000"],
          description: "Fresh whole tilapia, perfect for family meals",
          popular: true,
          image: "/fresh-whole-tilapia-fish-lake-victoria-uganda.jpg",
        },
        {
          name: "Tilapia Fillets",
          sizes: ["250g", "500g", "1kg"],
          prices: ["UGX 8,000", "UGX 15,000", "UGX 28,000"],
          description: "Boneless tilapia fillets, quick cooking option",
          image: "/fish-fillets-and-cuts-professional-food-photograph.jpg",
        },
      ],
    },
    {
      category: "Prepared Fish (Olusaniya Specials)",
      description: "Our signature preparations ready to serve",
      items: [
        {
          name: "Fried Nile Perch Tray",
          sizes: ["Small", "Medium", "Large", "Family"],
          prices: ["UGX 20,000", "UGX 35,000", "UGX 50,000", "UGX 75,000"],
          description: "Our famous fried Nile perch served on traditional tray",
          popular: true,
          image: "/creamy-fried-fish-golden-brown-olusaniya-special.jpg",
        },
        {
          name: "Fried Tilapia Tray",
          sizes: ["Small", "Medium", "Large"],
          prices: ["UGX 15,000", "UGX 25,000", "UGX 40,000"],
          description: "Golden fried tilapia with authentic Ugandan spices",
          popular: true,
          image: "/fried-tilapia-golden-brown-ugandan-cuisine-traditi.jpg",
        },
        {
          name: "Grilled Fish Platter",
          sizes: ["Mixed Small", "Mixed Large"],
          prices: ["UGX 30,000", "UGX 55,000"],
          description: "Combination of grilled Nile perch and tilapia",
          image: "/grilled-nile-perch-on-wooden-tray-ugandan-style.jpg",
        },
      ],
    },
    {
      category: "Preserved Fish",
      description: "Traditional preservation methods",
      items: [
        {
          name: "Smoked Nile Perch",
          sizes: ["250g", "500g", "1kg"],
          prices: ["UGX 18,000", "UGX 35,000", "UGX 65,000"],
          description: "Traditional smoked Nile perch, long-lasting",
          image: "/smoked-fish-traditional-ugandan-preservation-nile-.jpg",
        },
        {
          name: "Dried Tilapia",
          sizes: ["200g", "400g", "800g"],
          prices: ["UGX 12,000", "UGX 22,000", "UGX 40,000"],
          description: "Sun-dried tilapia, authentic Ugandan preservation",
          image: "/smoked-fish-traditional-ugandan-preservation-nile-.jpg",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-orange-500/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Fish Menu</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Fresh Nile perch and tilapia from Lake Victoria - All prices in UGX
            </p>
            <div className="mt-8">
              <Link href="/order">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Order Online Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{category.category}</h2>
                  <p className="text-lg text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {item.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          {item.popular && (
                            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>
                      )}

                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg flex items-center">
                            <Fish className="w-5 h-5 mr-2 text-primary" />
                            {item.name}
                          </CardTitle>
                          {item.popular && !item.image && (
                            <Badge className="bg-primary text-primary-foreground">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {item.sizes.map((size, sizeIndex) => (
                            <div
                              key={sizeIndex}
                              className="flex justify-between items-center p-2 rounded-lg bg-muted/30"
                            >
                              <span className="text-sm font-medium">{size}</span>
                              <span className="text-primary font-bold">{item.prices[sizeIndex]}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={`/order?product=${encodeURIComponent(item.name)}&type=${category.category.includes("Nile") ? "Nile Perch" : category.category.includes("Tilapia") ? "Tilapia" : "Mixed"}`}
                        >
                          <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Order This Item</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ordering Info */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-orange-500/5">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">How to Order</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              All orders are handled through direct communication. We'll send email confirmations to both you and our
              reception team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/order">
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Order Online
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                WhatsApp: +256 XXX XXX XXX
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
