import { MapPin } from "lucide-react";
import { pillars } from "@/lib/content/registry";
import { pageMetadata } from "@/lib/seo";
import { PillarTemplate } from "@/components/templates/PillarTemplate";

const { page, spokes } = pillars["/locations/"];

export const metadata = pageMetadata(page);

export default function LocationsPillarPage() {
  return <PillarTemplate page={page} spokes={spokes} gridTitle="Find your city or borough" gridIcon={MapPin} />;
}
