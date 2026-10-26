import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogCategory } from "@/lib/content/types";
import { blogHub, labelFor, postsInCategory, POSTS_PER_PAGE } from "@/lib/content/registry";
import { collectionSchema } from "@/lib/seo";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { JsonLd } from "../common/JsonLd";
import { PostCard } from "../modules/PostCard";
import { Pagination } from "../modules/Pagination";
import { CtaBand } from "../modules/CtaBand";

/**
 * T8 Category archive: H1 + 100-150 word intro > Link to matching silo pillar [required]
 * > Post grid (12 per page) > CTA band
 */
export function CategoryTemplate({ category, pageNumber = 1 }: { category: BlogCategory; pageNumber?: number }) {
  const all = postsInCategory(category.slug);
  const total = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  const posts = all.slice((pageNumber - 1) * POSTS_PER_PAGE, pageNumber * POSTS_PER_PAGE);

  return (
    <>
      <JsonLd data={collectionSchema(category.name, category.path)} />
      <section className="hero hero--compact">
        <Breadcrumbs
          items={[
            { label: blogHub.label, href: blogHub.path },
            { label: category.name, href: category.path },
          ]}
        />
        <div className="container container--narrow">
          <h1 className="hero__title">{category.name}</h1>
          <p className="hero__lead">{category.intro}</p>
          <p className="pillar-link">
            Start with our guide:
            {category.pillars.map((p, i) => (
              <Link key={p} href={p} className="text-link">
                {i > 0 && "+ "}
                {labelFor(p)} <ArrowRight className="btn__icon" aria-hidden="true" />
              </Link>
            ))}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {posts.length ? (
            <ul className="grid grid--3" role="list">
              {posts.map((post) => (
                <li key={post.path}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">
              <p className="empty-state__title">Articles coming soon</p>
              <p>We&rsquo;re writing new guides for this topic. In the meantime, explore our main guide above.</p>
            </div>
          )}
          <Pagination basePath={category.path} current={pageNumber} total={total} />
        </div>
      </section>

      <CtaBand variant="final" />
    </>
  );
}
