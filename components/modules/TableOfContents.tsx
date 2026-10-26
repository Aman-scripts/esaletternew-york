import { anchorId } from "@/lib/slug";

/** Auto table of contents built from H2 headings */
export function TableOfContents({ headings, inline = false }: { headings: string[]; inline?: boolean }) {
  if (headings.length < 2) return null;
  return (
    <nav className={inline ? "toc toc--inline" : "toc"} aria-label="Table of contents">
      <p className="toc__title">On this page</p>
      <ol className="toc__list">
        {headings.map((h) => (
          <li key={h}>
            <a href={`#${anchorId(h)}`}>{h}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
