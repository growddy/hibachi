"use client"

import { useState, useMemo } from "react"
import { Minus, Plus, Users, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"

const PRICING = {
  basePerPerson: 55,
  premiumPerPerson: 75,
  kidDiscount: 15, // Kids cost this much less per person
  minimumGuests: 10,
  travelFeePerMile: 1.5,
  includedMiles: 30,
}

const packageOptions = [
  {
    id: "standard",
    name: "Standard Package",
    description: "Chicken, steak, shrimp with fried rice & vegetables",
    pricePerPerson: PRICING.basePerPerson,
  },
  {
    id: "premium",
    name: "Premium Package",
    description: "Filet mignon, lobster, salmon with premium sides",
    pricePerPerson: PRICING.premiumPerPerson,
  },
]

export function CostCalculator() {
  const [adults, setAdults] = useState(10)
  const [kids, setKids] = useState(0)
  const [selectedPackage, setSelectedPackage] = useState("standard")
  const [distance, setDistance] = useState(15)

  const totalGuests = adults + kids

  const estimate = useMemo(() => {
    const pkg = packageOptions.find((p) => p.id === selectedPackage)
    if (!pkg) return { subtotal: 0, travelFee: 0, total: 0 }

    const adultCost = adults * pkg.pricePerPerson
    const kidCost = kids * (pkg.pricePerPerson - PRICING.kidDiscount)
    const subtotal = adultCost + kidCost

    const extraMiles = Math.max(0, distance - PRICING.includedMiles)
    const travelFee = extraMiles * PRICING.travelFeePerMile

    const total = subtotal + travelFee

    return { subtotal, travelFee, total }
  }, [adults, kids, selectedPackage, distance])

  const incrementAdults = () => setAdults((prev) => Math.min(prev + 1, 100))
  const decrementAdults = () => setAdults((prev) => Math.max(prev - 1, PRICING.minimumGuests - kids))
  const incrementKids = () => setKids((prev) => Math.min(prev + 1, 50))
  const decrementKids = () => setKids((prev) => Math.max(prev - 1, 0))

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Cost Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Package Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Select Package</Label>
          <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage} className="grid gap-3">
            {packageOptions.map((pkg) => (
              <label
                key={pkg.id}
                className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedPackage === pkg.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value={pkg.id} id={pkg.id} className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{pkg.name}</span>
                    <span className="font-semibold text-primary">${pkg.pricePerPerson}/person</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
                </div>
              </label>
            ))}
          </RadioGroup>
        </div>

        {/* Guest Count */}
        <div className="space-y-4">
          <Label className="text-base font-semibold flex items-center gap-2">
            <Users className="h-4 w-4" />
            Number of Guests
          </Label>

          {/* Adults */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Adults</p>
              <p className="text-sm text-muted-foreground">12 years and older</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementAdults}
                disabled={totalGuests <= PRICING.minimumGuests}
                aria-label="Decrease adults"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-semibold text-lg">{adults}</span>
              <Button variant="outline" size="icon" onClick={incrementAdults} aria-label="Increase adults">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Kids */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Kids</p>
              <p className="text-sm text-muted-foreground">Under 12 (${PRICING.kidDiscount} discount each)</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementKids}
                disabled={kids === 0}
                aria-label="Decrease kids"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-semibold text-lg">{kids}</span>
              <Button variant="outline" size="icon" onClick={incrementKids} aria-label="Increase kids">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Minimum {PRICING.minimumGuests} guests required. Total guests: {totalGuests}
          </p>
        </div>

        {/* Distance */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Distance from Our Location</Label>
            <span className="font-medium">{distance} miles</span>
          </div>
          <Slider
            value={[distance]}
            onValueChange={(value) => setDistance(value[0])}
            min={0}
            max={100}
            step={5}
            className="w-full"
            aria-label="Distance in miles"
          />
          <p className="text-sm text-muted-foreground">
            First {PRICING.includedMiles} miles included. ${PRICING.travelFeePerMile}/mile after.
          </p>
        </div>

        {/* Cost Breakdown */}
        <div className="border-t pt-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Food & Service ({totalGuests} guests)</span>
            <span>${estimate.subtotal.toLocaleString()}</span>
          </div>
          {estimate.travelFee > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Travel Fee ({distance - PRICING.includedMiles} extra miles)</span>
              <span>${estimate.travelFee.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold pt-3 border-t">
            <span>Estimated Total</span>
            <span className="text-primary">${estimate.total.toLocaleString()}</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          This is an estimate only. Final pricing may vary based on specific menu selections, venue requirements, and
          other factors. Contact us for a detailed quote.
        </p>
      </CardContent>
    </Card>
  )
}
