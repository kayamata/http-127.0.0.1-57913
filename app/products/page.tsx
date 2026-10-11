import type { Metadata } from "next";
import { ProductsPage } from "@/features/products/pages";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse the full range of Blossom cleaning products — mops, brushes, buckets and more.",
};

export default function Page() {
  return <ProductsPage />;
}
