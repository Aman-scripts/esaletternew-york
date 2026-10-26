import { HeartHandshake } from "lucide-react";
import { pillars } from "@/lib/content/registry";
import { pageMetadata } from "@/lib/seo";
import { PillarTemplate } from "@/components/templates/PillarTemplate";

const { page, spokes } = pillars["/conditions/"];

export const metadata = pageMetadata(page);

export default function ConditionsPillarPage() {
  return (
    <PillarTemplate page={page} spokes={spokes} gridTitle="Conditions and eligible animals" gridIcon={HeartHandshake} />
  );
}
