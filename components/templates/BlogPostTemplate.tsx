import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, RefreshCw } from "lucide-react";
import type { BlogPost } from "@/lib/content/types";
import { crumbsFor, descriptionFor, getCategory, labelFor, postsInCategory } from "@/lib/content/registry";
import { schemasFor } from "@/lib/seo";
import { countWords } from "@/lib/slug";
import { formatDate } from "@/lib/site";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { JsonLd } from "../common/JsonLd";
import { TableOfContents } from "../modules/TableOfContents";
import { ContentSections, sectionWords } from "../modules/ContentSections";
import { CtaBand } from "../modules/CtaBand";
import { PostCard } from "../modules/PostCard";
import { ArticleAside } from "./parts";

/**
 * T9 Blog post: Title H1, publish + updated date, author (M11) > Featured image > TOC (>1,000 words)
 * > Body > Inline CTA > Contextual silo link [required] > Related posts (1-2, same category) > Closing CTA [required]
 */
export function BlogPostTemplate({ post }: { post: BlogPost }) {
  const category = getCategory(post.category);
  const related = postsInCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);
  const words = countWords(sectionWords(post.sections));

  return (
    <>
      <JsonLd data={schemasFor(post, post.sections)} />
      <Breadcrumbs items={crumbsFor(post)} />

      <div className="container">
        <header className="post-header container--narrow">
          {category && (
            <Link href={category.path} className="eyebrow text-body-small-semibold">
              {category.name}
            </Link>
          )}
          <h1 className="post-header__title text-h1">{post.h1}</h1>
          <div className="post-meta text-body-small">
            <span className="post-meta__item">
              <Calendar aria-hidden="true" /> Published <time dateTime={post.published}>{formatDate(post.published)}</time>
            </span>
            <span className="post-meta__item">
              <RefreshCw aria-hidden="true" /> Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
            </span>
          </div>
        </header>
      </div>

      <div className="section section--tight">
        <div className="container article-layout">
          <article>
            <div className="post-hero-media" role="img" aria-label={`Illustration for ${post.h1}`}>
              <BookOpen aria-hidden="true" />
            </div>
            {words > 1000 && <TableOfContents headings={post.sections.map((s) => s.heading)} inline />}
            <ContentSections sections={post.sections} />
            <CtaBand />
            <Link href={post.siloLink} className="silo-link">
              <span>
                <span className="silo-link__label text-body-small-semibold">Read the full guide</span>
                <span className="silo-link__title text-h4">{labelFor(post.siloLink)}</span>
                {descriptionFor(post.siloLink) && <span className="card__text"> {descriptionFor(post.siloLink)}</span>}
              </span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </article>
          <ArticleAside />
        </div>
      </div>

      {related.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <h2 className="section-head__title text-h2">More in {category?.name}</h2>
            <ul className="grid grid--2" role="list">
              {related.map((p) => (
                <li key={p.path}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand variant="final" title="Ready to get your ESA letter?" />
    </>
  );
}
