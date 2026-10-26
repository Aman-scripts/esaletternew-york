import { Mail, Clock, ShieldCheck } from "lucide-react";
import type { ArticlePage } from "@/lib/content/types";
import { crumbsFor } from "@/lib/content/registry";
import { faqGroups } from "@/lib/content/support";
import { faqSchema, schemasFor } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { JsonLd } from "../common/JsonLd";
import { SectionHead } from "../common/SectionHead";
import { Hero } from "../modules/Hero";
import { StepProcess } from "../modules/StepProcess";
import { TrustBar } from "../modules/TrustBar";
import { CtaBand } from "../modules/CtaBand";
import { FaqAccordion } from "../modules/FaqAccordion";
import { RelatedPages } from "../modules/RelatedPages";
import { ContentSections } from "../modules/ContentSections";
import { ContactForm } from "../modules/ContactForm";
import { FaqSection } from "./parts";

const howItWorksSteps = [
  { title: "Schedule", text: "Complete a short online assessment and book a time that suits you." },
  { title: "Consult", text: "Meet a New York-licensed mental health professional by secure video or phone." },
  { title: "Receive", text: "If you qualify, receive your signed ESA letter as a PDF, often within 24 hours." },
];

/** T10 Support pages: flexible layouts that link to the evaluation survey (site.applyHref) */
export function SupportTemplate({ page }: { page: ArticlePage }) {
  const crumbs = <Breadcrumbs items={crumbsFor(page)} />;
  const isContact = page.path === "/contact/";
  const isReviews = page.path === "/reviews/";

  return (
    <>
      <JsonLd data={schemasFor(page, page.path === "/how-it-works/" ? [{ heading: "", steps: howItWorksSteps }] : [])} />
      <Hero title={page.h1} lead={page.intro} before={crumbs} hideCta={isContact} />

      {page.path === "/how-it-works/" && <HowItWorks page={page} />}
      {page.path === "/faq/" && <FaqPage page={page} />}
      {page.path === "/about-our-therapists/" && <About page={page} />}
      {isReviews && <Reviews />}
      {page.path === "/for-landlords/" && <ForLandlords page={page} />}
      {isContact && <Contact page={page} />}
    </>
  );
}

function HowItWorks({ page }: { page: ArticlePage }) {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHead title="Three steps to your ESA letter" center />
          <StepProcess steps={howItWorksSteps} />
        </div>
      </section>
      <section className="section section--tint">
        <div className="container container--narrow">
          <ContentSections sections={page.sections} />
        </div>
      </section>
      <TrustBar />
      <section className="section">
        <div className="container container--narrow">
          <CtaBand />
          <FaqSection faqs={page.faqs} />
          <RelatedPages paths={page.related} />
        </div>
      </section>
      <CtaBand variant="final" />
    </>
  );
}

function FaqPage({ page }: { page: ArticlePage }) {
  const all = faqGroups.flatMap((g) => g.faqs);
  return (
    <>
      <JsonLd data={faqSchema(all)} />
      <section className="section">
        <div className="container container--narrow">
          {faqGroups.map((group) => (
            <div key={group.title} className="faq-group">
              <h2 className="faq-group__title">{group.title}</h2>
              <FaqAccordion faqs={group.faqs} schema={false} />
            </div>
          ))}
          <CtaBand />
          <RelatedPages paths={page.related} />
        </div>
      </section>
      <CtaBand variant="final" />
    </>
  );
}

function About({ page }: { page: ArticlePage }) {
  return (
    <>
      <section className="section">
        <div className="container container--narrow">
          <SectionHead title="Our providers" />
          {/* Provider profiles: add only real providers with verifiable NY license numbers (spec #74). */}
          <div className="empty-state">
            <h3 className="empty-state__title text-h3">Provider profiles are being verified</h3>
            <p>
              Each profile will show the provider&rsquo;s name, credentials, New York license number and
              a link to verify it with the NYS Office of the Professions.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container container--narrow">
          <ContentSections sections={page.sections} />
          <CtaBand />
        </div>
      </section>
    </>
  );
}

function Reviews() {
  return (
    <>
      <TrustBar />
      <section className="section">
        <div className="container container--narrow">
          {/* Review grid: real, verifiable reviews only. Add Review/AggregateRating schema only once real reviews are shown. */}
          <div className="empty-state">
            <p className="empty-state__title text-h3">Verified reviews coming soon</p>
            <p>We only publish genuine reviews from customers who completed an evaluation.</p>
          </div>
          <div className="prose">
            <h2>How we collect and display reviews</h2>
            <p>
              Reviews are invited after a completed evaluation. We publish positive and negative
              feedback, never edit a review&rsquo;s meaning, and never pay for or fabricate reviews. We
              do not publish health details shared in reviews.
            </p>
          </div>
          <CtaBand />
        </div>
      </section>
    </>
  );
}

function ForLandlords({ page }: { page: ArticlePage }) {
  return (
    <section className="section">
      <div className="container container--narrow">
        <ContentSections sections={page.sections} />
        <FaqSection faqs={page.faqs} heading="Landlord FAQ" />
        <RelatedPages paths={page.related} />
      </div>
    </section>
  );
}

function Contact({ page }: { page: ArticlePage }) {
  return (
    <>
      <section className="section">
        <div className="container split">
          <div className="apply__card">
            <ContactForm />
          </div>
          <div className="aside-stack">
            <div className="feature">
              <span className="feature__icon">
                <Mail aria-hidden="true" />
              </span>
              <div>
                <p className="feature__title text-h3">Email</p>
                <p className="feature__text">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="feature__icon">
                <Clock aria-hidden="true" />
              </span>
              <div>
                <p className="feature__title text-h3">Support hours</p>
                <p className="feature__text">{site.supportHours}</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature__icon">
                <ShieldCheck aria-hidden="true" />
              </span>
              <div>
                <p className="feature__title text-h3">Your privacy</p>
                <p className="feature__text">
                  Please don&rsquo;t send health information by email or this form. Share it only in
                  your secure evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container container--narrow">
          <FaqSection faqs={page.faqs} />
        </div>
      </section>
    </>
  );
}
