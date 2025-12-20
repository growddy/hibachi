import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ReviewCardProps {
  name: string
  rating: number
  text: string
  eventType: string
}

export function ReviewCard({ name, rating, text, eventType }: ReviewCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted"}`} />
          ))}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{eventType}</p>
        </div>
      </CardContent>
    </Card>
  )
}
