import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Award, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Experience() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Experience the Olusaniya Difference
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover what makes Kampala Fried Fish special. From our traditional Olusaniya preparation methods to our
              commitment to customer satisfaction, every aspect is designed to exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What Makes Us Different</h2>
              <div className="space-y-6">
                <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-primary" />
                      <span>Passion for Quality</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every fish is prepared with care and attention to detail. We take pride in delivering not just
                      food, but an experience that brings joy to your table.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Community Connection</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We're not just a business - we're part of the Kabusu community. Building relationships with our
                      customers is at the heart of what we do.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span>Traditional Excellence</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our preparation methods honor Ugandan culinary traditions while meeting modern standards of
                      quality and food safety.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span>Memorable Moments</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Whether it's a family meal or special occasion, our fish creates moments that bring people
                      together and create lasting memories.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Image
                src="/customers-enjoying-olusaniya-fish-kabusu-uganda.jpg"
                alt="Customers enjoying Olusaniya fish experience"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />

              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/creamy-fried-fish-golden-brown-olusaniya-special.jpg"
                  alt="Golden fried fish at Olusaniya"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/mixed-fried-fish-platter-creamy-golden-pieces.jpg"
                  alt="Mixed fish platter experience"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">Ekyenyanja Ekisiike Ekiwooma Ku Lusaniya</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                This is more than just our motto - it's our promise. Experience the authentic taste of Uganda with fish
                that's prepared with love, served with pride, and enjoyed with satisfaction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Fresh Daily</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
