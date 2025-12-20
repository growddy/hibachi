import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CostCalculator } from "@/components/cost-calculator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DollarSign, Check, ArrowRight } from "lucide-react"

const includedItems = [
  "Professional hibachi chef",
  "All food and ingredients",
  "Cooking equipment and grill",
  "Serving utensils and plates",
  "Setup and cleanup",
  "1.5-2 hour cooking experience",
  "Interactive entertainment",
  "Dietary accommodations",
]

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

export default function CostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-4xl font-bold md:text-5xl text-balance">Pricing & Packages</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                Transparent pricing with no hidden fees. Use our calculator to get an instant estimate for your event.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-center mb-8">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {includedItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold">Estimate Your Cost</h2>
              <p className="mt-3 text-muted-foreground">Adjust the options below to get an instant price estimate.</p>
            </div>
            <CostCalculator />
            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link href="/booking">
                  Book Your Event
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
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
