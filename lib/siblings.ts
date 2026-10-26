/**
 * Spec 9: spokes may link to 2-3 sibling spokes within the same hub.
 * Picks the next spokes after the current one (wrapping), excluding paths already in related links.
 */
export function pickSiblings(all: { path: string }[], currentPath: string, exclude: string[] = [], count = 3) {
  const index = all.findIndex((p) => p.path === currentPath);
  const ordered = [...all.slice(index + 1), ...all.slice(0, Math.max(index, 0))];
  return ordered
    .map((p) => p.path)
    .filter((p) => p !== currentPath && !exclude.includes(p))
    .slice(0, count);
}
