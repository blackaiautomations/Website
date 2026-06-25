import type { Metadata } from "next";
import { LegalView } from "@/components/views/LegalView";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Black Automation's policy on privacy, confidentiality, data handling, security, and AI systems.",
};

export default function PrivacyPage() {
  return <LegalView prefix="pv" />;
}
