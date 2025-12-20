"use client"

import Image from "next/image"

interface USMapProps {
  servicedStates: string[]
  comingSoonStates?: string[]
}

export function USMap({ servicedStates, comingSoonStates = [] }: USMapProps) {
  return (
    <div className="w-full">
      {/* Map Image */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border bg-muted/30">
        <Image
          src="/continental-united-states-map-outline-with-state-b.jpg"
          alt="Continental United States Map"
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary" />
          <span className="text-sm text-muted-foreground">Currently Serving</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-amber-500" />
          <span className="text-sm text-muted-foreground">Coming Soon</span>
        </div>
      </div>

      {/* State Lists */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="font-semibold text-lg mb-3 text-primary">Currently Serving</h3>
          <div className="flex flex-wrap gap-2">
            {servicedStates.map((state) => (
              <span key={state} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {state}
              </span>
            ))}
          </div>
        </div>
        {comingSoonStates.length > 0 && (
          <div>
            <h3 className="font-semibold text-lg mb-3 text-amber-600">Coming Soon</h3>
            <div className="flex flex-wrap gap-2">
              {comingSoonStates.map((state) => (
                <span key={state} className="px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-sm">
                  {state}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
