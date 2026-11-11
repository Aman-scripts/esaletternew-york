/** Which character carries the letter across the site. Switch `kind` to "cat" to bring Bodega back. */
const characters = {
  dog: { kind: "dog", name: "Hudson", he: "he", He: "He", his: "his" },
  cat: { kind: "cat", name: "Bodega", he: "she", He: "She", his: "her" },
} as const;

export const mascot: (typeof characters)[keyof typeof characters] = characters.dog;
