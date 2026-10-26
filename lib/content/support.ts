import type { ArticlePage, Faq, LegalPage } from "./types";
import { site } from "../site";

const UPDATED = site.lastReviewed;

export type FaqGroup = { title: string; faqs: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Basics",
    faqs: [
      { q: "What is an ESA letter?", a: "A letter from a licensed mental health professional supporting your need for an emotional support animal, used to request a housing accommodation." },
      { q: "Is there an ESA registry in New York?", a: "No. There is no official registry. Registrations and ID cards do not create housing rights." },
      { q: "Do ESAs need training?", a: "No task training is required, but your animal should be well behaved and house-trained." },
    ],
  },
  {
    title: "Qualifying",
    faqs: [
      { q: "Who qualifies for an ESA?", a: "People with a mental or emotional health condition that substantially limits a major life activity, where an animal helps. A licensed professional decides." },
      { q: "Is approval guaranteed?", a: "No. The professional makes an independent clinical decision." },
      { q: "Can I get evaluated online?", a: "Yes, through a telehealth consultation with a professional licensed in New York." },
    ],
  },
  {
    title: "Cost & Refunds",
    faqs: [
      { q: "How much does an ESA letter cost?", a: `An evaluation and letter cost $${site.pricing.letter}. See our Cost page for details.` },
      { q: "What if I don't qualify?", a: "You receive a refund under our Refund & Money-Back Policy." },
      { q: "Is renewal cheaper?", a: `Yes. Annual renewals cost $${site.pricing.renewal}.` },
    ],
  },
  {
    title: "Housing Rights (NYS/NYC)",
    faqs: [
      { q: "Can my landlord charge pet rent for my ESA?", a: "Generally no. You remain responsible for actual damage." },
      { q: "Do co-op boards have to accept ESAs?", a: "Boards must consider requests under fair housing laws and can deny only for limited reasons." },
      { q: "What extra protection does NYC law give?", a: "In the five boroughs, housing providers must engage in a cooperative dialogue before denying a request." },
    ],
  },
  {
    title: "Renewal",
    faqs: [
      { q: "How long is my letter valid?", a: "There is no legal expiration, but landlords commonly expect a letter from the past year." },
      { q: "When should I renew?", a: "About 30 days before a lease renewal or move." },
    ],
  },
];

const base = {
  robots: "IF" as const,
  template: "T10" as const,
  parent: "/",
  updated: UPDATED,
  sections: [],
  related: [],
  faqs: [],
};

export const supportPages: ArticlePage[] = [
  {
    ...base,
    path: "/how-it-works/",
    h1: "How It Works",
    label: "How It Works",
    title: "How It Works: Get Your ESA Letter in New York",
    description:
      "See how to get your New York ESA letter: schedule an evaluation, consult a licensed professional, and receive your letter, often within 24 hours.",
    phase: 1,
    priority: "High",
    schema: ["HowTo", "FAQPage"],
    intro: "Three simple steps, one licensed professional, and a letter your landlord can verify.",
    sections: [
      {
        heading: "Timeline and what to expect",
        list: [
          "Assessment: about 10 minutes online",
          "Consultation: usually scheduled within a few days",
          "Letter: often delivered within 24 hours of your consultation if you qualify",
          "Support: help if your landlord wants to verify the letter",
        ],
      },
    ],
    faqs: [
      { q: "How long does the consultation take?", a: "Usually 15 to 30 minutes." },
      { q: "Can I choose phone instead of video?", a: "Ask during scheduling; availability depends on the provider." },
      { q: "What happens if I don't qualify?", a: "You will not receive a letter, and our refund policy applies." },
    ],
    related: ["/requirements/", "/cost/", "/rights/"],
  },
  {
    ...base,
    path: "/faq/",
    h1: "Frequently Asked Questions",
    label: "FAQ",
    title: "ESA Letter New York FAQ: Rights, Cost & Process",
    description:
      "Answers to common questions about ESA letters in New York: who qualifies, cost, validity, landlord and co-op rules, and how the evaluation works.",
    phase: 1,
    priority: "High",
    schema: ["FAQPage"],
    intro: "Straight answers about ESA letters, housing rights and our process in New York.",
    related: ["/how-it-works/", "/requirements/", "/rights/", "/cost/"],
  },
  {
    ...base,
    path: "/about-our-therapists/",
    h1: "About Our Providers",
    label: "About Our Providers",
    title: "Meet Our Licensed New York Providers & Credentials",
    description:
      "Meet the licensed mental health professionals who review ESA requests in New York, and learn how their credentials and licenses can be verified.",
    phase: 1,
    priority: "High",
    schema: ["Person"],
    intro: "Every ESA evaluation is completed by a mental health professional with an active New York license you can verify.",
    sections: [
      {
        heading: "How providers are vetted",
        list: [
          "Active, unrestricted New York license verified at onboarding and periodically after",
          "Licensed in a mental health profession (psychology, social work, counseling, psychiatry)",
          "Training on fair housing documentation standards",
          "Independent clinical judgment, with no approval quotas",
        ],
      },
      {
        heading: "Clinical review standards",
        list: [
          "Every letter follows a real consultation",
          "Letters include license details for verification",
          "Diagnoses are never disclosed on letters",
          "Providers may decline to issue a letter when it is not clinically appropriate",
        ],
      },
    ],
  },
  {
    ...base,
    path: "/reviews/",
    h1: "Reviews & Testimonials",
    label: "Reviews",
    title: "ESA Letter New York Reviews & Customer Stories",
    description:
      "Read feedback from New York renters who completed their ESA evaluation, plus how we collect and display reviews.",
    phase: 2,
    priority: "Medium",
    schema: [],
    intro: "Real feedback from New Yorkers who completed an evaluation.",
  },
  {
    ...base,
    path: "/for-landlords/",
    h1: "For Landlords & Property Managers",
    label: "For Landlords",
    title: "ESA Letters for Landlords & Property Managers in NY",
    description:
      "Landlords and managers in New York: learn how to review an ESA request lawfully, what documentation is reasonable, and how to confirm a letter is genuine.",
    phase: 2,
    priority: "Medium",
    schema: ["FAQPage"],
    intro: "A practical guide for New York landlords, managing agents and boards reviewing ESA accommodation requests.",
    sections: [
      {
        heading: "Reviewing an ESA request lawfully",
        steps: [
          { title: "Acknowledge the request", text: "Respond in writing and review it individually, not under the pet policy." },
          { title: "Assess documentation", text: "If the disability-related need is not obvious, you may ask for reliable documentation." },
          { title: "Engage in dialogue", text: "In NYC, engage in a cooperative dialogue before any denial." },
          { title: "Decide in writing", text: "Issue a written decision within a reasonable time." },
        ],
      },
      {
        heading: "Reasonable documentation vs overreach",
        table: {
          head: ["Reasonable", "Overreach"],
          rows: [
            ["Letter from a licensed professional", "Diagnosis or medical records"],
            ["Provider license details", "Registry certificates or ID cards"],
            ["Basic animal information", "Pet deposits or pet rent"],
          ],
        },
      },
      {
        heading: "How to check a letter is genuine",
        list: [
          "Look up the license number with the NYS Office of the Professions",
          "Confirm the license is active and in a mental health field",
          "Contact the provider to confirm the letter was issued (they will not share clinical details)",
        ],
      },
    ],
    faqs: [
      { q: "Can I deny an ESA because of breed?", a: "Breed restrictions generally cannot be applied to an approved ESA; assess the individual animal." },
      { q: "Can I charge for damage?", a: "Yes, for actual damage beyond normal wear and tear." },
      { q: "Is an online letter valid?", a: "A letter after a genuine evaluation by a licensed professional is reliable regardless of format." },
    ],
    related: ["/rights/", "/requirements/"],
  },
  {
    ...base,
    path: "/contact/",
    h1: "Contact Us",
    label: "Contact",
    title: "Contact ESA Letter New York | Support & Questions",
    description:
      "Questions about your ESA letter? Contact the ESA Letter New York support team by form or email. We reply to most messages within one business day.",
    phase: 1,
    priority: "High",
    schema: ["ContactPage", "FAQPage"],
    intro: "Questions about your evaluation, letter or landlord? We reply to most messages within one business day.",
    faqs: [
      { q: "Can I send medical information by email?", a: "Please don't. Share health information only during your secure evaluation." },
      { q: "Can my landlord contact you?", a: "Yes. We can confirm a letter was issued, without sharing clinical details." },
      { q: "How fast do you reply?", a: "Most messages within one business day." },
    ],
  },
];

const legalBase = {
  template: "T11" as const,
  parent: "/",
  phase: 1 as const,
  updated: UPDATED,
};

const contactSection = {
  heading: "Contact",
  paragraphs: [`Questions about this policy can be sent to ${site.email}.`],
};

export const legalPages: LegalPage[] = [
  {
    ...legalBase,
    path: "/privacy-policy/",
    h1: "Privacy Policy",
    label: "Privacy Policy",
    title: "Privacy Policy | ESA Letter New York",
    description:
      "How ESA Letter New York collects, uses, and protects your personal information, including data you submit during your ESA evaluation.",
    robots: "IF",
    priority: "High",
    schema: ["WebPage"],
    sections: [
      { heading: "Information we collect", paragraphs: ["Contact details you provide, information submitted during your evaluation, payment information processed by our payment provider, and limited technical data such as browser type."] },
      { heading: "How we use information", paragraphs: ["To provide evaluations and letters, process payments, respond to support requests, and meet legal obligations. We do not sell personal information."] },
      { heading: "Health information", paragraphs: ["Health information is handled under our HIPAA Notice of Privacy Practices. It is never placed in URLs or sent to analytics or advertising tools."] },
      { heading: "Cookies and analytics", paragraphs: ["See our Cookie Policy for details on cookies and how to manage them."] },
      { heading: "Your choices", paragraphs: ["You may request access to or deletion of your personal information, subject to legal record-keeping requirements."] },
      contactSection,
    ],
  },
  {
    ...legalBase,
    path: "/terms/",
    h1: "Terms & Conditions",
    label: "Terms",
    title: "Terms & Conditions | ESA Letter New York",
    description:
      "The terms that govern your use of ESA Letter New York, including services, payments, eligibility, and your responsibilities.",
    robots: "IF",
    priority: "High",
    schema: ["WebPage"],
    sections: [
      { heading: "Services", paragraphs: ["We connect you with licensed mental health professionals who conduct ESA evaluations. Professionals exercise independent clinical judgment."] },
      { heading: "Eligibility", paragraphs: ["You must be 18 or older and located in New York at the time of your evaluation."] },
      { heading: "No guarantee of approval", paragraphs: ["A letter is issued only if a licensed professional determines it is appropriate. Housing providers make their own decisions."] },
      { heading: "Payments and refunds", paragraphs: ["Fees are due at booking. Refunds are governed by our Refund & Money-Back Policy."] },
      { heading: "Your responsibilities", paragraphs: ["Provide accurate information, keep your animal under control, and comply with reasonable building rules."] },
      contactSection,
    ],
  },
  {
    ...legalBase,
    path: "/disclaimer/",
    h1: "Medical & Legal Disclaimer",
    label: "Disclaimer",
    title: "Medical & Legal Disclaimer | ESA Letter New York",
    description:
      "Important disclaimer: ESA Letter New York content is informational and is not medical or legal advice. Read the full notice here.",
    robots: "IF",
    priority: "High",
    schema: ["WebPage"],
    sections: [
      { heading: "Not medical advice", paragraphs: ["Website content is general information and is not a substitute for professional diagnosis or treatment. If you are in crisis, call or text 988 or call 911."] },
      { heading: "Not legal advice", paragraphs: ["Information about federal, New York State and New York City law is general and may change. Consult a lawyer about your situation."] },
      { heading: "No registration or certification", paragraphs: ["We do not register or certify animals. No official ESA registry exists."] },
      contactSection,
    ],
  },
  {
    ...legalBase,
    path: "/refund-policy/",
    h1: "Refund & Money-Back Policy",
    label: "Refund Policy",
    title: "Refund & Money-Back Policy | ESA Letter New York",
    description:
      "Read our refund and money-back guarantee policy, including what happens if you do not qualify for an ESA letter.",
    robots: "IF",
    priority: "High",
    schema: ["WebPage"],
    sections: [
      { heading: "If you do not qualify", paragraphs: ["If the licensed professional determines an ESA letter is not appropriate, you receive a full refund."] },
      { heading: "Landlord rejection", paragraphs: ["If a housing provider rejects a letter we issued, contact us. We will help verify the provider's license, and refund eligibility is reviewed case by case under these terms."] },
      { heading: "How to request a refund", paragraphs: [`Email ${site.email} with your order details. Refunds are returned to the original payment method.`] },
      contactSection,
    ],
  },
  {
    ...legalBase,
    path: "/hipaa-notice/",
    h1: "HIPAA Notice of Privacy Practices",
    label: "HIPAA Notice",
    title: "HIPAA Notice of Privacy Practices | ESA Letter New York",
    description:
      "How protected health information is handled, stored, and disclosed when you complete an ESA evaluation with ESA Letter New York.",
    robots: "NIF",
    priority: "High",
    schema: ["WebPage"],
    sections: [
      { heading: "How we may use and disclose health information", paragraphs: ["For treatment, payment and health care operations, and as required by law."] },
      { heading: "Your rights", list: ["Request a copy of your records", "Request corrections", "Request restrictions on certain disclosures", "Receive an accounting of disclosures", "File a complaint"] },
      { heading: "Our responsibilities", paragraphs: ["We maintain safeguards to protect health information and will notify you of a breach as required by law."] },
      contactSection,
    ],
  },
  {
    ...legalBase,
    path: "/cookie-policy/",
    h1: "Cookie Policy",
    label: "Cookie Policy",
    title: "Cookie Policy | ESA Letter New York",
    description:
      "Learn which cookies ESA Letter New York uses, why we use them, and how you can manage your cookie preferences.",
    robots: "NIF",
    priority: "Medium",
    schema: ["WebPage"],
    sections: [
      { heading: "What cookies are", paragraphs: ["Small files stored by your browser to help websites work and understand usage."] },
      { heading: "Cookies we use", list: ["Essential cookies for site operation", "Analytics cookies that never receive health information"] },
      { heading: "Managing cookies", paragraphs: ["You can block or delete cookies in your browser settings."] },
      contactSection,
    ],
  },
  {
    ...legalBase,
    path: "/accessibility-statement/",
    h1: "Accessibility Statement",
    label: "Accessibility Statement",
    title: "Accessibility Statement | ESA Letter New York",
    description:
      "ESA Letter New York is committed to an accessible website for everyone. Read our WCAG 2.1 AA commitment and how to report issues.",
    robots: "NIF",
    priority: "Low",
    schema: ["WebPage"],
    sections: [
      { heading: "Our commitment", paragraphs: ["We aim to meet WCAG 2.1 Level AA across our website."] },
      { heading: "Measures we take", list: ["Keyboard-navigable menus and accordions", "Visible focus states", "Text contrast of at least 4.5:1", "Pinch-zoom always enabled"] },
      { heading: "Report an issue", paragraphs: [`Email ${site.email} and we will respond within two business days.`] },
    ],
  },
];
