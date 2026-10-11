"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { ROUTES } from "@/utils/constants";
import { Button } from "@/shared/components/ui";
import { CartItemsList } from "@/features/cart/components/cart-items-list";
import { CartSummary } from "@/features/cart/components/cart-summary";
import { useCart } from "@/features/cart/hooks";

export function CartPageContent() {
  const { items, count } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <ShoppingBag className="size-7" />
        </span>
        <h2 className="mt-5 text-xl font-semibold">Your cart is empty</h2>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Browse our cleaning products and add what you need — your selections
          will show up here.
        </p>
        <Button
          className="mt-6"
          render={<Link href={ROUTES.products} />}
          nativeButton={false}
        >
          View Products
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <section aria-label="Cart items">
        <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-6">
          <p className="mb-4 text-sm text-muted-foreground">
            {count} {count === 1 ? "item" : "items"} in your cart
          </p>
          <CartItemsList />
        </div>
      </section>
      <aside aria-label="Order summary">
        <CartSummary />
      </aside>
    </div>
  );
}
