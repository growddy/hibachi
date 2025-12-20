import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { USMap } from "@/components/us-map"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

// States currently serviced
const SERVICED_STATES = ["TX", "OK", "LA", "AR", "NM", "KS", "MO", "CO"]
const COMING_SOON_STATES = ["AZ", "NV", "MS", "AL", "TN"]

export default function ServiceAreaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-4xl font-bold md:text-5xl text-balance">Service Areas</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                We bring the hibachi experience to you! Check our map to see if we serve your area.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <USMap servicedStates={SERVICED_STATES} comingSoonStates={COMING_SOON_STATES} />
            </div>
          </div>
        </section>

        {/* Don't see your area */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold md:text-3xl mb-4">Don't See Your Area?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              We're always expanding! Contact us to inquire about service in your location. We may be able to
              accommodate special requests.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
