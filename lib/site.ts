/**
 * Global site configuration: brand, contact, nav (spec 3.1) and footer (spec 3.2).
 * Values marked CONFIRM are placeholders the business must verify before launch.
 */

export const site = {
  name: "ESA Letter New York",
  url: "https://esaletternewyork.com",
  logo: "/esa-letter-new-york-logo-image.png",
  // Every "Get Your ESA Letter" CTA opens the evaluation survey
  applyHref: "https://survey.myesatherapist.com/",
  // CONFIRM: support inbox and hours
  email: "support@esaletternewyork.com",
  supportHours: "Monday to Friday, 9am to 6pm ET",
  // CONFIRM: live pricing
  pricing: {
    letter: 149,
    renewal: 129,
    currency: "USD",
  },
  turnaround: "Often within 24 hours of your consultation",
  lastReviewed: "2026-10-26",
  // M11 reviewer box. CONFIRM: replace with a real named reviewer, credentials and NY license number
  // (spec 10.4: real, verifiable providers only; never invent a person).
  reviewer: {
    name: "ESA Letter New York Clinical Review Team",
    credentials: "New York-licensed mental health professionals",
    licenseState: "New York",
    licenseNumber: "",
  },
  disclaimer:
    "ESA Letter New York provides access to evaluations by licensed mental health professionals. Content on this site is for general information only and is not medical or legal advice. An ESA letter is issued only if a licensed professional determines it is clinically appropriate.",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const primaryNav: NavItem[] = [
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Requirements", href: "/requirements/" },
  {
    label: "Your Rights",
    href: "/rights/",
    children: [
      { label: "Fair Housing Act", href: "/rights/fair-housing-act/" },
      { label: "NYS Human Rights Law", href: "/rights/new-york-state-human-rights-law/" },
      { label: "NYC Human Rights Law", href: "/rights/nyc-human-rights-law/" },
      { label: "Co-ops & Condos", href: "/rights/co-op-and-condo-esa-rules/" },
      { label: "Landlord Denials", href: "/rights/landlord-denials/" },
    ],
  },
  {
    label: "Do I Qualify?",
    href: "/conditions/",
    children: [
      { label: "Anxiety", href: "/conditions/anxiety/" },
      { label: "Depression", href: "/conditions/depression/" },
      { label: "PTSD", href: "/conditions/ptsd/" },
      { label: "Panic Disorder", href: "/conditions/panic-disorder/" },
      { label: "ADHD", href: "/conditions/adhd/" },
    ],
  },
  {
    label: "Locations",
    href: "/locations/",
    children: [
      { label: "New York City", href: "/locations/new-york-city/" },
      { label: "Manhattan", href: "/locations/manhattan/" },
      { label: "Brooklyn", href: "/locations/brooklyn/" },
      { label: "Queens", href: "/locations/queens/" },
      { label: "Buffalo", href: "/locations/buffalo/" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
];

export const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Core",
    links: [
      { label: "What Is an ESA Letter", href: "/what-is-an-esa-letter/" },
      { label: "How to Get One in New York", href: "/how-to-get-an-esa-letter-in-new-york/" },
      { label: "Requirements", href: "/requirements/" },
      { label: "Sample Letter", href: "/sample-letter/" },
      { label: "Cost", href: "/cost/" },
      { label: "Renewal", href: "/renewal/" },
    ],
  },
  {
    title: "Your Rights",
    links: [
      { label: "Fair Housing Act", href: "/rights/fair-housing-act/" },
      { label: "NYS Human Rights Law", href: "/rights/new-york-state-human-rights-law/" },
      { label: "NYC Human Rights Law", href: "/rights/nyc-human-rights-law/" },
      { label: "Co-ops & Condos", href: "/rights/co-op-and-condo-esa-rules/" },
      { label: "Landlord Denials", href: "/rights/landlord-denials/" },
    ],
  },
  {
    title: "Qualifying Conditions",
    links: [
      { label: "Anxiety", href: "/conditions/anxiety/" },
      { label: "Depression", href: "/conditions/depression/" },
      { label: "PTSD", href: "/conditions/ptsd/" },
      { label: "ADHD", href: "/conditions/adhd/" },
      { label: "Autism Spectrum", href: "/conditions/autism-spectrum/" },
      { label: "See all conditions", href: "/conditions/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Our Therapists", href: "/about-our-therapists/" },
      { label: "How It Works", href: "/how-it-works/" },
      { label: "Reviews", href: "/reviews/" },
      { label: "For Landlords", href: "/for-landlords/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/contact/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms", href: "/terms/" },
      { label: "Disclaimer", href: "/disclaimer/" },
      { label: "Refund Policy", href: "/refund-policy/" },
    ],
  },
];

export const footerLegal = [
  { label: "HIPAA Notice", href: "/hipaa-notice/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
  { label: "Accessibility Statement", href: "/accessibility-statement/" },
];

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function formatPrice(amount: number) {
  return `$${amount}`;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
