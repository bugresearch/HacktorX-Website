import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MemberProfile } from "@/components/members/member-profile"
import { notFound } from "next/navigation"
import { members } from "@/lib/members-data"

interface PageProps {
  params: Promise<{ memberId: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { memberId } = await params
  const member = members.find((m) => m.id === memberId)
  
  if (!member) {
    return {
      title: "Member Not Found - CyberNexus",
    }
  }
  
  return {
    title: `${member.name} - CyberNexus Member`,
    description: member.bio,
  }
}

export default async function MemberProfilePage({ params }: PageProps) {
  const { memberId } = await params
  const member = members.find((m) => m.id === memberId)
  
  if (!member) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <MemberProfile member={member} />
      </main>
      <Footer />
    </div>
  )
}
