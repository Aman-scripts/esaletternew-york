/** M12 Annotated sample letter. Pins match the numbered breakdown on /sample-letter/. */
export function SampleLetter() {
  return (
    <figure className="sample-letter" aria-label="Annotated sample ESA letter">
      <div className="sample-letter__block sample-letter__head">
        <span className="sample-letter__pin text-body-small-semibold" aria-label="Element 1">1</span>
        <p>
          <strong>[Provider / Practice Name]</strong>
        </p>
        <p>[Address] · [Phone] · [Email]</p>
      </div>
      <div className="sample-letter__block">
        <span className="sample-letter__pin text-body-small-semibold" aria-label="Element 2">2</span>
        <p>[Date]</p>
      </div>
      <div className="sample-letter__block">
        <p>To Whom It May Concern,</p>
      </div>
      <div className="sample-letter__block">
        <span className="sample-letter__pin text-body-small-semibold" aria-label="Element 3">3</span>
        <p>
          I am a [license type] licensed in the State of New York (License No. [number]). [Tenant
          name] is under my professional care.
        </p>
      </div>
      <div className="sample-letter__block">
        <span className="sample-letter__pin text-body-small-semibold" aria-label="Element 4">4</span>
        <p>
          [Tenant name] has a mental or emotional health condition that substantially limits one or
          more major life activities.
        </p>
      </div>
      <div className="sample-letter__block">
        <span className="sample-letter__pin text-body-small-semibold" aria-label="Element 5">5</span>
        <p>
          In my professional opinion, an emotional support animal provides support that alleviates
          symptoms of this disability. I support their request for a reasonable accommodation to live
          with their animal, [animal name/type].
        </p>
      </div>
      <div className="sample-letter__block">
        <span className="sample-letter__pin text-body-small-semibold" aria-label="Element 6">6</span>
        <p>Sincerely,</p>
        <p>[Signature]</p>
        <p>[Name, credentials]</p>
      </div>
      <figcaption className="sample-letter__watermark text-body-small-semibold">Sample only. Not a valid ESA letter.</figcaption>
    </figure>
  );
}
