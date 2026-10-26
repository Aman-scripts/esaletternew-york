type Props = { data: Record<string, unknown> | (Record<string, unknown> | null)[] | null };

/** Renders JSON-LD structured data, escaping "<" per the Next.js JSON-LD guide */
export function JsonLd({ data }: Props) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (!items.length) return null;
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
