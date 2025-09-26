import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Shield, Clock, Users, Fish, Star } from "lucide-react"
import Image from "next/image"

export default function Excellence() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Excellence in Every Aspect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              At Kampala Fish (Olusaniya), we deliver exceptional quality in every piece of fish we serve. Experience
              the difference that comes from years of expertise and commitment to freshness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Fish className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Premium Quality Fish</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We source only the finest Nile perch and tilapia from Lake Victoria, ensuring every fish meets our
                  strict quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Food Safety Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our preparation follows international food safety standards, with proper storage and handling to
                  maintain freshness and quality.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Expert Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our skilled chefs use traditional Ugandan techniques combined with modern methods to create the
                  perfect golden, crispy fried fish.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Fresh Daily</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We receive fresh fish daily and prepare orders on-demand, ensuring you get the freshest possible
                  product every time.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Customer Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our dedicated team provides personalized service, helping you choose the perfect fish size and
                  preparation method for your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Proven Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Years of serving satisfied customers in Kabusu and beyond, building a reputation for quality and
                  reliability.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Ekyenyanja Ekisiike Ekiwooma Ku Lusaniya</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the authentic taste of Uganda with our expertly prepared fish. From the moment you place your
                order to the first bite, we ensure excellence at every step.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Hand-selected fresh fish daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Traditional Ugandan preparation methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Consistent quality and taste</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Reliable delivery service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/creamy-fried-fish-golden-brown-olusaniya-special.jpg"
                alt="Excellence in fish preparation at Olusaniya"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
