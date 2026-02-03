"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Users, Flag, Calendar, CreditCard, Shield } from "lucide-react"

const faqCategories = [
  {
    name: "Membership",
    icon: Users,
    faqs: [
      {
        question: "How do I become a CyberNexus member?",
        answer:
          "To join CyberNexus, simply fill out the membership application form on our homepage. Our team will review your application within 48 hours. We accept security professionals at all experience levels, from students to seasoned experts.",
      },
      {
        question: "Is membership free?",
        answer:
          "Yes, basic membership is completely free! This includes access to our community forums, select blog content, and public events. Premium membership with full CTF platform access, exclusive courses, and priority event registration is available for $19/month.",
      },
      {
        question: "What are the benefits of premium membership?",
        answer:
          "Premium members get unlimited access to all CTF challenges, exclusive hands-on labs, priority event registration, member-only webinars, certificate programs, and direct access to our mentorship network. Premium members also receive discounts on conferences and merchandise.",
      },
      {
        question: "Can I cancel my membership anytime?",
        answer:
          "Yes, you can cancel your premium membership at any time. Your access will continue until the end of your billing period. Basic membership remains free and active indefinitely.",
      },
    ],
  },
  {
    name: "CTF Platform",
    icon: Flag,
    faqs: [
      {
        question: "What is CTF and how does it work?",
        answer:
          "CTF stands for Capture The Flag. It's a cybersecurity competition where participants solve security challenges to find hidden 'flags' (secret strings). Our platform hosts challenges in categories like web exploitation, cryptography, reverse engineering, forensics, and more.",
      },
      {
        question: "Do I need experience to participate in CTFs?",
        answer:
          "Not at all! We have challenges for all skill levels. Our beginner-friendly challenges come with hints and learning resources. As you progress, you can tackle more advanced challenges. Everyone starts somewhere!",
      },
      {
        question: "How do I access the CTF platform?",
        answer:
          "The CTF platform is hosted at ctf.cybernexus.com. Basic members can access a limited number of challenges, while premium members get unlimited access to all 200+ challenges and exclusive competitions.",
      },
      {
        question: "Are there prizes for CTF competitions?",
        answer:
          "Yes! Our major competitions offer cash prizes, certifications, job opportunities, and swag. Our annual championship has a prize pool of over $50,000. Weekly challenges earn you points for the global leaderboard.",
      },
    ],
  },
  {
    name: "Events",
    icon: Calendar,
    faqs: [
      {
        question: "How do I register for events?",
        answer:
          "You can register for events directly from our Events page. Click on any event to see details and the registration form. Premium members get priority registration and discounts on paid events.",
      },
      {
        question: "Are events online or in-person?",
        answer:
          "We host both! Most webinars and some workshops are online, while conferences and networking events are typically in-person at various locations. Each event page clearly indicates the format and location.",
      },
      {
        question: "Can I access recordings of past events?",
        answer:
          "Yes, recordings of most webinars and conference talks are available to premium members. Some recordings are also available for free on our YouTube channel. Check the Past Events section for available resources.",
      },
      {
        question: "How can I speak at a CyberNexus event?",
        answer:
          "We're always looking for speakers! If you have expertise to share, contact us through our CFP (Call for Papers) portal or email speakers@cybernexus.io with your talk proposal. We welcome topics from all areas of cybersecurity.",
      },
    ],
  },
  {
    name: "Account & Billing",
    icon: CreditCard,
    faqs: [
      {
        question: "How do I reset my password?",
        answer:
          "Click 'Forgot Password' on the login page and enter your email address. You'll receive a password reset link within a few minutes. If you don't see it, check your spam folder or contact support.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions. All payments are processed securely through Stripe.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Yes, we offer a 14-day money-back guarantee for premium memberships. If you're not satisfied, contact support within 14 days of purchase for a full refund. Event registrations have individual refund policies listed on each event page.",
      },
      {
        question: "Do you offer student or team discounts?",
        answer:
          "Yes! Students with a valid .edu email get 50% off premium membership. We also offer team plans for organizations with 5+ members, including custom pricing and admin dashboards. Contact sales@cybernexus.io for team pricing.",
      },
    ],
  },
  {
    name: "Security & Privacy",
    icon: Shield,
    faqs: [
      {
        question: "How do you protect my data?",
        answer:
          "We take security seriously. All data is encrypted in transit and at rest. We use industry-standard security practices, regular penetration testing, and comply with GDPR and CCPA. We never sell your data to third parties.",
      },
      {
        question: "Can I use CTF skills in the real world?",
        answer:
          "Our CTF challenges are designed to teach skills applicable to real-world security. However, always remember to only use these skills ethically and legally. Never attempt unauthorized access to systems you don't own or have permission to test.",
      },
      {
        question: "How do I report a security vulnerability?",
        answer:
          "We have a responsible disclosure program. Please report any security vulnerabilities to security@cybernexus.io. We appreciate responsible disclosure and may reward significant findings. Please encrypt sensitive reports using our PGP key available on the Contact page.",
      },
      {
        question: "What data do you collect?",
        answer:
          "We collect basic account information (name, email), CTF progress data, and event registrations. We use analytics to improve our platform but never track you across other websites. See our Privacy Policy for complete details.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Help Center
                </span>
              </div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about membership, our CTF platform, 
                events, and more. Can't find what you're looking for? Contact us!
              </p>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {faqCategories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-6 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold">{category.name}</h2>
                  </div>
                  <Accordion type="single" collapsible className="px-6">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.name}-${index}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Still have questions? */}
            <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
              <h3 className="text-xl font-semibold">Still have questions?</h3>
              <p className="mt-2 text-muted-foreground">
                Our support team is here to help. Reach out and we'll get back to you within 24 hours.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:support@cybernexus.io"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-6 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
