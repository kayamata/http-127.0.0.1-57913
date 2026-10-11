"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import { cn } from "@/utils/cn";
import { ROUTES } from "@/utils/constants";
import { Button } from "@/shared/components/ui";
import { useCart } from "@/features/cart/hooks";
import { removeFromCart, updateQuantity } from "@/features/cart/store";
import { Price } from "@/features/currency";

export function CartItemsList({ className }: { className?: string }) {
  const { items } = useCart();

  return (
    <ul className={cn("divide-y divide-border/60", className)}>
      {items.map((item) => (
        <li key={item.slug} className="flex gap-4 py-4 first:pt-0 last:pb-0">
          <Link
            href={ROUTES.product(item.slug)}
            className="relative size-20 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-tile sm:size-24"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="96px"
              className="object-contain p-1.5"
            />
          </Link>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-start justify-between gap-3">
              <Link
                href={ROUTES.product(item.slug)}
                className="truncate text-sm font-medium hover:underline sm:text-base"
              >
                {item.name}
              </Link>
              <Price
                usd={item.price * item.quantity}
                className="shrink-0 text-sm font-semibold"
              />
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              <Price usd={item.price} /> each
            </p>

            <div className="mt-auto flex items-center justify-between pt-2">
              <div className="inline-flex items-center rounded-md border border-border">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Decrease quantity"
                  onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                >
                  <Minus className="size-4" />
                </Button>
                <span
                  className="w-8 text-center text-sm font-medium tabular-nums"
                  aria-live="polite"
                >
                  {item.quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Increase quantity"
                  onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                >
                  <Plus className="size-4" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Remove ${item.name}`}
                className="text-muted-foreground hover:text-destructive"
                onClick={() => removeFromCart(item.slug)}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
