"use client"

import { useState, useMemo } from "react"
import { Users, Calculator, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const PRICING = {
  adultPrice: 50,
  childPrice: 25, // Under 13
  minimumGuests: 10,
  filetUpgrade: 5,
  lobsterUpgrade: 10,
}

const includedItems = [
  "Salad",
  "Vegetable",
  "Two proteins (choose from steak, shrimp, chicken, salmon, scallop, tofu)",
]

const additionalItems = [
  { name: "Gyoza (pork, 6pcs)", price: 10 },
  { name: "Edamame", price: 5 },
  { name: "Noodles", price: 4 },
]

export function CostCalculator() {
  const [adults, setAdults] = useState(10)
  const [children, setChildren] = useState(0)
  const [filetUpgrades, setFiletUpgrades] = useState(0)
  const [lobsterUpgrades, setLobsterUpgrades] = useState(0)

  const totalGuests = adults + children

  const estimate = useMemo(() => {
    const adultCost = adults * PRICING.adultPrice
    const childCost = children * PRICING.childPrice
    const baseSubtotal = adultCost + childCost

    const filetCost = filetUpgrades * PRICING.filetUpgrade
    const lobsterCost = lobsterUpgrades * PRICING.lobsterUpgrade
    const upgradeTotal = filetCost + lobsterCost

    const total = baseSubtotal + upgradeTotal

    return { baseSubtotal, filetCost, lobsterCost, upgradeTotal, total }
  }, [adults, children, filetUpgrades, lobsterUpgrades])

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Cost Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Guest Count - Adults */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Users className="h-4 w-4" />
              Number of Adults
            </Label>
            <span className="font-semibold text-lg">{adults}</span>
          </div>
          <Slider
            value={[adults]}
            onValueChange={(value) => setAdults(value[0])}
            min={Math.max(0, PRICING.minimumGuests - children)}
            max={100}
            step={1}
            className="w-full"
            aria-label="Number of adults"
          />
          <p className="text-sm text-muted-foreground">${PRICING.adultPrice} per adult</p>
        </div>

        {/* Guest Count - Children */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Number of Children (Under 13)</Label>
            <span className="font-semibold text-lg">{children}</span>
          </div>
          <Slider
            value={[children]}
            onValueChange={(value) => setChildren(value[0])}
            min={Math.max(0, PRICING.minimumGuests - adults)}
            max={50}
            step={1}
            className="w-full"
            aria-label="Number of children"
          />
          <p className="text-sm text-muted-foreground">${PRICING.childPrice} per child</p>
        </div>

        {/* Minimum requirement note */}
        <div className="bg-secondary/50 p-3 rounded-lg">
          <p className="text-sm font-medium">
            Minimum {PRICING.minimumGuests} guests required. Total guests: {totalGuests}
          </p>
        </div>

        {/* Included Items */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">What's Included</Label>
          <div className="space-y-2">
            {includedItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Protein Upgrades */}
        <div className="space-y-6 border-t pt-6">
          <Label className="text-base font-semibold">Protein Upgrades (Optional)</Label>

          {/* Filet Mignon Upgrades */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Filet Mignon Upgrades</Label>
                <p className="text-sm text-muted-foreground">${PRICING.filetUpgrade} per upgrade</p>
              </div>
              <span className="font-semibold text-lg">{filetUpgrades}</span>
            </div>
            <Slider
              value={[filetUpgrades]}
              onValueChange={(value) => setFiletUpgrades(value[0])}
              min={0}
              max={totalGuests}
              step={1}
              className="w-full"
              aria-label="Number of Filet Mignon upgrades"
            />
          </div>

          {/* Lobster Upgrades */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Lobster Upgrades</Label>
                <p className="text-sm text-muted-foreground">${PRICING.lobsterUpgrade} per upgrade</p>
              </div>
              <span className="font-semibold text-lg">{lobsterUpgrades}</span>
            </div>
            <Slider
              value={[lobsterUpgrades]}
              onValueChange={(value) => setLobsterUpgrades(value[0])}
              min={0}
              max={totalGuests}
              step={1}
              className="w-full"
              aria-label="Number of Lobster upgrades"
            />
          </div>
        </div>

        {/* Additional Items Note */}
        <div className="space-y-2 border-t pt-6">
          <Label className="text-base font-semibold">Additional Items Available</Label>
          <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
            {additionalItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <span>{item.name}</span>
                <span className="font-medium">${item.price}</span>
              </div>
            ))}
            <p className="text-xs text-muted-foreground mt-2">
              These items can be added to your order when booking.
            </p>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="border-t pt-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Base Cost ({adults} adults × ${PRICING.adultPrice} + {children} children × ${PRICING.childPrice})
            </span>
            <span>${estimate.baseSubtotal.toLocaleString()}</span>
          </div>
          {estimate.filetCost > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Filet Mignon Upgrades ({filetUpgrades} × ${PRICING.filetUpgrade})
              </span>
              <span>${estimate.filetCost.toLocaleString()}</span>
            </div>
          )}
          {estimate.lobsterCost > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Lobster Upgrades ({lobsterUpgrades} × ${PRICING.lobsterUpgrade})
              </span>
              <span>${estimate.lobsterCost.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold pt-3 border-t">
            <span>Estimated Subtotal</span>
            <span className="text-primary">${estimate.total.toLocaleString()}</span>
          </div>
          <p className="text-sm text-muted-foreground pt-2">
            *Gratuity not included. Suggested gratuity is 20% of total bill.
          </p>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          This is an estimate only. Final pricing may vary based on specific menu selections, venue requirements, and
          other factors. Contact us for a detailed quote.
        </p>
      </CardContent>
    </Card>
  )
}
