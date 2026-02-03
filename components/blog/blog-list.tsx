"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react"

export const blogPosts = [
  {
    id: "zero-day-analysis-2026",
    title: "Zero-Day Vulnerability Analysis: What We Learned from 2025",
    excerpt:
      "A comprehensive review of the most significant zero-day vulnerabilities discovered last year and the lessons they teach us about proactive security.",
    author: "Alex Chen",
    authorRole: "Senior Security Researcher",
    date: "January 28, 2026",
    readTime: "12 min read",
    category: "Threat Intelligence",
    featured: true,
  },
  {
    id: "cloud-security-best-practices",
    title: "Cloud Security Best Practices for 2026",
    excerpt:
      "Essential security configurations and policies for AWS, Azure, and GCP that every organization should implement this year.",
    author: "Emily Zhang",
    authorRole: "Cloud Security Architect",
    date: "January 25, 2026",
    readTime: "8 min read",
    category: "Cloud Security",
    featured: true,
  },
  {
    id: "ransomware-evolution",
    title: "The Evolution of Ransomware: From WannaCry to AI-Powered Attacks",
    excerpt:
      "How ransomware has evolved over the past decade and what the emergence of AI means for future threats.",
    author: "Omar Hassan",
    authorRole: "Malware Analyst",
    date: "January 22, 2026",
    readTime: "15 min read",
    category: "Malware Analysis",
    featured: false,
  },
  {
    id: "red-team-automation",
    title: "Automating Red Team Operations: Tools and Techniques",
    excerpt:
      "A practical guide to automating reconnaissance, exploitation, and reporting in red team engagements.",
    author: "James Wilson",
    authorRole: "Red Team Lead",
    date: "January 18, 2026",
    readTime: "10 min read",
    category: "Red Team",
    featured: false,
  },
  {
    id: "soc-analyst-career-guide",
    title: "From SOC Analyst to Security Engineer: A Career Roadmap",
    excerpt:
      "Practical advice and certifications for advancing your cybersecurity career from entry-level to senior positions.",
    author: "Sarah Miller",
    authorRole: "Security Operations Manager",
    date: "January 15, 2026",
    readTime: "7 min read",
    category: "Career",
    featured: false,
  },
  {
    id: "api-security-testing",
    title: "API Security Testing: A Complete Methodology",
    excerpt:
      "Step-by-step guide to identifying and exploiting common API vulnerabilities including BOLA, BFLA, and injection attacks.",
    author: "Rachel Thompson",
    authorRole: "Application Security Engineer",
    date: "January 12, 2026",
    readTime: "14 min read",
    category: "Application Security",
    featured: false,
  },
  {
    id: "incident-response-playbook",
    title: "Building an Incident Response Playbook from Scratch",
    excerpt:
      "Templates and frameworks for creating effective IR playbooks tailored to your organization's needs.",
    author: "Sarah Miller",
    authorRole: "Incident Response Lead",
    date: "January 8, 2026",
    readTime: "11 min read",
    category: "Incident Response",
    featured: false,
  },
  {
    id: "container-security-kubernetes",
    title: "Securing Kubernetes: Beyond the Basics",
    excerpt:
      "Advanced security configurations for Kubernetes including network policies, RBAC, and runtime protection.",
    author: "Emily Zhang",
    authorRole: "Cloud Security Architect",
    date: "January 5, 2026",
    readTime: "13 min read",
    category: "Cloud Security",
    featured: false,
  },
  {
    id: "threat-hunting-techniques",
    title: "Proactive Threat Hunting: Techniques and Tools",
    excerpt:
      "How to move from reactive monitoring to proactive threat hunting using hypothesis-driven investigations.",
    author: "Marcus Johnson",
    authorRole: "Threat Intelligence Analyst",
    date: "January 2, 2026",
    readTime: "9 min read",
    category: "Threat Intelligence",
    featured: false,
  },
]

const categories = [
  "All Categories",
  "Threat Intelligence",
  "Cloud Security",
  "Red Team",
  "Malware Analysis",
  "Application Security",
  "Incident Response",
  "Career",
]

const categoryColors: Record<string, string> = {
  "Threat Intelligence": "bg-red-500/10 text-red-400 border-red-500/30",
  "Cloud Security": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  "Red Team": "bg-orange-500/10 text-orange-400 border-orange-500/30",
  "Malware Analysis": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "Application Security": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Incident Response": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  Career: "bg-green-500/10 text-green-400 border-green-500/30",
}

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All Categories")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      categoryFilter === "All Categories" || post.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Featured Articles</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50"
              >
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <div className="text-6xl font-bold text-muted-foreground/20">
                    {post.category.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <div className="p-6">
                  <Badge className={categoryColors[post.category]}>
                    {post.category}
                  </Badge>
                  <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-xl font-semibold mb-6">
          {featuredPosts.length > 0 ? "All Articles" : "Articles"}
        </h2>
        {regularPosts.length > 0 ? (
          <div className="space-y-4">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group flex flex-col sm:flex-row gap-6 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50"
              >
                <div className="hidden sm:flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <span className="text-2xl font-bold text-muted-foreground/30">
                    {post.category.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge className={categoryColors[post.category]}>
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center">
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16">
            <h3 className="text-lg font-semibold">No articles found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
