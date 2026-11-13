export const contact = {
  email: "okpefaitholoh@gmail.com",
  phone: "+234 810 856 9408",
  phoneHref: "tel:+2348108569408",
  linkedin: "https://www.linkedin.com/in/okpe-faith",
  cv: "/Okpe_Faith_Oloh_CV.pdf",
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
  focus: "Market research · Consumer insights · Brand strategy",
  tagline:
    "Research, audience insight and brand strategy across real estate and fashion, from consumer studies to market positioning.",
  openTo: ["Market research", "Consumer insights", "Brand strategy"],
}

export const disciplines = [
  "Market research",
  "Consumer insights",
  "Audience segmentation",
  "Brand strategy",
  "Strategic communications",
  "Digital marketing",
]

export const about = {
  statement:
    "I'm Faith, a market research and brand strategy professional based in Lagos, with over three years across consumer research, market analysis and strategic communications.",
  paragraphs: [
    "My work involves investigating purchasing behaviour, identifying market opportunities and developing audience-informed communication recommendations.",
    "At Galaxy Jay Realty, I researched housing affordability, mortgage awareness and purchasing behaviour among 152 civil servants in Lagos, then translated the findings into recommendations for audience segmentation, property positioning and marketing communications.",
    "At Twentiies, I researched the Kigali fashion market and developed culturally relevant brand communications, contributing to engagement with 406 distinct clients in one year and conceptualising the Kwibuka 32 commemorative initiative.",
    "I hold a Bachelor of Arts in Theatre and Media Studies from the University of Calabar, where I developed a sharp understanding of audiences and of how people respond to information.",
  ],
}

export type Stat = {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
}

export type Fact = {
  text: string
  label: string
}

export const stats: Stat[] = [
  { value: 152, label: "Survey respondents in Lagos housing research" },
  { value: 406, label: "Distinct clients engaged at Twentiies in one year" },
  { value: 3, suffix: "+", label: "Years across research and brand strategy" },
  { value: 95, label: "Client responses to Kwibuka 32" },
]

export const projects = [
  {
    client: "Galaxy Jay Realty",
    sector: "Consumer research",
    title: "The Affordability Gap.",
    slug: "affordability-gap",
    summary: "Consumer research on the barriers influencing homeownership among salaried professionals in Lagos.",
    facts: [
      { value: 152, label: "Survey respondents" },
      { text: "2024", label: "Project year" },
    ],
    sections: [
      {
        heading: "Context",
        body: "Understanding the financial and behavioural barriers facing prospective buyers was essential to identifying more relevant market segments and communication opportunities.",
      },
      {
        heading: "Research approach",
        body: "Primary research involving 152 civil servants in Lagos explored affordability, mortgage awareness, purchasing intentions and concerns around documentation, location and infrastructure. Survey responses were considered alongside buyer enquiries and property inspection feedback.",
      },
      {
        heading: "My contribution",
        body: "As Market Research Associate, I conducted consumer research, analysed responses and translated the findings into recommendations for audience segmentation, property positioning and clearer communication of financing and flexible payment options.",
      },
      {
        heading: "Strategic relevance",
        body: "The research informed more specific buyer communications and highlighted where knowledge gaps, affordability concerns and trust could affect purchase decisions.",
      },
    ],
    description:
      "Primary research with 152 civil servants in Lagos on affordability, mortgage awareness and purchase intentions. The findings shaped audience segmentation, property positioning and clearer communication of financing and flexible payment options.",
    role: "Market Research Associate",
    image: "/images/project-affordability.jpg",
    imageFit: "contain",
    surface: "bg-paper",
  },
  {
    client: "Galaxy Jay Realty",
    sector: "Market opportunity",
    title: "Beyond Ownership.",
    slug: "beyond-ownership",
    summary: "Exploring property opportunities beyond conventional homeownership.",
    facts: [
      { text: "2024", label: "Project year" },
      { text: "Real estate", label: "Industry" },
    ],
    sections: [
      {
        heading: "Context",
        body: "Property decisions are shaped by more than the desire to own a home. Different buyers evaluate property through income potential, utility, affordability and long-term value.",
      },
      {
        heading: "Research focus",
        body: "The project explored interest in alternative uses of property, including agricultural leasing and short-let management, and considered implications for product positioning.",
      },
      {
        heading: "My contribution",
        body: "I supported the research and interpretation of consumer preferences to inform market opportunity discussions and differentiated positioning for property-related offerings.",
      },
      {
        heading: "Strategic relevance",
        body: "The findings offered a way to frame property around practical consumer objectives and prospective income opportunities, rather than ownership alone.",
      },
    ],
    description:
      "Explored interest in property beyond conventional homeownership, including agricultural leasing and short-let management, framing property around income potential and long-term value to inform differentiated positioning.",
    role: "Research and positioning",
    image: "/images/project-ownership.jpg",
    imageFit: "contain",
    surface: "bg-paper",
  },
  {
    client: "Twentiies",
    sector: "Brand strategy",
    title: "Reframing Brand Relevance.",
    slug: "reframing-brand-relevance",
    summary: "Audience-led brand communication for a fashion business establishing relevance in Kigali.",
    facts: [
      { value: 406, label: "Distinct clients in one year" },
      { text: "2025", label: "Project start" },
    ],
    sections: [
      {
        heading: "Context",
        body: "As a Nigerian fashion brand operating in Kigali, Twentiies needed communications that reflected its market and the preferences of its audience.",
      },
      {
        heading: "Approach",
        body: "Consumer preferences, client enquiries and purchasing behaviour informed audience-focused content and brand messaging.",
      },
      {
        heading: "My contribution",
        body: "As Brand Content Strategist, I researched local market characteristics, developed relevant communication approaches and evaluated client feedback to refine brand positioning.",
      },
      {
        heading: "Result",
        body: "Brand and content activity contributed to a portfolio of 406 distinct clients within one year. This is a cumulative client figure rather than a claim of direct campaign attribution.",
      },
    ],
    description:
      "Audience-led brand communication for a Nigerian fashion brand establishing relevance in Kigali. Local market research and client feedback refined positioning, as the brand grew to 406 distinct clients within one year.",
    role: "Brand Content Strategist",
    image: "/images/project-brand-relevance.jpg",
    imageFit: "contain",
    surface: "bg-black",
    link: { label: "Visit Twentiies", href: "https://www.instagram.com/twentiies_/" },
  },
  {
    client: "Twentiies",
    sector: "Strategic communications",
    title: "Kwibuka 32.",
    slug: "kwibuka-32",
    summary: "A commemorative brand communication initiative grounded in cultural sensitivity and respect.",
    facts: [
      { value: 95, label: "Client responses" },
      { text: "April 2026", label: "Campaign" },
    ],
    sections: [
      {
        heading: "Context",
        body: "Kwibuka is a period of national remembrance in Rwanda. Any brand communication during this period required sensitivity, restraint and an understanding of its significance.",
      },
      {
        heading: "Approach",
        body: "The initiative used respectful storytelling and commemorative visuals rather than promotional language to acknowledge the country's history and express solidarity with the community.",
      },
      {
        heading: "My contribution",
        body: "I conceptualised the messaging and creative direction for the commemorative communication, aligning tone and visuals with the moment.",
      },
      {
        heading: "Audience response",
        body: "The campaign received 95 client responses, including expressions of appreciation and solidarity. The purpose was respectful engagement, not commercial conversion.",
      },
    ],
    description:
      "A commemorative campaign for Rwanda's national period of remembrance, built on respectful storytelling and restrained visuals rather than promotional language. It drew 95 client responses, many expressing appreciation and solidarity.",
    role: "Messaging and creative direction",
    image: "/images/project-kwibuka.jpg",
    imageFit: "contain",
    surface: "bg-black",
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
    title: "Market research",
    skills: ["Consumer research", "Survey research", "Market analysis", "Purchasing behaviour"],
  },
  {
    title: "Consumer insights",
    skills: ["Audience segmentation", "Feedback analysis", "Market opportunity", "Buyer research"],
  },
  {
    title: "Brand strategy",
    skills: ["Brand positioning", "Strategic communications", "Brand messaging", "Copywriting"],
  },
  {
    title: "Digital marketing",
    skills: ["Social media", "Promotional content", "Paid campaigns", "Content scheduling"],
  },
  {
    title: "Customer experience",
    skills: ["Client relations", "Service follow-up", "CRM fundamentals"],
  },
  {
    title: "Tools",
    skills: [
      "Microsoft Excel",
      "Google Forms",
      "Meta Ads Manager",
      "Meta Business Suite",
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
        company: "Shell Beauty",
        role: "Consumer Marketing Executive",
        period: "Sep 2026 to present",
        location: "Remote",
        summary:
          "Develop consumer-focused campaigns for a multi-brand beauty and fashion retailer, contributing to 138,295 cumulative social views. Analyse enquiries and engagement trends to shape product positioning and promotional messaging.",
        logo: "/images/logo-shell-beauty.jpg",
      },
      {
        company: "Twentiies",
        role: "Brand Content Strategist",
        period: "Feb 2025 to Jun 2026",
        location: "Remote",
        summary:
          "Researched market preferences and developed culturally relevant brand communications for the Kigali fashion market. Contributed to engagement with 406 distinct clients in one year and conceptualised the Kwibuka 32 commemorative initiative.",
        logo: "/images/logo-twentiies.jpg",
      },
      {
        company: "Galaxy Jay Realty",
        role: "Market Research Associate",
        period: "Jan 2023 to Jan 2025",
        location: "Lagos",
        summary:
          "Researched housing affordability, mortgage awareness and purchasing behaviour among 152 civil servants in Lagos. Analysed survey and buyer feedback to inform audience segmentation, positioning and marketing communications.",
        logo: "/images/logo-galaxy-jay.jpg",
      },
    ],
  },
  {
    group: "Volunteer",
    roles: [
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

export const education = "B.A. Theatre and Media Studies, University of Calabar, 2023"

export const certifications = [
  "CU Boulder · Strategic Communication Campaigns",
  "IE Business School · Market Research and Consumer Behavior",
  "HubSpot · Social Media Marketing",
  "Meta · Advertising with Meta",
  "HubSpot · Email Marketing",
  "IBM · Project Management",
  "Illinois Tech · Operations",
  "ALX Africa · Admin Professional",
  "CVS Health · Customer Service",
  "CU Boulder · Workplace Communication",
]
