import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl font-bold mb-8">Terms & Conditions</h1>

              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="font-serif text-2xl font-bold mb-4">1. Booking & Deposits</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A 25% non-refundable deposit is required to secure your event date. The remaining balance is due on
                    the day of the event, prior to service. We accept cash, credit cards, and digital payment methods.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold mb-4">2. Cancellation Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cancellations made more than 7 days before the event will receive a 50% refund of the deposit.
                    Cancellations within 7 days of the event will forfeit the full deposit. Rescheduling is available
                    subject to availability.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold mb-4">3. Guest Count</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Final guest count must be confirmed 48 hours before the event. We require a minimum of 10 guests for
                    all bookings. Additional guests can be accommodated with advance notice and are subject to
                    additional charges.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold mb-4">4. Venue Requirements</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The host is responsible for providing a suitable cooking area with adequate ventilation, access to
                    electrical outlets (standard 120V), and a flat, stable surface. We recommend outdoor or covered
                    patio areas. Indoor events require proper ventilation.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold mb-4">5. Food Safety & Allergies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Please inform us of any food allergies or dietary restrictions at least 48 hours before your event.
                    While we take precautions, cross-contamination may occur. Guests with severe allergies should
                    exercise appropriate caution.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold mb-4">6. Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dynamite Hibachi carries comprehensive liability insurance. However, the host assumes responsibility
                    for their guests' safety and behavior. We are not liable for injuries caused by guest misconduct or
                    pre-existing venue hazards.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold mb-4">7. Weather Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For outdoor events, we may need to reschedule due to severe weather conditions. We will work with
                    you to find an alternative date at no additional cost if weather-related cancellation is necessary.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold mb-4">8. Gratuity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Gratuity is not included in our pricing and is at the discretion of the host. Tips for our chefs are
                    greatly appreciated for exceptional service.
                  </p>
                </section>

                <p className="text-sm text-muted-foreground pt-8 border-t border-border">
                  Last updated: January 2025. These terms are subject to change. Please review them before each booking.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
