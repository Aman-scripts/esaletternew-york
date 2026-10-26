import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/content/registry";
import { pageMetadata } from "@/lib/seo";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";

/** Flat post URLs: /blog/post-slug/ (spec 10.1) */
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? pageMetadata(post, "article") : {};
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return <BlogPostTemplate post={post} />;
}
