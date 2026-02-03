"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  User,
  Users,
  Video,
  Building2,
  CheckCircle2,
  Download,
  Play,
  ImageIcon,
} from "lucide-react"
import type { Event } from "@/lib/events-data"
import { typeColors } from "@/lib/events-data"
import React from "react"

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-3">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center bg-secondary rounded-lg px-4 py-3"
        >
          <span className="text-2xl font-bold text-primary">{item.value}</span>
          <span className="text-xs text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export function EventDetail({ event }: { event: Event }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
    dietary: "",
    questions: "",
    consent: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration submitted:", formData)
    setIsSubmitted(true)
  }

  return (
    <article className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className={typeColors[event.type]}>{event.type}</Badge>
            {event.isPast ? (
              <Badge variant="secondary">Past Event</Badge>
            ) : event.location === "Online" ? (
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

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-balance leading-tight">
            {event.title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {event.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {event.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {event.time}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {event.location}
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              {event.attendees}+ {event.isPast ? "attended" : "registered"}
            </div>
          </div>

          {/* Countdown or Past Event Resources */}
          <div className="mt-8">
            {!event.isPast && event.countdown ? (
              <div className="p-6 rounded-xl border border-border bg-card">
                <p className="text-sm text-muted-foreground mb-4">Event starts in:</p>
                <Countdown targetDate={event.countdown} />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full mt-6">
                      Register Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
                    {isSubmitted ? (
                      <div className="py-8 text-center">
                        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                        <DialogTitle>Registration Complete!</DialogTitle>
                        <DialogDescription className="mt-2">
                          You will receive a confirmation email shortly with event details.
                        </DialogDescription>
                      </div>
                    ) : (
                      <>
                        <DialogHeader>
                          <DialogTitle>Register for {event.title}</DialogTitle>
                          <DialogDescription>
                            Fill out the form below to secure your spot.
                          </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="fullName">Full Name *</Label>
                              <Input
                                id="fullName"
                                required
                                value={formData.fullName}
                                onChange={(e) =>
                                  setFormData({ ...formData, fullName: e.target.value })
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                                }
                              />
                            </div>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="company">Company</Label>
                              <Input
                                id="company"
                                value={formData.company}
                                onChange={(e) =>
                                  setFormData({ ...formData, company: e.target.value })
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="jobTitle">Job Title</Label>
                              <Input
                                id="jobTitle"
                                value={formData.jobTitle}
                                onChange={(e) =>
                                  setFormData({ ...formData, jobTitle: e.target.value })
                                }
                              />
                            </div>
                          </div>

                          {event.location !== "Online" && (
                            <div className="space-y-2">
                              <Label htmlFor="dietary">Dietary Restrictions</Label>
                              <Select
                                value={formData.dietary}
                                onValueChange={(value) =>
                                  setFormData({ ...formData, dietary: value })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select if applicable" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="none">None</SelectItem>
                                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                                  <SelectItem value="vegan">Vegan</SelectItem>
                                  <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                                  <SelectItem value="halal">Halal</SelectItem>
                                  <SelectItem value="kosher">Kosher</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          )}

                          <div className="space-y-2">
                            <Label htmlFor="questions">Questions for Speaker</Label>
                            <Textarea
                              id="questions"
                              placeholder="Any questions you'd like addressed during the event?"
                              value={formData.questions}
                              onChange={(e) =>
                                setFormData({ ...formData, questions: e.target.value })
                              }
                            />
                          </div>

                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="consent"
                              checked={formData.consent}
                              onCheckedChange={(checked) =>
                                setFormData({ ...formData, consent: checked === true })
                              }
                            />
                            <Label
                              htmlFor="consent"
                              className="text-sm text-muted-foreground leading-relaxed"
                            >
                              I agree to receive event updates and communications.
                            </Label>
                          </div>

                          <Button type="submit" className="w-full" disabled={!formData.consent}>
                            Complete Registration
                          </Button>
                        </form>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            ) : event.isPast ? (
              <div className="p-6 rounded-xl border border-border bg-card">
                <p className="text-sm font-medium mb-4">Event Resources</p>
                <div className="flex flex-wrap gap-3">
                  {event.hasRecording && (
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Play className="h-4 w-4" />
                      Watch Recording
                    </Button>
                  )}
                  {event.hasSlides && (
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Download className="h-4 w-4" />
                      Download Slides
                    </Button>
                  )}
                  {event.hasPhotos && (
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <ImageIcon className="h-4 w-4" />
                      View Photos
                    </Button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </header>

        {/* Speaker */}
        {event.speaker !== "Multiple" && event.speaker !== "N/A" && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Speaker</h2>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary">
                  {event.speaker
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{event.speaker}</span>
                  </div>
                  {event.speakerBio && (
                    <p className="mt-2 text-muted-foreground">{event.speakerBio}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Agenda */}
        {event.agenda && event.agenda.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Agenda</h2>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              {event.agenda.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 border-b border-border last:border-0"
                >
                  <div className="w-24 shrink-0 text-sm font-mono text-primary">
                    {item.time}
                  </div>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Highlights */}
        {event.highlights && event.highlights.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Highlights</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {event.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
