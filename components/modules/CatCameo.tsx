import { mascot } from "@/lib/mascot";
import { site } from "@/lib/site";
import { Mascot } from "./Mascot";
import "./cat-scene.css";

/** The mascot strolls in from the side and settles beside the letter; hovering starts a short chat. */
export function CatCameo() {
  return (
    <a className="cat-cameo" href={site.applyHref} aria-label={`Start your assessment with ${mascot.name}`}>
      <span className="cat-cameo__say" aria-hidden="true">
        <strong>Psst, I&rsquo;m {mascot.name}.</strong>
        Give me ten minutes of answers and I&rsquo;ll fetch your letter.
        <em>Start now &rarr;</em>
      </span>
      <span className="cat-cameo__walker" aria-hidden="true">
        <span className="cat-cameo__hop">
          <span className="cat-cameo__pose cat-cameo__pose--walk">
            <Mascot pose="carry" />
          </span>
          <span className="cat-cameo__pose cat-cameo__pose--sit">
            <Mascot pose="home" />
          </span>
        </span>
      </span>
    </a>
  );
}
