import type { Metadata } from "next";
import { CategoriesPage } from "@/features/products/pages";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse Blossom products by category — mops, sweeping brushes, car care and more.",
};

export default function Page() {
  return <CategoriesPage />;
}
