import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Brand({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} home`}>
      <Image
        src={site.logo}
        alt="ESA Letter New York"
        width={48}
        height={50}
        quality={95}
        className="brand__logo"
        priority={priority}
      />
      <span className="brand__name text-h4">
        ESA Letter <span>New York</span>
      </span>
    </Link>
  );
}
