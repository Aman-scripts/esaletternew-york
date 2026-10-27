import type { BlogCategory, BlogPost, ContentSection, Priority } from "./types";

export const POSTS_PER_PAGE = 12;

export const blogCategories: BlogCategory[] = [
  {
    slug: "rights-housing",
    path: "/blog/category/rights-housing/",
    name: "ESA Laws & Housing Rights",
    title: "ESA Housing Rights Articles for New York Renters",
    description:
      "Articles on ESA housing rights in New York: Fair Housing Act, NYS and NYC law, landlord denials, fees, and how to protect your request.",
    intro:
      "Housing law for emotional support animals in New York has three layers: the federal Fair Housing Act, the New York State Human Rights Law and, in the five boroughs, the NYC Human Rights Law. The articles in this category explain how those laws work in everyday situations, from how long a letter stays current to spotting fake documentation and handling college housing. Each article links back to our detailed rights guides so you can go deeper on the legal standard. Everything here is general information, not legal advice, and legal references are reviewed for current status before publishing. New articles are added as the law and agency guidance change.",
    pillars: ["/rights/"],
    phase: 1,
    priority: "Medium",
  },
  {
    slug: "qualifying-conditions",
    path: "/blog/category/qualifying-conditions/",
    name: "Qualifying Conditions",
    title: "Qualifying Conditions for an ESA: Articles & Guides",
    description:
      "Articles explaining which conditions may support an ESA letter in New York and how licensed professionals evaluate your need for an ESA.",
    intro:
      "Whether you qualify for an emotional support animal depends on how a mental or emotional health condition affects your daily life, and on a licensed professional's judgment. These articles explain how evaluations work, how ESAs differ from service and therapy animals, and what other options exist if an ESA is not the right fit. They use careful, non-diagnostic language and are not a substitute for care from a professional. No condition guarantees a letter: a professional licensed in New York decides after an individual evaluation. For condition-by-condition detail, see our qualifying conditions guide. If you are in crisis, call or text 988.",
    pillars: ["/conditions/"],
    phase: 3,
    priority: "Medium",
  },
  {
    slug: "new-york-cities",
    path: "/blog/category/new-york-cities/",
    name: "New York Cities & Boroughs",
    title: "New York City & Borough ESA Guides",
    description:
      "Place-specific ESA articles for Manhattan, Brooklyn, Queens, Buffalo, Rochester and more, covering local rentals, buildings, and housing resources.",
    intro:
      "Renting with an emotional support animal in Manhattan looks different from renting in Buffalo or Long Island. These place-specific articles cover local building types, how landlords and boards in each area tend to handle requests, and where to find help nearby. They complement our location guides, which explain how state law applies everywhere and where New York City law adds protection. Expect practical detail on listings that say no pets, doorman and walk-up buildings, rent-stabilized apartments and suburban communities, plus the local agencies and tenant organizations that can help if a request stalls. Every article links to the matching location guide for the full picture.",
    pillars: ["/locations/"],
    phase: 2,
    priority: "Medium",
  },
  {
    slug: "co-op-condo-rental-guides",
    path: "/blog/category/co-op-condo-rental-guides/",
    name: "Co-op, Condo & Rental Guides",
    title: "Co-op, Condo & Rental ESA Guides for New York",
    description:
      "Plain-language guides for New York tenants, co-op shareholders and landlords on ESA requests, board packages, documentation, and disputes.",
    intro:
      "Practical, step-by-step guides for the moments that matter: talking to your landlord, preparing a co-op board package, understanding what a landlord can ask, and filing a complaint if a request is denied. Each guide is written in plain language for New York tenants, shareholders and housing providers, and links back to the rights guides that explain the law behind each step. You will find sample wording, checklists of what to attach, realistic timelines and tips for keeping every exchange in writing. Housing providers can use the same guides to review requests lawfully and avoid asking for more than the law allows.",
    pillars: ["/rights/"],
    phase: 1,
    priority: "Medium",
  },
  {
    slug: "esa-lifestyle-care",
    path: "/blog/category/esa-lifestyle-care/",
    name: "ESA Lifestyle & Care",
    title: "ESA Lifestyle & Care Tips for New York Owners",
    description:
      "Practical tips for living with an emotional support animal in New York: small-apartment care, daily routines, travel, and being a good neighbor.",
    intro:
      "Living with an emotional support animal in New York means planning for small spaces, shared walls, elevators, walk-ups and busy sidewalks. These articles share practical tips on daily care, exercise, noise and being a considerate neighbor, so your accommodation stays smooth for everyone in the building. You will also find advice on vet care, travel within the city, building amenities like dog runs and roof decks, and what to do if a neighbor complains. A well-cared-for animal that does not disturb others is the best protection for your accommodation, because housing providers may act on real nuisance or safety problems.",
    pillars: ["/conditions/", "/rights/"],
    phase: 3,
    priority: "Medium",
  },
  {
    slug: "news-policy-updates",
    path: "/blog/category/news-policy-updates/",
    name: "News & Policy Updates",
    title: "New York ESA News & Policy Updates",
    description:
      "Stay current on New York and federal ESA news, law changes, and HUD guidance that affect renters and landlords with emotional support animals.",
    intro:
      "Federal guidance, state bills and court decisions can change how ESA requests are handled. This category tracks news that affects New York renters and housing providers, including HUD guidance and pending New York legislation. Every update is reviewed for accuracy and current status, and links to our rights guides for the underlying law. Each article notes when it was last updated and what remains uncertain, so you can tell settled law from proposals still in progress. If a change affects an existing request, our guides explain the practical next steps for tenants, co-op shareholders and landlords. Check back regularly for new updates.",
    pillars: ["/rights/"],
    phase: 4,
    priority: "Low",
  },
];

type PostInput = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  category: string;
  siloLink: string;
  phase?: 1 | 2 | 3 | 4;
  priority?: Priority;
  published: string;
  excerpt: string;
  sections: ContentSection[];
  image?: string;
};

function post(p: PostInput): BlogPost {
  const category = blogCategories.find((c) => c.slug === p.category);
  if (!category) throw new Error(`Unknown blog category: ${p.category}`);
  return {
    path: `/blog/${p.slug}/`,
    slug: p.slug,
    h1: p.h1,
    label: p.h1,
    title: p.title,
    description: p.description,
    robots: "IF",
    template: "T9",
    parent: category.path,
    phase: p.phase ?? 1,
    priority: p.priority ?? "Medium",
    schema: ["Article"],
    updated: p.published,
    published: p.published,
    author: "ESA Letter New York Editorial Team",
    category: p.category,
    excerpt: p.excerpt,
    sections: p.sections,
    siloLink: p.siloLink,
    image: p.image,
  };
}

export const blogPosts: BlogPost[] = [
  post({
    slug: "nyc-co-op-board-esa-request-guide",
    h1: "How to Make an ESA Request to a NYC Co-op Board",
    title: "ESA Request to a NYC Co-op Board: A Practical Guide",
    description:
      "Preparing a board package with an ESA? Learn what to include, how to word your accommodation request, and what boards may and may not ask.",
    category: "co-op-condo-rental-guides",
    siloLink: "/rights/co-op-and-condo-esa-rules/",
    published: "2026-10-20",
    image: "/images/blogs/blog_coop_board.jpg",
    excerpt: "Board packages are detailed. Here is how to add an ESA accommodation request without slowing your approval.",
    sections: [
      {
        heading: "Before you submit",
        list: ["Get an ESA letter dated within the past year", "Read the building's house rules on animals", "Ask the managing agent how accommodation requests are reviewed"],
      },
      {
        heading: "What to include",
        list: ["A one-page written accommodation request", "Your ESA letter", "Basic information about the animal", "No diagnosis or medical records"],
      },
      {
        heading: "If the board pushes back",
        paragraphs: [
          "Ask for concerns in writing, answer them promptly, and request a cooperative dialogue. If the board still refuses, you can contact the NYC Commission on Human Rights, the NYS Division of Human Rights or HUD.",
        ],
      },
    ],
  }),
  post({
    slug: "how-to-talk-to-your-landlord-about-your-esa",
    h1: "How to Talk to Your Landlord About Your ESA",
    title: "How to Talk to Your New York Landlord About Your ESA",
    description:
      "Step-by-step tips for asking your New York landlord for an ESA accommodation: what to say, what to send, and how to keep everything in writing.",
    category: "co-op-condo-rental-guides",
    siloLink: "/rights/no-pet-buildings/",
    published: "2026-10-18",
    image: "/images/blogs/blog_talk_landlord.jpg",
    excerpt: "A calm, clear conversation and a written follow-up make most ESA requests go smoothly.",
    sections: [
      { heading: "Before you ask", list: ["Have your ESA letter ready", "Know your lease terms", "Plan to put the request in writing"] },
      {
        heading: "What to say",
        paragraphs: ["Keep it simple: you have a disability and are requesting a reasonable accommodation to live with your emotional support animal. You do not need to explain your diagnosis."],
      },
      {
        heading: "Following up in writing",
        paragraphs: ["Send an email the same day summarizing the conversation, attach your letter, and ask for a written response by a reasonable date."],
      },
    ],
  }),
  post({
    slug: "what-new-york-landlords-can-ask-about-your-esa",
    h1: "What New York Landlords Can Ask About Your ESA",
    title: "What Can New York Landlords Ask About Your ESA?",
    description:
      "Learn what questions and documents a New York landlord may request for an ESA, and which requests, such as medical records or fees, go too far.",
    category: "co-op-condo-rental-guides",
    siloLink: "/rights/landlord-denials/",
    published: "2026-10-16",
    image: "/images/blogs/blog_landlord_questions.jpg",
    excerpt: "Landlords can verify your need, but there are clear limits on what they can demand.",
    sections: [
      { heading: "Reasonable documentation", list: ["A letter from a licensed professional", "The provider's license details for verification", "Basic information about the animal"] },
      { heading: "Questions landlords cannot ask", list: ["Your diagnosis", "Your full medical records", "Proof of registry or certification", "Payment of pet fees for the ESA"] },
      { heading: "When to push back", paragraphs: ["If a landlord asks for more than reliable documentation, respond politely in writing explaining what the law requires, and keep copies."] },
    ],
  }),
  post({
    slug: "how-to-file-a-housing-discrimination-complaint-in-new-york",
    h1: "How to File an ESA Housing Complaint in New York",
    title: "How to File an ESA Housing Complaint in New York",
    description:
      "Denied an ESA? Learn how to file with the NYS Division of Human Rights, the NYC Commission on Human Rights, or HUD, and what to gather first.",
    category: "co-op-condo-rental-guides",
    siloLink: "/rights/landlord-denials/",
    published: "2026-10-14",
    image: "/images/blogs/blog_housing_complaint.jpg",
    excerpt: "Three agencies can take ESA housing complaints in New York. Here is how to choose and prepare.",
    sections: [
      {
        heading: "Choose the right agency",
        table: {
          head: ["Agency", "Covers"],
          rows: [
            ["NYC Commission on Human Rights", "Housing in the five boroughs"],
            ["NYS Division of Human Rights", "Housing statewide"],
            ["HUD", "Federal Fair Housing Act claims"],
          ],
        },
      },
      { heading: "What evidence to gather", list: ["Your written request and ESA letter", "The landlord's responses and denial", "Dates of all communications", "Any fees charged"] },
      {
        heading: "Deadlines and next steps (legal review)",
        paragraphs: ["Each agency has filing deadlines, and filing with one can limit filing with another. Confirm current deadlines and rules before you file."],
      },
    ],
  }),
  post({
    slug: "signs-of-a-fake-esa-letter",
    h1: "Signs of a Fake ESA Letter",
    title: "Signs of a Fake ESA Letter (and How Landlords Spot Them)",
    description:
      "Learn the warning signs of a fake ESA letter or registry scam in New York, and what a valid letter from a licensed professional should include.",
    category: "rights-housing",
    siloLink: "/requirements/",
    published: "2026-10-12",
    excerpt: "Landlords are getting better at spotting invalid letters. Know the red flags before you buy.",
    sections: [
      { heading: "Red flags in letters", list: ["No license number", "Instant issue without consultation", "Generic wording", "Out-of-state provider"] },
      { heading: "Registry and ID card scams", paragraphs: ["Registries and ID cards are private products with no legal status. They can make a landlord more skeptical, not less."] },
      { heading: "How to verify a provider", paragraphs: ["Look up the license number with the New York State Office of the Professions and confirm it is active."] },
    ],
  }),
  post({
    slug: "how-long-is-an-esa-letter-valid-in-new-york",
    h1: "How Long Is an ESA Letter Valid in New York?",
    title: "How Long Is an ESA Letter Valid in New York?",
    description:
      "ESA letters have no single legal expiration date, but landlords often expect one within a year. See when to renew in New York.",
    category: "rights-housing",
    siloLink: "/renewal/",
    published: "2026-10-10",
    excerpt: "There is no expiration date in the law, but practical expectations matter.",
    sections: [
      { heading: "Is there a legal expiration?", paragraphs: ["No federal, state or city statute sets an expiration date for ESA letters."] },
      { heading: "What landlords expect", paragraphs: ["Many housing providers and boards ask for a letter dated within the past 12 months, especially at lease signing or renewal."] },
      { heading: "When to renew", list: ["Before a new lease or move", "Before a co-op or condo application", "If your letter is over a year old and your landlord asks"] },
    ],
  }),
  post({
    slug: "esas-in-nyc-college-housing",
    h1: "ESAs in NYC and New York College Housing",
    title: "ESAs in New York College Housing: What Students Should Know",
    description:
      "Planning to live on campus with an ESA in New York? See how housing law applies, when to request, and what schools may ask for.",
    category: "rights-housing",
    siloLink: "/rights/college-dorm-esa/",
    published: "2026-10-08",
    excerpt: "Campus housing deadlines come early. Plan your ESA request months ahead.",
    sections: [
      { heading: "Housing law and campus housing", paragraphs: ["Residence halls are generally covered by fair housing law, so schools must consider ESA requests individually."] },
      { heading: "Request timeline", list: ["Contact disability services early", "Submit before housing deadlines", "Allow time for roommate planning"] },
      { heading: "Documentation", paragraphs: ["Schools typically accept a letter from a licensed professional plus their own request form."] },
    ],
  }),
  post({
    slug: "esa-vs-service-dog-vs-therapy-animal",
    h1: "ESA vs Service Dog vs Therapy Animal",
    title: "ESA vs Service Dog vs Therapy Animal: What's the Difference?",
    description:
      "Emotional support, service, and therapy animals are not the same. See how each is defined and what rights each has in New York.",
    category: "qualifying-conditions",
    siloLink: "/rights/esa-vs-service-animal/",
    published: "2026-10-06",
    excerpt: "Three kinds of animals, three different sets of rights.",
    sections: [
      {
        heading: "Definitions",
        table: {
          head: ["Type", "What it does"],
          rows: [
            ["Emotional support animal", "Provides comfort and support to its owner"],
            ["Service dog", "Trained to perform tasks for a person with a disability"],
            ["Therapy animal", "Visits hospitals, schools and facilities to comfort others"],
          ],
        },
      },
      { heading: "Rights and access", paragraphs: ["Service dogs have public access rights. ESAs have housing rights. Therapy animals have no special legal rights."] },
      { heading: "Which one applies to you", paragraphs: ["If you need an animal at home for emotional support, an ESA letter is the relevant documentation."] },
    ],
  }),
  post({
    slug: "what-if-you-dont-qualify-for-an-esa-letter",
    h1: "What If You Don't Qualify for an ESA Letter?",
    title: "What If You Don't Qualify for an ESA Letter?",
    description:
      "A licensed professional decides whether you qualify for an ESA letter. Learn why some people don't, and what other support options may help.",
    category: "qualifying-conditions",
    siloLink: "/conditions/",
    published: "2026-10-04",
    excerpt: "Not qualifying is a clinical decision, not a judgment. Here are your next steps.",
    sections: [
      { heading: "How eligibility is decided", paragraphs: ["A licensed professional decides based on whether a condition substantially limits daily life and whether an animal helps."] },
      { heading: "Common reasons", list: ["Symptoms do not substantially limit a major life activity", "An animal is not part of an appropriate plan", "More information is needed"] },
      { heading: "Other options", list: ["Ongoing therapy or counseling", "Asking a landlord about pet-friendly options", "Community mental health resources; in crisis call or text 988"] },
    ],
  }),
  post({
    slug: "hud-esa-memo-2026-what-new-york-renters-should-know",
    h1: "HUD ESA Memo 2026: What New York Renters Should Know",
    title: "HUD ESA Memo 2026: What New York Renters Should Know",
    description:
      "A plain-language summary of HUD's 2026 ESA memo and how New York State and NYC law continue to protect renters with emotional support animals.",
    category: "news-policy-updates",
    siloLink: "/rights/hud-2026-esa-memo-new-york/",
    phase: 4,
    priority: "Low",
    published: "2026-10-02",
    excerpt: "Federal enforcement shifted in 2026. State and city law did not.",
    sections: [
      { heading: "What changed", paragraphs: ["HUD's 2026 guidance reportedly narrows federal enforcement of ESA requests. Details pending legal review."] },
      { heading: "What did not change in New York", paragraphs: ["The NYS Human Rights Law and NYC Human Rights Law remain in force and are enforced by state and city agencies."] },
      { heading: "What to do now (verify current status)", list: ["Keep a current ESA letter", "Make written requests", "Consider state and city agencies if denied"] },
    ],
  }),
  post({
    slug: "renting-in-brooklyn-with-an-esa",
    h1: "Renting in Brooklyn With an ESA",
    title: "Renting in Brooklyn With an ESA: A Practical Guide",
    description:
      "Looking for a Brooklyn rental with your emotional support animal? Learn how to prepare your documents, approach landlords, and handle common issues.",
    category: "new-york-cities",
    siloLink: "/locations/brooklyn/",
    published: "2026-09-30",
    excerpt: "From brownstones to new builds, here is how to rent in Brooklyn with your ESA.",
    sections: [
      { heading: "Preparing documents", list: ["Current ESA letter", "Short request letter", "Basic animal information"] },
      { heading: "Approaching Brooklyn landlords", paragraphs: ["Small owners may be new to ESA requests. Be clear, polite and ready to answer questions about the animal, not your health."] },
      { heading: "Common issues", list: ["Owner-occupied exemption questions", "Pet rent requests", "Delayed responses"] },
    ],
  }),
  post({
    slug: "renting-in-manhattan-with-an-esa",
    h1: "Renting in Manhattan With an ESA",
    title: "Renting in Manhattan With an ESA: What to Know",
    description:
      "Searching Manhattan apartments with an ESA? Learn how listings, doorman buildings, and co-op or condo boards handle ESA requests.",
    category: "new-york-cities",
    siloLink: "/locations/manhattan/",
    published: "2026-09-28",
    excerpt: "Manhattan moves fast. Have your ESA paperwork ready before you tour.",
    sections: [
      { heading: "Listings and 'no pets' wording", paragraphs: ["A no-pets listing still must consider accommodation requests. You can apply."] },
      { heading: "Doorman buildings and boards", paragraphs: ["Managing agents and boards review requests. Submit early and in writing."] },
      { heading: "Tips for approvals", list: ["Letter dated within a year", "Concise request", "Approval in writing before move-in"] },
    ],
  }),
  post({
    slug: "caring-for-your-esa-in-a-small-nyc-apartment",
    h1: "Caring for Your ESA in a Small NYC Apartment",
    title: "Caring for Your ESA in a Small NYC Apartment",
    description:
      "Daily care tips for emotional support animals in small New York apartments: exercise, noise, shared spaces, and being a good neighbor.",
    category: "esa-lifestyle-care",
    siloLink: "/conditions/",
    priority: "Low",
    published: "2026-09-26",
    excerpt: "Small space, big city: practical care tips for New York ESA owners.",
    sections: [
      { heading: "Space and exercise", list: ["Plan daily walks or play sessions", "Use vertical space for cats", "Rotate toys to keep things interesting"] },
      { heading: "Noise and neighbors", list: ["Use rugs to dampen sound", "Keep your animal calm in hallways and elevators", "Address complaints quickly"] },
      { heading: "Vet and health care", paragraphs: ["Keep vaccinations current and find a nearby vet for routine and urgent care."] },
    ],
  }),
];
