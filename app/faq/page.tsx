import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What's the minimum number of guests?",
    answer:
      "We require a minimum of 10 guests for all events. This ensures the experience is worthwhile for both you and our chef.",
  },
  {
    question: "Are gratuities included?",
    answer: "Gratuity is not included in our pricing. Tips for the chef are appreciated but not required.",
  },
  {
    question: "Do you provide tables and chairs?",
    answer:
      "We bring the cooking equipment, but seating and tables should be provided at the venue. We can recommend rental services if needed.",
  },
  {
    question: "What about dietary restrictions?",
    answer:
      "We accommodate vegetarian, vegan, gluten-free, and most allergy requirements at no extra charge. Just let us know when booking.",
  },
  {
    question: "Is a deposit required?",
    answer: "Yes, we require a 25% deposit to secure your date. The remaining balance is due the day of the event.",
  },
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-4xl font-bold md:text-5xl text-balance">Frequently Asked Questions</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                Find answers to common questions about our hibachi catering services.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-border pb-6 last:border-0">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold md:text-3xl mb-4">Ready to Book?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Have questions about pricing for your specific event? Contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild>
                <Link href="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

