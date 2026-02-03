import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Play, ArrowRight } from "lucide-react"
import { pastEvents, typeColors } from "@/lib/events-data"

export function PastEvents() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pastEvents.map((event) => (
        <Link
          key={event.id}
          href={`/events/${event.id}`}
          className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50"
        >
          {/* Placeholder Image */}
          <div className="relative h-40 bg-secondary flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50" />
            <div className="relative text-4xl font-bold text-muted-foreground/30">
              {event.type.slice(0, 1)}
            </div>
            {event.hasRecording && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <Play className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Badge className={typeColors[event.type]}>{event.type}</Badge>
            </div>

            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {event.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {event.description}
            </p>

            <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              {event.date}
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                View Details
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
