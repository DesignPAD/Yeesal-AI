import type { Metadata } from "next";
import { SolutionDetail } from "@/components/solutions/solution-detail";
import { getSolution } from "@/components/solutions/data";

const solution = getSolution("automatisation");

export const metadata: Metadata = {
  title: solution.metaTitle,
  description: solution.metaDescription,
  alternates: { canonical: "/solutions/automatisation" },
};

export default function AutomatisationPage() {
  return <SolutionDetail solution={solution} />;
}
