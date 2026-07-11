import type { Metadata } from "next";
import { SolutionDetail } from "@/components/solutions/solution-detail";
import { getSolution } from "@/components/solutions/data";

const solution = getSolution("agents");

export const metadata: Metadata = {
  title: solution.metaTitle,
  description: solution.metaDescription,
  alternates: { canonical: "/solutions/agents" },
};

export default function AgentsPage() {
  return <SolutionDetail solution={solution} />;
}
