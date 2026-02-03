import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, User, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

const featuredPosts = [
  {
    id: 1,
    title: "Understanding Zero-Day Exploits: A Deep Dive",
    excerpt: "Learn about the anatomy of zero-day vulnerabilities and how organizations can protect themselves.",
    author: "Alex Chen",
    date: "Feb 1, 2026",
    readTime: "8 min read",
    category: "Threat Research",
  },
  {
    id: 2,
    title: "Building a Home Lab for Malware Analysis",
    excerpt: "Step-by-step guide to setting up a secure environment for analyzing malicious software.",
    author: "Sarah Miller",
    date: "Jan 28, 2026",
    readTime: "12 min read",
    category: "Tutorials",
  },
  {
    id: 3,
    title: "The Rise of AI-Powered Cyber Attacks",
    excerpt: "Exploring how threat actors are leveraging artificial intelligence in their attack methodologies.",
    author: "James Wilson",
    date: "Jan 25, 2026",
    readTime: "6 min read",
    category: "Industry Trends",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Annual CTF Championship 2026",
    date: "March 15-17, 2026",
    location: "Online",
    type: "Competition",
  },
  {
    id: 2,
    title: "Red Team Tactics Workshop",
    date: "February 20, 2026",
    location: "San Francisco, CA",
    type: "Workshop",
  },
  {
    id: 3,
    title: "Cloud Security Summit",
    date: "March 5, 2026",
    location: "Online",
    type: "Conference",
  },
]

export function FeaturedContent() {
  return (
    <section className="border-t border-border bg-card/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Latest Blog Posts */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Latest from the Blog</h2>
              <Button variant="ghost" asChild className="gap-1">
                <Link href="/blog">
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 space-y-6">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50"
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                    <span className="mx-1">·</span>
                    <span>{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <Button variant="ghost" asChild className="gap-1">
                <Link href="/events">
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary text-xs"
                      >
                        {event.type}
                      </Badge>
                      <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <div className="mt-3 space-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="shrink-0 bg-transparent">
                      Register
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
