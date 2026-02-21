import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Privacy Policy</h1>
                <p className="text-muted-foreground text-pretty">
                  This Privacy Policy explains how Kampala Fried Fish collects, uses, and protects your information.
                </p>
                <p className="text-sm text-muted-foreground mt-3">Last updated: February 21, 2026</p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                      Kampala Fried Fish (“we”, “us”, “our”) operates this website to help you view our products and place
                      orders. We only collect information that is necessary to provide our services.
                    </p>
                    <p>
                      By using this website, you agree to this Privacy Policy. If you do not agree, please do not use the
                      website.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Information you provide</p>
                      <p>
                        When you contact us or place an order, you may provide details such as your name, phone number,
                        location/address for delivery, and order details.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Automatically collected information</p>
                      <p>
                        We may collect basic usage data such as pages visited, device type, and approximate location (e.g.,
                        city-level) for analytics and to improve the website.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>How We Use Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p>We use information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Process and confirm orders and delivery/pickup requests</li>
                      <li>Respond to messages and customer support requests</li>
                      <li>Improve our products, services, and website experience</li>
                      <li>Maintain website security and prevent fraud/abuse</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cookies & Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                      We may use cookies or similar technologies to enable site functionality and understand how the site
                      is used.
                    </p>
                    <p>
                      We may also use third-party analytics services (for example, Vercel Analytics) to measure website
                      performance and usage.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sharing Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p>We do not sell your personal information.</p>
                    <p>
                      We may share limited information when necessary to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide deliveries or fulfill orders (e.g., coordinating delivery)</li>
                      <li>Comply with legal obligations or respond to lawful requests</li>
                      <li>Protect our rights, safety, and the security of our customers and services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Retention</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                      We keep personal information only for as long as needed to provide our services, meet legal
                      requirements, resolve disputes, and enforce our agreements.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Your Choices</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                      You can request access, correction, or deletion of your personal information by contacting us using
                      the details below.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p>If you have questions about this Privacy Policy, contact us:</p>
                    <div>
                      <p className="text-foreground font-medium">Kampala Fried Fish</p>
                      <p>Phone: +256757159282 / +256792460182</p>
                      <p>Email: Kffug@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
