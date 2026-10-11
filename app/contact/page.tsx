import type { Metadata } from "next";
import { ContactPage } from "@/features/company/pages";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Blossom — questions, comments or special requests. We're committed to exceeding your needs.",
};

export default function Page() {
  return <ContactPage />;
}
