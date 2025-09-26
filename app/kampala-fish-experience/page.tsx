import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function KampalaFishExperience() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              See the Kampala Fish Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Take a visual journey through our operations, from fresh fish selection to happy customers enjoying our
              delicious fried fish in Kabusu, Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/fresh-fish-on-ice-market-display-professional-food.jpg"
                  alt="Fresh fish selection at Kampala Fish"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Fresh Fish Selection</h3>
                <p className="text-muted-foreground text-sm">
                  We carefully select the finest Nile perch and tilapia from Lake Victoria daily
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/creamy-fried-fish-golden-brown-olusaniya-special.jpg"
                  alt="Golden fried fish preparation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Expert Preparation</h3>
                <p className="text-muted-foreground text-sm">
                  Our skilled chefs create the perfect golden, crispy texture using traditional methods
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/staff-serving-olusaniya-fish-happy-customers.jpg"
                  alt="Staff serving customers at Olusaniya"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Friendly Service</h3>
                <p className="text-muted-foreground text-sm">
                  Our dedicated team ensures every customer receives personalized attention
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/customers-enjoying-olusaniya-fish-kabusu-uganda.jpg"
                  alt="Happy customers enjoying fish"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Customer Satisfaction</h3>
                <p className="text-muted-foreground text-sm">
                  Nothing makes us happier than seeing our customers enjoy our delicious fish
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/mixed-fried-fish-platter-creamy-golden-pieces.jpg"
                  alt="Mixed fish platter presentation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Beautiful Presentation</h3>
                <p className="text-muted-foreground text-sm">
                  Every dish is carefully plated to create an appetizing and memorable experience
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/whole-fried-fish-golden-brown-crispy-exterior.jpg"
                  alt="Whole fried fish golden brown"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Perfect Results</h3>
                <p className="text-muted-foreground text-sm">
                  Achieving the ideal balance of crispy exterior and tender, flaky interior
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Big Fish/Nile Perch - Empuuta</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the authentic taste of Uganda's finest fish. From Lake Victoria to your plate, we ensure every
              step maintains the highest quality and traditional flavors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/grilled-nile-perch-on-wooden-tray-ugandan-style.jpg"
                  alt="Nile perch Empuuta preparation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/fried-fish-pieces-assorted-golden-creamy-texture.jpg"
                  alt="Assorted fried fish pieces"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
