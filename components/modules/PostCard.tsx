import Link from "next/link";
import { BookOpen } from "lucide-react";
import type { BlogPost } from "@/lib/content/types";
import { getCategory } from "@/lib/content/registry";
import { formatDate } from "@/lib/site";

export function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const category = getCategory(post.category);
  const Heading = featured ? "h2" : "h3";
  return (
    <Link href={post.path} className={featured ? "post-card post-card--featured" : "post-card"}>
      <div className="post-card__media" aria-hidden="true">
        <BookOpen />
      </div>
      <div className="post-card__body">
        {category && <span className="post-card__cat text-body-small-semibold">{category.name}</span>}
        <Heading className={featured ? "post-card__title text-h2" : "post-card__title text-h3"}>{post.h1}</Heading>
        <p className="post-card__excerpt">{post.excerpt}</p>
        <time className="post-card__date text-body-small" dateTime={post.published}>
          {formatDate(post.published)}
        </time>
      </div>
    </Link>
  );
}
