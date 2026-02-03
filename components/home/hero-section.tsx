import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Terminal, Code } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Elite Cybersecurity Community
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hacktor
            <span className="text-primary">X</span>
          </h1>

          <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
            Join thousands of security professionals, ethical hackers, and researchers. 
            Access exclusive CTF challenges, cutting-edge courses, and connect with 
            the brightest minds in cybersecurity.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="/members">
                Join Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ctf">Explore CTF Challenges</Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Terminal, label: "Hands-on Labs" },
              { icon: Code, label: "Real-world Challenges" },
              { icon: Shield, label: "Expert Community" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
