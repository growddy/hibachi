import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { Calendar, Phone, Clock } from "lucide-react"
import { CONTACT_INFO } from "@/lib/config"

const bookingTips = [
  {
    icon: Calendar,
    title: "Book Early",
    description: "We recommend booking at least 2-3 weeks in advance, especially for weekends and holidays.",
  },
  {
    icon: Clock,
    title: "Event Duration",
    description: "Plan for 1.5-2 hours of cooking and entertainment for your guests.",
  },
  {
    icon: Phone,
    title: "Questions?",
    description: `Call us at ${CONTACT_INFO.phone} or complete the form and we'll respond within 24 hours.`,
  },
]

export default function BookingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl font-bold md:text-5xl text-balance">Book Your Hibachi Experience</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                Complete the form below to request a booking. Our team will confirm availability and finalize the
                details.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-8 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              {bookingTips.map((tip) => (
                <div key={tip.title} className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
