import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Twitter,
  Linkedin,
} from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  authorRole: string
  authorBio: string
  date: string
  readTime: string
  category: string
  content: string
}

const categoryColors: Record<string, string> = {
  "Threat Intelligence": "bg-red-500/10 text-red-400 border-red-500/30",
  "Cloud Security": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  "Red Team": "bg-orange-500/10 text-orange-400 border-orange-500/30",
  "Malware Analysis": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "Application Security": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Incident Response": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  Career: "bg-green-500/10 text-green-400 border-green-500/30",
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <Badge className={categoryColors[post.category] || ""}>
            {post.category}
          </Badge>

          <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="font-medium text-foreground">{post.author}</div>
                <div className="text-xs">{post.authorRole}</div>
              </div>
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
        </header>

        <Separator className="mb-10" />

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.split("\n").map((line, idx) => {
            const trimmed = line.trim()
            if (!trimmed) return null

            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold mt-10 mb-4">
                  {trimmed.replace("## ", "")}
                </h2>
              )
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-semibold mt-8 mb-3">
                  {trimmed.replace("### ", "")}
                </h3>
              )
            }
            if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
              return (
                <p key={idx} className="font-semibold mt-4 mb-2">
                  {trimmed.replace(/\*\*/g, "")}
                </p>
              )
            }
            if (trimmed.startsWith("- ")) {
              return (
                <li key={idx} className="ml-4 text-muted-foreground">
                  {trimmed.replace("- ", "")}
                </li>
              )
            }
            if (/^\d+\./.test(trimmed)) {
              return (
                <li key={idx} className="ml-4 text-muted-foreground list-decimal">
                  {trimmed.replace(/^\d+\.\s*/, "")}
                </li>
              )
            }
            return (
              <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                {trimmed}
              </p>
            )
          })}
        </div>

        <Separator className="my-10" />

        {/* Author Bio */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  About the Author
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{post.author}</h3>
              <p className="text-sm text-muted-foreground">{post.authorRole}</p>
              <p className="mt-3 text-muted-foreground">{post.authorBio}</p>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Share2 className="h-4 w-4" />
            Share this article
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="bg-transparent">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
