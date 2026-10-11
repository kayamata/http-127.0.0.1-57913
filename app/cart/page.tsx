import type { Metadata } from "next";
import { CartPage } from "@/features/cart/pages";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Blossom order and check out.",
};

export default function Page() {
  return <CartPage />;
}
