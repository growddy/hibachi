import Link from "next/link"
import { ArrowRight, ChefHat, Utensils, Sparkles, Users, MapPin, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ReviewCard } from "@/components/review-card"
import { VideoBackground } from "@/components/video-background"
import { REVIEWS, CONTACT_INFO } from "@/lib/config"

const features = [
  {
    icon: ChefHat,
    title: "Professional Chefs",
    description: "Experienced hibachi chefs trained in authentic teppanyaki cooking techniques.",
  },
  {
    icon: Utensils,
    title: "Full Setup Included",
    description: "We bring everything needed—grill, utensils, ingredients, and cleanup.",
  },
  {
    icon: Sparkles,
    title: "Live Entertainment",
    description: "Fire tricks, knife skills, and interactive cooking that wows every guest.",
  },
  {
    icon: Users,
    title: "Customizable Menus",
    description: "Tailor your menu to accommodate allergies, preferences, and dietary needs.",
  },
]

const steps = [
  {
    number: "01",
    title: "Check Location & Book",
    description: "Verify we serve your area and reserve your date using our simple online booking.",
  },
  {
    number: "02",
    title: "Coordinator Reaches Out",
    description: "Our team will contact you to finalize menu selections and event details.",
  },
  {
    number: "03",
    title: "Enjoy the Experience",
    description: "Sit back and enjoy an unforgettable hibachi experience with your guests.",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[600px] py-20 md:py-32">
          {/* Video Background */}
          <VideoBackground />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              {/* Blur overlay behind text content only */}
              <div className="relative">
                <div className="absolute inset-0 -mx-8 -my-4 bg-background/40 backdrop-blur-sm rounded-lg -z-10" />
                <div className="relative">
                  <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
                    Private Hibachi Catering at Your Home or Venue
                  </h1>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Transform your next celebration into an unforgettable culinary experience. Professional chefs, sizzling
                    entertainment, and delicious food—all at your doorstep.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/service-area">
                    <MapPin className="mr-2 h-4 w-4" />
                    Check Service Area
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/booking">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">What You Get</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Everything you need for an amazing hibachi experience, handled by professionals.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">How It Works</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Booking your private hibachi event is simple and straightforward.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/booking">
                  Start Booking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Don&apos;t just take our word for it—hear from our happy customers.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((review) => (
                <ReviewCard
                  key={review.id}
                  name={review.name}
                  rating={review.rating}
                  text={review.text}
                  eventType={review.eventType}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Social Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">Follow Our Journey</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              See more events, behind-the-scenes moments, and delicious hibachi content on our social channels.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="font-medium">Instagram</span>
              </a>
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="font-medium">Facebook</span>
              </a>
              <a
                href={CONTACT_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="font-medium">TikTok</span>
              </a>
            </div>
            <Button asChild className="mt-8 bg-transparent" variant="outline">
              <Link href="/contact">See More Events</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
