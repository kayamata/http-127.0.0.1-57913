import type { Metadata } from "next";
import { AboutPage } from "@/features/company/pages";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Blossom — importing the best quality car care and housekeeping products in Africa since 2007.",
};

export default function Page() {
  return <AboutPage />;
}
