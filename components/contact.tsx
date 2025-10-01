import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Mail, MessageCircle, Fish } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to order fresh Nile perch & tilapia?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Contact Kampala Fried Fish today for our signature Olusaniya (fried fish on large plates) or visit our location in Kabusu, Uganda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kampala Fried Fish
                  <br />
                  Kabusu Market Area
                  <br />
                  Rubaga Division
                  <br />
                  Central Region, Uganda
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Phone Orders</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Primary: +256708923758
                  <br />
                  Secondary: 0787 012041
                  <br />
                  <span className="text-sm text-primary font-medium">Call for immediate orders & pricing</span>
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>WhatsApp Orders</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quick orders via WhatsApp
                  <br />
                  +256 708 923758
                  <br />
                  <span className="text-sm text-primary font-medium">Send photos of desired fish sizes</span>
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Operating Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monday - Sunday: 09:00am - 12:00pm
                  <br />
                  <span className="text-sm text-primary font-medium">We sell our signature Olusaniya - delicious fried fish on large plates</span>
                  <br />
                  <span className="text-xs text-muted-foreground italic">
                    (Ekyenyanja Ekisiike Ekiwooma Ku Lusaniya)
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/5 to-orange-500/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Fish className="w-5 h-5 text-primary" />
                  <span>Our Ordering Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Contact Us</h5>
                      <p className="text-xs text-muted-foreground">Call, WhatsApp, or visit our location in Kabusu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Select Your Fish</h5>
                      <p className="text-xs text-muted-foreground">
                        Choose from Nile perch, tilapia, sizes & preparation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Email Confirmation</h5>
                      <p className="text-xs text-muted-foreground">
                        We send order confirmation to you and our reception
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Fresh Delivery</h5>
                      <p className="text-xs text-muted-foreground">We deliver fresh Olusaniya to your location or pickup</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    <strong>Payment:</strong> UGX only • Cash on delivery or mobile money
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Send us a message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name (Optional)" className="focus:ring-2 focus:ring-primary/20" />
                  <Input placeholder="Phone Number *" className="focus:ring-2 focus:ring-primary/20" required />
                </div>
                <Input placeholder="Email Address (Optional)" className="focus:ring-2 focus:ring-primary/20" />
                <Input placeholder="Fish Type & Quantity Needed (Optional)" className="focus:ring-2 focus:ring-primary/20" />
                <Textarea
                  placeholder="Your message or specific requirements... *"
                  rows={4}
                  className="focus:ring-2 focus:ring-primary/20"
                  required
                />
                <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Order Inquiry
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  * Required fields. We'll respond with availability and send email confirmation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
