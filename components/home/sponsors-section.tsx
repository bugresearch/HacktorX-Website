import { Building2 } from "lucide-react"

const sponsors = [
  { name: "CyberDefend Inc", tier: "platinum" },
  { name: "SecureCloud", tier: "platinum" },
  { name: "ThreatHunter", tier: "gold" },
  { name: "PenTest Pro", tier: "gold" },
  { name: "CryptoShield", tier: "gold" },
  { name: "NetGuard", tier: "silver" },
  { name: "DataVault", tier: "silver" },
  { name: "HackLab", tier: "silver" },
]

const partners = [
  "OWASP",
  "SANS Institute",
  "ISC2",
  "Offensive Security",
  "HackerOne",
  "Bugcrowd",
]

export function SponsorsSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Building2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Trusted By
            </span>
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Our Sponsors & Partners
          </h2>
          <p className="mt-2 text-muted-foreground">
            Industry leaders who support our mission to advance cybersecurity education.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 mb-12">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group flex items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <span className="text-lg font-bold text-muted-foreground/50">
                    {sponsor.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {sponsor.name}
                </p>
                <p className="text-xs text-muted-foreground capitalize">
                  {sponsor.tier} Sponsor
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="border-t border-border pt-10">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">
            In Partnership With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-lg font-semibold text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
