export interface Event {
  id: string
  title: string
  description: string
  longDescription: string
  date: string
  time: string
  location: string
  type: "Competition" | "Workshop" | "Conference" | "Webinar" | "Networking"
  speaker: string
  speakerBio?: string
  attendees: number
  countdown?: Date
  isPast: boolean
  hasRecording?: boolean
  hasSlides?: boolean
  hasPhotos?: boolean
  agenda?: { time: string; title: string; description?: string }[]
  highlights?: string[]
}

export const events: Event[] = [
  {
    id: "annual-ctf-championship-2026",
    title: "Annual CTF Championship 2026",
    description:
      "The biggest CTF competition of the year. Teams from around the world compete for the championship title and prizes worth $50,000.",
    longDescription:
      "The CyberNexus Annual CTF Championship is the premier cybersecurity competition of the year. Over 48 intense hours, teams from around the globe will tackle challenges spanning web exploitation, cryptography, reverse engineering, forensics, and more. With $50,000 in prizes, bragging rights, and job opportunities on the line, this is the event every security professional looks forward to.",
    date: "March 15-17, 2026",
    time: "9:00 AM - 6:00 PM EST",
    location: "Online",
    type: "Competition",
    speaker: "Multiple",
    attendees: 2500,
    countdown: new Date("2026-03-15T09:00:00"),
    isPast: false,
    agenda: [
      { time: "9:00 AM", title: "Opening Ceremony", description: "Welcome and rules overview" },
      { time: "10:00 AM", title: "Competition Starts", description: "All challenges go live" },
      { time: "6:00 PM (Day 1)", title: "Day 1 Ends", description: "Leaderboard freeze" },
      { time: "9:00 AM (Day 2)", title: "Day 2 Begins", description: "New challenges released" },
      { time: "6:00 PM (Day 2)", title: "Competition Ends", description: "Final submissions" },
      { time: "7:00 PM (Day 2)", title: "Awards Ceremony", description: "Winners announced" },
    ],
    highlights: [
      "200+ challenges across 6 categories",
      "$50,000 total prize pool",
      "Live streaming and commentary",
      "Job fair with top security companies",
    ],
  },
  {
    id: "red-team-tactics-workshop",
    title: "Red Team Tactics Workshop",
    description:
      "Learn advanced red team techniques from industry experts. Hands-on workshop covering initial access, lateral movement, and persistence.",
    longDescription:
      "Join us for an intensive hands-on workshop where you will learn the latest red team tactics used by professional adversary simulation teams. Led by Alex Chen, one of the most experienced red teamers in the industry, this workshop covers everything from initial access techniques to advanced persistence mechanisms.",
    date: "February 20, 2026",
    time: "10:00 AM - 4:00 PM PST",
    location: "San Francisco, CA",
    type: "Workshop",
    speaker: "Alex Chen",
    speakerBio: "Senior Penetration Tester with 10+ years of experience. OSCP, OSWE, and CEH certified.",
    attendees: 150,
    countdown: new Date("2026-02-20T10:00:00"),
    isPast: false,
    agenda: [
      { time: "10:00 AM", title: "Introduction to Modern Red Teaming" },
      { time: "11:00 AM", title: "Initial Access Techniques" },
      { time: "12:30 PM", title: "Lunch Break" },
      { time: "1:30 PM", title: "Lateral Movement Lab" },
      { time: "3:00 PM", title: "Persistence and Evasion" },
      { time: "4:00 PM", title: "Q&A and Networking" },
    ],
    highlights: [
      "Hands-on lab environment",
      "Take-home toolkit and resources",
      "Networking lunch included",
      "Certificate of completion",
    ],
  },
  {
    id: "cloud-security-summit-2026",
    title: "Cloud Security Summit",
    description:
      "A full-day summit focused on securing cloud infrastructure. Topics include AWS, Azure, GCP security, and container security.",
    longDescription:
      "The Cloud Security Summit brings together cloud security experts and practitioners for a day of learning, sharing, and networking. Whether you are just starting your cloud security journey or are a seasoned architect, this summit has something for everyone.",
    date: "March 5, 2026",
    time: "9:00 AM - 5:00 PM EST",
    location: "Online",
    type: "Conference",
    speaker: "Emily Zhang",
    speakerBio: "Cloud Security Architect with expertise in AWS, Azure, and GCP. CCSP certified.",
    attendees: 500,
    countdown: new Date("2026-03-05T09:00:00"),
    isPast: false,
    agenda: [
      { time: "9:00 AM", title: "Keynote: The State of Cloud Security" },
      { time: "10:00 AM", title: "AWS Security Deep Dive" },
      { time: "11:30 AM", title: "Azure Security Best Practices" },
      { time: "1:00 PM", title: "GCP Security Fundamentals" },
      { time: "2:30 PM", title: "Container and Kubernetes Security" },
      { time: "4:00 PM", title: "Panel: Multi-Cloud Security Challenges" },
    ],
    highlights: [
      "Expert speakers from major cloud providers",
      "Hands-on demos and case studies",
      "Cloud security certification discounts",
      "Networking opportunities",
    ],
  },
  {
    id: "malware-analysis-deep-dive",
    title: "Malware Analysis Deep Dive",
    description:
      "Technical webinar on advanced malware analysis techniques. Learn to analyze real-world malware samples in a safe environment.",
    longDescription:
      "This technical webinar takes you deep into the world of malware analysis. Omar Hassan, an experienced malware analyst, will walk you through the techniques used to reverse engineer and understand malicious software.",
    date: "February 28, 2026",
    time: "2:00 PM - 4:00 PM EST",
    location: "Online",
    type: "Webinar",
    speaker: "Omar Hassan",
    speakerBio: "Malware Analyst specializing in reverse engineering. GREM certified.",
    attendees: 320,
    countdown: new Date("2026-02-28T14:00:00"),
    isPast: false,
    agenda: [
      { time: "2:00 PM", title: "Introduction to Malware Analysis" },
      { time: "2:30 PM", title: "Static Analysis Techniques" },
      { time: "3:00 PM", title: "Dynamic Analysis and Sandboxing" },
      { time: "3:30 PM", title: "Live Analysis Demo" },
      { time: "4:00 PM", title: "Q&A" },
    ],
    highlights: [
      "Real malware samples analyzed live",
      "Free analysis tools provided",
      "Recording available for attendees",
      "Certificate of attendance",
    ],
  },
  {
    id: "security-career-fair-2026",
    title: "Security Career Fair",
    description:
      "Connect with top cybersecurity employers. Resume reviews, mock interviews, and networking opportunities.",
    longDescription:
      "Looking to advance your cybersecurity career? The CyberNexus Security Career Fair connects job seekers with top employers in the industry. Get your resume reviewed by hiring managers, practice your interview skills, and network with security professionals.",
    date: "March 22, 2026",
    time: "11:00 AM - 5:00 PM EST",
    location: "New York, NY",
    type: "Networking",
    speaker: "N/A",
    attendees: 800,
    countdown: new Date("2026-03-22T11:00:00"),
    isPast: false,
    agenda: [
      { time: "11:00 AM", title: "Doors Open - Company Booths" },
      { time: "12:00 PM", title: "Resume Review Sessions" },
      { time: "1:00 PM", title: "Panel: Breaking Into Cybersecurity" },
      { time: "2:30 PM", title: "Mock Interview Sessions" },
      { time: "4:00 PM", title: "Networking Happy Hour" },
    ],
    highlights: [
      "50+ top security employers",
      "Free resume reviews",
      "On-the-spot interviews",
      "Career advice from industry leaders",
    ],
  },
  // Past Events
  {
    id: "cybernexus-conference-2025",
    title: "CyberNexus Conference 2025",
    description:
      "Our flagship annual conference featuring 50+ speakers, workshops, and networking opportunities.",
    longDescription:
      "The CyberNexus Conference 2025 was our biggest event yet, bringing together 1,500 cybersecurity professionals for three days of learning, sharing, and networking. The event featured 50+ speakers, hands-on workshops, and plenty of opportunities to connect with peers.",
    date: "December 10-12, 2025",
    time: "9:00 AM - 6:00 PM EST",
    location: "Las Vegas, NV",
    type: "Conference",
    speaker: "Multiple",
    attendees: 1500,
    isPast: true,
    hasRecording: true,
    hasSlides: true,
    hasPhotos: true,
    highlights: [
      "1,500+ attendees from 40 countries",
      "50+ expert speakers",
      "20 hands-on workshops",
      "Major vendor exhibition",
    ],
  },
  {
    id: "bug-bounty-bootcamp-2025",
    title: "Bug Bounty Bootcamp",
    description:
      "Intensive one-day workshop on bug bounty hunting with live hacking demonstrations.",
    longDescription:
      "This intensive one-day bootcamp taught participants the fundamentals of bug bounty hunting. From reconnaissance to reporting, attendees learned practical skills they could immediately apply to real bug bounty programs.",
    date: "November 15, 2025",
    time: "9:00 AM - 5:00 PM PST",
    location: "San Francisco, CA",
    type: "Workshop",
    speaker: "James Wilson",
    speakerBio: "Security Researcher and multiple-time bug bounty winner.",
    attendees: 200,
    isPast: true,
    hasRecording: true,
    hasSlides: true,
    hasPhotos: false,
    highlights: [
      "Live hacking demonstrations",
      "Hands-on reconnaissance exercises",
      "Bug bounty program overview",
      "Report writing workshop",
    ],
  },
  {
    id: "dfir-fundamentals-webinar",
    title: "DFIR Fundamentals Webinar",
    description:
      "Introduction to digital forensics and incident response techniques for beginners.",
    longDescription:
      "This beginner-friendly webinar introduced participants to the fundamentals of Digital Forensics and Incident Response (DFIR). Perfect for those looking to start a career in incident response or understand how investigations are conducted.",
    date: "October 28, 2025",
    time: "2:00 PM - 4:00 PM EST",
    location: "Online",
    type: "Webinar",
    speaker: "Sarah Miller",
    speakerBio: "Incident Response Lead with experience at Fortune 500 companies.",
    attendees: 450,
    isPast: true,
    hasRecording: true,
    hasSlides: true,
    hasPhotos: false,
    highlights: [
      "DFIR career path overview",
      "Tool demonstrations",
      "Case study walkthroughs",
      "Q&A with industry experts",
    ],
  },
  {
    id: "fall-ctf-2025",
    title: "Fall CTF Challenge 2025",
    description:
      "48-hour CTF competition with challenges across web, crypto, reverse engineering, and more.",
    longDescription:
      "The Fall CTF Challenge 2025 was an intense 48-hour competition that tested participants skills across multiple domains. With over 3,200 participants, it was one of our most popular CTF events.",
    date: "October 5-7, 2025",
    time: "12:00 PM - 12:00 PM EST",
    location: "Online",
    type: "Competition",
    speaker: "Multiple",
    attendees: 3200,
    isPast: true,
    hasRecording: false,
    hasSlides: false,
    hasPhotos: true,
    highlights: [
      "150+ unique challenges",
      "3,200+ participants",
      "$25,000 prize pool",
      "Live leaderboard tracking",
    ],
  },
  {
    id: "zero-trust-summit-2025",
    title: "Zero Trust Architecture Summit",
    description:
      "Full-day summit exploring zero trust principles and implementation strategies.",
    longDescription:
      "This summit brought together security architects and practitioners to discuss the principles and practical implementation of Zero Trust Architecture. Attendees learned from organizations that have successfully implemented zero trust in their environments.",
    date: "September 20, 2025",
    time: "9:00 AM - 5:00 PM EST",
    location: "Online",
    type: "Conference",
    speaker: "Multiple",
    attendees: 680,
    isPast: true,
    hasRecording: true,
    hasSlides: true,
    hasPhotos: true,
    highlights: [
      "Zero Trust framework deep dive",
      "Implementation case studies",
      "Vendor-neutral guidance",
      "Interactive workshops",
    ],
  },
  {
    id: "purple-team-workshop-2025",
    title: "Purple Team Workshop",
    description:
      "Hands-on workshop combining red and blue team tactics for comprehensive security testing.",
    longDescription:
      "This workshop brought together red and blue team concepts to create a comprehensive approach to security testing. Participants learned how to combine offensive and defensive techniques for more effective security assessments.",
    date: "August 25, 2025",
    time: "10:00 AM - 4:00 PM EST",
    location: "Boston, MA",
    type: "Workshop",
    speaker: "Alex Chen & Sarah Miller",
    attendees: 120,
    isPast: true,
    hasRecording: true,
    hasSlides: true,
    hasPhotos: true,
    highlights: [
      "Combined red/blue team exercises",
      "Attack simulation and detection",
      "Collaborative security testing",
      "Take-home lab environment",
    ],
  },
]

export const upcomingEvents = events.filter((e) => !e.isPast)
export const pastEvents = events.filter((e) => e.isPast)

export function getEventById(id: string): Event | undefined {
  return events.find((e) => e.id === id)
}

export const typeColors: Record<string, string> = {
  Competition: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  Workshop: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Conference: "bg-green-500/10 text-green-400 border-green-500/30",
  Webinar: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Networking: "bg-orange-500/10 text-orange-400 border-orange-500/30",
}
