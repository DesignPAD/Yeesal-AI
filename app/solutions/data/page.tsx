import type { Metadata } from "next";
import { SolutionDetail } from "@/components/solutions/solution-detail";
import { getSolution } from "@/components/solutions/data";

const solution = getSolution("data");

export const metadata: Metadata = {
  title: solution.metaTitle,
  description: solution.metaDescription,
  alternates: { canonical: "/solutions/data" },
};

export default function DataPage() {
  return <SolutionDetail solution={solution} />;
}
