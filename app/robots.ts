import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Spec 7.2 production robots.txt (WordPress-only /wp-admin/ rules dropped; /api/ added) */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/?s=", "/search/", "/*?utm_", "/*?fbclid="],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
