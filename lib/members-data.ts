export interface Member {
  id: string
  name: string
  title: string
  avatar: string | null
  expertise: string
  skills: string[]
  certifications: string[]
  location: string
  bio: string
  fullBio: string
  achievements: string[]
  projects: { name: string; description: string }[]
  social: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
  joinedDate: string
  ctfRank?: number
  articlesWritten?: number
  eventsSpoken?: number
}

export const members: Member[] = [
  {
    id: "alex-chen",
    name: "Alex Chen",
    title: "Senior Penetration Tester",
    avatar: null,
    expertise: "Penetration Testing",
    skills: ["Web Security", "Network Security", "Red Team", "Social Engineering", "Wireless Security"],
    certifications: ["OSCP", "OSWE", "CEH", "GPEN"],
    location: "San Francisco, CA",
    bio: "Veteran pentester with 10+ years of experience. Discovered multiple CVEs and regularly speaks at security conferences. Passionate about mentoring newcomers to offensive security.",
    fullBio: "Alex Chen is a senior penetration tester with over a decade of experience in offensive security. He has conducted red team assessments for Fortune 500 companies, government agencies, and critical infrastructure providers. Alex has discovered and responsibly disclosed over 50 CVEs in popular software, including vulnerabilities in enterprise VPN solutions and cloud platforms.\n\nBefore focusing on penetration testing, Alex worked as a software developer, which gives him unique insight into secure coding practices. He regularly speaks at security conferences including DEF CON, Black Hat, and BSides. Alex is passionate about mentoring the next generation of security professionals and runs a popular YouTube channel with over 100K subscribers focused on ethical hacking tutorials.",
    achievements: [
      "Discovered 50+ CVEs in enterprise software",
      "Speaker at DEF CON, Black Hat, and BSides",
      "100K+ YouTube subscribers",
      "Lead instructor for red team workshops",
      "Bug bounty hall of fame at 5 major programs",
    ],
    projects: [
      {
        name: "RedTeam Toolkit",
        description: "Open-source collection of red team automation scripts and tools",
      },
      {
        name: "VulnLab",
        description: "Vulnerable application suite for practicing web security testing",
      },
    ],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      website: "https://example.com",
    },
    joinedDate: "March 2021",
    ctfRank: 15,
    articlesWritten: 24,
    eventsSpoken: 12,
  },
  {
    id: "sarah-miller",
    name: "Sarah Miller",
    title: "Incident Response Lead",
    avatar: null,
    expertise: "Incident Response",
    skills: ["Malware Analysis", "Digital Forensics", "SIEM", "Threat Hunting", "Crisis Management"],
    certifications: ["GCIH", "GCFA", "GNFA", "EnCE"],
    location: "New York, NY",
    bio: "Led incident response for Fortune 500 companies during major breaches. Specializes in APT investigation and containment strategies. Author of popular IR playbook templates.",
    fullBio: "Sarah Miller is an experienced incident response professional who has led IR teams at several Fortune 500 companies. She has coordinated response efforts during some of the largest data breaches in recent years, managing teams of 20+ analysts during high-pressure situations.\n\nSarah specializes in Advanced Persistent Threat (APT) investigations and has tracked multiple nation-state threat actors. Her IR playbook templates have been downloaded over 50,000 times and are used by organizations worldwide. She currently leads the IR training program at CyberNexus and is a frequent speaker on crisis management and incident response best practices.",
    achievements: [
      "Led IR for 3 major Fortune 500 breach responses",
      "IR playbook templates downloaded 50K+ times",
      "Trained 500+ IR professionals",
      "Published research on APT tactics",
      "SANS Advisory Board member",
    ],
    projects: [
      {
        name: "IR Playbook Collection",
        description: "Comprehensive incident response playbooks for common attack scenarios",
      },
      {
        name: "ThreatTimeline",
        description: "Open-source tool for visualizing attack timelines during investigations",
      },
    ],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    joinedDate: "January 2021",
    ctfRank: 42,
    articlesWritten: 18,
    eventsSpoken: 8,
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Security Researcher",
    avatar: null,
    expertise: "Vulnerability Research",
    skills: ["Reverse Engineering", "Exploit Development", "Fuzzing", "Binary Analysis", "Kernel Security"],
    certifications: ["OSCE", "OSEE", "OSED"],
    location: "Austin, TX",
    bio: "Independent security researcher focused on browser and kernel vulnerabilities. Multiple bug bounty hall of fames. Contributes to open-source fuzzing frameworks.",
    fullBio: "James Wilson is an independent security researcher who specializes in finding and exploiting low-level vulnerabilities in browsers, operating system kernels, and embedded systems. He has been credited with discovering critical vulnerabilities in major browsers including Chrome, Firefox, and Safari.\n\nJames is a prolific bug bounty hunter with earnings exceeding $500,000 across various programs. He is particularly known for his work on memory corruption vulnerabilities and has contributed significant improvements to several open-source fuzzing frameworks. When not breaking software, James teaches advanced exploitation techniques at CyberNexus workshops.",
    achievements: [
      "$500K+ in bug bounty earnings",
      "Critical vulnerabilities in Chrome, Firefox, Safari",
      "Contributor to AFL++ fuzzing framework",
      "Published kernel exploitation research",
      "Top 50 on HackerOne leaderboard",
    ],
    projects: [
      {
        name: "BrowserFuzz",
        description: "Custom fuzzer for finding browser rendering engine vulnerabilities",
      },
      {
        name: "KernelPwn",
        description: "Collection of kernel exploitation techniques and examples",
      },
    ],
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      website: "https://example.com",
    },
    joinedDate: "June 2021",
    ctfRank: 8,
    articlesWritten: 12,
    eventsSpoken: 6,
  },
  {
    id: "emily-zhang",
    name: "Emily Zhang",
    title: "Cloud Security Architect",
    avatar: null,
    expertise: "Cloud Security",
    skills: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Container Security"],
    certifications: ["CCSP", "AWS SAP", "CKS", "AZ-500"],
    location: "Seattle, WA",
    bio: "Designed cloud security architectures for enterprises handling billions in transactions. Expert in multi-cloud environments and container security. AWS Community Builder.",
    fullBio: "Emily Zhang is a cloud security architect with extensive experience securing enterprise cloud environments across AWS, Azure, and GCP. She has designed security architectures for financial services companies processing billions of dollars in daily transactions.\n\nEmily is recognized as an AWS Community Builder and regularly contributes to cloud security best practices documentation. She specializes in Kubernetes security, infrastructure as code, and zero trust architectures. Her cloud security course at CyberNexus has helped hundreds of professionals transition into cloud security roles.",
    achievements: [
      "AWS Community Builder",
      "Designed security for $1B+ daily transaction systems",
      "Created popular Kubernetes security course",
      "Contributed to CIS benchmarks for containers",
      "Speaker at AWS re:Invent and KubeCon",
    ],
    projects: [
      {
        name: "CloudSecure",
        description: "Terraform modules for deploying secure cloud infrastructure",
      },
      {
        name: "K8sPolicy",
        description: "Collection of Kubernetes security policies and admission controllers",
      },
    ],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    joinedDate: "April 2021",
    ctfRank: 65,
    articlesWritten: 31,
    eventsSpoken: 15,
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    title: "Threat Intelligence Analyst",
    avatar: null,
    expertise: "Threat Intelligence",
    skills: ["OSINT", "APT Tracking", "Threat Hunting", "Malware Attribution", "Dark Web Analysis"],
    certifications: ["CTIA", "GCTI", "FOR578"],
    location: "Washington, DC",
    bio: "Former government analyst tracking nation-state actors. Now helps organizations build proactive threat intelligence programs. Regular contributor to MITRE ATT&CK.",
    fullBio: "Marcus Johnson spent 8 years as a government intelligence analyst tracking nation-state cyber actors before transitioning to the private sector. His work has contributed to the attribution of several major APT campaigns to specific threat groups.\n\nMarcus now helps organizations build mature threat intelligence programs that drive proactive security decisions. He is a regular contributor to the MITRE ATT&CK framework and has published numerous threat reports on emerging adversary techniques. At CyberNexus, Marcus leads the threat intelligence community and helps members understand the threat landscape.",
    achievements: [
      "8 years government intelligence experience",
      "Contributed to multiple APT attribution efforts",
      "MITRE ATT&CK contributor",
      "Published 50+ threat intelligence reports",
      "Built TI programs for 10+ enterprises",
    ],
    projects: [
      {
        name: "APT Tracker",
        description: "Dashboard for tracking APT group activities and TTPs",
      },
      {
        name: "ThreatFeeds",
        description: "Curated collection of threat intelligence feeds and integration scripts",
      },
    ],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    joinedDate: "February 2021",
    ctfRank: 78,
    articlesWritten: 42,
    eventsSpoken: 9,
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    title: "GRC Consultant",
    avatar: null,
    expertise: "GRC",
    skills: ["Risk Management", "Compliance", "Policy Development", "Audit Management", "Security Frameworks"],
    certifications: ["CISSP", "CISM", "CRISC", "CGEIT"],
    location: "Chicago, IL",
    bio: "Helped 50+ organizations achieve SOC 2, ISO 27001, and PCI DSS compliance. Specializes in building security programs from the ground up for startups scaling to enterprise.",
    fullBio: "Priya Patel is a GRC consultant who has helped over 50 organizations achieve and maintain compliance with major security frameworks including SOC 2, ISO 27001, PCI DSS, and HIPAA. She specializes in working with high-growth startups that need to build security programs quickly to meet customer and regulatory requirements.\n\nPriya's approach focuses on building security programs that are both compliant and practical, avoiding the common trap of 'checkbox security.' She has developed risk assessment methodologies used by organizations ranging from seed-stage startups to public companies. At CyberNexus, Priya leads GRC-focused content and helps members navigate the complex world of compliance.",
    achievements: [
      "50+ successful compliance certifications",
      "Built security programs for 5 unicorn startups",
      "Developed popular risk assessment methodology",
      "ISACA chapter board member",
      "Published author on security governance",
    ],
    projects: [
      {
        name: "GRC Starter Kit",
        description: "Templates and guides for building a security program from scratch",
      },
      {
        name: "ComplianceMap",
        description: "Tool for mapping controls across multiple compliance frameworks",
      },
    ],
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
    joinedDate: "May 2021",
    articlesWritten: 28,
    eventsSpoken: 11,
  },
  {
    id: "david-kim",
    name: "David Kim",
    title: "SOC Analyst",
    avatar: null,
    expertise: "Security Operations",
    skills: ["SIEM", "EDR", "Incident Triage", "Detection Engineering", "Automation"],
    certifications: ["Security+", "CySA+", "Splunk Certified"],
    location: "Los Angeles, CA",
    bio: "SOC analyst passionate about detection engineering and automation. Creator of popular SIEM detection rules repository. Advocates for mental health in cybersecurity.",
    fullBio: "David Kim is a SOC analyst who is passionate about making security operations more effective through better detection engineering and automation. His open-source repository of SIEM detection rules has been starred over 5,000 times on GitHub and is used by organizations worldwide.\n\nBeyond his technical work, David is a vocal advocate for mental health awareness in the cybersecurity industry. He speaks openly about the challenges of working in a high-stress environment and has helped establish peer support programs at several organizations. At CyberNexus, David helps run the SOC community and creates content focused on practical detection strategies.",
    achievements: [
      "5K+ GitHub stars on detection rules repo",
      "Mental health advocacy in cybersecurity",
      "Created SOC automation framework",
      "Trained 200+ SOC analysts",
      "Purple team exercise facilitator",
    ],
    projects: [
      {
        name: "DetectionLab",
        description: "Curated repository of SIEM detection rules and use cases",
      },
      {
        name: "SOCAutomation",
        description: "Framework for automating common SOC workflows and enrichment",
      },
    ],
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
    joinedDate: "August 2021",
    ctfRank: 124,
    articlesWritten: 16,
    eventsSpoken: 4,
  },
  {
    id: "rachel-thompson",
    name: "Rachel Thompson",
    title: "AppSec Engineer",
    avatar: null,
    expertise: "Application Security",
    skills: ["SAST", "DAST", "Code Review", "DevSecOps", "Threat Modeling", "API Security"],
    certifications: ["GWAPT", "CSSLP", "AWS Security Specialty"],
    location: "Boston, MA",
    bio: "Builds secure software development lifecycles for tech companies. Expert in shift-left security and developer enablement. Maintainer of several OWASP projects.",
    fullBio: "Rachel Thompson is an application security engineer who specializes in building security into the software development lifecycle. She has implemented AppSec programs at several tech companies, dramatically reducing vulnerability rates while maintaining developer productivity.\n\nRachel is a maintainer of several OWASP projects and contributes actively to the application security community. She is known for her developer-friendly approach to security, focusing on enablement rather than gatekeeping. Her talks on threat modeling and secure API design have been viewed thousands of times. At CyberNexus, Rachel leads the AppSec community and creates training content for developers and security professionals.",
    achievements: [
      "OWASP project maintainer",
      "Reduced vulnerability rates 80% at multiple companies",
      "Created popular threat modeling methodology",
      "Speaker at OWASP Global and AppSec conferences",
      "Open-source security tool contributor",
    ],
    projects: [
      {
        name: "SecureSDLC",
        description: "Guide and tools for implementing secure SDLC practices",
      },
      {
        name: "ThreatModel",
        description: "Lightweight threat modeling tool for agile teams",
      },
    ],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    joinedDate: "July 2021",
    ctfRank: 89,
    articlesWritten: 22,
    eventsSpoken: 7,
  },
  {
    id: "omar-hassan",
    name: "Omar Hassan",
    title: "Malware Analyst",
    avatar: null,
    expertise: "Malware Analysis",
    skills: ["Static Analysis", "Dynamic Analysis", "Sandboxing", "Reverse Engineering", "Threat Intelligence"],
    certifications: ["GREM", "GCFA", "eCMAP"],
    location: "Denver, CO",
    bio: "Reverse engineers malware samples for threat intelligence teams. Contributed to decryption tools for several ransomware families. Teaches malware analysis workshops.",
    fullBio: "Omar Hassan is a malware analyst who has reverse engineered thousands of malware samples over his career. His work has contributed to the development of decryption tools for several ransomware families, helping victims recover their data without paying ransoms.\n\nOmar specializes in analyzing sophisticated malware used by advanced threat actors, including nation-state groups and organized cybercrime operations. He regularly publishes detailed technical analysis of new malware families and shares indicators of compromise with the security community. At CyberNexus, Omar teaches malware analysis workshops and helps members develop reverse engineering skills.",
    achievements: [
      "Contributed to ransomware decryption tools",
      "Analyzed 5000+ unique malware samples",
      "Published research on APT malware",
      "Taught 300+ students malware analysis",
      "Regular contributor to VirusTotal",
    ],
    projects: [
      {
        name: "MalwareZoo",
        description: "Curated collection of malware samples for research and training",
      },
      {
        name: "AutoAnalyzer",
        description: "Automated malware analysis pipeline with reporting",
      },
    ],
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
    joinedDate: "September 2021",
    ctfRank: 56,
    articlesWritten: 19,
    eventsSpoken: 5,
  },
]

export function getMemberById(id: string): Member | undefined {
  return members.find((m) => m.id === id)
}

// For backward compatibility with the members directory
export const membersForDirectory = members.map((m) => ({
  id: m.id,
  name: m.name,
  title: m.title,
  avatar: m.avatar,
  expertise: m.expertise,
  skills: m.skills.slice(0, 4),
  certifications: m.certifications.slice(0, 3),
  location: m.location,
  bio: m.bio,
}))
