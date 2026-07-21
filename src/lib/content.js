// All site copy — single source of truth. No em-dashes anywhere.

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About HYRO' },
  { to: '/services', label: 'Our Services' },
  { to: '/approach', label: 'Our Approach' },
]

export const HERO = {
  chip: "Egypt's Premier Recruitment Partner",
  line1: 'Precision in People.',
  line2: 'Impact in Business.',
  sub: 'Every connection is built with purpose, bringing exceptional people and ambitious organizations together.',
}

export const PILLARS = [
  { icon: 'crosshair', title: 'Precise Matching', desc: 'We find the right people with pinpoint accuracy.' },
  { icon: 'shield', title: 'Absolute Discretion', desc: 'Confidential mandates handled with complete privacy.' },
  { icon: 'handshake', title: 'Trusted Network', desc: 'Our network is our strength. Built over years of relationships and referrals.' },
  { icon: 'trend', title: 'Lasting Impact', desc: 'We care about outcomes that create long-term value for your business.' },
]

export const ABOUT = {
  kicker: 'About Us',
  h2a: 'A Recruitment Partner',
  h2b: 'You Can Rely On',
  p1: 'HYRO is a recruitment and talent advisory firm specializing in executive search, permanent recruitment, and talent consulting. We partner with ambitious organizations to build high-performing teams and elevate careers.',
  quote: "The right person doesn't just fill a role. They shape the future of a business.",
  quoteAttr: 'Our Name Is Our Philosophy',
  philosophyH2: 'Our Name Is Our Philosophy',
  philosophyP1: "HYRO stands for Hire Your Right One. It's not just a name. It's the principle behind every search and every placement, guided by the belief that the right person doesn't just fill a role. They shape the future of a business.",
  philosophyP2: 'We partner with ambitious organizations to build high-performing teams and elevate careers.',
}

export const STATS = [
  { value: '21', label: 'Active Mandates', icon: 'checks' },
  { value: '300+', label: 'Curated Professionals', icon: 'users' },
  { value: '5+', label: 'Industries Served', icon: 'crosshair' },
]

export const SERVICES = {
  kicker: 'Our Services',
  h2a: 'Solutions Tailored to',
  h2b: 'Your Talent Needs',
  items: [
    {
      num: '01',
      icon: 'search',
      title: 'Selective Search',
      tag: 'The right talent. Found through intelligence, secured with precision.',
      desc: 'From emerging professionals to senior leadership, we proactively map the market, surface high-impact people, and engage the ones who truly move the needle. By pairing AI-driven insight with seasoned human judgment, we deliver a carefully curated shortlist of candidates aligned to your goals, your culture, and where your business is headed.',
      tags: ['Executive search', 'Permanent recruitment', 'Market mapping', 'Confidential mandates'],
      actionLabel: 'Start Your Search',
      actionTo: '/partner',
    },
    {
      num: '02',
      icon: 'users',
      title: 'Freelance Network',
      tag: 'Expert talent. On demand.',
      desc: "Instant access to Egypt's most vetted independent professionals across technology, finance, design, legal, and beyond.",
      tags: ['Technology', 'Finance', 'Design', 'Legal'],
      actionLabel: 'Join the Network',
      actionTo: '/join',
    },
    {
      num: '03',
      icon: 'handshake',
      title: 'Business Introductions',
      tag: 'Connecting the right businesses at the right time.',
      desc: 'We introduce businesses to trusted partners, service providers, investors, and commercial opportunities through our carefully built network. Every introduction is made with purpose, based on shared goals, mutual value, and the potential to build lasting relationships that support long term growth.',
      tags: ['Strategic partnerships', 'Trusted introductions', 'Business collaborations', 'Growth opportunities'],
      actionLabel: 'Build Partnerships',
      actionTo: '/business-introductions',
    },
    {
      num: '04',
      icon: 'checks',
      title: 'Tailored Solutions',
      tag: 'Every business is unique. Our solutions are too.',
      desc: 'We take the time to understand your specific challenges, then shape practical people solutions that create measurable impact and support sustainable growth.',
      tags: ['Talent advisory', 'Custom solutions', 'Workforce planning', 'Growth support'],
      actionLabel: 'Discuss Your Needs',
      actionTo: '/contact',
    },
  ],
  closer: "Step by step, we're growing into a full-service HR partner. Every solution, under one roof.",
}

export const APPROACH = {
  kicker: 'Our Approach',
  h2a: 'A Proven Process.',
  h2b: 'Exceptional Results.',
  sub: 'We combine industry expertise with a human-centered approach to connect you with the right talent.',
  steps: [
    { num: '01', icon: 'ear', deco: 'users', title: 'Understand', desc: 'We listen to your goals and define success.' },
    { num: '02', icon: 'radar', deco: 'search', title: 'Source', desc: 'We identify and engage the right talent.' },
    { num: '03', icon: 'checks', deco: 'fileSearch', title: 'Assess', desc: 'Rigorous evaluation to ensure the perfect fit.' },
    { num: '04', icon: 'handshake', deco: 'messages', title: 'Connect', desc: 'We introduce, facilitate and support the process.' },
    { num: '05', icon: 'award', deco: 'trend', title: 'Succeed', desc: 'Ongoing support to ensure long-term impact.' },
  ],
  cta: {
    text: 'Our process is built on trust, expertise and commitment',
    emphasis: 'to delivering real impact.',
    button: "Let's Start a Conversation",
  },
}

export const INDUSTRIES = ['Finance', 'Technology', 'Real Estate', 'Healthcare', 'Consumer Goods']

export const JOBS_FORM = {
  kicker: 'For Candidates',
  h1a: 'Submit Your',
  h1b: 'Profile.',
  sub: "Tell us a little about yourself and we'll keep you in mind. When a role comes along that's a great fit, we'll reach out personally. No endless applications, no waiting around.",
  industries: ['Any Industry', 'Technology', 'Finance', 'Healthcare', 'Marketing', 'Education', 'Engineering', 'Legal', 'Hospitality', 'Real Estate', 'Media & Entertainment', 'Retail', 'Manufacturing', 'Consulting', 'Banking', 'Logistics'],
  seniority: ['Any Level', 'Junior (0–2 yrs)', 'Mid-Level (3–5 yrs)', 'Senior (5–8 yrs)', 'Lead / Principal', 'Director', 'C-Level / Executive'],
  cities: ['Cairo', 'Alexandria', 'Giza', 'Remote', 'Hurghada', 'Sharm El Sheikh', 'Luxor', 'Aswan', 'Port Said', 'Mansoura', 'Tanta', 'Suez'],
  workTypes: ['On-Site', 'Hybrid', 'Remote'],
}

export const PARTNER = {
  kicker: 'For Companies',
  h1a: 'Become Our',
  h1b: 'Partner.',
  sub: 'Let us handle all your recruitment needs, end to end, with full discretion.',
  ctaPrimary: "Let's Work Together",
  ctaSecondary: 'Call Us',
  phone: '+20 100 123 4567',
  phoneHref: 'tel:+201001234567',
  form: {
    heading: 'Tell us about your hiring needs',
    sub: "We'll get back to you within 24 hours.",
  },
  benefits: [
    { icon: 'users', title: 'Top Talent', desc: 'Access to high-caliber professionals across industries.' },
    { icon: 'shield', title: 'Confidential & Discreet', desc: 'Your information and searches are always protected.' },
    { icon: 'gauge', title: 'Fast & Efficient Delivery', desc: 'We move quickly without compromising quality.' },
    { icon: 'network', title: 'Extensive Network', desc: 'Strong relationships across the Middle East and beyond.' },
  ],
  email: 'hyro@hyrorc.com',
}

export const BIZ_INTRO = {
  kicker: 'Business Introductions',
  h1a: 'Connections That',
  h1b: 'Create Opportunities.',
  sub: 'We connect businesses with trusted partners, service providers, investors, and opportunities that drive growth.',
  heroIcons: [
    { icon: 'network', label: 'Strategic Partnerships' },
    { icon: 'handshake', label: 'Trusted Network' },
    { icon: 'briefcase', label: 'Business Referrals' },
    { icon: 'building', label: 'Commercial Introductions' },
  ],
  form: {
    heading: "Tell Us What You're Looking For",
    sub: "Share your business needs and we'll connect you with the right people and opportunities.",
  },
  lookingFor: ['Strategic Partner', 'Investor', 'Service Provider', 'Client Introduction', 'Other'],
  email: 'hyro@hyrorc.com',
}

export const JOIN_FORM = {
  kicker: 'Freelance Network',
  h1a: 'Join the',
  h1b: 'Independent Network.',
  sub: "Egypt's most vetted independent professionals, across technology, finance, design, legal, and beyond.",
  expertise: ['Technology', 'Finance', 'Healthcare', 'Marketing', 'Education', 'Engineering', 'Legal', 'Hospitality', 'Real Estate', 'Media & Entertainment', 'Retail', 'Manufacturing', 'Consulting', 'Banking', 'Logistics'],
}

export const FOOTER = {
  blurb: "Egypt's premium recruitment agency. Selective search, freelancer network, and B2B introductions across the Middle East.",
  quickLinks: [
    { to: '/about-us', label: 'About HYRO' },
    { to: '/services', label: 'Our Services' },
    { to: '/approach', label: 'Our Approach' },
    { to: '/partner', label: 'For Companies' },
    { to: '/jobs', label: 'For Candidates' },
    { to: '/join', label: 'Join as a Freelancer' },
    { to: '/contact', label: 'Contact Us' },
  ],
  industries: INDUSTRIES,
  email: 'hyro@hyrorc.com',
  location: 'Cairo, Egypt',
  linkedin: 'https://www.linkedin.com/in/hyro-a4095741b',
  instagram: 'https://www.instagram.com/hyroegy/',
  copyright: '© 2026 HYRO. All rights reserved.',
}
