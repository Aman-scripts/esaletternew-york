import Link from "next/link";
import { footerColumns, footerLegal, site } from "@/lib/site";
import { Brand } from "./Brand";
import { ButtonLink } from "../common/ButtonLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p className="footer-brand__text">
              Online ESA evaluations with licensed New York mental health professionals, plus
              plain-language guides to your housing rights.
            </p>
            <ButtonLink variant="white" size="sm" />
          </div>

          <div className="footer-cols">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="footer-col__title text-h4">{col.title}</p>
                <ul className="footer-col__list">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className="footer-disclaimer">
          <strong>Medical &amp; legal disclaimer:</strong> {site.disclaimer}{" "}
          <Link href="/disclaimer/">Read the full disclaimer</Link>. If you are in crisis, call or
          text 988.
        </p>

        <div className="footer-bottom">
          <p>
            &copy; {new Date(`${site.lastReviewed}T00:00:00Z`).getUTCFullYear()} {site.name}. All
            rights reserved.
          </p>
          <ul className="footer-legal">
            {footerLegal.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
