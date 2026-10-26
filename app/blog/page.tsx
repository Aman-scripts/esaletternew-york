import { blogHub } from "@/lib/content/registry";
import { pageMetadata } from "@/lib/seo";
import { BlogHubTemplate } from "@/components/templates/BlogHubTemplate";

export const metadata = pageMetadata(blogHub);

export default function BlogPage() {
  return <BlogHubTemplate />;
}
