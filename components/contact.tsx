"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Mail, MessageCircle, Fish } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    fishType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.phoneNumber || !formData.message) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber,
          inquiry: formData.message,
          name: formData.name,
          email: formData.email,
          fishType: formData.fishType
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          fishType: "",
          message: ""
        })
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error("Contact form submission failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll get back to you within 30 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        name="name"
                        placeholder="Your Name (Optional)" 
                        className="focus:ring-2 focus:ring-primary/20"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <Input 
                        name="phoneNumber"
                        placeholder="Phone Number *" 
                        className="focus:ring-2 focus:ring-primary/20" 
                        required 
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <Input 
                      name="email"
                      placeholder="Email Address (Optional)" 
                      className="focus:ring-2 focus:ring-primary/20"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <Input 
                      name="fishType"
                      placeholder="Fish Type & Quantity Needed (Optional)" 
                      className="focus:ring-2 focus:ring-primary/20"
                      value={formData.fishType}
                      onChange={handleInputChange}
                    />
                    <Textarea
                      name="message"
                      placeholder="Your message or specific requirements... *"
                      rows={4}
                      className="focus:ring-2 focus:ring-primary/20"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    <Button 
                      type="submit"
                      disabled={!formData.phoneNumber || !formData.message || isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? "Sending..." : "Send Order Inquiry"}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      * Required fields. We'll respond with availability and send email confirmation
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
