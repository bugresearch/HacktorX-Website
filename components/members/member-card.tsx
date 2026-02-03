import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MapPin, MessageSquare } from "lucide-react"

interface Member {
  id: number
  name: string
  title: string
  avatar: string | null
  expertise: string
  skills: string[]
  certifications: string[]
  location: string
  bio: string
}

export function MemberCard({ member }: { member: Member }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-start gap-4">
        <Avatar className="h-14 w-14 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground truncate">{member.title}</p>
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {member.location}
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
        {member.bio}
      </p>

      <div className="mt-4">
        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
          {member.expertise}
        </Badge>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {member.skills.slice(0, 3).map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
        {member.skills.length > 3 && (
          <Badge variant="secondary" className="text-xs">
            +{member.skills.length - 3}
          </Badge>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {member.certifications.map((cert) => (
          <span
            key={cert}
            className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
          >
            {cert}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-border">
        <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
          <MessageSquare className="h-4 w-4" />
          Connect
        </Button>
      </div>
    </div>
  )
}
