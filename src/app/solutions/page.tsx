import type { Metadata } from "next";
import { SolutionsView } from "@/components/views/SolutionsView";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI agents, workflow automation, CRM automation, dashboards, process systems, and integrations by Black Automation.",
};

export default function SolutionsPage() {
  return <SolutionsView />;
}
