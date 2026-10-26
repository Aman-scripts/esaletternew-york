import type { ArticlePage, Faq, Priority } from "./types";
import { site } from "../site";

const UPDATED = site.lastReviewed;

export const conditionsPillar: ArticlePage = {
  path: "/conditions/",
  h1: "Who Qualifies for an Emotional Support Animal in New York?",
  label: "Conditions",
  title: "Who Qualifies for an ESA in New York? Conditions List",
  description:
    "See which mental and emotional health conditions can support an ESA letter in New York, how a licensed professional evaluates you, and what to expect.",
  robots: "IF",
  template: "T3",
  parent: "/",
  phase: 3,
  priority: "High",
  schema: ["FAQPage"],
  blogCategory: "qualifying-conditions",
  intro:
    "Qualifying is about how a condition affects your daily life, not just a diagnosis. Learn how licensed professionals evaluate ESA requests.",
  updated: UPDATED,
  overview: [
    "There is no official list of conditions that automatically qualify someone for an emotional support animal. Instead, a licensed mental health professional looks at two things: whether you have a mental or emotional health condition that substantially limits one or more major life activities, and whether an animal provides support that helps with those limitations.",
    "Major life activities include things like sleeping, concentrating, working, interacting with others and caring for yourself. Many New Yorkers live with anxiety, depression, PTSD or other conditions that affect these areas, especially in high-pressure, high-density city environments. For some of them, the daily routine, calm presence or companionship of an animal is a meaningful part of how they cope at home.",
    "The guides below explain how common conditions are evaluated, what a provider is likely to ask, and how documentation works with landlords and co-op boards. They are general information, not a diagnosis. If you are in crisis, call or text 988 to reach the Suicide & Crisis Lifeline.",
  ],
  sections: [
    {
      heading: "Qualifying criteria (diagnosed condition + confirmed need)",
      list: [
        "A mental or emotional health condition recognized by a licensed professional",
        "That condition substantially limits at least one major life activity",
        "The animal provides support that helps with those limitations",
      ],
    },
    {
      heading: "Role of a licensed provider",
      paragraphs: [
        "A licensed mental health professional evaluates your history and current needs and decides whether an ESA is clinically appropriate. They do not have to approve a letter, and they will not disclose your diagnosis on it.",
      ],
    },
    {
      heading: "Evaluation process",
      steps: [
        { title: "Assessment", text: "A short questionnaire about your needs and housing." },
        { title: "Consultation", text: "A telehealth visit with a professional licensed in New York." },
        { title: "Decision", text: "If appropriate, a signed ESA letter is issued." },
      ],
    },
  ],
  faqs: [
    { q: "Is there a list of qualifying conditions?", a: "No official list exists. Qualification depends on how a condition limits your daily life and whether an animal helps." },
    { q: "Do I need a formal diagnosis first?", a: "The evaluating professional assesses your condition during the consultation." },
    { q: "Can I qualify with more than one condition?", a: "Yes. The provider considers your overall needs." },
  ],
  related: [],
};

export const eligibleAnimals: ArticlePage = {
  path: "/conditions/eligible-animals/",
  h1: "Which Animals Can Be Emotional Support Animals?",
  label: "Eligible Animals",
  title: "Which Animals Can Be Emotional Support Animals?",
  description:
    "Dogs, cats, and other animals can be ESAs in New York housing. Learn what the law says about animal types, small apartments, and reasonable limits.",
  robots: "IF",
  template: "T4",
  parent: "/conditions/",
  phase: 3,
  priority: "Medium",
  schema: ["Article", "FAQPage"],
  intro: "Most ESAs are dogs and cats, but fair housing law is not limited to them.",
  updated: UPDATED,
  quickAnswer:
    "Under fair housing rules, an emotional support animal can be a dog, cat or other animal commonly kept in households, such as a rabbit, bird or small rodent. There are no breed, size or weight requirements, but any animal must not pose a direct threat to others or cause substantial damage that cannot be reduced.",
  sections: [
    {
      heading: "What the law says about animal types",
      paragraphs: [
        "Housing laws focus on whether the animal provides disability-related support. Requests for unusual animals may require more explanation of the specific need.",
      ],
    },
    {
      heading: "Common ESA animals (dogs, cats, small animals)",
      list: ["Dogs of any breed or size", "Cats", "Rabbits, guinea pigs and hamsters", "Birds", "Fish and small reptiles kept in enclosures"],
    },
    {
      heading: "Limits (direct threat, building rules)",
      paragraphs: [
        "A housing provider may deny a specific animal that poses a direct threat based on its actual behavior, not breed stereotypes. ESAs remain subject to general rules about noise, waste and leashing in common areas.",
      ],
    },
    {
      heading: "ESAs in small NYC apartments",
      paragraphs: [
        "Studio and one-bedroom apartments can work well for cats and small or calm dogs. Think about exercise needs, noise in shared walls, and elevator or stair access in walk-ups.",
      ],
    },
  ],
  legalCallout: {
    variant: "legal",
    title: "Authority",
    text: "Fair Housing Act 42 U.S.C. 3604(f)(3)(B); 24 C.F.R. 100.204. HUD guidance has discussed animals commonly kept in households; confirm current citation.",
  },
  faqs: [
    { q: "Can a pit bull be an ESA in New York?", a: "Breed restrictions in pet policies generally cannot be applied to an approved ESA; any denial must be based on the individual animal's behavior." },
    { q: "Can I have two ESAs?", a: "Yes, if a licensed professional finds a disability-related need for each." },
    { q: "Does my ESA need to be a certain age?", a: "No age rule applies, though puppies and kittens should be house-trained." },
  ],
  related: ["/conditions/", "/rights/esa-vs-service-animal/", "/blog/caring-for-your-esa-in-a-small-nyc-apartment/"],
};

type ConditionInput = {
  slug: string;
  name: string;
  priority: Priority;
  description: string;
  sensitive?: boolean;
  quickAnswer: string;
  qualifies: string;
  helps: string[];
  asks: string[];
  documentation: string;
  faqs: Faq[];
};

function condition(c: ConditionInput): ArticlePage {
  const title = `Can You Get an ESA Letter for ${c.name} in New York?`;
  return {
    path: `/conditions/${c.slug}/`,
    h1: title,
    label: c.name,
    title: title.length > 60 ? `ESA Letter for ${c.name} in New York` : title,
    description: c.description,
    robots: "IF",
    template: "T5",
    parent: "/conditions/",
    phase: 3,
    priority: c.priority,
    schema: ["Article", "FAQPage"],
    intro: `How ${c.name.toLowerCase()} is evaluated for an emotional support animal letter in New York, in plain language.`,
    updated: UPDATED,
    reviewNote: c.sensitive
      ? "Sensitive topic: clinical review required before publishing."
      : undefined,
    quickAnswer: c.quickAnswer,
    sections: [
      { heading: `How ${c.name} qualifies under federal, NYS and NYC law`, paragraphs: [c.qualifies] },
      { heading: `How an ESA may help with ${c.name}`, list: c.helps },
      { heading: `What the provider will ask about ${c.name}`, list: c.asks },
      { heading: `Documentation and landlord considerations for ${c.name}`, paragraphs: [c.documentation] },
    ],
    legalCallout: {
      variant: "legal",
      title: "Legal note",
      text: "Disability under the Fair Housing Act (42 U.S.C. 3602(h)), NY Executive Law 292(21) and NYC Admin Code 8-102 is defined by functional impact, not by a list of diagnoses. This page is not medical advice.",
    },
    faqs: c.faqs,
    related: ["/conditions/", "/requirements/", "/how-it-works/"],
  };
}

const sharedQualify = (name: string) =>
  `${name} can be a qualifying condition when it substantially limits a major life activity such as sleeping, concentrating, working or caring for yourself. Federal, New York State and New York City law all define disability by its effect on daily life rather than by a fixed list, and a licensed professional makes the clinical determination.`;

export const conditionPages: ArticlePage[] = [
  condition({
    slug: "anxiety",
    name: "Anxiety",
    priority: "High",
    description:
      "Does Anxiety qualify you for an ESA letter in New York? See how a provider evaluates it and how constant city stress can affect home life.",
    quickAnswer:
      "Yes, many people with anxiety disorders qualify for an ESA letter in New York when their anxiety substantially limits daily activities like sleep, focus or leaving home. A licensed professional evaluates your symptoms and decides whether an emotional support animal is an appropriate part of your support at home.",
    qualifies: sharedQualify("Generalized anxiety and related anxiety disorders"),
    helps: [
      "A calming presence during periods of heightened worry at home",
      "A predictable routine of feeding and care that adds structure",
      "Physical comfort that some people find grounding",
      "Companionship that may ease isolation in a busy city",
    ],
    asks: [
      "How often anxiety symptoms occur and how intense they are",
      "Which daily activities are affected",
      "Your current support or treatment, if any",
      "How your animal helps you in practice",
    ],
    documentation:
      "Your letter will confirm a disability-related need without naming anxiety. Landlords and boards should not ask for your diagnosis or medical records.",
    faqs: [
      { q: "Is mild anxiety enough?", a: "Qualification depends on whether symptoms substantially limit a major life activity. The professional makes that call." },
      { q: "Will the letter say I have anxiety?", a: "No. ESA letters do not need to disclose a diagnosis." },
      { q: "Can I get a letter if I take medication?", a: "Yes. Treatment does not prevent you from qualifying." },
    ],
  }),
  condition({
    slug: "depression",
    name: "Depression",
    priority: "High",
    description:
      "Does Depression qualify you for an ESA letter in New York? See how a provider evaluates it and how a daily routine with an animal may support functioning.",
    quickAnswer:
      "Depression can qualify for an ESA letter in New York when it substantially limits daily functioning, such as sleep, motivation or self-care. A licensed professional evaluates your symptoms and decides whether the routine and companionship of an emotional support animal are an appropriate part of your support.",
    qualifies: sharedQualify("Major depressive disorder and persistent depressive disorder"),
    helps: [
      "A daily routine of feeding, walks and care",
      "A reason to get outside, especially with a dog",
      "Companionship during difficult periods",
      "A sense of responsibility and connection",
    ],
    asks: ["How depression affects sleep, energy and self-care", "How long symptoms have lasted", "What support you have now", "How the animal fits your daily routine"],
    documentation:
      "Your letter states a disability-related need for the animal. You do not need to share your diagnosis with your landlord or board.",
    faqs: [
      { q: "Can an ESA replace treatment for depression?", a: "No. An ESA can be part of your support, but it is not a treatment." },
      { q: "What if I am in crisis?", a: "Call or text 988 to reach the Suicide & Crisis Lifeline, or call 911 in an emergency." },
      { q: "Does seasonal depression qualify?", a: "It may. See our seasonal affective disorder guide." },
    ],
  }),
  condition({
    slug: "ptsd",
    name: "PTSD",
    priority: "High",
    sensitive: true,
    description:
      "Does PTSD qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may help with hypervigilance and sleep.",
    quickAnswer:
      "PTSD can qualify for an ESA letter in New York when symptoms such as hypervigilance, sleep problems or avoidance substantially limit daily life. A licensed professional evaluates your needs. If you need an animal trained to perform specific tasks, a psychiatric service dog may be a better fit.",
    qualifies: sharedQualify("Post-traumatic stress disorder"),
    helps: [
      "A sense of safety and companionship at home",
      "Support with sleep routines for some people",
      "Grounding through touch and routine",
      "Reduced isolation",
    ],
    asks: ["How symptoms affect sleep and daily functioning", "Situations that are hardest at home", "Current care and support", "Whether a trained service dog may also be appropriate"],
    documentation:
      "Your letter does not need to describe trauma or name PTSD. Keep sensitive details private; landlords only need reliable documentation of need.",
    faqs: [
      { q: "ESA or psychiatric service dog for PTSD?", a: "ESAs need no training and are protected mainly in housing. Psychiatric service dogs are trained for tasks and have public access rights." },
      { q: "Do I have to talk about my trauma?", a: "The provider may ask about symptoms and impact. You choose what details to share." },
      { q: "Are veterans eligible?", a: "Yes. Veterans with PTSD can be evaluated like anyone else." },
    ],
  }),
  condition({
    slug: "panic-disorder",
    name: "Panic Disorder",
    priority: "Medium",
    description:
      "Does Panic Disorder qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may help during and after panic episodes.",
    quickAnswer:
      "Panic disorder can qualify for an ESA letter in New York when panic attacks, or fear of them, substantially limit daily activities. A licensed professional evaluates how often episodes occur and how they affect you, and decides whether an emotional support animal is an appropriate source of support at home.",
    qualifies: sharedQualify("Panic disorder"),
    helps: ["A calming focus during and after panic episodes at home", "Comfort through physical contact", "Routine that supports a sense of stability"],
    asks: ["How often panic attacks occur", "How they affect your daily activities", "Current coping strategies and support", "How the animal helps during episodes"],
    documentation: "Your letter confirms a disability-related need without naming panic disorder.",
    faqs: [
      { q: "Can my ESA come with me on the subway?", a: "ESAs do not have public access rights; transit rules for pets apply." },
      { q: "Is a letter guaranteed?", a: "No. A licensed professional decides." },
      { q: "Does panic disorder differ from anxiety for ESA purposes?", a: "Both are evaluated by functional impact." },
    ],
  }),
  condition({
    slug: "social-anxiety",
    name: "Social Anxiety",
    priority: "Medium",
    description:
      "Does Social Anxiety qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may support life at home and out in crowds.",
    quickAnswer:
      "Social anxiety disorder can qualify for an ESA letter in New York when fear of social situations substantially limits work, relationships or daily tasks. A licensed professional evaluates your symptoms and whether an emotional support animal is an appropriate source of comfort and routine at home.",
    qualifies: sharedQualify("Social anxiety disorder"),
    helps: ["Comfort after stressful social situations", "Companionship that eases isolation", "Routine walks that offer low-pressure time outside"],
    asks: ["Which social situations are hardest", "How they affect work, school or errands", "Current support", "How the animal helps you"],
    documentation: "Landlords may verify your provider's license but should not ask about your condition.",
    faqs: [
      { q: "Will I have to talk on video?", a: "Consultations are by video or phone; ask about phone options if video is difficult." },
      { q: "Can social anxiety alone qualify?", a: "Yes, if it substantially limits a major life activity." },
      { q: "Do ESAs have public access?", a: "No. ESA protections apply mainly in housing." },
    ],
  }),
  condition({
    slug: "ocd",
    name: "OCD",
    priority: "Low",
    description:
      "Does OCD qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may sit alongside existing treatment.",
    quickAnswer:
      "Obsessive-compulsive disorder can qualify for an ESA letter in New York when obsessions or compulsions substantially limit daily life. A licensed professional evaluates your needs and whether an emotional support animal fits alongside your existing treatment.",
    qualifies: sharedQualify("Obsessive-compulsive disorder"),
    helps: ["Companionship that may reduce distress at home", "Routine and structure", "A focus outside intrusive thoughts for some people"],
    asks: ["How symptoms affect daily routines", "Your current treatment", "Whether pet care could create additional stress", "How the animal helps"],
    documentation: "Your letter will not name OCD. Provide only the letter and basic animal information.",
    faqs: [
      { q: "Can pet care make OCD harder?", a: "For some people it may. The provider will discuss this with you." },
      { q: "Does OCD qualify on its own?", a: "It can, if it substantially limits a major life activity." },
      { q: "Do I need to be in treatment?", a: "Treatment is not required to be evaluated." },
    ],
  }),
  condition({
    slug: "adhd",
    name: "ADHD",
    priority: "Medium",
    description:
      "Does ADHD qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may support routine and focus at home.",
    quickAnswer:
      "ADHD can qualify for an ESA letter in New York when it substantially limits activities like concentrating, organizing or managing emotions. A licensed professional evaluates your situation, often including related anxiety or mood symptoms, and decides whether an emotional support animal is appropriate.",
    qualifies: sharedQualify("Attention-deficit/hyperactivity disorder"),
    helps: ["Daily routines anchored by feeding and walks", "A calming presence that helps some people settle", "Support with emotional regulation at home"],
    asks: ["How ADHD affects daily organization and focus", "Whether anxiety or mood symptoms are also present", "Your capacity to care for an animal consistently", "How the animal helps"],
    documentation: "Your letter confirms a disability-related need; it will not mention ADHD.",
    faqs: [
      { q: "Does ADHD alone qualify?", a: "It can, depending on how much it limits daily life." },
      { q: "Can students with ADHD get an ESA in a dorm?", a: "Yes, through the school's accommodation process." },
      { q: "Will the provider prescribe medication?", a: "No. ESA evaluations do not include prescribing." },
    ],
  }),
  condition({
    slug: "bipolar-disorder",
    name: "Bipolar Disorder",
    priority: "Low",
    sensitive: true,
    description:
      "Does Bipolar Disorder qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may fit a stable daily routine.",
    quickAnswer:
      "Bipolar disorder can qualify for an ESA letter in New York when mood episodes substantially limit daily functioning. A licensed professional evaluates your needs and how an emotional support animal could fit a stable routine alongside your existing care.",
    qualifies: sharedQualify("Bipolar disorder"),
    helps: ["A consistent daily routine", "Companionship during difficult periods", "Structure that supports sleep and activity patterns for some people"],
    asks: ["How mood episodes affect daily life", "Your current care team", "Plans for the animal's care during difficult periods", "How the animal helps"],
    documentation: "Your letter keeps your diagnosis private. Share only what the landlord needs.",
    faqs: [
      { q: "Is an ESA a substitute for treatment?", a: "No. It may complement, not replace, ongoing care." },
      { q: "What if I need crisis help?", a: "Call or text 988, or call 911 in an emergency." },
      { q: "Can I qualify between episodes?", a: "The provider looks at the overall impact of the condition." },
    ],
  }),
  condition({
    slug: "autism-spectrum",
    name: "Autism Spectrum",
    priority: "Low",
    description:
      "Does Autism Spectrum qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may help with sensory and routine needs.",
    quickAnswer:
      "Autistic adults in New York may qualify for an ESA letter when related challenges, such as sensory overload, anxiety or difficulty with change, substantially limit daily life. A licensed professional evaluates your needs and whether an emotional support animal is an appropriate source of support at home.",
    qualifies: sharedQualify("Autism spectrum disorder"),
    helps: ["Predictable routine and companionship", "Calming sensory input for some people", "Support during transitions and changes at home"],
    asks: ["Which daily activities are most affected", "Sensory and routine needs", "Co-occurring anxiety or mood symptoms", "How the animal helps"],
    documentation: "Your letter supports a disability-related need without describing your diagnosis.",
    faqs: [
      { q: "Can a parent request an ESA for a child?", a: "Families can request accommodations; a professional evaluates the child's needs." },
      { q: "Would a trained service dog be better?", a: "If specific trained tasks are needed, a service dog may be more appropriate." },
      { q: "Is a letter guaranteed?", a: "No. A licensed professional decides." },
    ],
  }),
  condition({
    slug: "seasonal-affective-disorder",
    name: "Seasonal Affective Disorder",
    priority: "Low",
    description:
      "Does Seasonal Affective Disorder qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may help in long winters.",
    quickAnswer:
      "Seasonal affective disorder can qualify for an ESA letter in New York when seasonal depressive episodes substantially limit daily life. Long upstate winters and short city days can be hard. A licensed professional evaluates whether an emotional support animal is appropriate for you.",
    qualifies: sharedQualify("Seasonal affective disorder"),
    helps: ["Motivation to get outside during daylight", "Routine during darker months", "Companionship in long winters"],
    asks: ["When symptoms start and how long they last", "How they affect daily life", "Current support", "How the animal helps"],
    documentation: "Your letter is valid year-round; it does not need to mention seasonal symptoms.",
    faqs: [
      { q: "Does a seasonal condition qualify year-round?", a: "Accommodations are not seasonal; the professional evaluates overall need." },
      { q: "Is SAD different from depression?", a: "It is a pattern of depression tied to seasons and is evaluated by impact." },
      { q: "Does upstate weather matter?", a: "The provider looks at your symptoms, wherever you live in New York." },
    ],
  }),
  condition({
    slug: "agoraphobia",
    name: "Agoraphobia",
    priority: "Low",
    description:
      "Does Agoraphobia qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may support time at home and short outings.",
    quickAnswer:
      "Agoraphobia can qualify for an ESA letter in New York when fear of crowded or open places substantially limits daily life. A licensed professional, often by telehealth, evaluates your needs and whether an emotional support animal is an appropriate source of comfort at home.",
    qualifies: sharedQualify("Agoraphobia"),
    helps: ["Comfort and companionship at home", "Support with gradual short outings for some people", "Routine and structure"],
    asks: ["Which places or situations are hardest", "How often you leave home", "Current support", "How the animal helps"],
    documentation: "Telehealth evaluations can be completed from home. Your letter will not name agoraphobia.",
    faqs: [
      { q: "Can I be evaluated without leaving home?", a: "Yes. Evaluations are by telehealth." },
      { q: "Can my ESA come with me in public?", a: "ESAs do not have public access rights under the ADA." },
      { q: "Is a letter guaranteed?", a: "No. A licensed professional decides." },
    ],
  }),
  condition({
    slug: "eating-disorders",
    name: "Eating Disorders",
    priority: "Low",
    sensitive: true,
    description:
      "Does Eating Disorders qualify you for an ESA letter in New York? See how a provider evaluates it and how an ESA may support recovery.",
    quickAnswer:
      "Eating disorders can qualify for an ESA letter in New York when they substantially limit daily life. A licensed professional evaluates your needs, usually alongside your existing treatment team, and decides whether an emotional support animal is an appropriate part of your support during recovery.",
    qualifies: sharedQualify("Eating disorders such as anorexia, bulimia and binge eating disorder"),
    helps: ["Companionship that can ease isolation", "Daily routine and structure", "Comfort during difficult moments at home"],
    asks: ["How the condition affects daily life", "Your current treatment team", "Your capacity to care for an animal", "How the animal helps"],
    documentation: "Your letter keeps clinical details private.",
    faqs: [
      { q: "Should I talk with my treatment team?", a: "Yes. Coordinating with your existing care is recommended." },
      { q: "Is an ESA part of treatment?", a: "It can be a support, not a treatment." },
      { q: "Where can I find support?", a: "The National Alliance for Eating Disorders and your care team can help. In crisis, call or text 988." },
    ],
  }),
];
