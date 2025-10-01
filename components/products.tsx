import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Fish } from "lucide-react"
import Link from "next/link"

export function Products() {
  const products = [
    {
      name: "Small Lusaniya",
      description: "Perfect for 1-2 people. Best fried fish in Kampala - Nile Perch on massive plates, fried to perfection with authentic Ugandan spices.",
      price: "UGX 18,000",
      image: "/fish-plate-square.webp",
      popular: true,
      fishType: "Nile Perch",
      serving: "1-2 People",
      icon: "👥",
    },
    {
      name: "Medium Lusaniya",
      description: "Ideal for 3-4 people. Premium Olusaniya in Kampala - generous portions of golden fried Nile Perch from Kabusu Market.",
      price: "UGX 28,000",
      image: "/hot-fish-rack-landscape.webp",
      popular: true,
      fishType: "Nile Perch",
      serving: "3-4 People",
      icon: "👨‍👩‍👧",
    },
    {
      name: "Large Lusaniya",
      description: "Perfect for families and groups. Best fish delivery in Kampala - massive plates of crispy fried Nile Perch in Rubaga Division.",
      price: "UGX 38,000",
      image: "/spiced-fish-plate-square.webp",
      popular: true,
      fishType: "Nile Perch",
      serving: "5+ People",
      icon: "👨‍👩‍👧‍👦",
    },
  ]

  const customOrders = [
    { weight: "1/2 kg", price: "UGX 8,000" },
    { weight: "1 kg", price: "UGX 12,000" },
    { weight: "2 kg", price: "UGX 22,000" },
    { weight: "4 kg", price: "UGX 42,000" },
    { weight: "6 kg", price: "UGX 60,000" },
    { weight: "8 kg", price: "UGX 75,000" },
  ]

  return (
    <section id="products" className="py-12 md:py-20 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Best Fried Fish in Kampala - Empuuta ku Lusaniya
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Premium Nile Perch on massive plates, fried to perfection with authentic Ugandan spices in Kabusu Market, Rubaga Division
          </p>
        </div>

        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 px-4 -mx-4 md:px-0 md:mx-0 md:overflow-visible md:flex-wrap">
            <Badge variant="outline" className="px-3 py-2 text-xs md:text-sm bg-primary/10 whitespace-nowrap">
              <Fish className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Nile Perch
            </Badge>
            <Badge variant="outline" className="px-3 py-2 text-xs md:text-sm whitespace-nowrap">
              Massive Plates
            </Badge>
            <Badge variant="outline" className="px-3 py-2 text-xs md:text-sm whitespace-nowrap">
              Fried to Perfection
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} - Best Fried Fish in Kampala, Olusaniya, Nile Perch, Kabusu Market, Rubaga Division - ${product.description}`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {product.popular && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-white" />
                    Popular
                  </Badge>
                )}
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white">
                    <span className="text-2xl">{product.icon}</span>
                    <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {product.serving}
                    </span>
                  </div>
                </div>
              </div>

              <CardHeader className="p-6 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs border-orange-200 text-orange-600">
                    {product.fishType}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Price</p>
                        <p className="text-2xl font-bold text-orange-600">{product.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-1">Serves</p>
                        <p className="text-lg font-semibold text-gray-800">{product.serving}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/order?product=${encodeURIComponent(product.name)}&price=${product.price}`}
                  className="w-full block"
                >
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Order {product.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Orders Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Custom Orders</h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            Need a specific weight? Order any quantity you need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {customOrders.map((order, index) => (
            <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">{order.weight}</h4>
                <p className="text-orange-600 font-bold">{order.price}</p>
                <Link href={`/order?weight=${order.weight}&price=${order.price}`}>
                  <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs">
                    Order
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-orange-100/50 border-orange-200">
            <CardContent className="p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">How to Order</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-orange-600 font-bold">1</span>
                  </div>
                  <h5 className="font-semibold text-sm">Contact</h5>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-sm">Confirm</h5>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-orange-600 font-bold">3</span>
                  </div>
                  <h5 className="font-semibold text-sm">Deliver</h5>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
