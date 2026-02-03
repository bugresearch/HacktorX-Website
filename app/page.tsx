import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ThreatTicker } from "@/components/home/threat-ticker"
import { StatsSection } from "@/components/home/stats-section"
import { FeaturedContent } from "@/components/home/featured-content"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { SponsorsSection } from "@/components/home/sponsors-section"
import { JoinSection } from "@/components/home/join-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ThreatTicker />
        <StatsSection />
        <FeaturedContent />
        <TestimonialsSection />
        <SponsorsSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  )
}
