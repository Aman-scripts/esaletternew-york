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
        {category && <span className="post-card__cat">{category.name}</span>}
        <Heading className="post-card__title">{post.h1}</Heading>
        <p className="post-card__excerpt">{post.excerpt}</p>
        <time className="post-card__date" dateTime={post.published}>
          {formatDate(post.published)}
        </time>
      </div>
    </Link>
  );
}
