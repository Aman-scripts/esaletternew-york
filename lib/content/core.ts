import type { ArticlePage } from "./types";
import { site, formatPrice } from "../site";

const UPDATED = site.lastReviewed;

export const corePages: ArticlePage[] = [
  {
    path: "/what-is-an-esa-letter/",
    h1: "What Is an ESA Letter?",
    label: "What Is an ESA Letter?",
    title: "What Is an ESA Letter? A New York Renter's Guide",
    description:
      "An ESA letter is documentation from a licensed professional supporting an emotional support animal. See how it works under federal, state and NYC law.",
    robots: "IF",
    template: "T2",
    parent: "/",
    phase: 1,
    priority: "High",
    schema: ["Article", "FAQPage"],
    intro:
      "An ESA letter is a short document from a licensed mental health professional that supports your request to live with an emotional support animal. Here is what it is, what it is not, and how New Yorkers use it.",
    updated: UPDATED,
    sections: [
      {
        heading: "Definition of an ESA letter",
        paragraphs: [
          "An emotional support animal (ESA) letter is written documentation from a licensed mental health professional. It states that you have a mental or emotional health condition that substantially limits one or more major life activities, and that an animal provides support that helps with that condition.",
          "The letter is the basis for a reasonable accommodation request to a housing provider. It does not certify, register or train your animal, and it does not need to name your diagnosis.",
        ],
      },
      {
        heading: "Legal basis (FHA, NYS Human Rights Law, NYC Human Rights Law)",
        paragraphs: [
          "New York renters are protected by three layers of housing law. The federal Fair Housing Act requires most housing providers to make reasonable accommodations for people with disabilities. The New York State Human Rights Law (Executive Law 296) adds state-level protections, and inside the five boroughs the NYC Human Rights Law (Admin Code 8-107) adds city-level protections enforced by the NYC Commission on Human Rights.",
          "An ESA letter is how you show a housing provider that your request is disability-related and supported by a licensed professional.",
        ],
      },
      {
        heading: "What an ESA letter is NOT (registration, ID card, vest)",
        list: [
          "Not a registration: there is no official ESA registry in New York or at the federal level.",
          "Not an ID card or certificate: cards and certificates sold online carry no legal weight on their own.",
          "Not a vest or tag: accessories do not create housing rights.",
          "Not a public-access pass: ESAs do not have the public access rights that trained service animals have under the ADA.",
        ],
      },
      {
        heading: "Who can write one (licensed professionals)",
        paragraphs: [
          "A valid letter comes from a licensed mental health professional, such as a psychologist, licensed clinical social worker (LCSW), licensed mental health counselor (LMHC), psychiatrist or psychiatric nurse practitioner, acting within the scope of their license.",
          "For New York housing, the professional should hold a license that allows them to evaluate you where you live. The letter should include their name, license type, license number and issuing state so a housing provider can verify it.",
        ],
      },
      {
        heading: "How it is used with landlords and co-op boards",
        paragraphs: [
          "You submit the letter with a written reasonable accommodation request. Landlords, managing agents and co-op or condo boards review the request, may ask for reasonable documentation if your disability-related need is not obvious, and should respond within a reasonable time.",
          "In New York City, housing providers are also expected to engage in a cooperative dialogue with you before denying a request.",
        ],
      },
    ],
    callout: {
      variant: "warning",
      title: "Beware of instant registrations",
      text: "Websites that sell instant registrations, certificates or ID cards without an evaluation by a licensed professional do not provide valid ESA documentation.",
    },
    faqs: [
      {
        q: "Does an ESA letter need to list my diagnosis?",
        a: "No. A letter generally confirms that you have a disability-related need for the animal without disclosing a specific diagnosis.",
      },
      {
        q: "Is an ESA letter the same as a service animal certification?",
        a: "No. Service animals are individually trained to perform tasks and are covered by the ADA in public places. ESAs provide support through companionship and are covered mainly in housing.",
      },
      {
        q: "Can my landlord require a specific form?",
        a: "A landlord may offer a form, but generally cannot deny a request only because you used reliable documentation in a different format.",
      },
    ],
    related: ["/requirements/", "/sample-letter/", "/rights/", "/how-to-get-an-esa-letter-in-new-york/"],
  },
  {
    path: "/how-to-get-an-esa-letter-in-new-york/",
    h1: "How to Get an ESA Letter in New York",
    label: "How to Get an ESA Letter",
    title: "How to Get an ESA Letter in New York: Step-by-Step",
    description:
      "Learn how to get a valid ESA letter in New York: check eligibility, meet a licensed professional, and receive your letter, often within 24 hours.",
    robots: "IF",
    template: "T2",
    parent: "/",
    phase: 1,
    priority: "High",
    schema: ["HowTo", "FAQPage"],
    intro:
      "Getting a legitimate ESA letter in New York takes three steps: a short assessment, a consultation with a licensed professional, and, if you qualify, a signed letter delivered digitally.",
    updated: UPDATED,
    sections: [
      {
        heading: "Eligibility check",
        paragraphs: [
          "You may be eligible if you live with a mental or emotional health condition that substantially limits a major life activity, such as sleeping, concentrating, working or caring for yourself, and an animal helps ease those limitations.",
          "Only a licensed professional can make that determination. Our online assessment simply helps you decide whether an evaluation makes sense for you.",
        ],
      },
      {
        heading: "Step-by-step process (HowTo steps)",
        steps: [
          { title: "Take the assessment", text: "Answer a short questionnaire about your housing situation and how an animal supports you." },
          { title: "Consult a licensed professional", text: "Meet with a professional licensed in New York by phone or video. They evaluate your needs and decide whether an ESA letter is appropriate." },
          { title: "Receive your letter", text: "If you qualify, your signed letter is delivered as a PDF you can share with your landlord, managing agent or board." },
          { title: "Submit your accommodation request", text: "Send the letter with a short written request to your housing provider and keep copies of everything." },
        ],
      },
      {
        heading: "Timeline - what to expect",
        paragraphs: [
          "The assessment takes about 10 minutes. Consultations are usually scheduled within a few days, and approved letters are often delivered within 24 hours of the consultation. Timing depends on provider availability and is never guaranteed.",
        ],
      },
      {
        heading: "What you receive",
        list: [
          "A signed letter on the provider's letterhead",
          "The provider's name, license type, license number and issuing state",
          "The date of issue",
          "A statement of your disability-related need for the animal, without your diagnosis",
          "Support if your landlord has questions about verifying the letter",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        list: [
          "Buying a registry listing or ID card instead of getting an evaluation",
          "Using a letter from a provider who is not licensed where you live",
          "Moving in with the animal before your request is approved",
          "Making the request verbally only, with no written record",
          "Waiting until a lease renewal or board interview to raise the request",
        ],
      },
    ],
    callout: {
      variant: "info",
      title: "No approval is guaranteed",
      text: "A licensed professional decides whether an ESA letter is clinically appropriate. If you do not qualify, our refund policy applies.",
    },
    faqs: [
      {
        q: "Can I get an ESA letter online in New York?",
        a: "Yes. Telehealth evaluations with a professional licensed in New York are an accepted way to obtain an ESA letter.",
      },
      {
        q: "Do I need an existing therapist?",
        a: "No. If you already have a therapist, they can write a letter. If not, you can be evaluated by a licensed professional through our service.",
      },
      {
        q: "How long is the letter valid?",
        a: "There is no single legal expiration date, but many housing providers expect a letter dated within the past 12 months.",
      },
    ],
    related: ["/requirements/", "/how-it-works/", "/cost/", "/online-esa-letter-new-york/"],
  },
  {
    path: "/online-esa-letter-new-york/",
    h1: "Online ESA Letter New York",
    label: "Online ESA Letter",
    title: "Online ESA Letter New York: Licensed Providers",
    description:
      "Get an online ESA letter in New York through a remote consultation with a licensed professional. See how telehealth evaluations work and what to expect.",
    robots: "IF",
    template: "T2",
    parent: "/",
    phase: 1,
    priority: "High",
    schema: ["Service", "FAQPage"],
    intro:
      "A telehealth evaluation lets you meet a New York-licensed professional from home. Here is how online ESA evaluations work and how they compare with in-person visits.",
    updated: UPDATED,
    sections: [
      {
        heading: "How online (telehealth) evaluations work",
        paragraphs: [
          "You complete a short intake online, then meet a licensed professional by secure video or phone. The professional reviews your history and current needs, asks follow-up questions, and decides whether an ESA is part of an appropriate plan for you.",
        ],
      },
      {
        heading: "Who the providers are (licensed in New York)",
        paragraphs: [
          "Evaluations are completed by mental health professionals who hold active New York licenses. Each letter includes the license number so it can be checked on the New York State Office of the Professions license verification site.",
        ],
      },
      {
        heading: "Online vs in-person evaluations",
        table: {
          head: ["", "Online (telehealth)", "In-person"],
          rows: [
            ["Scheduling", "Usually within days", "Depends on local availability"],
            ["Travel", "None", "Required"],
            ["Licensing standard", "Same: must be licensed in NY", "Same: must be licensed in NY"],
            ["Letter validity", "Equivalent", "Equivalent"],
          ],
        },
      },
      {
        heading: "Is an online letter accepted by landlords?",
        paragraphs: [
          "Federal guidance has cautioned housing providers about documentation bought online without a real professional relationship. A letter issued after a genuine evaluation by a licensed professional is reliable documentation regardless of whether the visit was online or in an office.",
        ],
      },
      {
        heading: "Privacy and security",
        paragraphs: [
          "Your intake is submitted over an encrypted connection. Health information is never placed in URLs or sent to analytics tools, and is handled according to our HIPAA Notice of Privacy Practices.",
        ],
      },
    ],
    callout: {
      variant: "info",
      title: "Verify any provider",
      text: "Whichever service you use, confirm the provider's New York license number before you submit a letter to your landlord.",
    },
    faqs: [
      {
        q: "Is telehealth legal for ESA evaluations in New York?",
        a: "Yes. Licensed professionals can provide telehealth evaluations to clients located in New York.",
      },
      {
        q: "Will my landlord know the evaluation was online?",
        a: "The letter itself does not need to say how the evaluation was conducted. What matters is that it comes from a licensed professional.",
      },
      {
        q: "What do I need for the video consultation?",
        a: "A phone or computer with a camera, a private space, and about 15 to 30 minutes.",
      },
    ],
    related: ["/how-it-works/", "/requirements/", "/about-our-therapists/", "/rights/fake-registries-warning/"],
  },
  {
    path: "/requirements/",
    h1: "New York ESA Letter Requirements",
    label: "Requirements",
    title: "New York ESA Letter Requirements: Valid Letter Checklist",
    description:
      "Learn what a valid New York ESA letter must include, who can write it, how long it stays current, and the red flags landlords and co-op boards look for.",
    robots: "IF",
    template: "T2",
    parent: "/",
    phase: 1,
    priority: "High",
    schema: ["Article", "FAQPage"],
    intro:
      "Use this checklist to confirm your ESA letter will hold up with a New York landlord, managing agent or co-op board.",
    updated: UPDATED,
    sections: [
      {
        heading: "Mandatory elements checklist",
        list: [
          "Provider letterhead with contact details",
          "Provider name, license type, license number and issuing state",
          "Date of issue (ideally within the past 12 months)",
          "Statement that you have a condition that substantially limits a major life activity",
          "Statement that the animal provides support related to that condition",
          "Provider signature",
        ],
      },
      {
        heading: "Licensed provider rules (NY licensure)",
        paragraphs: [
          "The professional should be licensed to practice in New York, or otherwise authorized to evaluate you where you live. License status can be confirmed through the New York State Office of the Professions.",
        ],
      },
      {
        heading: "Compliance with FHA, NYSHRL and NYC HRL",
        paragraphs: [
          "All three laws allow a housing provider to request reliable documentation when a disability or the disability-related need for an animal is not obvious. None of them requires registration, certification or a specific diagnosis on the letter.",
        ],
      },
      {
        heading: "Validity period (generally 1 year)",
        paragraphs: [
          "No statute sets an expiration date, but housing providers commonly ask for a letter dated within the last year, especially at lease signing or renewal. Planning an annual re-evaluation avoids gaps.",
        ],
      },
      {
        heading: "Red flags of invalid letters",
        list: [
          "No license number, or a license that cannot be verified",
          "Issued instantly with no consultation",
          "Sold with a registry number, ID card or certificate as the main product",
          "Generic wording that does not reference a disability-related need",
          "Provider not licensed in the state where you live",
        ],
      },
    ],
    callout: {
      variant: "info",
      title: "Quick check",
      text: "If you can look up the provider's license number and it is active, your letter clears the most common objection landlords raise.",
    },
    faqs: [
      {
        q: "Does my animal need training?",
        a: "No. ESAs do not need task training, though your animal should be house-trained and not pose a direct threat to others.",
      },
      {
        q: "Can a primary care doctor write an ESA letter?",
        a: "A licensed physician who is familiar with your condition may provide documentation, but most people work with a licensed mental health professional.",
      },
      {
        q: "Do I need a separate letter for each animal?",
        a: "Each animal should be supported by documentation. One letter can cover more than one animal if the professional finds a need for each.",
      },
    ],
    related: ["/sample-letter/", "/what-is-an-esa-letter/", "/renewal/", "/rights/fake-registries-warning/"],
  },
  {
    path: "/sample-letter/",
    h1: "ESA Letter Sample",
    label: "Sample Letter",
    title: "ESA Letter Sample for New York Housing (Annotated)",
    description:
      "View an annotated sample ESA letter for New York housing. See each element a landlord or co-op board looks for and how a valid letter is structured.",
    robots: "IF",
    template: "T2",
    parent: "/",
    phase: 1,
    priority: "Medium",
    schema: ["Article", "FAQPage"],
    intro:
      "See how a valid ESA letter for New York housing is structured, with each required element marked and explained.",
    updated: UPDATED,
    sections: [
      {
        heading: "Annotated sample letter",
        paragraphs: [
          "The sample below is illustrative only. Real letters are written by the evaluating professional and reflect your individual circumstances.",
        ],
      },
      {
        heading: "Element-by-element breakdown",
        list: [
          "1. Letterhead: identifies the provider or practice and how to reach them.",
          "2. Date: shows the letter is current.",
          "3. License details: name, license type, number and state so the letter can be verified.",
          "4. Disability statement: confirms a qualifying condition without naming it.",
          "5. Need statement: explains that the animal supports the person's disability-related needs.",
          "6. Signature: the professional's signature.",
        ],
      },
      {
        heading: "What landlords and boards look for",
        paragraphs: [
          "Housing providers mainly check that the letter is recent, comes from a verifiable licensed professional, and connects the animal to a disability-related need. Co-op and condo boards may also review house rules on noise and common areas.",
        ],
      },
      {
        heading: "Download / preview note",
        paragraphs: [
          "We do not offer a fill-in-the-blank ESA letter because a valid letter must come from a professional who has evaluated you. Use the sample to understand the format, then complete an evaluation.",
        ],
      },
    ],
    callout: {
      variant: "warning",
      title: "Templates are not letters",
      text: "Writing your own ESA letter from a template, or editing someone else's, is not valid documentation and can lead to a denial.",
    },
    faqs: [
      {
        q: "Can I use this sample as my letter?",
        a: "No. It is a reference only. Your letter must be written and signed by the licensed professional who evaluated you.",
      },
      {
        q: "Should the letter mention my animal's breed?",
        a: "It may describe the animal, but breed is not required. Some providers include the animal's type and name.",
      },
      {
        q: "Is a digital signature acceptable?",
        a: "Yes, digitally signed letters are commonly accepted.",
      },
    ],
    related: ["/requirements/", "/what-is-an-esa-letter/", "/rights/landlord-request-letter-template/", "/cost/"],
  },
  {
    path: "/cost/",
    h1: "ESA Letter Cost in New York",
    label: "Cost",
    title: "ESA Letter Cost in New York: Pricing & Guarantee",
    description:
      "See what an ESA letter costs in New York, what is included, how the money-back guarantee works, and why free or very cheap letters often get rejected.",
    robots: "IF",
    template: "T2",
    parent: "/",
    phase: 1,
    priority: "High",
    schema: ["Product", "FAQPage"],
    intro:
      "One clear price covers your evaluation with a New York-licensed professional and, if you qualify, your housing letter.",
    updated: UPDATED,
    sections: [
      {
        heading: "Pricing",
        paragraphs: [
          `An ESA housing evaluation and letter costs ${formatPrice(site.pricing.letter)}. There are no subscription fees and no charge for registries or ID cards, because those are not needed.`,
        ],
      },
      {
        heading: "What is included",
        list: [
          "Online assessment",
          "Telehealth consultation with a professional licensed in New York",
          "Signed ESA letter as a PDF if you qualify",
          "Verification support if your landlord contacts the provider",
          "Customer support by email",
        ],
      },
      {
        heading: "Money-back guarantee terms",
        paragraphs: [
          "If the professional determines you do not qualify, you receive a full refund. Full terms, including timing and exclusions, are in our Refund & Money-Back Policy.",
        ],
      },
      {
        heading: "Why free / cheap letters fail",
        paragraphs: [
          "Letters that skip a real evaluation, or come from unlicensed or out-of-state writers, are easy for landlords to question. A denial can cost far more than the letter itself in delays, fees or a lost apartment.",
        ],
      },
      {
        heading: "Renewal cost",
        paragraphs: [
          `Annual re-evaluations cost ${formatPrice(site.pricing.renewal)}. Renewal includes a new consultation and an updated, newly dated letter.`,
        ],
      },
    ],
    callout: {
      variant: "info",
      title: "HSA and FSA",
      text: "Some health savings and flexible spending plans may cover mental health evaluations. Check with your plan administrator.",
    },
    faqs: [
      {
        q: "Are there hidden fees?",
        a: "No. The price shown covers the evaluation and the letter if you qualify.",
      },
      {
        q: "Does insurance cover an ESA letter?",
        a: "Usually not directly, but some HSA or FSA plans may reimburse the evaluation. Ask your plan.",
      },
      {
        q: "What if my landlord rejects the letter?",
        a: "Contact support. We can help your landlord verify the provider's license, and our refund policy explains what is covered.",
      },
    ],
    related: ["/refund-policy/", "/renewal/", "/how-it-works/", "/requirements/"],
  },
  {
    path: "/renewal/",
    h1: "ESA Letter Renewal",
    label: "Renewal",
    title: "ESA Letter Renewal in New York: When & How to Renew",
    description:
      "Find out when your New York ESA letter needs renewal, how re-evaluation works, what it costs, and how to avoid a gap in housing documentation.",
    robots: "IF",
    template: "T2",
    parent: "/",
    phase: 1,
    priority: "Medium",
    schema: ["Article", "FAQPage"],
    intro:
      "Most New York housing providers expect an ESA letter dated within the past year. Here is how to renew without a gap.",
    updated: UPDATED,
    sections: [
      {
        heading: "When renewal is needed",
        list: [
          "Your letter is more than 12 months old and your lease is renewing",
          "You are moving to a new apartment or applying to a co-op or condo",
          "Your housing provider reasonably asks for current documentation",
          "You are adding a new animal",
        ],
      },
      {
        heading: "Renewal process",
        steps: [
          { title: "Start a renewal", text: "Complete a short update on your current needs and housing." },
          { title: "Re-evaluation", text: "Meet with a licensed professional to review how things have changed." },
          { title: "Updated letter", text: "If still appropriate, receive a newly dated letter." },
        ],
      },
      {
        heading: "Cost",
        paragraphs: [`A renewal evaluation costs ${formatPrice(site.pricing.renewal)}.`],
      },
      {
        heading: "What changes on re-evaluation",
        paragraphs: [
          "The professional reassesses your current needs. Most renewals are straightforward, but the outcome is always a clinical decision and is not guaranteed.",
        ],
      },
    ],
    callout: {
      variant: "info",
      title: "Renew early",
      text: "Start your renewal 30 days before your lease renewal date so your documentation never lapses.",
    },
    faqs: [
      {
        q: "Does my ESA letter legally expire?",
        a: "No statute sets an expiration date, but landlords commonly ask for a letter from the past year.",
      },
      {
        q: "Can I renew with a different provider?",
        a: "Yes. Any licensed professional who evaluates you can provide an updated letter.",
      },
      {
        q: "Do I need to resubmit to my landlord?",
        a: "Only if they request current documentation, or at a new lease, move or board application.",
      },
    ],
    related: ["/requirements/", "/cost/", "/blog/how-long-is-an-esa-letter-valid-in-new-york/", "/how-it-works/"],
  },
];
