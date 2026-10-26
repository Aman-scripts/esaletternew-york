import type { Metadata, Viewport } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StickyCta } from "@/components/layout/StickyCta";
import { JsonLd } from "@/components/common/JsonLd";

/**
 * Fonts: Merriweather for headings (--font-serif), Inter for body and UI text (--font-sans).
 * Self-hosted so they load even where Google Fonts is blocked. See app/globals.css.
 */
const merriweather = localFont({
  src: [
    { path: "./fonts/merriweather-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/merriweather-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

/**
 * Every page is static content. 'navigation' keeps it that way and makes unknown dynamic
 * params render blocking, so notFound() returns a real HTTP 404 instead of a streamed 200.
 */
export const ensureStatic = "navigation";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
};

/** No maximum-scale / user-scalable=0: pinch-zoom must stay enabled (WCAG 2.1 AA, spec audit) */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f75bc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${merriweather.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <p className="topbar text-body-small">
          Policy update: HUD&rsquo;s 2026 ESA guidance and New York renters.{" "}
          <Link href="/rights/hud-2026-esa-memo-new-york/">What it means</Link>
        </p>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <StickyCta />
      </body>
    </html>
  );
}
