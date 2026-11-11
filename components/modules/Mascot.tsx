import { mascot } from "@/lib/mascot";
import { InkCat, InkCatFace } from "./InkCat";
import { InkDog, InkDogFace, type DogPose } from "./InkDog";

export type MascotPose = DogPose;

const catPose = { sit: "sit", walk: "walk", carry: "carry", stand: "walk", hold: "carry", home: "home" } as const;

/** The site's letter carrier, drawn as whichever animal `lib/mascot.ts` selects. */
export function Mascot({ pose = "sit" }: { pose?: MascotPose }) {
  return mascot.kind === "dog" ? <InkDog pose={pose} /> : <InkCat pose={catPose[pose]} />;
}

export function MascotFace({ className }: { className?: string }) {
  return mascot.kind === "dog" ? <InkDogFace className={className} /> : <InkCatFace className={className} />;
}
