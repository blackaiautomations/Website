import type { Metadata } from "next";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Black Automation's standards, philosophy, team, backers, and working principles.",
};

export default function AboutPage() {
  return <AboutView />;
}
