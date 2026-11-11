import type { ArticlePage } from "./types";
import { site } from "../site";

const UPDATED = site.lastReviewed;

type SpokeInput = Omit<
  ArticlePage,
  "template" | "parent" | "phase" | "robots" | "schema" | "updated"
> & { priority: ArticlePage["priority"] };

function spoke(input: SpokeInput): ArticlePage {
  return {
    template: "T4",
    parent: "/rights/",
    phase: 1,
    robots: "IF",
    schema: ["Article", "FAQPage"],
    updated: UPDATED,
    ...input,
    related: Array.from(new Set(["/rights/", ...input.related])),
  };
}

export const rightsPillar: ArticlePage = {
  path: "/rights/",
  h1: "New York ESA Laws & Housing Rights",
  label: "Your Rights",
  title: "New York ESA Laws & Housing Rights: Complete Guide",
  description:
    "Understand ESA housing rights in New York: the federal Fair Housing Act, NY State and NYC Human Rights Laws, what landlords can do, and how to file a complaint.",
  robots: "IF",
  template: "T3",
  parent: "/",
  phase: 1,
  priority: "High",
  schema: ["FAQPage"],
  blogCategory: "rights-housing",
  intro:
    "New York renters with emotional support animals are protected mainly by state and city law. The federal Fair Housing Act still applies, but since May 22, 2026, HUD no longer pursues complaints involving untrained ESAs. This guide explains each layer and links to detailed answers",
  updated: UPDATED,
  overview: [
    "If you live with a mental or emotional health condition and an animal helps you manage it, New York housing law gives you a way to ask for an exception to no-pet rules. That request is called a reasonable accommodation, and an ESA letter from a licensed professional is the documentation that supports it.",
    "What makes New York different is that three laws can apply at once. The federal Fair Housing Act covers most housing nationwide. The New York State Human Rights Law covers housing across the state, including some buildings the federal law exempts. Inside the five boroughs, the New York City Human Rights Law adds further protections and a duty for housing providers to engage in a cooperative dialogue before turning a request down.",
    "Co-op and condo boards, NYCHA and other public housing, college residence halls and small walk-ups each raise their own practical questions. The guides below walk through each situation, what a landlord or board may and may not ask, what you can and cannot be charged, and where to turn if a request is denied.",
    "In May 2026 HUD rescinded its 2020 assistance animal guidance and said it will find cause only where the animal is individually trained to perform disability-related work or tasks. State and city protections are separate laws with their own enforcement agencies, which is why New Yorkers should understand all three layers.",
  ],
  sections: [
    {
      heading: "Three layers of protection: federal FHA, NYS Human Rights Law, NYC Human Rights Law",
      table: {
        head: ["Law", "Where it applies", "Enforced by"],
        rows: [
          ["Fair Housing Act (42 U.S.C. 3601 et seq.)", "Most housing nationwide, with limited exemptions", "HUD (trained-animal complaints since May 22, 2026) and federal courts"],
          ["NYS Human Rights Law (Executive Law 296)", "Housing across New York State", "NYS Division of Human Rights and state courts"],
          ["NYC Human Rights Law (Admin Code 8-107)", "Housing in the five boroughs", "NYC Commission on Human Rights and city courts"],
        ],
      },
    },
    {
      heading: "What landlords and boards can and cannot do",
      list: [
        "Can charge for actual damage or excessive wear and tear",
        "Cannot preemptively charge a pet fee or additional security deposit, or require extra renter’s insurance, for an ESA",
        "Cannot require disclosure of your specific disability or insist on a specific form of documentation",
      ],
    },
    {
      heading: "Who enforces (HUD, NYS Division of Human Rights, NYC Commission on Human Rights)",
      paragraphs: [
        "Federal complaints go to HUD, but since May 22, 2026, HUD will not find cause in complaints about untrained ESAs. Private lawsuits remain possible. Statewide complaints go to the New York State Division of Human Rights. Complaints about housing in the five boroughs can go to the NYC Commission on Human Rights. Filing rules and deadlines differ, and filing with one agency can affect your options with another, so check the current rules before you file.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do I need an ESA letter if my building allows pets?",
      a: "Not to keep a pet, but an ESA accommodation can protect you from pet fees, size limits and future policy changes.",
    },
    {
      q: "Which law protects me in New York City?",
      a: "Potentially all three: the federal Fair Housing Act, the NYS Human Rights Law and the NYC Human Rights Law.",
    },
    {
      q: "Can a landlord deny an ESA?",
      a: "Only for limited reasons, such as a direct threat that cannot be reduced, substantial damage, an undue burden, or unreliable documentation.",
    },
  ],
  related: [],
};

export const rightsSpokes: ArticlePage[] = [
  spoke({
    path: "/rights/fair-housing-act/",
    h1: "The Fair Housing Act and Your ESA",
    label: "Fair Housing Act",
    title: "Fair Housing Act & Your ESA: New York Renter Rights",
    description:
      "How the federal Fair Housing Act applies to animal accommodation requests in New York: covered housing, exemptions, and HUD’s May 2026 enforcement change.",
    priority: "High",
    intro: "The federal Fair Housing Act prohibits disability discrimination in housing. Since May 22, 2026, HUD pursues animal accommodation complaints only for individually trained animals.",
    quickAnswer:
      "The Fair Housing Act requires housing providers to make reasonable accommodations for people with disabilities. Since May 22, 2026, HUD pursues animal-related complaints only where the animal is individually trained to perform disability-related work or tasks. It no longer expects providers to extend accommodations, including pet fee waivers, to untrained emotional support animals. The Act itself is unchanged, and private lawsuits remain possible. A landlord may ask for reliable documentation when the disability or the need for the animal is not apparent.",
    sections: [
      {
        heading: "What the FHA covers",
        paragraphs: [
          "The Fair Housing Act prohibits housing discrimination based on disability and other protected characteristics. It covers most rentals, condos, co-ops and other housing, and it reaches leasing, rules, terms and services.",
        ],
      },
      {
        heading: "Reasonable accommodation explained",
        paragraphs: [
          "A reasonable accommodation is a change to a rule, policy, or practice that gives a person with a disability an equal opportunity to use and enjoy a home. Allowing a trained service animal in a no-pet building is a common example. HUD no longer treats untrained ESAs as covered for federal enforcement purposes. New York State and NYC law still cover them.",
        ],
      },
      {
        heading: "Covered vs exempt housing",
        list: [
          "Generally covered: apartment buildings, co-ops, condos, most private rentals, public and subsidized housing",
          "May be exempt: owner-occupied buildings with four or fewer units",
          "May be exempt: single-family homes rented by an owner without a broker, subject to conditions",
          "Note: New York State and City law can still apply where the FHA exemption does",
        ],
      },
      {
        heading: "Enforcement and HUD complaints",
        paragraphs: [
          "You can file a complaint with HUD, generally within one year of the discriminatory act, or file a lawsuit within the time allowed by statute (generally two years). Since May 22, 2026, HUD has been dismissing or issuing no-cause findings on complaints about untrained emotional support animals, so a HUD complaint about an untrained ESA is unlikely to proceed. The memo does not affect claims about trained service animals or claims under Section 504 or the ADA.",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Statute and regulation",
      text: "Fair Housing Act, 42 U.S.C. 3604(f)(3)(B) (reasonable accommodation); HUD regulation 24 C.F.R. 100.204.",
    },
    faqs: [
      {
        q: "Does the Fair Housing Act apply to co-ops and condos?",
        a: "Yes. The Fair Housing Act covers most housing, including rentals, condos, and co-ops, subject to limited exemptions. New York State and NYC human rights laws also apply to this housing.",
      },
      {
        q: "Does the Fair Housing Act still protect emotional support animals after HUD’s 2026 memo?",
        a: "Only in a limited way. Since May 22, 2026, HUD pursues animal complaints only for individually trained animals and no longer for untrained ESAs. The Act itself is unchanged, and private lawsuits remain possible, and New York State and NYC law still protect ESAs.",
      },
      {
        q: "Is my landlord exempt from the Fair Housing Act?",
        a: "Possibly. The Act may exempt owner-occupied buildings with four or fewer units, and single-family homes rented by the owner without a broker. New York State’s exemption is narrower, covering owner-occupied buildings of up to two units.",
      },
      {
        q: "Can my landlord charge a pet fee for my assistance animal?",
        a: "For untrained ESAs, HUD no longer expects providers to waive pet fees. In New York City, a provider cannot preemptively charge a pet fee or an extra deposit or require extra insurance for an ESA but may charge for actual damage.",
      },
      {
        q: "How long do I have to file a Fair Housing Act complaint?",
        a: "A HUD complaint is generally due within one year of the discriminatory act. A lawsuit is generally allowed within two years. State and city agencies have their own deadlines.",
      },
    ],
    related: ["/rights/new-york-state-human-rights-law/", "/rights/nyc-human-rights-law/", "/rights/hud-2026-esa-memo-new-york/"],
  }),
  spoke({
    path: "/rights/new-york-state-human-rights-law/",
    h1: "New York State Human Rights Law and ESAs",
    label: "NYS Human Rights Law",
    title: "NY State Human Rights Law & ESAs: Your Rights",
    description:
      "How the New York State Human Rights Law (Executive Law 296) protects renters with support animals, who it covers, and how the Division of Human Rights helps.",
    priority: "High",
    intro: "State law protects ESA owners in most housing across New York, from Buffalo to Long Island.",
    quickAnswer:
      "The New York State Human Rights Law prohibits disability discrimination in housing and requires reasonable accommodations, which can include an emotional support animal. It applies statewide and can reach some housing that the federal Fair Housing Act exempts. Complaints can be filed with the New York State Division of Human Rights or the New York State Attorney General’s Office.",
    sections: [
      {
        heading: "What Executive Law 296 says about support animals",
        paragraphs: [
          "Executive Law 296 makes it unlawful to refuse reasonable accommodations in rules, policies, practices or services when they may be necessary for a person with a disability to use and enjoy a dwelling. ESA requests are evaluated under this standard.",
        ],
      },
      {
        heading: "Who and what housing it covers",
        paragraphs: [
          "The law covers landlords, managing agents, co-op and condo boards, real estate brokers and others involved in housing across New York State. Its exemptions are narrower in some respects than the federal law's, so always check both.",
        ],
      },
      {
        heading: "Documentation a housing provider may request",
        list: [
          "A letter from a licensed professional confirming a disability-related need for the animal",
          "Basic information about the animal",
          "Not your diagnosis, full medical records or a registry certificate",
        ],
      },
      {
        heading: "Filing with the NYS Division of Human Rights",
        paragraphs: [
          "You can file a complaint online, by mail or in person at a regional office. The Division investigates, and cases may proceed to a public hearing. Filing deadlines apply, so check the Division's current guidance promptly after a denial.",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Statute",
      text: "New York Executive Law 296(18)(2) and 296(2-a)(d)(2) (reasonable accommodation in housing, including the use of an animal to alleviate symptoms or effects of a disability, as amended by L. 2020, ch. 137).",
    },
    faqs: [
      {
        q: "Does state law cover small buildings?",
        a: "Mostly yes. New York State’s exemption is narrower than the federal one. It covers only owner-occupied one- and two-family buildings and some room rentals in owner-occupied housing, so a three- or four-unit owner-occupied building can still be covered by state law.",
      },
      {
        q: "Do I have to file with HUD first?",
        a: "No. You can file directly with the NYS Division of Human Rights, and a state claim does not depend on a HUD complaint. Since May 22, 2026, HUD no longer pursues complaints about untrained emotional support animals.",
      },
      {
        q: "Is there a cost to file?",
        a: "No. Filing with the Division of Human Rights is free, and you do not need an attorney to file.",
      },
      {
        q: "How long do I have to file a complaint with the Division?",
        a: "For discrimination on or after February 15, 2024, you have three years from the most recent act. A lawsuit in state court also has a three-year limit. Deadlines at other agencies differ, so check each one.",
      },
      {
        q: "Does New York State law still protect my ESA after HUD’s 2026 memo?",
        a: "Yes. The HUD memo changes only how HUD enforces the federal Fair Housing Act. New York State law still requires housing providers to accommodate an animal that alleviates the symptoms or effects of a disability, unless doing so would cause undue hardship.",
      },
    ],
    related: ["/rights/fair-housing-act/", "/rights/nyc-human-rights-law/", "/rights/landlord-denials/"],
  }),
  spoke({
    path: "/rights/nyc-human-rights-law/",
    h1: "NYC Human Rights Law and ESAs",
    label: "NYC Human Rights Law",
    title: "NYC Human Rights Law & ESAs: Renter Protections",
    description:
      "What the NYC Human Rights Law means for ESA owners: reasonable accommodation, what providers may ask, and filing with the NYC Commission on Human Rights.",
    priority: "High",
    intro: "Inside the five boroughs, the NYC Human Rights Law adds one of the strongest layers of protection in the country.",
    quickAnswer:
      "In New York City, the NYC Human Rights Law requires housing providers to reasonably accommodate people with disabilities, including requests for emotional support animals, and to engage in a cooperative dialogue before denying a request. Complaints can be filed with the NYC Commission on Human Rights.",
    sections: [
      {
        heading: "What the NYC Human Rights Law covers (Admin Code 8-107)",
        paragraphs: [
          "The NYC Human Rights Law prohibits disability discrimination in housing in all five boroughs. It is meant to be construed broadly in favor of people it protects, and it covers landlords, brokers, managing agents and co-op and condo boards.",
        ],
      },
      {
        heading: "Reasonable accommodation process",
        steps: [
          { title: "Request", text: "Make your request. You can submit it in writing or orally, though writing it down helps. Provide documentation, such as your ESA letter, if your disability or need for the animal is not apparent." },
          { title: "Cooperative dialogue", text: "The housing provider must engage with you in good faith about your request and any alternatives." },
          { title: "Written determination", text: "At the end of the dialogue, the housing provider must give you a written final determination identifying any accommodation granted or denied." },
        ],
      },
      {
        heading: "What housing providers may and may not ask",
        list: [
          "May ask for confirmation from your treatment provider that you have a disability and that the animal helps treat it when this is not readily apparent",
          "May ask for proof of vaccination if the animal is a dog, and may refuse an animal that is prohibited under the NYC Health Code",
          "May not require you to disclose your specific diagnosis unless it is necessary to decide the accommodation, and may not ask for unrelated documentation such as complete medical records",
          "May not require a specific form or type of documentation",
        ],
      },
      {
        heading: "Filing with the NYC Commission on Human Rights",
        paragraphs: [
          "You can report discrimination to the Commission online or by calling 311. The Commission's Law Enforcement Bureau investigates and may intervene early. Filing deadlines apply; check the Commission's current guidance.",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Code sections",
      text: "NYC Administrative Code 8-107(5) (housing), 8-107(15) (reasonable accommodation) and 8-107(28) (cooperative dialogue).",
    },
    faqs: [
      {
        q: "Does the NYC Human Rights Law still protect emotional support animals after HUD’s 2026 memo?",
        a: "Yes. The HUD memo changes only how HUD enforces the federal Fair Housing Act, and it does not change city law. In NYC, housing providers must still permit emotional support animals as a reasonable accommodation unless it would cause undue hardship.",
      },
      {
        q: "Can my landlord refuse my ESA because of a no-pet policy or a breed, size, or weight limit?",
        a: "Not automatically. NYC housing providers must exempt emotional support animals from no-pet, no-dog, and breed, size, and weight policies unless the exemption would cause undue hardship. A provider can still exclude animals that are prohibited under the NYC Health Code.",
      },
      {
        q: "Can my landlord charge a pet fee or extra deposit for my ESA?",
        a: "Not in advance. A provider cannot preemptively charge a pet fee or additional security deposit or require extra renter’s insurance for an emotional support animal. It can require payment for actual damage or excessive wear and tear.",
      },
      {
        q: "What can my landlord ask me for?",
        a: "If your disability or need for the animal is not obvious, the landlord can ask your treatment provider to confirm that you have a disability and that the animal helps treat it. It cannot require your specific diagnosis unless that is needed to decide the accommodation. It also cannot demand complete medical records or a specific form of documentation. For a dog, it can ask for proof of vaccination.",
      },
      {
        q: "What is a cooperative dialogue, and what if my landlord ignores my request?",
        a: "It is a good-faith written or oral discussion about your needs and any alternatives, and it must end with a written final determination from the housing provider. Failing to engage, or failing to give the written determination, is a separate violation. You can report it online to the NYC Commission on Human Rights, through 311, or at 212-416-0197.",
      },
    ],
    related: ["/rights/co-op-and-condo-esa-rules/", "/rights/nyc-pet-law-and-esas/", "/locations/new-york-city/"],
  }),
  spoke({
    path: "/rights/hud-2026-esa-memo-new-york/",
    h1: "HUD's 2026 ESA Memo: What It Means in New York",
    label: "HUD 2026 ESA Memo",
    title: "HUD's 2026 ESA Memo: What It Means in New York",
    description:
      "HUD's 2026 ESA guidance changed federal enforcement. See what it does and doesn't change for renters under New York State and NYC law.",
    priority: "High",
    intro: "Federal guidance on assistance animals shifted in 2026. Here is what New York renters should know.",
    quickAnswer:
      "HUD's 2026 guidance on emotional support animals reportedly narrows federal enforcement. It does not rewrite the Fair Housing Act itself, and it does not change the New York State or NYC Human Rights Laws, which are enforced by state and city agencies. New York renters should keep reliable documentation and understand all three layers.",
    sections: [
      {
        heading: "What the HUD memo says (legal review - confirm current status)",
        paragraphs: [
          "This section will summarize HUD's 2026 guidance once its contents and current status are confirmed by legal review. Link to the primary source document when published.",
        ],
      },
      {
        heading: "What it changes at the federal level",
        paragraphs: [
          "Agency guidance shapes how HUD investigates and prioritizes complaints. It is not a statute and does not by itself remove rights granted by Congress or by courts interpreting the Fair Housing Act.",
        ],
      },
      {
        heading: "What stays the same under NYS and NYC law",
        paragraphs: [
          "The New York State Human Rights Law and the NYC Human Rights Law are separate laws, enforced by the NYS Division of Human Rights and the NYC Commission on Human Rights. Changes in federal enforcement priorities do not amend them.",
        ],
      },
      {
        heading: "What renters should do now",
        list: [
          "Keep a current letter from a licensed professional",
          "Make requests in writing and keep copies",
          "If denied, consider state or city agencies, not only HUD",
          "Check this page for updates as guidance develops",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Sources to cite after review",
      text: "HUD 2026 assistance animal guidance (primary source link pending); Fair Housing Act 42 U.S.C. 3604(f); NY Executive Law 296; NYC Admin Code 8-107.",
    },
    faqs: [
      { q: "Is my ESA letter still valid?", a: "A letter from a licensed professional remains the core documentation for an accommodation request under state and city law." },
      { q: "Should I still file with HUD?", a: "That depends on current federal enforcement. State and city agencies are alternatives; check current rules first." },
      { q: "Does the memo affect NYC co-ops?", a: "NYC co-op boards remain subject to the NYC and NYS Human Rights Laws." },
    ],
    related: ["/rights/fair-housing-act/", "/rights/new-york-state-human-rights-law/", "/blog/hud-esa-memo-2026-what-new-york-renters-should-know/"],
  }),
  spoke({
    path: "/rights/co-op-and-condo-esa-rules/",
    h1: "Co-ops, Condos and ESAs in NYC",
    label: "Co-ops & Condos",
    title: "Co-ops, Condos & ESAs in NYC: Board Rules Explained",
    description:
      "Can a co-op or condo board refuse your ESA in New York? Learn how board packages, house rules, and accommodation requests work.",
    priority: "High",
    intro: "Co-op and condo boards have their own rules, but those rules are subject to fair housing law.",
    quickAnswer:
      "Co-op and condo boards in New York are generally treated as housing providers under fair housing laws, so a no-pet house rule does not automatically defeat an ESA request under New York State and NYC law. Submit your accommodation request, preferably in writing, with your letter if your disability or need is not apparent. In NYC, the board must engage with you in a cooperative dialogue rather than apply its pet policy by default.",
    sections: [
      {
        heading: "Are co-ops and condos exempt?",
        paragraphs: [
          "Generally no. Boards and managing agents are typically covered by the NYS Human Rights Law and, in the five boroughs, the NYC Human Rights Law. The federal Fair Housing Act also covers them, but since May 22, 2026, HUD pursues animal complaints only for individually trained animals.",
        ],
      },
      {
        heading: "Board packages and ESA requests",
        paragraphs: [
          "Submit your accommodation request separately from, or clearly flagged within, your board package. Keep it brief: the request, your letter, and basic information about the animal. In NYC, a housing provider generally cannot require you to disclose your specific diagnosis, and it cannot ask for unrelated documentation such as complete medical records.",
        ],
      },
      {
        heading: "House rules and nuisance issues",
        paragraphs: [
          "An ESA is still subject to reasonable rules on conduct in common areas, such as leashing. A board may decline an animal only if accommodating it would cause undue hardship, for example, damage or disruption based on the animal’s actual behavior and not on assumptions. In NYC, it must first engage in a cooperative dialogue.",
        ],
      },
      {
        heading: "If the board refuses",
        list: [
          "Ask for the reason in writing",
          "Respond with any missing documentation",
          "In NYC, ask for a cooperative dialogue",
          "Consider a complaint to the NYC Commission or NYS DHR. HUD no longer pursues complaints about untrained ESAs.",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Authority",
      text: "Fair Housing Act 42 U.S.C. 3604(f)(3)(B); NY Executive Law 296(18)(2) and 296(2-a)(d)(2); NYC Admin Code 8-107(15) and 8-107(28).",
    },
    faqs: [
      {
        q: "Can a co-op or condo board refuse my ESA because of a no-pet rule?",
        a: "Not automatically. Co-op and condo boards are covered by New York’s fair housing laws, and in NYC housing providers must exempt emotional support animals from no-pet policies unless doing so would cause undue hardship. The board must also engage in a cooperative dialogue with you before denying the request.",
      },
      {
        q: "Can a board charge a pet fee or extra deposit for my ESA?",
        a: "Not in advance. In NYC, a housing provider cannot preemptively charge a pet fee or additional deposit or require extra insurance for an emotional support animal. It can require payment for actual damage or excessive wear and tear.",
      },
      {
        q: "What can a board ask me for?",
        a: "If your disability or need for the animal is not obvious, the board can ask your treatment provider to confirm that you have a disability and that the animal helps treat it. It cannot require your specific diagnosis unless that is needed to decide the accommodation, and it cannot demand complete medical records or a specific form of documentation. For a dog, it can ask for proof of vaccination.",
      },
      {
        q: "Do I have to tell the board about my disability or ESA when I apply?",
        a: "No. In NYC, a housing provider cannot penalize you for not volunteering information about your disability or your need for an ESA when you apply, and this applies to emotional support animals. You can request an accommodation at any time.",
      },
      {
        q: "Can a board ever deny an ESA?",
        a: "Yes, in limited cases. A board can decline an animal if accommodating it would cause undue hardship, such as damage or disruption based on the animal’s actual behavior, or if it is an animal prohibited under the NYC Health Code. If the board refuses, ask for the reason in writing and for a cooperative dialogue, and consider a complaint to the NYC Commission on Human Rights or the NYS Division of Human Rights.",
      },
    ],
    related: ["/rights/nyc-human-rights-law/", "/rights/landlord-request-letter-template/", "/blog/nyc-co-op-board-esa-request-guide/"],
  }),
  spoke({
    path: "/rights/nycha-and-public-housing/",
    h1: "ESAs in NYCHA and Public Housing",
    label: "NYCHA & Public Housing",
    title: "ESAs in NYCHA & Public Housing in New York",
    description:
      "How ESA requests work in NYCHA and other public or subsidized housing in New York, what to submit, and who to contact if you are denied.",
    priority: "Medium",
    intro: "Public and subsidized housing has its own accommodation procedures. Here is how to navigate them.",
    quickAnswer:
      "NYCHA and other public or federally subsidized housing in New York must consider reasonable accommodation requests, including emotional support animals. Use the housing authority's reasonable accommodation process, submit your ESA letter, and keep copies of everything you send and receive.",
    sections: [
      {
        heading: "Public vs subsidized housing rules",
        paragraphs: [
          "Public housing authorities like NYCHA, and properties receiving federal funds, are covered by the Fair Housing Act and Section 504 of the Rehabilitation Act, in addition to state and city law.",
        ],
      },
      {
        heading: "How to submit a request",
        paragraphs: [
          "Ask your development's management office for the reasonable accommodation form, or submit a written request through the authority's designated process. Note the date you submitted it.",
        ],
      },
      {
        heading: "Documentation to provide",
        list: ["Your ESA letter from a licensed professional", "Basic information about the animal", "Any form the authority requires"],
      },
      {
        heading: "If you are denied",
        paragraphs: [
          "Ask for the decision in writing and whether an appeal or grievance process applies. You may also contact the NYC Commission on Human Rights, the NYS Division of Human Rights or HUD.",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Authority",
      text: "Fair Housing Act 42 U.S.C. 3604(f); Section 504 of the Rehabilitation Act, 29 U.S.C. 794 and 24 C.F.R. Part 8.",
    },
    faqs: [
      { q: "Does NYCHA's pet policy apply to ESAs?", a: "An approved accommodation can modify pet rules for an assistance animal; follow NYCHA's accommodation process." },
      { q: "Can I keep a large dog in NYCHA?", a: "Size limits in a pet policy can be modified as an accommodation, but direct-threat concerns are assessed individually." },
      { q: "Does Section 8 count as public housing?", a: "Voucher holders rent from private landlords, who are covered by fair housing laws." },
    ],
    related: ["/rights/landlord-denials/", "/rights/fair-housing-act/", "/locations/the-bronx/"],
  }),
  spoke({
    path: "/rights/no-pet-buildings/",
    h1: "ESAs in No-Pet Buildings",
    label: "No-Pet Buildings",
    title: "ESAs in No-Pet Buildings in New York: Your Rights",
    description:
      "No-pet policies generally do not apply to valid ESAs in New York. Learn how to request an accommodation and what documentation to provide.",
    priority: "High",
    intro: "A no-pet lease clause is not the end of the conversation if you rely on an emotional support animal.",
    quickAnswer:
      "In most New York housing, a no-pet policy can be modified as a reasonable accommodation for an emotional support animal. ESAs are not legally pets. Submit a written request with a letter from a licensed professional, and the landlord should evaluate it individually instead of applying the no-pet rule.",
    sections: [
      {
        heading: "Why no-pet policies generally do not apply",
        paragraphs: [
          "Fair housing laws treat an ESA as an assistance animal, not a pet. A reasonable accommodation modifies the pet rule for you, so the rule itself is not a valid reason for denial.",
        ],
      },
      {
        heading: "'No dogs or cats' listings and leases",
        paragraphs: [
          "Listings and leases that say no pets still must consider accommodation requests. You can apply, and raise the accommodation at application or after approval, but avoid moving the animal in before the request is approved.",
        ],
      },
      {
        heading: "How to request an accommodation",
        steps: [
          { title: "Write the request", text: "State that you have a disability and request an accommodation to live with your ESA." },
          { title: "Attach your letter", text: "Include your ESA letter from a licensed professional." },
          { title: "Send and keep proof", text: "Email or mail it and keep a dated copy." },
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Authority",
      text: "24 C.F.R. 100.204 (reasonable accommodations); NY Executive Law 296(18); NYC Admin Code 8-107(15).",
    },
    faqs: [
      { q: "Can I be evicted for having an ESA in a no-pet building?", a: "If your request is approved, the no-pet rule should not be enforced against your ESA. Always get approval in writing." },
      { q: "Do I have to disclose my ESA before signing?", a: "No rule requires disclosure at application, but early, written requests usually go more smoothly." },
      { q: "Does this apply to small landlords?", a: "Most do. Some small owner-occupied buildings may be exempt from some laws." },
    ],
    related: ["/rights/landlord-request-letter-template/", "/rights/pet-deposits-and-fees/", "/blog/how-to-talk-to-your-landlord-about-your-esa/"],
  }),
  spoke({
    path: "/rights/esa-vs-service-animal/",
    h1: "ESA vs. Service Animal in New York",
    label: "ESA vs Service Animal",
    title: "ESA vs Service Animal in New York: Key Differences",
    description:
      "Compare emotional support animals and service animals in New York: definitions, training, public access, housing rights, and how NYC rules treat each.",
    priority: "Medium",
    intro: "Emotional support animals and service animals are protected differently. Knowing the difference avoids conflict.",
    quickAnswer:
      "A service animal is a dog individually trained to perform tasks for a person with a disability and has public access rights under the ADA. An emotional support animal provides comfort through companionship, needs no task training, and is protected mainly in housing, not in stores or restaurants.",
    sections: [
      {
        heading: "Comparison table (ESA vs service animal)",
        table: {
          head: ["", "Emotional support animal", "Service animal"],
          rows: [
            ["Species", "Any common household animal", "Dogs (miniature horses in some cases)"],
            ["Training", "No task training required", "Individually trained to perform tasks"],
            ["Housing rights", "Yes, as a reasonable accommodation", "Yes"],
            ["Public access (ADA)", "No", "Yes"],
            ["Documentation", "Letter from a licensed professional", "Generally none required in public places"],
          ],
        },
      },
      {
        heading: "Legal definitions (ADA, FHA, NY law)",
        paragraphs: [
          "The ADA defines service animals narrowly. The Fair Housing Act and New York housing laws use the broader concept of assistance animals, which includes ESAs.",
        ],
      },
      {
        heading: "Public access rights",
        paragraphs: [
          "ESAs do not have a general right to enter stores, restaurants or other public places. Psychiatric service dogs, which are trained to perform tasks, are service animals and do.",
        ],
      },
      {
        heading: "Common confusion",
        list: [
          "Vests and ID cards do not make an animal a service animal",
          "ESAs are not limited to dogs",
          "Misrepresenting an animal as a service animal can create legal problems",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Authority",
      text: "ADA, 28 C.F.R. 35.104 and 36.104 (service animal definition); Fair Housing Act, 42 U.S.C. 3604(f).",
    },
    faqs: [
      { q: "Can I bring my ESA on the subway?", a: "ESAs do not have ADA public-access rights. MTA rules generally allow small pets in carriers." },
      { q: "Can my ESA come to work?", a: "Workplace requests are a separate employment accommodation question." },
      { q: "Is a psychiatric service dog an ESA?", a: "No. A psychiatric service dog is trained to perform tasks and is a service animal." },
    ],
    related: ["/rights/fake-registries-warning/", "/conditions/eligible-animals/", "/blog/esa-vs-service-dog-vs-therapy-animal/"],
  }),
  spoke({
    path: "/rights/landlord-denials/",
    h1: "What to Do If a Landlord Denies Your ESA",
    label: "Landlord Denials",
    title: "Landlord Denied Your ESA in New York? What to Do",
    description:
      "Learn which landlord denial reasons are valid for ESAs in New York, how to respond in writing, and how to file with NYS DHR, NYC CCHR or HUD.",
    priority: "High",
    intro: "A denial is not always final. Here is how to tell if it was lawful and what to do next.",
    quickAnswer:
      "If a New York landlord denies your ESA, ask for the reason in writing. Valid reasons are limited, such as a direct threat or unreliable documentation. Respond in writing, address any gaps, and if the denial stands, consider filing with the NYS Division of Human Rights, the NYC Commission on Human Rights or HUD.",
    sections: [
      {
        heading: "Valid vs invalid denial reasons",
        table: {
          head: ["Likely valid", "Likely invalid"],
          rows: [
            ["The specific animal poses a direct threat that cannot be reduced", "The building has a no-pet policy"],
            ["Documentation is unreliable or unverifiable", "The animal is not registered or certified"],
            ["The request would cause an undue burden", "Breed, size or weight limits in the pet policy"],
            ["The animal has caused substantial damage", "You did not disclose your diagnosis"],
          ],
        },
      },
      {
        heading: "Response steps",
        steps: [
          { title: "Get it in writing", text: "Ask for the denial and its reasons in writing." },
          { title: "Fix any gaps", text: "Provide verifiable documentation if that was the issue." },
          { title: "Request dialogue", text: "In NYC, ask for a cooperative dialogue." },
          { title: "Escalate", text: "If unresolved, consider an agency complaint or legal help." },
        ],
      },
      {
        heading: "Where to file: NYS DHR, NYC CCHR, HUD (one-agency rules - legal review)",
        paragraphs: [
          "Complaints can go to the NYS Division of Human Rights, the NYC Commission on Human Rights (for the five boroughs) or HUD. Agencies generally do not let you pursue the same claim in more than one forum at once, and deadlines differ. Check current rules before filing.",
        ],
      },
      {
        heading: "Template response",
        paragraphs: [
          "\"I received your decision dated [date] denying my request for a reasonable accommodation. I am enclosing [verifiable documentation / further information]. Please reconsider and provide a written response by [date]. I am available to discuss alternatives.\"",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Authority",
      text: "Fair Housing Act 42 U.S.C. 3604(f)(3)(B) and 3610; NY Executive Law 296(18) and 297; NYC Admin Code 8-107(15) and 8-109.",
    },
    faqs: [
      { q: "How long does a landlord have to respond?", a: "No fixed number of days applies everywhere, but unreasonable delay can be treated as a denial." },
      { q: "Can I get a lawyer for free?", a: "Legal aid organizations and fair housing groups may help; see our location pages for local resources." },
      { q: "Can the landlord retaliate?", a: "Retaliation for requesting an accommodation or filing a complaint is prohibited." },
    ],
    related: ["/blog/how-to-file-a-housing-discrimination-complaint-in-new-york/", "/rights/nyc-human-rights-law/", "/rights/new-york-state-human-rights-law/"],
  }),
  spoke({
    path: "/rights/pet-deposits-and-fees/",
    h1: "Pet Rent, Deposits and ESAs",
    label: "Pet Rent & Deposits",
    title: "Pet Rent, Deposits & ESAs in New York Housing",
    description:
      "Can a New York landlord charge pet rent or a pet deposit for your ESA? Learn what cannot be charged, when damage costs apply, and how to recover fees.",
    priority: "High",
    intro: "An approved ESA should not cost you pet fees. Here is what landlords can and cannot charge.",
    quickAnswer:
      "New York landlords generally cannot charge pet rent, pet deposits or pet fees for an approved emotional support animal. You remain responsible for any actual damage the animal causes beyond normal wear and tear, which can be deducted from your standard security deposit under New York's rules.",
    sections: [
      {
        heading: "What cannot be charged",
        list: ["Monthly pet rent", "Pet deposits", "Pet application or registration fees", "Fees conditioned on the animal's breed or size"],
      },
      {
        heading: "What can be charged (damage beyond normal wear)",
        paragraphs: [
          "If your ESA causes actual damage beyond normal wear and tear, the landlord can charge for repairs as they would for any tenant-caused damage.",
        ],
      },
      {
        heading: "Security deposit limits in New York (legal review)",
        paragraphs: [
          "Since 2019, New York law generally limits security deposits for residential rentals to one month's rent and sets rules for inspections and itemized deductions. Confirm current limits and exceptions with legal review before publishing.",
        ],
      },
      {
        heading: "Recovering wrongly charged fees",
        list: ["Ask in writing for a refund, citing your approved accommodation", "Keep receipts and the lease addendum", "Consider an agency complaint if fees continue"],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Authority",
      text: "24 C.F.R. 100.204; NY General Obligations Law 7-108 (security deposits); NY Executive Law 296(18).",
    },
    faqs: [
      { q: "Can my landlord raise my security deposit for an ESA?", a: "An extra deposit tied to the ESA is generally not allowed." },
      { q: "What about renter's insurance requirements?", a: "A general insurance requirement that applies to all tenants may be permitted, but ESA-specific charges are suspect." },
      { q: "I already paid pet rent. Can I get it back?", a: "Possibly, from the date your accommodation was approved. Ask in writing." },
    ],
    related: ["/rights/no-pet-buildings/", "/rights/landlord-denials/", "/blog/what-new-york-landlords-can-ask-about-your-esa/"],
  }),
  spoke({
    path: "/rights/nyc-pet-law-and-esas/",
    h1: "NYC Pet Law vs ESA Rights",
    label: "NYC Pet Law",
    title: "NYC Pet Law vs ESA Rights: What Renters Should Know",
    description:
      "How the NYC Pet Law (the three-month rule) differs from ESA accommodation rights, and when each may apply to your apartment.",
    priority: "Medium",
    intro: "New York City has a unique pet law that is separate from ESA accommodation rights.",
    quickAnswer:
      "The NYC Pet Law can waive a no-pet lease clause if a tenant keeps a pet openly for three months and the landlord knew but did not act. It is not a disability law. ESA rights come from fair housing laws and apply from the time your accommodation request is approved.",
    sections: [
      {
        heading: "What the NYC Pet Law says (legal review)",
        paragraphs: [
          "In covered multiple dwellings in New York City, if a tenant openly and notoriously keeps a pet for three months or more, and the owner or agent knew and did not start legal proceedings, the no-pet clause may be considered waived. Coverage and exceptions require legal review.",
        ],
      },
      {
        heading: "How it differs from an ESA accommodation",
        table: {
          head: ["", "NYC Pet Law", "ESA accommodation"],
          rows: [
            ["Basis", "Lease waiver after three months", "Disability rights under fair housing laws"],
            ["Disability required", "No", "Yes"],
            ["Protection begins", "After three months of open keeping", "When the request is approved"],
            ["Pet fees", "May still apply", "Generally not allowed"],
          ],
        },
      },
      {
        heading: "When each applies",
        paragraphs: [
          "If you have a disability-related need, an accommodation request is the clearer, faster path. The Pet Law may help tenants without a disability-related need, but relying on it carries risk.",
        ],
      },
      {
        heading: "Mistakes to avoid",
        list: ["Hiding the animal (the Pet Law requires open keeping)", "Assuming the Pet Law covers every building", "Skipping a written accommodation request"],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Code section",
      text: "NYC Administrative Code 27-2009.1 (pet law). Confirm coverage and exceptions before publishing.",
    },
    faqs: [
      { q: "Does the Pet Law apply to co-ops?", a: "Courts have applied it to some co-ops; legal review should confirm current case law." },
      { q: "Can I use both?", a: "They are separate. If you have an ESA, request an accommodation rather than relying on the Pet Law." },
      { q: "Does it apply outside NYC?", a: "No. It is a New York City law." },
    ],
    related: ["/rights/nyc-human-rights-law/", "/rights/no-pet-buildings/", "/locations/new-york-city/"],
  }),
  spoke({
    path: "/rights/college-dorm-esa/",
    h1: "ESAs in College Dorms",
    label: "College Dorms",
    title: "ESAs in New York College Dorms & Student Housing",
    description:
      "How ESA requests work in New York college housing, from CUNY and SUNY to private universities, including timelines and what schools may ask for.",
    priority: "Medium",
    intro: "University housing is covered by fair housing law, but schools have their own request processes and deadlines.",
    quickAnswer:
      "College residence halls in New York are generally housing covered by the Fair Housing Act and state law, so students can request an emotional support animal as a reasonable accommodation. Apply early through the school's disability services or housing office and follow its documentation and timing requirements.",
    sections: [
      {
        heading: "University housing under the FHA",
        paragraphs: [
          "Residence halls are dwellings for fair housing purposes. Schools may set reasonable procedures, but they must individually consider ESA requests.",
        ],
      },
      {
        heading: "Request process and deadlines",
        steps: [
          { title: "Contact disability services", text: "Find the school's accommodation request form." },
          { title: "Submit documentation", text: "Provide your ESA letter and any required forms." },
          { title: "Meet deadlines", text: "Submit before housing assignment deadlines, often months before the term." },
          { title: "Agree to animal policies", text: "Schools often require roommate notification and animal care agreements." },
        ],
      },
      {
        heading: "Major New York universities note (NYU, Columbia, CUNY, SUNY)",
        paragraphs: [
          "Large New York systems publish their own accommodation procedures. Check each school's disability services and residential life pages for current forms and deadlines. CUNY and SUNY campuses each manage housing locally.",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Authority",
      text: "Fair Housing Act 42 U.S.C. 3604(f); Section 504 of the Rehabilitation Act (federally funded schools); NY Executive Law 296.",
    },
    faqs: [
      { q: "Can my ESA come to class?", a: "ESAs are generally limited to residential areas, not classrooms." },
      { q: "Can the school require a specific form?", a: "Schools may use their own forms, but should accept reliable documentation." },
      { q: "What about roommates with allergies?", a: "Schools balance competing needs, often through room reassignments." },
    ],
    related: ["/blog/esas-in-nyc-college-housing/", "/rights/fair-housing-act/", "/requirements/"],
  }),
  spoke({
    path: "/rights/fake-registries-warning/",
    h1: "Why ESA Registries Are Not Valid",
    label: "Registry Scam Warning",
    title: "ESA Registries Are Not Valid: New York Scam Warning",
    description:
      "No official ESA registry exists in New York. Learn how online registries mislead renters, what a landlord actually needs, and how to verify a provider.",
    priority: "Medium",
    intro: "Paying for a registry listing or ID card does not give you housing rights. Here is what does.",
    quickAnswer:
      "There is no official emotional support animal registry in New York or anywhere in the United States. Registry numbers, certificates and ID cards sold online do not create housing rights. What a landlord can ask for is reliable documentation, such as a letter from a licensed professional who evaluated you.",
    sections: [
      {
        heading: "Scam warning",
        callout: {
          variant: "warning",
          title: "Red flags",
          text: "Instant approval, no consultation, a registry number as the main product, or a provider whose license you cannot verify.",
        },
      },
      {
        heading: "How registries and ID cards mislead",
        paragraphs: [
          "Registries look official, but they are private databases. Landlords increasingly recognize them and may reject requests that rely on them, leaving renters worse off.",
        ],
      },
      {
        heading: "What is actually required",
        paragraphs: ["A written request and, when the need is not obvious, a letter from a licensed professional. Nothing more is required to begin the accommodation process."],
      },
      {
        heading: "How to verify a provider",
        list: [
          "Find the license number on the letter",
          "Look it up with the New York State Office of the Professions",
          "Confirm the license is active and in a mental health profession",
          "Check that a real consultation took place",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Authority",
      text: "HUD has advised that documentation from websites selling certificates or registrations without a professional relationship may not be reliable. Confirm the current guidance citation before publishing.",
    },
    faqs: [
      { q: "Is my registry certificate useless?", a: "It does not create rights on its own. A licensed professional's letter is what counts." },
      { q: "Do I need an ESA vest?", a: "No. Vests are optional and have no legal effect." },
      { q: "Can a landlord check my letter?", a: "Yes. A landlord can verify the provider's license." },
    ],
    related: ["/requirements/", "/blog/signs-of-a-fake-esa-letter/", "/rights/esa-vs-service-animal/"],
  }),
  spoke({
    path: "/rights/landlord-request-letter-template/",
    h1: "ESA Request Letter to Landlord (Template)",
    label: "Request Letter Template",
    title: "ESA Request Letter to Landlord: New York Template",
    description:
      "Use this free template to request an ESA accommodation from your New York landlord or board, plus tips on delivery, timing, and what to attach.",
    priority: "Medium",
    intro: "Copy, personalize and send. A clear written request is the foundation of every successful accommodation.",
    quickAnswer:
      "To request an ESA accommodation in New York, send your landlord or board a short written letter stating that you have a disability, that you are requesting an accommodation to live with your emotional support animal, and attach your ESA letter. Keep a dated copy and ask for a written response.",
    sections: [
      {
        heading: "Copy-ready template (landlord + co-op/condo board versions)",
        paragraphs: [
          "Landlord version: \"Dear [Landlord/Managing Agent], I am a tenant at [address, unit]. I have a disability and am requesting a reasonable accommodation under federal, New York State and New York City law to live with my emotional support animal, [name/type]. I have enclosed a letter from my licensed mental health professional. Please confirm in writing. Thank you, [Name, date, contact].\"",
          "Board version: \"Dear Board of Directors, I am [a shareholder / an applicant] for [unit] at [building]. I have a disability and request a reasonable accommodation to the house rules to keep my emotional support animal, [name/type]. Enclosed is supporting documentation from my licensed provider. I am happy to discuss. Sincerely, [Name].\"",
        ],
      },
      {
        heading: "How and when to send it",
        list: ["Email plus a mailed or hand-delivered copy", "Before moving in with the animal", "With or before a co-op or condo board package", "Ask for a response by a reasonable date"],
      },
      {
        heading: "What to attach",
        list: ["Your ESA letter", "Basic animal information (type, name)", "Optional: vaccination records if the building asks for them of all animals"],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "The provider reviews your request, may ask for reliable documentation if needed, and responds. In NYC, expect a cooperative dialogue before any denial. Get the approval in writing.",
        ],
      },
    ],
    legalCallout: {
      variant: "legal",
      title: "Authority",
      text: "24 C.F.R. 100.204; NY Executive Law 296(18); NYC Admin Code 8-107(15) and 8-107(28).",
    },
    faqs: [
      { q: "Should I mention my diagnosis?", a: "No. You only need to state that you have a disability." },
      { q: "Can I send it by text?", a: "Use email or mail so you have a clear written record." },
      { q: "What if I do not hear back?", a: "Follow up in writing. Unreasonable delay may be treated as a denial." },
    ],
    related: ["/sample-letter/", "/rights/co-op-and-condo-esa-rules/", "/blog/how-to-talk-to-your-landlord-about-your-esa/"],
  }),
];
