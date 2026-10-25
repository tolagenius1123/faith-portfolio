export const contact = {
  email: "okpefaitholoh@gmail.com",
  phone: "+234 810 856 9408",
  phoneHref: "tel:+2348108569408",
  linkedin: "https://www.linkedin.com/in/okpe-faith",
  cv: "https://headless-jbyeubcnapk-5pffhpht8k-140a.wix-site-host.com/Okpe_Faith_Oloh_CV.pdf",
  location: "Lagos, Nigeria",
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export const hero = {
  tagline:
    "I help brands communicate with clarity and treat every customer as a relationship worth keeping.",
  openTo: [
    "Customer Engagement Associate",
    "Brand Communications Associate",
    "Marketing Associate",
  ],
}

export const disciplines = [
  "Brand communications",
  "Customer experience",
  "Digital marketing",
  "Client relations",
  "Operations",
  "Copywriting",
]

export const about = {
  statement:
    "I'm Faith, a marketing and customer experience professional based in Lagos. Every message I write begins with the person who will read it.",
  paragraphs: [
    "I hold a Bachelor of Arts in Theatre and Media Studies from the University of Calabar, where I developed a sharp understanding of audiences and of how people respond to information.",
    "At Twentiies, I built the brand's online presence from scratch, supported its advertising and answered the customers who found it through social media. I worked with 406 clients, and the work confirmed something I hold firmly: customer experience is built through the quality of everyday interactions.",
    "At Galaxy Jay Realty, I learned the discipline behind dependable service. I introduced a filing and scheduling process that reduced project turnaround time by 25%, and senior leadership recognised the way I handled clients.",
    "I now bring both sides of that experience, creative communication and reliable follow-through, to brands that want to be understood and remembered.",
  ],
}

export type Stat = {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
}

export const stats: Stat[] = [
  { value: 406, label: "Clients supported at Twentiies" },
  { value: 25, suffix: "%", label: "Faster project turnaround" },
  { value: 2, suffix: "+", label: "Years across e-commerce and real estate" },
  { value: 7, label: "Professional certifications" },
]

export const projects = [
  {
    client: "Twentiies",
    sector: "Fashion e-commerce",
    title: "Building a digital presence from day one.",
    description:
      "Built the brand's online presence from scratch on Instagram and Facebook, supporting promotional campaigns and paid advertising while managing customer engagement for 406 clients.",
    role: "Customer Relations Associate",
    image: "/images/twentiies.jpg",
    imageFit: "contain",
    surface: "bg-black",
    link: { label: "Visit Twentiies", href: "https://www.instagram.com/twentiies_/" },
  },
  {
    client: "Galaxy Jay Realty",
    sector: "Real estate",
    title: "A home shaped around the client.",
    description:
      "An approach that connected prospective buyers with available land and development partners, so that each home could be shaped around the client's own preferences.",
    role: "Client coordination and operations",
    image: "/images/galaxy-custom-home.jpg",
    imageFit: "cover",
    surface: "bg-ink",
  },
  {
    client: "Galaxy Jay Realty",
    sector: "Real estate",
    title: "A practical path to land ownership.",
    description:
      "A structured payment plan that made land ownership attainable for civil servants, with instalments linked to salary through bank and employer arrangements. My filing process cut turnaround time by 25%.",
    role: "Admin and client communication",
    image: "/images/galaxy-land-ownership.jpg",
    imageFit: "cover",
    surface: "bg-ink",
  },
  {
    client: "Customer feedback review",
    sector: "Service improvement",
    title: "An eye for the details.",
    description:
      "Reviewed feedback across social platforms to spot recurring issues early: delayed order updates, unclear product information and slow first replies. Then introduced standard reply templates and a consistent follow-up routine.",
    role: "Feedback analysis",
    image: "/images/feedback-analysis.jpg",
    imageFit: "contain",
    surface: "bg-paper",
  },
] as const

export const shellBeauty = {
  intro:
    "I manage social media communication for Shell Beauty, an e-commerce brand. Instagram insights for 24 Sep to 23 Oct 2026.",
  note: "Account-level figures for the brand's Instagram, not results attributed solely to my work.",
  stats: [
    { value: 25347, label: "Views in 30 days" },
    { value: 78.6, decimals: 1, suffix: "%", label: "Of views from non-followers" },
    { value: 9659, label: "Viewers reached" },
    { value: 45, prefix: "+", label: "Net new followers" },
  ] satisfies Stat[],
}

export const expertise = [
  {
    title: "Digital marketing",
    skills: ["Social media", "Promotional content", "Meta Ads support", "Content scheduling"],
  },
  {
    title: "Brand communications",
    skills: ["Brand messaging", "Copywriting", "Social content", "Email marketing"],
  },
  {
    title: "Customer experience",
    skills: ["Client relations", "Service follow-up", "Feedback review", "CRM fundamentals"],
  },
  {
    title: "Tools",
    skills: [
      "Canva",
      "CapCut",
      "Hootsuite",
      "Buffer",
      "Google Analytics",
      "Microsoft Office",
      "Google Workspace",
    ],
  },
]

export const experience = [
  {
    group: "Professional",
    roles: [
      {
        company: "Twentiies",
        role: "Customer Relations Associate",
        period: "Jan 2025 to Jul 2026",
        location: "Remote",
        summary:
          "Handled enquiries from 406 clients across social channels and tracked recurring feedback so the team could improve the customer experience.",
        logo: "/images/logo-twentiies.jpg",
      },
      {
        company: "Galaxy Jay Realty",
        role: "Administrative Assistant",
        period: "Jan to Dec 2024",
        location: "Lagos",
        summary:
          "Managed executive calendars, property viewings and client correspondence. Recognised by senior leadership for client service.",
        logo: "/images/logo-galaxy-jay.jpg",
      },
    ],
  },
  {
    group: "Volunteer",
    roles: [
      {
        company: "Shell Beauty",
        role: "Brand Communications Associate",
        period: "Sep 2026 to present",
        location: "Remote",
        summary:
          "Manage the brand's social pages and customer messages, following up on product and order enquiries so next steps stay clear.",
        logo: "/images/logo-shell-beauty.jpg",
      },
      {
        company: "Federal Road Safety Corps",
        role: "Assistant Project Coordinator",
        period: "Apr to Oct 2022",
        location: "Abeokuta",
        summary:
          "Assisted the Public Education Department with coordination and helped organise public lectures and outreach activities.",
        logo: "/images/logo-frsc.jpg",
      },
    ],
  },
]

export const education = "B.A. Theatre and Media Studies, University of Calabar"

export const certifications = [
  "HubSpot · Social Media",
  "HubSpot · Email Marketing",
  "IBM · Project Management",
  "Illinois Tech · Operations",
  "ALX Africa · Admin Professional",
  "CVS Health · Customer Service",
  "CU Boulder · Workplace Communication",
]
