import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MembersDirectory } from "@/components/members/members-directory"

export const metadata = {
  title: "Members Directory - CyberNexus",
  description: "Connect with cybersecurity professionals, researchers, and ethical hackers in our community.",
}

export default function MembersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <MembersDirectory />
      </main>
      <Footer />
    </div>
  )
}
