import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Building2, Check, HeartHandshake, Lock, Scale, Stethoscope, Wallet } from "lucide-react";
import { homePage, cityPages, conditionPages } from "@/lib/content/registry";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/common/JsonLd";
import { SectionHead } from "@/components/common/SectionHead";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Hero } from "@/components/modules/Hero";
import { TrustBar } from "@/components/modules/TrustBar";
import { StepProcess } from "@/components/modules/StepProcess";
import { ComparisonTable } from "@/components/modules/ComparisonTable";
import { PricingBlock } from "@/components/modules/PricingBlock";
import { CtaBand } from "@/components/modules/CtaBand";
import { FaqAccordion } from "@/components/modules/FaqAccordion";
import { LatestPosts } from "@/components/modules/LatestPosts";

export const metadata = pageMetadata(homePage);

const homeFaqs = [
  { q: "What is an ESA letter?", a: "A letter from a licensed mental health professional confirming that you have a disability-related need for an emotional support animal. You use it to request a reasonable accommodation from a housing provider." },
  { q: "Who can write an ESA letter in New York?", a: "A licensed mental health professional, such as a psychologist, LCSW, LMHC or psychiatrist, who is licensed to evaluate you in New York." },
  { q: "Can my New York landlord refuse my ESA?", a: "Only for limited reasons, such as a direct threat or unreliable documentation. No-pet policies, breed limits and pet fees generally do not apply to approved ESAs." },
  { q: "Do co-op and condo boards have to accept ESAs?", a: "Boards are generally covered by federal, state and, in NYC, city fair housing laws, so they must consider accommodation requests individually." },
  { q: "How long does it take to get an ESA letter?", a: "The assessment takes minutes, consultations are usually scheduled within days, and approved letters are often delivered within 24 hours of the consultation." },
  { q: "Is there an ESA registry or certification?", a: "No. There is no official ESA registry. Registrations and ID cards do not create housing rights." },
  { q: "What if I don't qualify?", a: "A licensed professional makes an independent decision. If you don't qualify, our refund policy applies." },
];

const featuredConditions = ["anxiety", "depression", "ptsd", "panic-disorder", "adhd", "social-anxiety", "ocd", "autism-spectrum"];

const whyNeed = [
  { icon: Building2, title: "Housing protection", text: "Request an exception to no-pet rules in rentals, co-ops and condos across New York." },
  { icon: Wallet, title: "No pet fees", text: "Approved ESAs are generally exempt from pet rent and pet deposits." },
  { icon: HeartHandshake, title: "Mental health support", text: "Keep the companion that helps you manage daily life at home." },
];

const whyUs = [
  { icon: BadgeCheck, title: "Licensed in New York", text: "Every evaluation is completed by a professional with a verifiable New York license." },
  { icon: Stethoscope, title: "A real consultation", text: "No instant letters. A licensed professional reviews your needs by video or phone." },
  { icon: Lock, title: "Confidential", text: "Encrypted intake. Your diagnosis never appears on your letter." },
  { icon: Scale, title: "Housing law support", text: "Plain-language guides to federal, NYS and NYC law, plus landlord verification help." },
];

export default function HomePage() {
  const conditions = conditionPages.filter((c) => featuredConditions.some((slug) => c.path.endsWith(`/${slug}/`)));

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }])} />

      {/* 1. Hero (showcase variant, Meetmind cloud showcase style). CTAs open the evaluation survey (site.applyHref) */}
      <Hero
        variant="showcase"
        eyebrow="Licensed New York providers"
        title={homePage.h1}
        titleAccent="New York"
        lead="Get a legitimate ESA letter for New York housing from a licensed mental health professional. Private online evaluation, letters often within 24 hours of your consultation."
        checks={[
          "Evaluated by a New York-licensed mental health professional",
          "Supports requests under federal, NYS and NYC housing law",
          "Can support requests for rentals, co-ops, condos and NYCHA",
        ]}
        guarantee={
          <>
            <strong>Money-back guarantee:</strong> full refund if you don&rsquo;t qualify.
          </>
        }
      />
      <TrustBar />

      {/* 3. 3-step process */}
      <section className="section" id="howitworks">
        <div className="container">
          <SectionHead eyebrow="How it works" title="Your ESA letter in three steps" center />
          <StepProcess />
          <div className="center-actions">
            <ButtonLink href="/how-it-works/" variant="outline">
              See the full process
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 4. Who qualifies */}
      <section className="section section--tint" id="whoqualifies">
        <div className="container">
          <SectionHead
            eyebrow="Do I qualify?"
            title="Who Qualifies for an ESA Letter in New York?"
            lead="Qualifying depends on how a mental or emotional health condition affects your daily life. A licensed professional makes the decision. Common conditions include:"
          />
          <ul className="grid grid--4" role="list">
            {conditions.map((c) => (
              <li key={c.path}>
                <Link href={c.path} className="tile">
                  <h3 className="tile__title text-h3">{c.label}</h3>
                  <ArrowRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="center-actions">
            <ButtonLink href="/conditions/" variant="outline">
              See all qualifying conditions
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 5. Why you need an ESA letter */}
      <section className="section">
        <div className="container">
          <SectionHead title="Why You Need an ESA Letter" center />
          <div className="grid grid--3">
            {whyNeed.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card">
                <span className="card__icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="card__title text-h3">{title}</h3>
                <p className="card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-7. What is an ESA + mini comparison */}
      <section className="section section--tint">
        <div className="container split">
          <div>
            <SectionHead
              eyebrow="The basics"
              title="What Is an Emotional Support Animal?"
              lead="An emotional support animal provides comfort and support to a person with a mental or emotional health condition. Unlike service animals, ESAs need no task training, and their protections apply mainly in housing."
            />
            <Link href="/what-is-an-esa-letter/" className="text-link">
              What is an ESA letter? <ArrowRight className="btn__icon" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <ComparisonTable
              caption="ESA vs service animal at a glance"
              head={["", "ESA", "Service animal"]}
              rows={[
                ["Task training", "Not required", "Required"],
                ["Housing rights", "Yes", "Yes"],
                ["Public access", "No", "Yes (ADA)"],
                ["Documentation", "ESA letter", "Usually none"],
              ]}
            />
            <Link href="/rights/esa-vs-service-animal/" className="text-link">
              Full comparison <ArrowRight className="btn__icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. ESA laws in New York */}
      <section className="section" id="esalaws">
        <div className="container">
          <SectionHead
            eyebrow="Your rights"
            title="ESA Laws in New York"
            lead="New Yorkers can be protected by three layers of housing law at once."
            center
          />
          <div className="grid grid--3">
            <div className="law-card">
              <span className="law-card__tag text-body-normal-semibold">Federal</span>
              <h3 className="law-card__title text-h3">Fair Housing Act</h3>
              <p className="law-card__text">Requires most housing providers nationwide to make reasonable accommodations for people with disabilities.</p>
            </div>
            <div className="law-card law-card--state">
              <span className="law-card__tag text-body-normal-semibold">New York State</span>
              <h3 className="law-card__title text-h3">NYS Human Rights Law</h3>
              <p className="law-card__text">Executive Law 296 protects renters statewide, enforced by the NYS Division of Human Rights.</p>
            </div>
            <div className="law-card law-card--city">
              <span className="law-card__tag text-body-normal-semibold">New York City</span>
              <h3 className="law-card__title text-h3">NYC Human Rights Law</h3>
              <p className="law-card__text">Admin Code 8-107 adds city protections, including a cooperative dialogue before any denial.</p>
            </div>
          </div>
          <div className="center-actions">
            <ButtonLink href="/rights/" variant="outline">
              Read the housing rights guide
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 9. Why choose us */}
      <section className="section section--tint">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Why choose us" title="A legitimate evaluation, done right" />
            <div className="grid grid--2" style={{ gap: "20px" }}>
              {whyUs.map(({ icon: Icon, title, text }) => (
                <div key={title} className="feature">
                  <span className="feature__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="feature__title text-h3">{title}</h3>
                    <p className="feature__text">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "24px" }}>
              <Link href="/about-our-therapists/" className="text-link">
                About our providers <ArrowRight className="btn__icon" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="section__visual-wrap">
            <Image
              src="/images/section_telehealth_clinician.webp"
              alt="Licensed New York mental health clinician conducting a private telehealth evaluation"
              width={540}
              height={405}
              quality={95}
              sizes="(max-width: 768px) 100vw, 540px"
              loading="lazy"
              className="section__visual-img"
            />
          </div>
        </div>
      </section>

      {/* 10. Pricing snapshot */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Pricing" title="Simple, transparent pricing" center />
          <PricingBlock />
          <div className="center-actions">
            <Link href="/cost/" className="text-link">
              What&rsquo;s included and why cheap letters fail <ArrowRight className="btn__icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <CtaBand />
      </div>

      {/* 11. Cities served */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Locations"
            title="Cities Served Across New York"
            lead="From the five boroughs to Buffalo, one letter from a New York-licensed professional supports your request statewide."
          />
          <ul className="grid grid--4" role="list">
            {cityPages.map((c) => (
              <li key={c.path}>
                <Link href={c.path} className="tile">
                  <h3 className="tile__title text-h3">{c.label}</h3>
                  <ArrowRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="center-actions">
            <ButtonLink href="/locations/" variant="outline">
              Browse the location guide
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 12. Reviews strip */}
      <section className="section section--tint" id="reviews">
        <div className="container split">
          <div>
            <SectionHead
              eyebrow="Reviews"
              title="Real feedback from New Yorkers"
              lead="We only publish genuine reviews from customers who completed an evaluation, and never invent ratings or statistics."
            />
            <ul className="hero__checks" style={{ margin: "20px 0 28px" }}>
              {["Every review comes from a completed evaluation", "Positive and negative feedback published", "No health details shared publicly"].map((t) => (
                <li key={t} className="text-body-large">
                  <Check className="check-icon" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink href="/reviews/" variant="outline">
              Read reviews
            </ButtonLink>
          </div>
          <div className="section__visual-wrap">
            <Image
              src="/images/section_brooklyn_housing.webp"
              alt="Happy pet owner on a classic New York apartment stoop with their emotional support dog"
              width={540}
              height={405}
              quality={95}
              sizes="(max-width: 768px) 100vw, 540px"
              loading="lazy"
              className="section__visual-img"
            />
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="section" id="faq">
        <div className="container container--narrow">
          <SectionHead title="Frequently asked questions" center />
          <FaqAccordion faqs={homeFaqs} />
          <div className="center-actions">
            <ButtonLink href="/faq/" variant="outline">
              All FAQs
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 14. Latest from the blog */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="From the blog" title="Latest guides for New York ESA owners" />
          <LatestPosts count={4} />
          <div className="center-actions">
            <ButtonLink href="/blog/" variant="outline">
              Visit the blog
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 15. Final CTA */}
      <CtaBand
        variant="final"
        title="Ready to Get Your ESA Letter in New York Today?"
        text={`Licensed New York providers, a private evaluation, and a full refund if you don't qualify. ${site.turnaround}.`}
      />
    </>
  );
}
