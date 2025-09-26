import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Ready to taste the <span className="text-accent-foreground">finest fish</span> in Uganda?
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
          Join thousands of satisfied customers who trust Kampala Fish for their fresh fish needs. Experience the
          Olusaniya difference today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Order Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg bg-transparent"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Visit Our Location
          </Button>
        </div>

        <div className="mt-8 text-sm text-primary-foreground/80">
          <p>📍 Located in Kabusu, Uganda • 🚚 Free delivery within 5km • ⭐ 4.9/5 customer rating</p>
        </div>
      </div>
    </section>
  )
}
