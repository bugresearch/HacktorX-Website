"use client"

import React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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
import {
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Shield,
  Key,
} from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "YouTube", href: "#", icon: Youtube },
]

const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGXk...
[Full PGP key would go here]
...
-----END PGP PUBLIC KEY BLOCK-----`

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPgp, setShowPgp] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Get in Touch
                </span>
              </div>
              <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
              <p className="mt-2 text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="security">Security Disclosure</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="rounded-xl border border-border bg-card p-8">
                  <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:contact@cybernexus.io"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          contact@cybernexus.io
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Security Reports</p>
                        <a
                          href="mailto:security@cybernexus.io"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          security@cybernexus.io
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">
                          123 Security Street<br />
                          San Francisco, CA 94102<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="rounded-xl border border-border bg-card p-8">
                  <h2 className="text-xl font-semibold mb-6">Follow Us</h2>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary transition-all hover:border-primary/50 hover:text-primary"
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* PGP Key */}
                <div className="rounded-xl border border-border bg-card p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <Key className="h-5 w-5 text-primary" />
                      Secure Communication
                    </h2>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowPgp(!showPgp)}
                    >
                      {showPgp ? "Hide" : "Show"} PGP Key
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    For sensitive security disclosures, please encrypt your message using our PGP key.
                  </p>
                  {showPgp && (
                    <div className="rounded-lg bg-secondary p-4 overflow-x-auto">
                      <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap">
                        {pgpKey}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
