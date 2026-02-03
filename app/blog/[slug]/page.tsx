import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { notFound } from "next/navigation"

const blogPosts: Record<
  string,
  {
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
> = {
  "zero-day-analysis-2026": {
    id: "zero-day-analysis-2026",
    title: "Zero-Day Vulnerability Analysis: What We Learned from 2025",
    excerpt:
      "A comprehensive review of the most significant zero-day vulnerabilities discovered last year and the lessons they teach us about proactive security.",
    author: "Alex Chen",
    authorRole: "Senior Security Researcher",
    authorBio:
      "Alex is a veteran penetration tester with over 10 years of experience. He has discovered multiple CVEs and regularly contributes to open-source security tools.",
    date: "January 28, 2026",
    readTime: "12 min read",
    category: "Threat Intelligence",
    content: `
## Introduction

The year 2025 marked a significant shift in the cybersecurity landscape. With over 28,000 CVEs published, organizations faced unprecedented challenges in patch management and vulnerability prioritization.

## Key Zero-Days of 2025

### 1. The Exchange Server Nightmare (CVE-2025-1234)

Microsoft Exchange Server once again proved to be a goldmine for attackers. The ProxyNotShell successor allowed pre-authenticated remote code execution, affecting millions of on-premises installations worldwide.

**Impact Assessment:**
- Estimated 400,000+ servers vulnerable at disclosure
- Active exploitation within 48 hours of POC release
- Multiple ransomware groups weaponized the exploit

### 2. Chrome V8 Type Confusion (CVE-2025-5678)

A critical type confusion bug in Chrome's V8 JavaScript engine allowed attackers to achieve remote code execution through specially crafted web pages.

**Key Takeaways:**
- Memory-safe languages don't eliminate all vulnerability classes
- Browser vendors must continue investing in sandboxing
- Zero-day prices for browser exploits remain high ($500K+)

### 3. Linux Kernel Privilege Escalation (CVE-2025-9012)

A race condition in the Linux kernel's io_uring subsystem provided local privilege escalation on virtually all Linux distributions.

## Lessons Learned

### Proactive Measures

1. **Threat-Informed Defense**: Organizations must move beyond reactive patching to threat-informed defense strategies.

2. **Assume Breach Mentality**: Zero-days will continue to exist. Design your architecture assuming compromise will occur.

3. **Detection Engineering**: Invest in detection capabilities that can identify exploitation attempts even for unknown vulnerabilities.

### Industry Trends

- **Exploit Broker Market**: The commercial exploit market continues to grow, with prices for zero-days reaching new highs.
- **AI-Assisted Discovery**: Both researchers and attackers are leveraging AI for vulnerability discovery at scale.
- **Supply Chain Focus**: Third-party dependencies remain a significant source of zero-day exposure.

## Conclusion

As we move into 2026, organizations must adopt a more proactive stance toward vulnerability management. The time between zero-day disclosure and exploitation continues to shrink, making traditional patching cycles increasingly inadequate.
    `,
  },
  "cloud-security-best-practices": {
    id: "cloud-security-best-practices",
    title: "Cloud Security Best Practices for 2026",
    excerpt:
      "Essential security configurations and policies for AWS, Azure, and GCP that every organization should implement this year.",
    author: "Emily Zhang",
    authorRole: "Cloud Security Architect",
    authorBio:
      "Emily leads cloud security initiatives at a Fortune 500 company. She holds CCSP, AWS Security Specialty, and Azure Security Engineer certifications.",
    date: "January 25, 2026",
    readTime: "8 min read",
    category: "Cloud Security",
    content: `
## The State of Cloud Security

Cloud adoption continues to accelerate, and with it, the attack surface expands. In 2025, cloud misconfigurations were responsible for 45% of data breaches involving cloud infrastructure.

## AWS Security Essentials

### Identity and Access Management

- **Enforce MFA Everywhere**: Require MFA for all IAM users, especially those with console access
- **Use IAM Roles**: Prefer roles over long-lived access keys
- **Implement Permission Boundaries**: Limit the maximum permissions any IAM entity can have

### Network Security

- **VPC Design**: Use multiple layers of subnets (public, private, isolated)
- **Security Groups**: Apply least-privilege rules with explicit denies
- **VPC Flow Logs**: Enable for all VPCs and monitor for anomalies

## Azure Security Essentials

### Azure Active Directory

- **Conditional Access**: Implement policies based on user, location, device, and risk
- **Privileged Identity Management**: Use PIM for just-in-time privileged access
- **Identity Protection**: Enable risk-based policies for sign-in and user risk

### Resource Security

- **Azure Policy**: Enforce organizational standards and compliance
- **Resource Locks**: Protect critical resources from accidental deletion
- **Key Vault**: Centralize secrets, keys, and certificate management

## GCP Security Essentials

### Organization Policies

- **Constraints**: Disable external IP addresses for VMs by default
- **Service Account Management**: Implement strict controls over SA key creation
- **VPC Service Controls**: Create security perimeters around sensitive resources

## Cross-Cloud Recommendations

1. **Cloud Security Posture Management (CSPM)**: Deploy tools to continuously assess your cloud configuration
2. **Infrastructure as Code Security**: Scan Terraform/CloudFormation before deployment
3. **Runtime Protection**: Implement workload protection for containers and serverless

## Conclusion

Cloud security is not a destination but a continuous journey. By implementing these best practices and maintaining vigilance, organizations can significantly reduce their cloud security risk.
    `,
  },
  "ransomware-evolution": {
    id: "ransomware-evolution",
    title: "The Evolution of Ransomware: From WannaCry to AI-Powered Attacks",
    excerpt:
      "How ransomware has evolved over the past decade and what the emergence of AI means for future threats.",
    author: "Omar Hassan",
    authorRole: "Malware Analyst",
    authorBio:
      "Omar specializes in reverse engineering and malware analysis. He has analyzed hundreds of ransomware samples and contributed to multiple decryption tools.",
    date: "January 22, 2026",
    readTime: "15 min read",
    category: "Malware Analysis",
    content: `
## The Ransomware Timeline

From CryptoLocker in 2013 to today's sophisticated RaaS operations, ransomware has undergone remarkable evolution.

## Early Days: 2013-2016

The first modern ransomware families emerged with CryptoLocker, introducing strong encryption and Bitcoin payments. Key characteristics included:

- Simple infection vectors (email attachments)
- Basic encryption (often breakable)
- Individual targeting
- Relatively low ransom demands ($300-$500)

## The WannaCry Era: 2017

WannaCry marked a turning point, combining ransomware with the EternalBlue exploit for worm-like propagation. This demonstrated the potential for mass-scale ransomware attacks.

## Modern Ransomware: 2020-Present

### Double Extortion

Groups like Maze pioneered double extortion - encrypting data AND threatening to leak it publicly. This made backups alone insufficient as a defense.

### Ransomware-as-a-Service (RaaS)

Operations like LockBit, BlackCat, and REvil operate as franchise models, enabling less technical criminals to launch sophisticated attacks.

### Big Game Hunting

Targeted attacks against large organizations with deep pockets and critical infrastructure.

## AI and the Future

### AI-Enhanced Attacks

- **Personalized Phishing**: AI-generated, context-aware phishing emails
- **Automated Vulnerability Discovery**: AI scanning for exploitable weaknesses
- **Adaptive Evasion**: Machine learning to avoid detection

### Defensive AI

- **Behavioral Analysis**: AI-powered detection of ransomware behavior patterns
- **Automated Response**: ML-driven incident response and containment
- **Predictive Defense**: Anticipating attack patterns before execution

## Defense Strategies

1. **Immutable Backups**: Air-gapped and tested regularly
2. **Zero Trust Architecture**: Never trust, always verify
3. **Employee Training**: Continuous security awareness
4. **Incident Response Plan**: Test and update regularly

## Conclusion

Ransomware will continue to evolve, but so will our defenses. Understanding the threat landscape is the first step toward effective protection.
    `,
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) return { title: "Not Found" }

  return {
    title: `${post.title} - CyberNexus Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <BlogPostContent post={post} />
      </main>
      <Footer />
    </div>
  )
}
