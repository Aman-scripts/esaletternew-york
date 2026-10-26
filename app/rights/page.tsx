import { Scale } from "lucide-react";
import { pillars } from "@/lib/content/registry";
import { pageMetadata } from "@/lib/seo";
import { PillarTemplate } from "@/components/templates/PillarTemplate";

const { page, spokes } = pillars["/rights/"];

export const metadata = pageMetadata(page);

export default function RightsPillarPage() {
  return <PillarTemplate page={page} spokes={spokes} gridTitle="All New York housing rights guides" gridIcon={Scale} />;
}
