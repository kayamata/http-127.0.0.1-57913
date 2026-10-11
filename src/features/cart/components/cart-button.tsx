"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { ROUTES } from "@/utils/constants";
import { Button } from "@/shared/components/ui";
import { useCart } from "@/features/cart/hooks";

/** Header cart action — icon with a live item-count badge. */
export function CartButton() {
  const { count, hydrated } = useCart();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      aria-label={`Cart${hydrated && count > 0 ? `, ${count} items` : ""}`}
      render={<Link href={ROUTES.cart} />}
      nativeButton={false}
    >
      <ShoppingCart className="size-5" />
      {hydrated && count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Button>
  );
}
