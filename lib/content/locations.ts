import type { ArticlePage, CityInfo, CityPage, ContentSection, Faq, Priority } from "./types";
import { site } from "../site";

const UPDATED = site.lastReviewed;

export const locationsPillar: ArticlePage = {
  path: "/locations/",
  h1: "ESA Letters in New York: Location Guide",
  label: "Locations",
  title: "ESA Letters in New York: City & Borough Guide",
  description:
    "ESA housing rules apply across New York State. Browse guides for Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Buffalo, Rochester and more.",
  robots: "IF",
  template: "T3",
  parent: "/",
  phase: 2,
  priority: "High",
  schema: ["FAQPage"],
  blogCategory: "new-york-cities",
  intro:
    "The same state law protects ESA owners from Montauk to Buffalo, but buildings, boards and local resources differ. Find your area below.",
  updated: UPDATED,
  overview: [
    "Every New Yorker who relies on an emotional support animal is covered by the New York State Human Rights Law and, in most housing, the federal Fair Housing Act. Inside the five boroughs, the New York City Human Rights Law adds another layer, including a duty for housing providers to engage in a cooperative dialogue before denying a request.",
    "What changes from place to place is the housing itself. In Manhattan, many requests go through co-op boards and managing agents. In Brooklyn and Queens, small landlords in two-family homes and walk-ups are common. Upstate cities like Buffalo, Rochester, Syracuse and Albany have older housing stock and large student rental markets, while Long Island and Westchester have suburban rentals, condos and homeowners associations.",
    "Each guide below explains the local housing landscape, the agencies and fair housing organizations that can help, and practical tips for making a request. The legal standard is the same everywhere in the state; the practical path is local.",
    "Wherever you live, the basics of a strong request do not change: a current letter from a professional licensed in New York, a short written request to your landlord, managing agent or board, and a record of every reply. If a request is ignored or denied, the NYS Division of Human Rights takes complaints statewide, and renters in the five boroughs can also go to the NYC Commission on Human Rights.",
  ],
  sections: [
    {
      heading: "Statewide overview",
      paragraphs: [
        "ESA accommodation rights apply statewide. A letter from a professional licensed in New York supports requests anywhere in the state.",
      ],
    },
    {
      heading: "How NYS law applies everywhere, and where NYC law adds protection",
      table: {
        head: ["Area", "Federal FHA", "NYS Human Rights Law", "NYC Human Rights Law"],
        rows: [
          ["Five boroughs", "Yes", "Yes", "Yes"],
          ["Long Island, Westchester, Yonkers", "Yes", "Yes", "No (county and local laws may add rules)"],
          ["Upstate cities", "Yes", "Yes", "No (local ordinances may apply)"],
        ],
      },
    },
    {
      heading: "What differs by place (co-ops, walk-ups, suburbs, campuses)",
      list: [
        "Co-op and condo boards dominate in Manhattan and parts of Queens and Westchester",
        "Small owner-occupied buildings may fall under federal exemptions; state law may still apply",
        "College towns have student leases and campus housing processes",
        "Suburban HOAs have their own rules subject to fair housing law",
      ],
    },
  ],
  faqs: [
    { q: "Does my ESA letter work anywhere in New York?", a: "Yes. A letter from a New York-licensed professional supports requests statewide." },
    { q: "Is NYC law stronger than state law?", a: "NYC law adds protections such as the cooperative dialogue requirement inside the five boroughs." },
    { q: "What if I am moving within New York?", a: "Your letter can go with you; some landlords ask for one dated within the past year." },
  ],
  related: [],
};

type CityInput = {
  slug: string;
  name: string;
  areaServed: string;
  priority: Priority;
  title: string;
  description: string;
  quickAnswer: string;
  city: CityInfo;
  sections: ContentSection[];
  faqs: Faq[];
  inNyc?: boolean;
  related?: string[];
};

function place(c: CityInput): CityPage {
  return {
    path: `/locations/${c.slug}/`,
    h1: `ESA Letters in ${c.name}, New York`,
    label: c.name,
    title: c.title,
    description: c.description,
    robots: "IF",
    template: "T6",
    parent: "/locations/",
    phase: 2,
    priority: c.priority,
    schema: ["Service", "FAQPage", "Article"],
    intro: `A local guide for renters, co-op shareholders and students in ${c.name} who live with an emotional support animal.`,
    updated: UPDATED,
    areaServed: c.areaServed,
    quickAnswer: c.quickAnswer,
    city: c.city,
    sections: c.sections,
    faqs: c.faqs,
    related: Array.from(
      new Set([
        "/locations/",
        ...(c.inNyc && c.slug !== "new-york-city" ? ["/locations/new-york-city/"] : []),
        "/rights/",
        ...(c.related ?? []),
      ]),
    ),
  };
}

const nycRules = [
  "NYC Human Rights Law (Admin Code 8-107) applies, including the cooperative dialogue requirement",
  "NYC Pet Law (Admin Code 27-2009.1) may apply in covered multiple dwellings",
  "NYS Human Rights Law and the federal Fair Housing Act also apply",
];

const nycResources = [
  { name: "NYC Commission on Human Rights", detail: "File a discrimination report online or by calling 311" },
  { name: "NYS Division of Human Rights", detail: "Statewide complaints; regional offices in the boroughs" },
];

export const cityPages: CityPage[] = [
  place({
    slug: "new-york-city",
    name: "New York City",
    areaServed: "New York City",
    priority: "High",
    inNyc: true,
    title: "ESA Letters in New York City, NY | Renter Rights Guide",
    description:
      "Renting in New York City? Learn how ESA rights apply, how ESA rights work across all five boroughs, and how to get a valid ESA letter.",
    quickAnswer:
      "In New York City, ESA owners are protected by federal, state and city law. The NYC Human Rights Law requires housing providers to consider reasonable accommodation requests and engage in a cooperative dialogue before denying one. A letter from a New York-licensed professional supports your request in all five boroughs.",
    city: {
      housingMix: "Mostly renter households, with large co-op, condo, rent-stabilized and NYCHA housing sectors",
      facts: [
        { label: "Boroughs", value: "Manhattan, Brooklyn, Queens, The Bronx, Staten Island" },
        { label: "Laws that apply", value: "FHA, NYS Human Rights Law, NYC Human Rights Law" },
        { label: "City enforcement", value: "NYC Commission on Human Rights" },
      ],
      localRules: nycRules,
      resources: [
        ...nycResources,
        { name: "NYC Housing Court", detail: "Handles landlord-tenant cases in each borough" },
        { name: "Met Council on Housing", detail: "Tenant education and hotline" },
      ],
    },
    sections: [
      {
        heading: "NYC overview: five boroughs, one set of city rules",
        paragraphs: [
          "Whether you rent in a Bronx walk-up or own shares in an Upper West Side co-op, the same city law applies. Housing providers in all five boroughs must consider accommodation requests and cannot rely on a blanket no-pet policy.",
        ],
      },
      {
        heading: "NYC Human Rights Law in practice",
        paragraphs: [
          "Expect your request to be reviewed in writing, possibly with follow-up questions about the animal. Before a denial, the provider should engage in a cooperative dialogue and then issue a written decision.",
        ],
      },
      {
        heading: "Co-ops, condos, rentals and NYCHA",
        list: [
          "Co-ops and condos: submit with or before your board package",
          "Rentals: send a written request to the landlord or managing agent",
          "NYCHA: use the authority's reasonable accommodation process",
        ],
      },
      {
        heading: "Links to each borough page",
        paragraphs: ["Choose your borough for local details on buildings, resources and common issues."],
      },
    ],
    faqs: [
      { q: "Does NYC law cover two-family homes?", a: "Coverage can depend on the building and owner occupancy. Legal review recommended for your situation." },
      { q: "Can I call 311 about an ESA denial?", a: "Yes, 311 can connect you to the NYC Commission on Human Rights." },
      { q: "Do I need a different letter for each borough?", a: "No. One valid letter works citywide." },
    ],
    related: ["/rights/nyc-human-rights-law/", "/rights/nyc-pet-law-and-esas/"],
  }),
  place({
    slug: "manhattan",
    name: "Manhattan",
    areaServed: "Manhattan",
    priority: "High",
    inNyc: true,
    title: "ESA Letters in Manhattan, NY | Renter Rights Guide",
    description:
      "Renting in Manhattan? Learn how ESA rights apply, how co-op boards, condos and doorman buildings handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "In Manhattan, ESA requests often go through managing agents, doorman building management or co-op and condo boards. City, state and federal law all apply. Submit a written request with a letter from a New York-licensed professional early, ideally before or alongside your board package or lease signing.",
    city: {
      housingMix: "High share of renters, with many co-ops, condos and professionally managed doorman buildings",
      facts: [
        { label: "Common decision makers", value: "Managing agents, co-op and condo boards" },
        { label: "Typical building", value: "Elevator and doorman buildings, pre-war co-ops, walk-ups" },
        { label: "Laws that apply", value: "FHA, NYS HRL, NYC HRL" },
      ],
      localRules: [...nycRules, "Co-op house rules and proprietary leases remain subject to fair housing law"],
      resources: [...nycResources, { name: "Manhattan Housing Court", detail: "111 Centre Street" }],
    },
    sections: [
      {
        heading: "Manhattan rental and co-op/condo market snapshot",
        paragraphs: [
          "Manhattan's competitive market means applications move fast. Having your ESA letter ready before you tour saves time, especially for co-ops where board review can take weeks.",
        ],
      },
      {
        heading: "Board packages and managing agents",
        paragraphs: [
          "Managing agents usually handle the first review. For co-ops, the board decides. Keep the request separate from financial documents and avoid oversharing medical details.",
        ],
      },
      {
        heading: "Local resources",
        paragraphs: ["The NYC Commission on Human Rights and NYS Division of Human Rights both accept complaints about Manhattan housing."],
      },
      {
        heading: "Tips for competitive listings",
        list: ["Have your letter dated within the last year", "Use a brief, professional request letter", "Ask the broker who reviews accommodation requests", "Get approval in writing before move-in"],
      },
    ],
    faqs: [
      { q: "Can a doorman building refuse my dog's size?", a: "Size limits in pet policies generally cannot be applied to an approved ESA." },
      { q: "Should I tell the broker about my ESA?", a: "You can ask who handles accommodation requests; you do not need to share your diagnosis." },
      { q: "Can a co-op delay my request?", a: "Unreasonable delay may be treated as a denial." },
    ],
    related: ["/rights/co-op-and-condo-esa-rules/", "/blog/renting-in-manhattan-with-an-esa/"],
  }),
  place({
    slug: "brooklyn",
    name: "Brooklyn",
    areaServed: "Brooklyn",
    priority: "High",
    inNyc: true,
    title: "ESA Letters in Brooklyn, NY | Renter Rights Guide",
    description:
      "Renting in Brooklyn? Learn how ESA rights apply, how brownstone landlords and larger buildings handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "Brooklyn renters with ESAs are protected by city, state and federal law, whether they rent from a brownstone owner or a large management company. Small owner-occupied buildings can raise exemption questions under federal law, but state and city law may still apply. Make every request in writing.",
    city: {
      housingMix: "Mix of brownstones, two- to four-family homes, rent-stabilized walk-ups and new developments",
      facts: [
        { label: "Common landlords", value: "Small owners and large management companies" },
        { label: "Watch for", value: "Owner-occupied small buildings and exemptions" },
        { label: "Laws that apply", value: "FHA, NYS HRL, NYC HRL" },
      ],
      localRules: [...nycRules, "Rent-stabilized leases keep their protections when you request an accommodation"],
      resources: [...nycResources, { name: "Brooklyn Housing Court", detail: "141 Livingston Street" }],
    },
    sections: [
      {
        heading: "Brooklyn rental market snapshot",
        paragraphs: ["Brooklyn's housing ranges from Park Slope brownstones to Downtown high-rises. Who reviews your request depends heavily on building size."],
      },
      {
        heading: "Small landlords vs large management companies",
        paragraphs: [
          "Large companies usually have an accommodation process. Small owners may not, so a clear, polite written request and an offer to answer questions often helps.",
        ],
      },
      {
        heading: "Local resources",
        paragraphs: ["NYC Commission on Human Rights, NYS Division of Human Rights and borough tenant organizations can help."],
      },
      {
        heading: "Rent-stabilized buildings (legal review)",
        paragraphs: ["Requesting an accommodation should not affect your rent-stabilized status. Confirm specifics with legal review."],
      },
    ],
    faqs: [
      { q: "My landlord lives in the building. Does the law apply?", a: "Federal law may exempt some small owner-occupied buildings; state and city law may still apply." },
      { q: "Can a brownstone owner charge pet rent?", a: "Pet rent should not be charged for an approved ESA." },
      { q: "Will my request affect rent stabilization?", a: "It should not. Seek legal advice if a landlord suggests otherwise." },
    ],
    related: ["/blog/renting-in-brooklyn-with-an-esa/", "/rights/no-pet-buildings/"],
  }),
  place({
    slug: "queens",
    name: "Queens",
    areaServed: "Queens",
    priority: "Medium",
    inNyc: true,
    title: "ESA Letters in Queens, NY | Renter Rights Guide",
    description:
      "Renting in Queens? Learn how ESA rights apply, how walk-ups, co-ops and apartment complexes handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "In Queens, ESA requests may go to a small landlord, a garden-apartment co-op board or a large complex manager. City, state and federal protections apply. Send a written request with a letter from a New York-licensed professional and keep a copy of every message.",
    city: {
      housingMix: "Garden-apartment co-ops, two-family homes, walk-ups and large apartment complexes",
      facts: [
        { label: "Common decision makers", value: "Co-op boards, small owners, complex managers" },
        { label: "Laws that apply", value: "FHA, NYS HRL, NYC HRL" },
      ],
      localRules: nycRules,
      resources: [...nycResources, { name: "Queens Housing Court", detail: "Jamaica, Queens" }],
    },
    sections: [
      {
        heading: "Queens rental market snapshot",
        paragraphs: ["Queens has one of the city's largest stocks of co-op apartments outside Manhattan, alongside two-family rentals and big complexes."],
      },
      {
        heading: "Building types and practices",
        list: ["Garden co-ops: board approval with house rules", "Two-family homes: owner-occupied exemption questions", "Large complexes: formal accommodation forms"],
      },
      {
        heading: "Local resources",
        paragraphs: ["The NYC Commission on Human Rights and NYS Division of Human Rights handle Queens complaints."],
      },
    ],
    faqs: [
      { q: "Do Queens co-ops follow the same rules as Manhattan co-ops?", a: "Yes. City, state and federal law apply equally." },
      { q: "Can a complex require its own form?", a: "It can use a form, but should accept reliable documentation." },
      { q: "Who do I call about a denial?", a: "311 can connect you to the NYC Commission on Human Rights." },
    ],
    related: ["/rights/co-op-and-condo-esa-rules/"],
  }),
  place({
    slug: "the-bronx",
    name: "The Bronx",
    areaServed: "The Bronx",
    priority: "Medium",
    inNyc: true,
    title: "ESA Letters in The Bronx, NY | Renter Rights Guide",
    description:
      "Renting in the Bronx? Learn how ESA rights apply, how older buildings and public housing handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "Bronx renters with ESAs are protected by city, state and federal law, including in NYCHA developments and rent-regulated buildings. Use your landlord's or NYCHA's reasonable accommodation process, attach your ESA letter, and keep written records of every step. A blanket no-pet rule is not a valid reason to deny.",
    city: {
      housingMix: "Older pre-war apartment buildings, rent-regulated housing and many NYCHA developments",
      facts: [
        { label: "Public housing", value: "Significant NYCHA presence" },
        { label: "Laws that apply", value: "FHA, Section 504 (public housing), NYS HRL, NYC HRL" },
      ],
      localRules: [...nycRules, "NYCHA residents use NYCHA's reasonable accommodation process"],
      resources: [...nycResources, { name: "Bronx Housing Court", detail: "1118 Grand Concourse" }],
    },
    sections: [
      {
        heading: "Bronx rental market snapshot",
        paragraphs: ["The Bronx has a large share of rent-regulated and public housing, which often means formal management processes."],
      },
      {
        heading: "Older buildings and NYCHA considerations",
        paragraphs: ["NYCHA residents should request accommodations through NYCHA. In private older buildings, write to the managing agent and keep copies."],
      },
      {
        heading: "Local resources",
        paragraphs: ["NYC Commission on Human Rights, NYS Division of Human Rights and local tenant associations can help."],
      },
    ],
    faqs: [
      { q: "Can NYCHA deny my ESA because of its pet policy?", a: "Pet policies can be modified as a reasonable accommodation." },
      { q: "How do I start with NYCHA?", a: "Ask your development office for the reasonable accommodation request form." },
      { q: "What if management ignores my request?", a: "Follow up in writing; unreasonable delay may be treated as a denial." },
    ],
    related: ["/rights/nycha-and-public-housing/"],
  }),
  place({
    slug: "staten-island",
    name: "Staten Island",
    areaServed: "Staten Island",
    priority: "Low",
    inNyc: true,
    title: "ESA Letters in Staten Island, NY | Renter Rights Guide",
    description:
      "Renting in Staten Island? Learn how ESA rights apply, how houses, townhomes and complexes handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "Staten Island is part of New York City, so the NYC Human Rights Law applies alongside state and federal law. Many rentals are houses and townhomes with individual owners, and some communities have association rules. Submit a written request with your ESA letter to whoever controls the rules.",
    city: {
      housingMix: "Single- and two-family homes, townhouse communities and garden apartments",
      facts: [
        { label: "Common landlords", value: "Individual owners, townhouse associations" },
        { label: "Laws that apply", value: "FHA, NYS HRL, NYC HRL" },
      ],
      localRules: [...nycRules, "Association bylaws remain subject to fair housing law"],
      resources: [...nycResources, { name: "Staten Island Housing Court", detail: "St. George" }],
    },
    sections: [
      {
        heading: "Staten Island rental market snapshot",
        paragraphs: ["Staten Island has more houses and townhomes than other boroughs, so individual owners make many decisions."],
      },
      {
        heading: "House rentals and HOA-style communities",
        paragraphs: ["If an association sets pet rules, send your request to both the owner and the association."],
      },
      {
        heading: "Local resources",
        paragraphs: ["NYC Commission on Human Rights and NYS Division of Human Rights accept complaints for Staten Island housing."],
      },
    ],
    faqs: [
      { q: "Does NYC law apply on Staten Island?", a: "Yes. Staten Island is one of the five boroughs." },
      { q: "Can my HOA override my landlord's approval?", a: "Associations are also subject to fair housing law; request from both." },
      { q: "What if I rent a room in a house?", a: "Some shared-housing situations may be exempt; legal review recommended." },
    ],
  }),
  place({
    slug: "buffalo",
    name: "Buffalo",
    areaServed: "Buffalo",
    priority: "Medium",
    title: "ESA Letters in Buffalo, NY | Renter Rights Guide",
    description:
      "Renting in Buffalo? Learn how ESA rights apply, how older housing stock and student rentals handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "Buffalo renters with ESAs are protected by the New York State Human Rights Law and the federal Fair Housing Act. Many rentals are in older two-family homes with small landlords. Send a written accommodation request with a letter from a New York-licensed professional and keep copies.",
    city: {
      housingMix: "Older two-family 'doubles', small multi-family buildings and student rentals",
      facts: [
        { label: "Common landlords", value: "Small owners, often owner-occupied doubles" },
        { label: "Laws that apply", value: "FHA, NYS HRL" },
      ],
      localRules: ["NYS Human Rights Law applies", "Owner-occupied small buildings may be exempt from the FHA but not necessarily from state law", "Check for any local fair housing ordinance"],
      resources: [
        { name: "NYS Division of Human Rights", detail: "Buffalo regional office" },
        { name: "Housing Opportunities Made Equal (HOME)", detail: "Fair housing organization serving Western New York" },
      ],
    },
    sections: [
      {
        heading: "Buffalo rental market snapshot",
        paragraphs: ["Buffalo's classic two-family doubles mean many tenants rent from owners who live upstairs or downstairs."],
      },
      {
        heading: "Older housing stock and small landlords",
        paragraphs: ["Small landlords may be unfamiliar with ESA rules. A short request letter and an offer to answer questions often helps."],
      },
      {
        heading: "Universities and student housing",
        paragraphs: ["Students at local colleges should use their school's accommodation process for campus housing and send written requests for off-campus rentals."],
      },
      {
        heading: "Local resources",
        paragraphs: ["The NYS Division of Human Rights has a Buffalo office, and HOME assists with fair housing questions in Western New York."],
      },
    ],
    faqs: [
      { q: "Does NYC law apply in Buffalo?", a: "No. State and federal law apply." },
      { q: "My landlord lives downstairs. Am I covered?", a: "Federal law may exempt some owner-occupied small buildings, but state law may still apply." },
      { q: "Where can I get local help?", a: "HOME and the NYS Division of Human Rights Buffalo office." },
    ],
    related: ["/rights/new-york-state-human-rights-law/", "/rights/college-dorm-esa/"],
  }),
  place({
    slug: "rochester",
    name: "Rochester",
    areaServed: "Rochester",
    priority: "Medium",
    title: "ESA Letters in Rochester, NY | Renter Rights Guide",
    description:
      "Renting in Rochester? Learn how ESA rights apply, how apartments near local universities handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "Rochester renters with emotional support animals are protected by state and federal fair housing law. Whether you rent near a university or in a suburban complex, send a written reasonable accommodation request with your ESA letter and get the landlord's decision in writing.",
    city: {
      housingMix: "Apartment complexes, older city homes and university-area rentals",
      facts: [
        { label: "Renters", value: "Students, young professionals and families" },
        { label: "Laws that apply", value: "FHA, NYS HRL" },
      ],
      localRules: ["NYS Human Rights Law applies", "Campus housing follows each school's accommodation process"],
      resources: [
        { name: "NYS Division of Human Rights", detail: "Rochester regional office" },
        { name: "Legal Assistance of Western New York (LawNY)", detail: "Civil legal aid for eligible tenants" },
      ],
    },
    sections: [
      {
        heading: "Rochester rental market snapshot",
        paragraphs: ["Rochester offers a mix of complexes managed by larger companies and city homes owned by individuals."],
      },
      {
        heading: "Student and apartment rentals",
        paragraphs: ["Complexes near universities often use online portals and forms; submit your letter through them and keep confirmation emails."],
      },
      {
        heading: "Local resources",
        paragraphs: ["The NYS Division of Human Rights Rochester office and LawNY can help eligible tenants."],
      },
    ],
    faqs: [
      { q: "Can a complex charge an ESA fee?", a: "Pet fees should not be charged for an approved ESA." },
      { q: "Do students need a separate letter?", a: "One valid letter can be used for both campus and off-campus requests." },
      { q: "Where do I file a complaint?", a: "NYS Division of Human Rights or HUD." },
    ],
  }),
  place({
    slug: "albany",
    name: "Albany",
    areaServed: "Albany",
    priority: "Low",
    title: "ESA Letters in Albany, NY | Renter Rights Guide",
    description:
      "Renting in Albany? Learn how ESA rights apply, what to know in a state-capital rental market, and how to get a valid ESA letter.",
    quickAnswer:
      "Albany renters with ESAs are covered by the New York State Human Rights Law and the federal Fair Housing Act. The capital's rental market includes rowhouses, student rentals and complexes. Submit a written request with your ESA letter and keep copies of all communications.",
    city: {
      housingMix: "Historic rowhouses, student rentals and suburban complexes",
      facts: [
        { label: "Renters", value: "State workers, students and families" },
        { label: "Laws that apply", value: "FHA, NYS HRL" },
      ],
      localRules: ["NYS Human Rights Law applies", "Check any local fair housing provisions"],
      resources: [
        { name: "NYS Division of Human Rights", detail: "Albany regional office" },
        { name: "Legal Aid Society of Northeastern New York", detail: "Civil legal help for eligible tenants" },
      ],
    },
    sections: [
      {
        heading: "Albany rental market snapshot",
        paragraphs: ["Albany's rowhouse neighborhoods and student areas mean many small landlords alongside professional managers."],
      },
      {
        heading: "Student and professional renters",
        paragraphs: ["Students should use campus processes; professionals in complexes should look for an online accommodation form."],
      },
      {
        heading: "Local resources",
        paragraphs: ["The NYS Division of Human Rights and Legal Aid Society of Northeastern New York serve the Capital Region."],
      },
    ],
    faqs: [
      { q: "Does state law cover Albany rowhouses?", a: "Generally yes, subject to limited exemptions." },
      { q: "Where can I get legal help?", a: "Legal Aid Society of Northeastern New York for eligible tenants." },
      { q: "Does NYC law apply?", a: "No. State and federal law apply." },
    ],
  }),
  place({
    slug: "syracuse",
    name: "Syracuse",
    areaServed: "Syracuse",
    priority: "Low",
    title: "ESA Letters in Syracuse, NY | Renter Rights Guide",
    description:
      "Renting in Syracuse? Learn how ESA rights apply, how rentals near Syracuse University handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "In Syracuse, ESA owners are protected by state and federal fair housing law. Many rentals near the university are student leases with small landlords. Make a written accommodation request with your ESA letter before moving the animal in, and keep copies.",
    city: {
      housingMix: "Student houses near the university, older homes and apartment complexes",
      facts: [
        { label: "Renters", value: "Large student population" },
        { label: "Laws that apply", value: "FHA, NYS HRL" },
      ],
      localRules: ["NYS Human Rights Law applies", "University housing has its own process"],
      resources: [
        { name: "NYS Division of Human Rights", detail: "Syracuse regional office" },
        { name: "CNY Fair Housing", detail: "Fair housing organization serving Central New York" },
      ],
    },
    sections: [
      {
        heading: "Syracuse rental market snapshot",
        paragraphs: ["Student demand shapes much of Syracuse's rental market, with leases often signed many months before move-in."],
      },
      {
        heading: "Student housing",
        paragraphs: ["Request accommodations for shared student houses before signing or immediately after, so roommates and landlords can plan."],
      },
      {
        heading: "Local resources",
        paragraphs: ["CNY Fair Housing and the NYS Division of Human Rights assist with fair housing concerns in Central New York."],
      },
    ],
    faqs: [
      { q: "Can my roommates block my ESA?", a: "Roommates do not decide accommodations, but discuss plans with them early." },
      { q: "Does the university accept online letters?", a: "Schools review documentation from licensed professionals; check their requirements." },
      { q: "Who can help locally?", a: "CNY Fair Housing." },
    ],
    related: ["/rights/college-dorm-esa/"],
  }),
  place({
    slug: "yonkers",
    name: "Yonkers",
    areaServed: "Yonkers",
    priority: "Low",
    title: "ESA Letters in Yonkers, NY | Renter Rights Guide",
    description:
      "Renting in Yonkers? Learn how ESA rights apply, how apartments just north of NYC handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "Yonkers is outside New York City, so the NYC Human Rights Law does not apply, but state and federal fair housing law do. Many Yonkers renters live in apartment buildings and co-ops. Submit a written request with your ESA letter to the landlord, managing agent or board.",
    city: {
      housingMix: "Apartment buildings, co-ops and two-family homes",
      facts: [
        { label: "Location", value: "Westchester County, bordering the Bronx" },
        { label: "Laws that apply", value: "FHA, NYS HRL, Westchester County law" },
      ],
      localRules: ["NYS Human Rights Law applies", "Westchester County Human Rights Law may add protections; legal review recommended"],
      resources: [
        { name: "Westchester County Human Rights Commission", detail: "County-level discrimination complaints" },
        { name: "Westchester Residential Opportunities (WRO)", detail: "Fair housing organization" },
      ],
    },
    sections: [
      {
        heading: "Yonkers rental market snapshot",
        paragraphs: ["Yonkers attracts renters seeking more space close to the city, with many mid-rise apartment and co-op buildings."],
      },
      {
        heading: "Apartment buildings and co-ops",
        paragraphs: ["Co-op boards in Yonkers review requests much like NYC boards, under state and federal law."],
      },
      {
        heading: "Local resources",
        paragraphs: ["The Westchester County Human Rights Commission and WRO help with fair housing questions."],
      },
    ],
    faqs: [
      { q: "Does NYC law protect me in Yonkers?", a: "No, but state, federal and county protections may apply." },
      { q: "Can a Yonkers co-op deny my ESA?", a: "Only for limited, individualized reasons." },
      { q: "Where can I file?", a: "Westchester County HRC, NYS DHR or HUD." },
    ],
    related: ["/locations/westchester/"],
  }),
  place({
    slug: "long-island",
    name: "Long Island",
    areaServed: "Long Island (Nassau and Suffolk Counties)",
    priority: "Medium",
    title: "ESA Letters in Long Island, NY | Renter Rights Guide",
    description:
      "Renting in Long Island? Learn how ESA rights apply, how Nassau and Suffolk rentals and communities handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "On Long Island, ESA owners in Nassau and Suffolk counties are protected by state and federal fair housing law, and county human rights laws may add protections. Rentals include houses, accessory apartments, condos and HOA communities. Send a written request with your ESA letter to every party that sets the rules.",
    city: {
      housingMix: "Single-family rentals, accessory apartments, condos and HOA communities",
      facts: [
        { label: "Counties", value: "Nassau and Suffolk" },
        { label: "Laws that apply", value: "FHA, NYS HRL, county human rights laws" },
      ],
      localRules: ["NYS Human Rights Law applies", "Nassau and Suffolk human rights laws may apply; legal review recommended", "HOA rules are subject to fair housing law"],
      resources: [
        { name: "Long Island Housing Services", detail: "Fair housing organization" },
        { name: "Nassau County Commission on Human Rights", detail: "County complaints" },
        { name: "Suffolk County Human Rights Commission", detail: "County complaints" },
      ],
    },
    sections: [
      {
        heading: "Long Island rental market snapshot",
        paragraphs: ["Long Island's rental market leans toward houses and accessory apartments, often with individual owners."],
      },
      {
        heading: "Suburban rentals, condos and HOAs",
        paragraphs: ["If you rent a condo or home in an HOA, request the accommodation from both the owner and the association."],
      },
      {
        heading: "Local resources",
        paragraphs: ["Long Island Housing Services and the county human rights commissions help with fair housing issues."],
      },
    ],
    faqs: [
      { q: "Does NYC law apply on Long Island?", a: "No. State, federal and county law may apply." },
      { q: "I rent a basement apartment. Am I covered?", a: "Owner-occupied situations can raise exemptions; get advice for your case." },
      { q: "Who can help locally?", a: "Long Island Housing Services." },
    ],
  }),
  place({
    slug: "westchester",
    name: "Westchester",
    areaServed: "Westchester County",
    priority: "Low",
    title: "ESA Letters in Westchester, NY | Renter Rights Guide",
    description:
      "Renting in Westchester? Learn how ESA rights apply, how suburban co-ops, condos and rentals handle requests, and how to get a valid ESA letter.",
    quickAnswer:
      "Westchester renters and co-op owners with ESAs are protected by state and federal fair housing law, and the Westchester County Human Rights Law may add protections. Co-ops are common in many towns. Submit a written request with your ESA letter to the landlord or board.",
    city: {
      housingMix: "Co-ops, condos, garden apartments and single-family rentals",
      facts: [
        { label: "Common decision makers", value: "Co-op and condo boards, property managers" },
        { label: "Laws that apply", value: "FHA, NYS HRL, Westchester County law" },
      ],
      localRules: ["NYS Human Rights Law applies", "Westchester County Human Rights Law may apply; legal review recommended"],
      resources: [
        { name: "Westchester County Human Rights Commission", detail: "County complaints" },
        { name: "Westchester Residential Opportunities (WRO)", detail: "Fair housing organization" },
        { name: "NYS Division of Human Rights", detail: "White Plains regional office" },
      ],
    },
    sections: [
      {
        heading: "Westchester rental market snapshot",
        paragraphs: ["From White Plains to New Rochelle, Westchester has a large co-op sector plus suburban rentals."],
      },
      {
        heading: "Co-ops, condos and suburban rentals",
        paragraphs: ["Boards review accommodation requests under fair housing law. Submit early and keep it separate from financial paperwork."],
      },
      {
        heading: "Local resources",
        paragraphs: ["WRO, the county Human Rights Commission and the NYS Division of Human Rights can help."],
      },
    ],
    faqs: [
      { q: "Is Westchester covered by NYC law?", a: "No. State, federal and county law apply." },
      { q: "Can a co-op require a pet interview?", a: "Boards can ask reasonable questions about the animal but not your diagnosis." },
      { q: "Where can I file?", a: "Westchester County HRC, NYS DHR or HUD." },
    ],
    related: ["/locations/yonkers/", "/rights/co-op-and-condo-esa-rules/"],
  }),
];
