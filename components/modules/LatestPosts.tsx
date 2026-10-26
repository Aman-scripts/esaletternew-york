import { sortedPosts } from "@/lib/content/registry";
import { PostCard } from "./PostCard";

type Props = {
  /** Category slugs mapped to this pillar; omit for latest across all categories */
  categories?: string[];
  count?: number;
};

/** M7 Latest from the Blog: auto-pulls newest posts from the mapped categories */
export function LatestPosts({ categories, count = 3 }: Props) {
  const posts = sortedPosts
    .filter((p) => !categories || categories.includes(p.category))
    .slice(0, count);

  if (!posts.length) {
    return <p className="empty-state">New articles for this topic are coming soon.</p>;
  }

  return (
    <ul className={`grid grid--${count >= 4 ? 4 : 3}`} role="list">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
