import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ways to reach Black Automation, plus answers about process, pricing, integrations, security, and support.",
};

export default function ContactPage() {
  return <ContactView />;
}
