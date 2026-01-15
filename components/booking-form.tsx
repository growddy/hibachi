"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, CheckCircle, Utensils, MapPin, User } from "lucide-react"

const eventTypes = [
  "Birthday Party",
  "Graduation",
  "Anniversary",
  "Corporate Event",
  "Holiday Celebration",
  "Wedding/Rehearsal",
  "Baby Shower",
  "Other",
]

const timeSlots = [
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
]

const guestRanges = ["10-15", "16-25", "26-40", "41-60", "60+"]

const packageOptions = [
  { id: "standard", name: "Standard Package", price: "$55/person" },
  { id: "premium", name: "Premium Package", price: "$75/person" },
]

type Step = 1 | 2 | 3 | 4

export function BookingForm() {
  const [step, setStep] = useState<Step>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    // Step 1: Event Details
    eventDate: "",
    eventTime: "",
    eventType: "",
    guestCount: "",
    // Step 2: Package
    package: "standard",
    dietaryNotes: "",
    // Step 3: Location
    venueType: "home",
    address: "",
    city: "",
    state: "",
    zip: "",
    venueNotes: "",
    // Step 4: Contact
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    howHeard: "",
    additionalNotes: "",
  })

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4) as Step)
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1) as Step)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-16 px-6 bg-card border border-border rounded-lg">
        <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
        <h2 className="font-serif text-3xl font-bold mb-4">Booking Request Received!</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-2">
          Thank you for choosing Dynamite Hibachi! Our event coordinator will contact you within 24-48 hours to confirm
          your reservation.
        </p>
        <p className="text-sm text-muted-foreground mb-8">Check your email for a confirmation with the details.</p>
        <Button onClick={() => window.location.reload()} variant="outline">
          Book Another Event
        </Button>
      </div>
    )
  }

  const stepTitles = [
    { num: 1, label: "Event Details", icon: Calendar },
    { num: 2, label: "Package", icon: Utensils },
    { num: 3, label: "Location", icon: MapPin },
    { num: 4, label: "Contact", icon: User },
  ]

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Progress Steps */}
      <div className="border-b border-border p-4">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {stepTitles.map((s, idx) => (
            <div key={s.num} className="flex items-center">
              <div className={`flex items-center gap-2 ${step >= s.num ? "text-primary" : "text-muted-foreground"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= s.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s.num ? <CheckCircle className="h-4 w-4" /> : s.num}
                </div>
                <span className="hidden sm:block text-sm font-medium">{s.label}</span>
              </div>
              {idx < stepTitles.length - 1 && (
                <div className={`w-8 sm:w-16 h-0.5 mx-2 ${step > s.num ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        {/* Step 1: Event Details */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="font-serif text-xl font-bold">Event Details</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="eventDate">Preferred Date *</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => updateFormData("eventDate", e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventTime">Preferred Time *</Label>
                <Select value={formData.eventTime} onValueChange={(v) => updateFormData("eventTime", v)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type *</Label>
                <Select value={formData.eventType} onValueChange={(v) => updateFormData("eventType", v)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guestCount">Number of Guests *</Label>
                <Select value={formData.guestCount} onValueChange={(v) => updateFormData("guestCount", v)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select guest range" />
                  </SelectTrigger>
                  <SelectContent>
                    {guestRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range} guests
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="button" onClick={nextStep} disabled={!formData.eventDate || !formData.eventTime}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Package Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Utensils className="h-5 w-5 text-primary" />
              <h2 className="font-serif text-xl font-bold">Select Package</h2>
            </div>

            <RadioGroup
              value={formData.package}
              onValueChange={(v) => updateFormData("package", v)}
              className="grid gap-4"
            >
              {packageOptions.map((pkg) => (
                <label
                  key={pkg.id}
                  className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                    formData.package === pkg.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={pkg.id} id={pkg.id} />
                    <div>
                      <span className="font-medium">{pkg.name}</span>
                      <p className="text-sm text-muted-foreground">
                        {pkg.id === "standard"
                          ? "Chicken, steak, shrimp with fried rice & vegetables"
                          : "Filet mignon, lobster, salmon with premium sides"}
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-primary">{pkg.price}</span>
                </label>
              ))}
            </RadioGroup>

            <div className="space-y-2">
              <Label htmlFor="dietaryNotes">Dietary Restrictions / Special Requests</Label>
              <Textarea
                id="dietaryNotes"
                value={formData.dietaryNotes}
                onChange={(e) => updateFormData("dietaryNotes", e.target.value)}
                placeholder="List any allergies, vegetarian needs, or special dietary requirements..."
                rows={3}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button type="button" onClick={nextStep}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Location */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="font-serif text-xl font-bold">Event Location</h2>
            </div>

            <div className="space-y-2">
              <Label>Venue Type *</Label>
              <RadioGroup
                value={formData.venueType}
                onValueChange={(v) => updateFormData("venueType", v)}
                className="flex gap-4"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem value="home" id="home" />
                  <span>Private Residence</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem value="venue" id="venue" />
                  <span>Rented Venue</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem value="office" id="office" />
                  <span>Office/Business</span>
                </label>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => updateFormData("address", e.target.value)}
                placeholder="123 Main Street"
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                  placeholder="Dallas"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => updateFormData("state", e.target.value)}
                  placeholder="TX"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code *</Label>
                <Input
                  id="zip"
                  value={formData.zip}
                  onChange={(e) => updateFormData("zip", e.target.value)}
                  placeholder="75001"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="venueNotes">Venue Notes (optional)</Label>
              <Textarea
                id="venueNotes"
                value={formData.venueNotes}
                onChange={(e) => updateFormData("venueNotes", e.target.value)}
                placeholder="Gate code, parking instructions, or venue-specific details..."
                rows={2}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button
                type="button"
                onClick={nextStep}
                disabled={!formData.address || !formData.city || !formData.state}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <User className="h-5 w-5 text-primary" />
              <h2 className="font-serif text-xl font-bold">Your Information</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="John"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="howHeard">How did you hear about us?</Label>
              <Select value={formData.howHeard} onValueChange={(v) => updateFormData("howHeard", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="referral">Friend/Family Referral</SelectItem>
                  <SelectItem value="event">Attended an Event</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => updateFormData("additionalNotes", e.target.value)}
                placeholder="Anything else we should know about your event?"
                rows={3}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button type="submit" disabled={isSubmitting || !formData.email || !formData.phone}>
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
