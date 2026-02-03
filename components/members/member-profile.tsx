import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Member } from "@/lib/members-data"
import {
  MapPin,
  Calendar,
  Trophy,
  FileText,
  Mic2,
  Github,
  Twitter,
  Linkedin,
  Globe,
  ArrowLeft,
  Award,
  Folder,
  MessageSquare,
} from "lucide-react"

interface MemberProfileProps {
  member: Member
}

export function MemberProfile({ member }: MemberProfileProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/members"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Members Directory
        </Link>

        {/* Header */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-primary/20 shrink-0">
              <AvatarFallback className="bg-primary/10 text-primary font-bold text-2xl sm:text-3xl">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold">{member.name}</h1>
                  <p className="text-lg text-muted-foreground">{member.title}</p>
                </div>
                <Button className="w-fit gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Connect
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary" />
                  {member.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary" />
                  Member since {member.joinedDate}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/30">
                  {member.expertise}
                </Badge>
                {member.certifications.map((cert) => (
                  <Badge key={cert} variant="outline">
                    {cert}
                  </Badge>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-4 flex gap-3">
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {member.social.website && (
                  <a
                    href={member.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {member.ctfRank && (
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <Trophy className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">#{member.ctfRank}</p>
              <p className="text-xs text-muted-foreground">CTF Rank</p>
            </div>
          )}
          {member.articlesWritten && (
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <FileText className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{member.articlesWritten}</p>
              <p className="text-xs text-muted-foreground">Articles</p>
            </div>
          )}
          {member.eventsSpoken && (
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <Mic2 className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{member.eventsSpoken}</p>
              <p className="text-xs text-muted-foreground">Events</p>
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <div className="prose prose-invert max-w-none">
                {member.fullBio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Projects */}
            {member.projects && member.projects.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Folder className="h-5 w-5 text-primary" />
                  Projects
                </h2>
                <div className="space-y-4">
                  {member.projects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-lg border border-border bg-secondary/50 p-4"
                    >
                      <h3 className="font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {member.achievements && member.achievements.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  Achievements
                </h3>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Certifications */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4">Certifications</h3>
              <div className="space-y-2">
                {member.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2"
                  >
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
