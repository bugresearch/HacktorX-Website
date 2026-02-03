import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog/blog-list"
import { BookOpen } from "lucide-react"

export const metadata = {
  title: "Blog - CyberNexus",
  description:
    "Read the latest cybersecurity insights, tutorials, and news from the CyberNexus community.",
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-primary mb-2">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Blog
                </span>
              </div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Insights & Articles
              </h1>
              <p className="mt-2 text-muted-foreground max-w-2xl">
                Expert perspectives on cybersecurity trends, in-depth tutorials,
                threat analysis, and community updates.
              </p>
            </div>

            <BlogList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
