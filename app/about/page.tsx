import { About } from "@/components/about"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fish, Heart, Users, Award, MapPin, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <About />
        
        {/* Additional About Content */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                From Lake Victoria to Your Table
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Discover the journey of Kampala Fried Fish and our commitment to bringing you the finest Olusaniya (fried fish on large plates) from Uganda's waters.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Fish className="w-5 h-5 text-primary" />
                    <span>Our Fish Sources</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We source our fish directly from Lake Victoria and other pristine Ugandan waters, ensuring the freshest catch for our signature Olusaniya.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Nile Perch from Lake Victoria</li>
                    <li>• Fresh Tilapia from local lakes</li>
                    <li>• Daily catch delivered fresh</li>
                    <li>• Traditional preparation methods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <span>Our Values</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    At Kampala Fried Fish, we believe in quality, tradition, and community service.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Freshness guaranteed</li>
                    <li>• Traditional Ugandan recipes</li>
                    <li>• Community-focused service</li>
                    <li>• Fair pricing for all</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Family Business</h4>
                  <p className="text-sm text-muted-foreground">
                    A family-owned business serving the Kabusu community with love and dedication, specializing in Olusaniya for over 5 years.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Quality Assured</h4>
                  <p className="text-sm text-muted-foreground">
                    Every fish is carefully selected and prepared as Olusaniya using traditional methods passed down through generations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Local Community</h4>
                  <p className="text-sm text-muted-foreground">
                    Proudly serving the Kabusu area and surrounding communities with fresh Olusaniya and warm hospitality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Operating Hours Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-orange-500/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">Visit Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Come Experience Our Fresh Fish
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Location & Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Our Location</h4>
                      <p className="text-muted-foreground">
                        Kampala Fried Fish<br />
                        Kabusu Market Area<br />
                        Rubaga Division<br />
                        Central Region, Uganda
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operating Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Sunday<br />
                        Early Morning - Midnight<br />
                        <span className="text-sm text-primary font-medium">
                          We sell our signature Olusaniya - delicious fried fish on large plates
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Contact:</strong> +256792460182 | +256757159282<br />
                      <strong>WhatsApp:</strong> +256 792 460182
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
