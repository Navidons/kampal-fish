import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </main>
  )
}
