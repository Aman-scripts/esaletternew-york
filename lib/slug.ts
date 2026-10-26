/** Heading text -> stable anchor id for the table of contents */
export function anchorId(text: string) {
  return text
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Rough word count used for the TOC threshold (spec T2: >1,200 words, T9: >1,000) */
export function countWords(chunks: (string | undefined)[]) {
  return chunks
    .filter(Boolean)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}
