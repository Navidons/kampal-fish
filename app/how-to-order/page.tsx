import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Clock, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HowToOrder() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">How to Order</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ordering fresh fish from Kampala Fish (Olusaniya) is simple and convenient. Follow these easy steps to get
              delicious fried fish delivered to your location.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Contact Method</h3>
                  <p className="text-muted-foreground mb-4">
                    Contact us through phone, WhatsApp, or visit our location in Kabusu. We're available from 09:00am -
                    12:00pm, Monday to Sunday.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Card className="border-primary/20">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">+256708923758</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">WhatsApp</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Select Your Fish</h3>
                  <p className="text-muted-foreground mb-4">
                    Choose from our premium selection of Nile perch (Empuuta) and tilapia. Specify the size and
                    preparation method you prefer.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Big Fish/Nile Perch (Empuuta)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Fresh Tilapia</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Fried or Fresh preparation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Provide Your Details</h3>
                  <p className="text-muted-foreground">
                    Give us your phone number and name (optional). We'll send an email confirmation to both you and our
                    reception team for order tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Wait for Confirmation</h3>
                  <p className="text-muted-foreground">
                    Our customer care assistant will call or WhatsApp you to confirm details, discuss pricing in UGX,
                    and arrange delivery or pickup.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Image
                src="/staff-serving-olusaniya-fish-happy-customers.jpg"
                alt="How to order from Kampala Fish Olusaniya"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />

              <Card className="bg-gradient-to-br from-primary/5 to-orange-500/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Operating Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground mb-2">09:00am - 12:00pm</p>
                  <p className="text-muted-foreground mb-4">Monday - Sunday</p>
                  <p className="text-sm text-muted-foreground">
                    We sell delicious fried fish on large plates (Ekyenyanja Ekisiike Ekiwooma Ku Lusaniya)
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Visit Our Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Kampala Fish (Olusaniya)
                    <br />
                    Kabusu Market Area
                    <br />
                    Wakiso District, Uganda
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Order?</h3>
            <p className="text-muted-foreground mb-8">
              Start your order now or browse our menu to see all available options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Order Now
                </Button>
              </Link>
              <Link href="/menu">
                <Button size="lg" variant="outline">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
