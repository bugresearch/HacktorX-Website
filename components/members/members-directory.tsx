"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Filter, Users } from "lucide-react"
import { MemberCard } from "./member-card"
import { membersForDirectory as members } from "@/lib/members-data"

const unusedMembers = [
  {
    id: 1,
    name: "Alex Chen",
    title: "Senior Penetration Tester",
    avatar: null,
    expertise: "Penetration Testing",
    skills: ["Web Security", "Network Security", "Red Team"],
    certifications: ["OSCP", "OSWE", "CEH"],
    location: "San Francisco, CA",
    bio: "Veteran pentester with 10+ years of experience. Discovered multiple CVEs and regularly speaks at security conferences. Passionate about mentoring newcomers to offensive security.",
  },
  {
    id: 2,
    name: "Sarah Miller",
    title: "Incident Response Lead",
    avatar: null,
    expertise: "Incident Response",
    skills: ["Malware Analysis", "Digital Forensics", "SIEM"],
    certifications: ["GCIH", "GCFA"],
    location: "New York, NY",
    bio: "Led incident response for Fortune 500 companies during major breaches. Specializes in APT investigation and containment strategies. Author of popular IR playbook templates.",
  },
  {
    id: 3,
    name: "James Wilson",
    title: "Security Researcher",
    avatar: null,
    expertise: "Vulnerability Research",
    skills: ["Reverse Engineering", "Exploit Development", "Fuzzing"],
    certifications: ["OSCE", "OSEE"],
    location: "Austin, TX",
    bio: "Independent security researcher focused on browser and kernel vulnerabilities. Multiple bug bounty hall of fames. Contributes to open-source fuzzing frameworks.",
  },
  {
    id: 4,
    name: "Emily Zhang",
    title: "Cloud Security Architect",
    avatar: null,
    expertise: "Cloud Security",
    skills: ["AWS", "Azure", "GCP", "Kubernetes"],
    certifications: ["CCSP", "AWS SAP"],
    location: "Seattle, WA",
    bio: "Designed cloud security architectures for enterprises handling billions in transactions. Expert in multi-cloud environments and container security. AWS Community Builder.",
  },
  {
    id: 5,
    name: "Marcus Johnson",
    title: "Threat Intelligence Analyst",
    avatar: null,
    expertise: "Threat Intelligence",
    skills: ["OSINT", "APT Tracking", "Threat Hunting"],
    certifications: ["CTIA", "GCTI"],
    location: "Washington, DC",
    bio: "Former government analyst tracking nation-state actors. Now helps organizations build proactive threat intelligence programs. Regular contributor to MITRE ATT&CK.",
  },
  {
    id: 6,
    name: "Priya Patel",
    title: "GRC Consultant",
    avatar: null,
    expertise: "GRC",
    skills: ["Risk Management", "Compliance", "Policy Development"],
    certifications: ["CISSP", "CISM", "CRISC"],
    location: "Chicago, IL",
    bio: "Helped 50+ organizations achieve SOC 2, ISO 27001, and PCI DSS compliance. Specializes in building security programs from the ground up for startups scaling to enterprise.",
  },
  {
    id: 7,
    name: "David Kim",
    title: "SOC Analyst",
    avatar: null,
    expertise: "Security Operations",
    skills: ["SIEM", "EDR", "Incident Triage"],
    certifications: ["Security+", "CySA+"],
    location: "Los Angeles, CA",
    bio: "SOC analyst passionate about detection engineering and automation. Creator of popular SIEM detection rules repository. Advocates for mental health in cybersecurity.",
  },
  {
    id: 8,
    name: "Rachel Thompson",
    title: "AppSec Engineer",
    avatar: null,
    expertise: "Application Security",
    skills: ["SAST", "DAST", "Code Review", "DevSecOps"],
    certifications: ["GWAPT", "CSSLP"],
    location: "Boston, MA",
    bio: "Builds secure software development lifecycles for tech companies. Expert in shift-left security and developer enablement. Maintainer of several OWASP projects.",
  },
  {
    id: 9,
    name: "Omar Hassan",
    title: "Malware Analyst",
    avatar: null,
    expertise: "Malware Analysis",
    skills: ["Static Analysis", "Dynamic Analysis", "Sandboxing"],
    certifications: ["GREM", "GCFA"],
    location: "Denver, CO",
    bio: "Reverse engineers malware samples for threat intelligence teams. Contributed to decryption tools for several ransomware families. Teaches malware analysis workshops.",
  },
]

const expertiseOptions = [
  "All Expertise",
  "Penetration Testing",
  "Incident Response",
  "Vulnerability Research",
  "Cloud Security",
  "Threat Intelligence",
  "GRC",
  "Security Operations",
  "Application Security",
  "Malware Analysis",
]

const certificationOptions = [
  "All Certifications",
  "OSCP",
  "CISSP",
  "CEH",
  "GCIH",
  "CCSP",
  "Security+",
]

export function MembersDirectory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expertiseFilter, setExpertiseFilter] = useState("All Expertise")
  const [certFilter, setCertFilter] = useState("All Certifications")

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )

    const matchesExpertise =
      expertiseFilter === "All Expertise" ||
      member.expertise === expertiseFilter

    const matchesCert =
      certFilter === "All Certifications" ||
      member.certifications.includes(certFilter)

    return matchesSearch && matchesExpertise && matchesCert
  })

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Users className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Community
            </span>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">Members Directory</h1>
          <p className="mt-2 text-muted-foreground">
            Connect with {members.length}+ cybersecurity professionals worldwide
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, title, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Select value={expertiseFilter} onValueChange={setExpertiseFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {expertiseOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={certFilter} onValueChange={setCertFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {certificationOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredMembers.length}</span> members
          </p>
          {(expertiseFilter !== "All Expertise" || certFilter !== "All Certifications") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setExpertiseFilter("All Expertise")
                setCertFilter("All Certifications")
              }}
            >
              Clear filters
            </Button>
          )}
        </div>

        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16">
            <Users className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold">No members found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
