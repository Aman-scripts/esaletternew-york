"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Entry = { path: string; label: string; description: string };

/** Client-side page search used on the 404 page. Filters the page registry; no server search URL. */
export function SiteSearch({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return entries
      .filter((e) => `${e.label} ${e.description}`.toLowerCase().includes(q))
      .slice(0, 8);
  }, [entries, query]);

  return (
    <div className="search-box" role="search">
      <label className="field__label text-body-small-semibold" htmlFor="site-search">
        Search our guides
      </label>
      <input
        id="site-search"
        className="field__input"
        type="search"
        placeholder="e.g. co-op board, anxiety, Brooklyn"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <ul className="search-box__results">
          {results.map((r) => (
            <li key={r.path}>
              <Link href={r.path}>{r.label}</Link>
            </li>
          ))}
        </ul>
      )}
      {query.trim().length >= 2 && results.length === 0 && (
        <p className="field__hint text-body-small">No matching pages. Try a different word.</p>
      )}
    </div>
  );
}
