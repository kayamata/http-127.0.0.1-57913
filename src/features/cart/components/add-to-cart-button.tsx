"use client";

import * as React from "react";
import { Check, ShoppingCart } from "lucide-react";

import { Button } from "@/shared/components/ui";
import { addToCart } from "@/features/cart/store";
import type { CartItem } from "@/features/cart/types";

interface AddToCartButtonProps {
  item: Omit<CartItem, "quantity">;
  quantity?: number;
  label?: string;
  className?: string;
}

/** Adds a product to the cart with brief "added" feedback. */
export function AddToCartButton({
  item,
  quantity = 1,
  label = "Add to Cart",
  className,
}: AddToCartButtonProps) {
  const [added, setAdded] = React.useState(false);
  const timer = React.useRef<number | null>(null);

  React.useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    []
  );

  const onClick = () => {
    addToCart(item, quantity);
    setAdded(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <Button onClick={onClick} className={className} size="lg">
      {added ? (
        <>
          <Check className="size-4" /> Added
        </>
      ) : (
        <>
          <ShoppingCart className="size-4" /> {label}
        </>
      )}
    </Button>
  );
}
