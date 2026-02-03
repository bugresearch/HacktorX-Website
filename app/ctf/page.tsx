import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Flag,
  Trophy,
  Target,
  Users,
  Clock,
  Shield,
  Code,
  Lock,
  Network,
  Database,
  ExternalLink,
  ArrowRight,
  Zap,
  Award,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "CTF Platform - CyberNexus",
  description:
    "Test your hacking skills with our Capture The Flag challenges. Join competitions and climb the global leaderboard.",
}

const categories = [
  {
    name: "Web Exploitation",
    icon: Code,
    description: "SQL injection, XSS, CSRF, and modern web vulnerabilities",
    challenges: 45,
    color: "text-blue-400",
  },
  {
    name: "Cryptography",
    icon: Lock,
    description: "Classical ciphers, modern crypto, and hash cracking",
    challenges: 38,
    color: "text-purple-400",
  },
  {
    name: "Reverse Engineering",
    icon: Target,
    description: "Binary analysis, malware, and disassembly challenges",
    challenges: 32,
    color: "text-red-400",
  },
  {
    name: "Network Security",
    icon: Network,
    description: "Packet analysis, MITM, and protocol exploitation",
    challenges: 28,
    color: "text-cyan-400",
  },
  {
    name: "Forensics",
    icon: Database,
    description: "Memory dumps, disk images, and artifact analysis",
    challenges: 35,
    color: "text-orange-400",
  },
  {
    name: "Pwn / Binary",
    icon: Shield,
    description: "Buffer overflows, ROP chains, and exploitation",
    challenges: 25,
    color: "text-green-400",
  },
]

const stats = [
  { label: "Active Challenges", value: "200+", icon: Flag },
  { label: "Global Players", value: "8,500+", icon: Users },
  { label: "Monthly Competitions", value: "12", icon: Trophy },
  { label: "Prize Pool (Annual)", value: "$50K+", icon: Award },
]

const upcomingEvents = [
  {
    title: "Spring CTF Championship 2026",
    date: "March 15-17, 2026",
    type: "48hr Competition",
    prize: "$15,000",
  },
  {
    title: "Weekly Challenge Drop",
    date: "Every Friday",
    type: "New Challenges",
    prize: "Points + Badges",
  },
  {
    title: "Beginner Bootcamp CTF",
    date: "February 28, 2026",
    type: "Training Event",
    prize: "Certificates",
  },
]

export default function CTFPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-6 gap-2 bg-primary/10 text-primary border-primary/30">
                <Flag className="h-3.5 w-3.5" />
                Capture The Flag
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Test Your <span className="text-primary">Hacking Skills</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Join thousands of security enthusiasts on our CTF platform. Solve
                real-world challenges, compete in global competitions, and prove
                your expertise.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <a
                    href="https://ctf.cybernexus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch CTF Platform
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#categories">View Categories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-border bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Target className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Challenge Categories
                </span>
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Master Every Domain
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                From web exploitation to binary pwning, our challenges cover all
                aspects of offensive security.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {category.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {category.challenges} challenges
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 sm:py-28 border-t border-border bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  How It Works
                </span>
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Start Hacking in Minutes
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Create Account",
                  description:
                    "Sign up on our CTF platform with your CyberNexus membership or create a free account.",
                },
                {
                  step: "02",
                  title: "Choose Challenge",
                  description:
                    "Browse categories, select a difficulty level, and pick a challenge that interests you.",
                },
                {
                  step: "03",
                  title: "Capture Flags",
                  description:
                    "Solve challenges, find hidden flags, submit them, and climb the global leaderboard.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary text-xl font-bold text-primary mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 sm:py-28 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Upcoming CTF Events
                </span>
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Compete & Win Prizes
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <Badge variant="outline" className="mb-4">
                    {event.type}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">{event.prize}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://ctf.cybernexus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to CTF Platform
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
