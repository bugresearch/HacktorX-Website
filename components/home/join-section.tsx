"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { UserPlus, CheckCircle2, Shield, Users, BookOpen, Flag } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Exclusive Resources",
    description: "Access premium courses, tools, and research materials",
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Connect with 5,000+ cybersecurity professionals",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Weekly webinars, workshops, and hands-on labs",
  },
  {
    icon: Flag,
    title: "CTF Access",
    description: "Compete in exclusive capture-the-flag challenges",
  },
]

const expertiseOptions = [
  "Penetration Testing",
  "Incident Response",
  "Cloud Security",
  "Application Security",
  "Threat Intelligence",
  "Security Operations",
  "GRC / Compliance",
  "Malware Analysis",
  "Digital Forensics",
  "Other",
]

const experienceOptions = [
  "Student / Beginner",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
]

export function JoinSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    expertise: "",
    experience: "",
    linkedin: "",
    reason: "",
    consent: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Join form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="join" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Application Received!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Thank you for your interest in joining CyberNexus. We will review your application 
              and get back to you within 48 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="join" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Info */}
          <div>
            <div className="flex items-center gap-2 text-primary mb-4">
              <UserPlus className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Join Our Community
              </span>
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl text-balance">
              Become a <span className="text-primary">CyberNexus</span> Member
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Join an elite community of cybersecurity professionals. Network with experts, 
              access exclusive resources, and accelerate your security career.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-6">Application Form</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="expertise">Area of Expertise *</Label>
                  <Select
                    value={formData.expertise}
                    onValueChange={(value) =>
                      setFormData({ ...formData, expertise: value })
                    }
                    required
                  >
                    <SelectTrigger id="expertise">
                      <SelectValue placeholder="Select your area" />
                    </SelectTrigger>
                    <SelectContent>
                      {expertiseOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) =>
                      setFormData({ ...formData, experience: value })
                    }
                    required
                  >
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile (optional)</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/johndoe"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedin: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Why do you want to join? *</Label>
                <Textarea
                  id="reason"
                  required
                  placeholder="Tell us about your goals and what you hope to contribute to the community..."
                  rows={4}
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked === true })
                  }
                />
                <Label
                  htmlFor="consent"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I agree to the community guidelines and consent to receive communications 
                  from CyberNexus. I understand my application will be reviewed before approval.
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!formData.consent}
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
