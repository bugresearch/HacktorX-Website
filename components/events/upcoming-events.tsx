"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  Building2,
  ArrowRight,
} from "lucide-react"
import { upcomingEvents, typeColors } from "@/lib/events-data"

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center bg-secondary rounded-lg px-3 py-2">
        <span className="text-lg font-bold text-primary">{timeLeft.days}</span>
        <span className="text-xs text-muted-foreground">days</span>
      </div>
      <div className="flex flex-col items-center bg-secondary rounded-lg px-3 py-2">
        <span className="text-lg font-bold text-primary">{timeLeft.hours}</span>
        <span className="text-xs text-muted-foreground">hrs</span>
      </div>
      <div className="flex flex-col items-center bg-secondary rounded-lg px-3 py-2">
        <span className="text-lg font-bold text-primary">{timeLeft.minutes}</span>
        <span className="text-xs text-muted-foreground">min</span>
      </div>
    </div>
  )
}

export function UpcomingEvents() {
  return (
    <div className="space-y-6">
      {upcomingEvents.map((event) => (
        <Link
          key={event.id}
          href={`/events/${event.id}`}
          className="group block rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50"
        >
          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              {/* Event Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge className={typeColors[event.type]}>{event.type}</Badge>
                  {event.location === "Online" ? (
                    <Badge variant="outline" className="gap-1">
                      <Video className="h-3 w-3" />
                      Online
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="gap-1">
                      <Building2 className="h-3 w-3" />
                      In-Person
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <p className="mt-2 text-muted-foreground line-clamp-2">
                  {event.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.location}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  {event.attendees}+ registered
                </div>
              </div>

              {/* Countdown & View Details */}
              <div className="flex flex-col items-start lg:items-end gap-4">
                {event.countdown && <Countdown targetDate={event.countdown} />}
                <Button className="gap-2">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
