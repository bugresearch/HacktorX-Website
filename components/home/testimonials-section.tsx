"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Michael Torres",
    title: "Security Engineer",
    company: "Fortune 500 Tech Company",
    quote:
      "CyberNexus completely transformed my career. I went from a help desk role to a security engineer position in just 18 months. The CTF challenges and courses gave me practical skills that impressed interviewers.",
    achievement: "Landed dream job",
    rating: 5,
  },
  {
    id: 2,
    name: "Lisa Park",
    title: "Penetration Tester",
    company: "Leading Security Firm",
    quote:
      "The community here is incredible. I've learned more from networking with other members than any formal training. The red team workshop literally taught me techniques I now use daily in my pentests.",
    achievement: "OSCP Certified",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmed Yusuf",
    title: "SOC Analyst",
    company: "Financial Services",
    quote:
      "As someone from a non-traditional background, I wasn't sure if cybersecurity was for me. CyberNexus welcomed me with open arms. The beginner CTF challenges built my confidence, and now I'm a SOC analyst!",
    achievement: "Career switcher",
    rating: 5,
  },
  {
    id: 4,
    name: "Jennifer Wu",
    title: "Cloud Security Architect",
    company: "Global SaaS Company",
    quote:
      "The cloud security content here is top-notch. Emily's courses on AWS security helped me pass my CCSP on the first try and get promoted to architect. Best investment I've made in my career.",
    achievement: "CCSP Certified",
    rating: 5,
  },
  {
    id: 5,
    name: "Carlos Mendez",
    title: "Bug Bounty Hunter",
    company: "Independent",
    quote:
      "I earned my first $10,000 bounty using techniques I learned from CyberNexus CTF challenges. The API security module was a game-changer. Now I do bug bounty full-time thanks to this community.",
    achievement: "$50K+ in bounties",
    rating: 5,
  },
  {
    id: 6,
    name: "Sarah O'Brien",
    title: "Incident Response Lead",
    company: "Healthcare Organization",
    quote:
      "When we had a major ransomware incident, I used the IR playbook templates from CyberNexus. They literally saved us millions in potential damages. This community gives back more than you can imagine.",
    achievement: "Stopped major breach",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Quote className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl text-balance">
            Hear from Our Community
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real stories from real members who transformed their careers with CyberNexus.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Main testimonial */}
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {currentTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.title} at {currentTestimonial.company}
                  </p>
                </div>
              </div>
              <Badge className="w-fit bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                {currentTestimonial.achievement}
              </Badge>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-10 w-10 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-10 w-10 bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
