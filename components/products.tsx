import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Fish } from "lucide-react"
import Link from "next/link"

export function Products() {
  const products = [
    {
      name: "Creamy Fried Nile Perch (Olusaniya Special)",
      description: "Our signature golden-brown fried Nile perch with creamy texture and authentic Ugandan spices",
      sizes: [
        { name: "Small (1-2kg)", price: "UGX 18,000" },
        { name: "Medium (2-3kg)", price: "UGX 28,000" },
        { name: "Large (3-4kg)", price: "UGX 38,000" },
        { name: "Family (4kg+)", price: "UGX 48,000" },
      ],
      image: "/fried-fish-golden-brown-nigerian-cuisine.jpg",
      popular: true,
      fishType: "Nile Perch",
    },
    {
      name: "Golden Fried Tilapia Whole",
      description: "Perfectly fried whole tilapia with crispy exterior and tender, creamy interior",
      sizes: [
        { name: "Small (500g-1kg)", price: "UGX 12,000" },
        { name: "Medium (1-2kg)", price: "UGX 18,000" },
        { name: "Large (2-3kg)", price: "UGX 25,000" },
      ],
      image: "/fried-tilapia-golden-brown-ugandan-cuisine-traditi.jpg",
      popular: true,
      fishType: "Tilapia",
    },
    {
      name: "Fried Fish Pieces (Mixed)",
      description: "Assorted fried fish pieces - perfect for sharing, golden and creamy texture",
      sizes: [
        { name: "Small Pack (1kg)", price: "UGX 15,000" },
        { name: "Medium Pack (2kg)", price: "UGX 28,000" },
        { name: "Large Pack (3kg)", price: "UGX 40,000" },
        { name: "Party Pack (5kg)", price: "UGX 65,000" },
      ],
      image: "/mixed-fish-platter-nile-perch-tilapia-ugandan-feas.jpg",
      popular: true,
      fishType: "Mixed",
    },
    {
      name: "Fresh Nile Perch (Unfried)",
      description: "Premium fresh Nile perch for home cooking - cleaned and ready",
      sizes: [
        { name: "Small (1-2kg)", price: "UGX 15,000" },
        { name: "Medium (2-3kg)", price: "UGX 22,000" },
        { name: "Large (3-4kg)", price: "UGX 30,000" },
      ],
      image: "/nile-perch-fillets-cuts-professional-food-photogra.jpg",
      popular: false,
      fishType: "Nile Perch",
    },
    {
      name: "Fresh Tilapia (Unfried)",
      description: "Lake Victoria fresh tilapia, perfect for traditional cooking methods",
      sizes: [
        { name: "Small (500g-1kg)", price: "UGX 8,000" },
        { name: "Medium (1-2kg)", price: "UGX 14,000" },
        { name: "Large (2-3kg)", price: "UGX 20,000" },
      ],
      image: "/fresh-whole-tilapia-fish-lake-victoria-uganda.jpg",
      popular: false,
      fishType: "Tilapia",
    },
    {
      name: "Smoked Fish Selection",
      description: "Traditional smoked fish with authentic Ugandan preservation methods",
      sizes: [
        { name: "250g Pack", price: "UGX 12,000" },
        { name: "500g Pack", price: "UGX 22,000" },
        { name: "1kg Pack", price: "UGX 40,000" },
      ],
      image: "/smoked-fish-traditional-ugandan-preservation-nile-.jpg",
      popular: false,
      fishType: "Mixed",
    },
  ]

  return (
    <section id="products" className="py-12 md:py-20 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-sm font-semibold text-primary mb-2 md:mb-4 tracking-wide uppercase">Our Products</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Premium Fried & Fresh Fish
          </h3>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Specializing in creamy, golden fried fish and fresh selections from Lake Victoria
          </p>
        </div>

        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 px-4 -mx-4 md:px-0 md:mx-0 md:overflow-visible md:flex-wrap">
            <Badge variant="outline" className="px-3 py-2 text-xs md:text-sm bg-primary/10 whitespace-nowrap">
              <Fish className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              All Fish Types
            </Badge>
            <Badge variant="outline" className="px-3 py-2 text-xs md:text-sm whitespace-nowrap">
              Fried Fish
            </Badge>
            <Badge variant="outline" className="px-3 py-2 text-xs md:text-sm whitespace-nowrap">
              Fresh Fish
            </Badge>
            <Badge variant="outline" className="px-3 py-2 text-xs md:text-sm whitespace-nowrap">
              Smoked Fish
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-cover"
                />
                {product.popular && (
                  <Badge className="absolute top-2 md:top-3 left-2 md:left-3 bg-primary text-primary-foreground text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                <Badge variant="secondary" className="absolute top-2 md:top-3 right-2 md:right-3 text-xs">
                  {product.fishType}
                </Badge>
              </div>

              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-base md:text-lg text-balance">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground text-pretty">{product.description}</p>
              </CardHeader>

              <CardContent className="p-4 md:p-6 pt-0">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-3">Pricing Tiers:</p>
                  <div className="space-y-2">
                    {product.sizes.map((size, sizeIndex) => (
                      <div
                        key={sizeIndex}
                        className="flex justify-between items-center p-2 md:p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-xs md:text-sm font-medium">{size.name}</span>
                        <span className="text-xs md:text-sm font-bold text-primary">{size.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Link
                    href={`/order?product=${encodeURIComponent(product.name)}&type=${product.fishType}`}
                    className="w-full"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 h-11 md:h-10 text-sm md:text-base font-semibold">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Order Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-orange-500/5 border-primary/20">
            <CardContent className="p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">How to Order</h4>
              <p className="text-muted-foreground text-base md:text-lg mb-6">
                We handle all orders through direct communication for the freshest fish experience
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h5 className="font-semibold text-sm md:text-base">Contact Us</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">Call, WhatsApp, or visit our location</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-sm md:text-base">Select & Confirm</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Choose your fish and receive email confirmation
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h5 className="font-semibold text-sm md:text-base">Fresh Delivery</h5>
                  <p className="text-xs md:text-sm text-muted-foreground">We deliver fresh to your location</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
