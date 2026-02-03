"use client"

import { useEffect, useState } from "react"
import { AlertTriangle, Activity, Shield, Bug } from "lucide-react"

const threats = [
  {
    id: 1,
    type: "CVE",
    title: "CVE-2026-1234: Critical RCE in OpenSSL 4.0",
    severity: "critical",
    icon: AlertTriangle,
  },
  {
    id: 2,
    type: "ALERT",
    title: "New Ransomware Variant Targeting Healthcare Sector",
    severity: "high",
    icon: Bug,
  },
  {
    id: 3,
    type: "UPDATE",
    title: "Microsoft Patches 87 Vulnerabilities in February Update",
    severity: "medium",
    icon: Shield,
  },
  {
    id: 4,
    type: "INTEL",
    title: "APT Group Lazarus Observed Using New Malware Strain",
    severity: "high",
    icon: Activity,
  },
  {
    id: 5,
    type: "CVE",
    title: "CVE-2026-0987: SQL Injection in Popular CMS Plugin",
    severity: "critical",
    icon: AlertTriangle,
  },
]

const severityColors = {
  critical: "text-red-400",
  high: "text-orange-400",
  medium: "text-yellow-400",
  low: "text-primary",
}

export function ThreatTicker() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex shrink-0 items-center gap-2 text-primary">
              <Activity className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Live Threat Feed
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="border-y border-border bg-card/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex shrink-0 items-center gap-2 text-primary">
            <Activity className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Live Threat Feed
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-ticker flex gap-8">
              {[...threats, ...threats].map((threat, index) => (
                <div
                  key={`${threat.id}-${index}`}
                  className="flex shrink-0 items-center gap-2"
                >
                  <threat.icon
                    className={`h-4 w-4 ${severityColors[threat.severity as keyof typeof severityColors]}`}
                  />
                  <span className="text-xs font-semibold text-muted-foreground">
                    [{threat.type}]
                  </span>
                  <span className="text-sm text-foreground whitespace-nowrap">
                    {threat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
