"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav, site } from "@/lib/site";
import { Brand } from "./Brand";
import { ButtonLink } from "../common/ButtonLink";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu when any link inside it is followed
  function handleMobileClick(event: React.MouseEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("a")) setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand priority />

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {primaryNav.map((item) => (
              <li key={item.href} className="nav__item">
                <Link
                  href={item.href}
                  className="nav__link"
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                  {item.children && <ChevronDown className="nav__chevron" aria-hidden="true" />}
                </Link>
                {item.children && (
                  <ul className="nav__dropdown">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                    <li>
                      <Link href={item.href} className="nav__dropdown-all">
                        View all
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ButtonLink size="sm" arrow={false} />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile" hidden={!open} onClick={handleMobileClick}>
        <ul className="mobile-nav__list">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="mobile-nav__link">
                {item.label}
              </Link>
              {item.children && (
                <ul className="mobile-nav__sub">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <ButtonLink href={site.applyHref} block />
      </nav>
    </header>
  );
}
