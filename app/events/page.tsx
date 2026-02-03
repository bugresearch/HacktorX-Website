import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { UpcomingEvents } from "@/components/events/upcoming-events"
import { PastEvents } from "@/components/events/past-events"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Archive } from "lucide-react"

export const metadata = {
  title: "Events & Webinars - CyberNexus",
  description: "Join cybersecurity events, workshops, and conferences. Learn from industry experts.",
}

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Connect
                </span>
              </div>
              <h1 className="text-3xl font-bold sm:text-4xl">Events & Webinars</h1>
              <p className="mt-2 text-muted-foreground">
                Join our community events, workshops, and conferences
              </p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="upcoming" className="space-y-8">
              <TabsList className="bg-card border border-border">
                <TabsTrigger value="upcoming" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="past" className="gap-2">
                  <Archive className="h-4 w-4" />
                  Past Events
                </TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming">
                <UpcomingEvents />
              </TabsContent>
              <TabsContent value="past">
                <PastEvents />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
