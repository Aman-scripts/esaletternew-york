import Link from "next/link";
import { blogCategories, blogHub, blogPageCount, crumbsFor, POSTS_PER_PAGE, sortedPosts } from "@/lib/content/registry";
import { collectionSchema } from "@/lib/seo";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { JsonLd } from "../common/JsonLd";
import { SectionHead } from "../common/SectionHead";
import { PostCard } from "../modules/PostCard";
import { Pagination } from "../modules/Pagination";
import { CtaBand } from "../modules/CtaBand";

/**
 * T7 Blog hub: H1 + intro > Featured/latest post > Category navigation (6)
 * > Recent posts grid, paginated (12 per page) > CTA band
 */
export function BlogHubTemplate({ pageNumber = 1 }: { pageNumber?: number }) {
  const total = blogPageCount();
  const start = (pageNumber - 1) * POSTS_PER_PAGE;
  const posts = sortedPosts.slice(start, start + POSTS_PER_PAGE);
  const [featured, ...rest] = posts;
  const showFeatured = pageNumber === 1 && featured;
  const gridPosts = showFeatured ? rest : posts;

  return (
    <>
      <JsonLd data={collectionSchema(blogHub.h1, blogHub.path)} />
      <section className="hero hero--compact hero--center">
        <Breadcrumbs items={crumbsFor(blogHub)} />
        <div className="container">
          <h1 className="hero__title text-h1">
            {blogHub.h1}
            {pageNumber > 1 && ` (page ${pageNumber})`}
          </h1>
          <p className="hero__lead text-body-large">{blogHub.intro}</p>
          <nav aria-label="Blog categories">
            <ul className="chip-list">
              {blogCategories.map((c) => (
                <li key={c.slug}>
                  <Link href={c.path} className="chip text-body-small-semibold">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {showFeatured && (
        <section className="section section--tight">
          <div className="container">
            <PostCard post={featured} featured />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHead title="Recent articles" />
          <ul className="grid grid--3" role="list">
            {gridPosts.map((post) => (
              <li key={post.path}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
          <Pagination basePath="/blog/" current={pageNumber} total={total} />
        </div>
      </section>

      <CtaBand variant="final" title="Get your ESA letter" />
    </>
  );
}
