import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { CONTACT_INFO } from "@/lib/config"
import { Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl font-bold md:text-5xl text-balance">Contact Us</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                Have questions about our services? We'd love to hear from you. Reach out and we'll respond within 24
                hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-6">Get In Touch</h2>
                  <div className="space-y-4">
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Call or Text</p>
                        <p className="font-semibold">{CONTACT_INFO.phone}</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold">{CONTACT_INFO.email}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Response Time</p>
                        <p className="font-semibold">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href={CONTACT_INFO.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href={CONTACT_INFO.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href={CONTACT_INFO.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                      aria-label="Follow us on TikTok"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Quick Link to Booking */}
                <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Ready to Book?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Skip the inquiry and book your hibachi event directly.
                  </p>
                  <Button asChild>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
