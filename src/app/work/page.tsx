import type { Metadata } from "next";
import { WorkView } from "@/components/views/WorkView";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Black Automation case studies with Horizon Tech Solutions and CC Smart Clinic.",
};

export default function WorkPage() {
  return <WorkView />;
}
