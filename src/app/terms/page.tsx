import type { Metadata } from "next";
import { LegalView } from "@/components/views/LegalView";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Black Automation service terms: client responsibilities, confidentiality, ownership, support, and ethical AI use.",
};

export default function TermsPage() {
  return <LegalView prefix="tm" />;
}
