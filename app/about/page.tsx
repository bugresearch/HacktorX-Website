import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Shield,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  Scale,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us - CyberNexus",
  description: "Learn about our mission, team, and community guidelines.",
}

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & CEO",
    bio: "Former NSA analyst with 15+ years in offensive security. PhD in Computer Science from MIT.",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Marcus Williams",
    role: "CTO",
    bio: "Ex-Google security engineer. Built security infrastructure for Fortune 500 companies.",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Education",
    bio: "Award-winning educator with background in curriculum development for SANS Institute.",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "James Park",
    role: "CTF Platform Lead",
    bio: "Top-ranked CTF player. Created challenges for DEF CON, Google CTF, and more.",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Priya Sharma",
    role: "Community Director",
    bio: "Community builder with 10+ years experience in tech communities and developer relations.",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "David Kim",
    role: "Head of Events",
    bio: "Organized 100+ security conferences and workshops. Previously at Black Hat and RSA.",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
]

const guidelines = [
  {
    icon: Heart,
    title: "Respect Everyone",
    description: "Treat all community members with respect regardless of skill level, background, or experience.",
  },
  {
    icon: Scale,
    title: "Ethical Conduct",
    description: "Only use skills for authorized testing. Never engage in unauthorized access or malicious activities.",
  },
  {
    icon: Lightbulb,
    title: "Share Knowledge",
    description: "Help others learn and grow. Share your knowledge while respecting intellectual property.",
  },
  {
    icon: Users,
    title: "Collaborate",
    description: "Work together on challenges and projects. Competition should be friendly and constructive.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  About CyberNexus
                </span>
              </div>
              <h1 className="text-4xl font-bold sm:text-5xl">
                Building the Future of{" "}
                <span className="text-primary">Cybersecurity</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Founded in 2020, CyberNexus has grown to become one of the world's leading 
                cybersecurity communities. We bring together professionals, researchers, and 
                enthusiasts to learn, compete, and advance the field of security.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-y border-border bg-card/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To democratize cybersecurity education and create a global community where 
                  anyone can learn, practice, and master security skills. We believe that 
                  accessible education and collaboration are key to building a more secure digital world.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A world where cybersecurity talent is abundant, diverse, and equipped to 
                  protect our digital infrastructure. We envision a future where every 
                  organization has access to skilled defenders and every aspiring security 
                  professional has a clear path to success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
              <p className="mt-2 text-muted-foreground">
                The people behind CyberNexus
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
                >
                  <Avatar className="h-16 w-16 border-2 border-primary/20 mb-4">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mt-1">
                    {member.role}
                  </Badge>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Link
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </Link>
                    <Link
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="border-t border-border bg-card/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Community Guidelines</h2>
              <p className="mt-2 text-muted-foreground">
                The principles that guide our community
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {guidelines.map((guideline) => (
                <div
                  key={guideline.title}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <guideline.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{guideline.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {guideline.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Members Worldwide", value: "12,500+" },
                { label: "Countries Represented", value: "85+" },
                { label: "Courses Completed", value: "50,000+" },
                { label: "CTF Challenges", value: "500+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
