import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventDetail } from "@/components/events/event-detail"
import { getEventById, events } from "@/lib/events-data"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ eventId: string }>
}) {
  const { eventId } = await params
  const event = getEventById(eventId)
  if (!event) return { title: "Not Found" }

  return {
    title: `${event.title} - CyberNexus Events`,
    description: event.description,
  }
}

export function generateStaticParams() {
  return events.map((event) => ({
    eventId: event.id,
  }))
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ eventId: string }>
}) {
  const { eventId } = await params
  const event = getEventById(eventId)

  if (!event) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <EventDetail event={event} />
      </main>
      <Footer />
    </div>
  )
}
