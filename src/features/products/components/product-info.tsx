"use client";

import * as React from "react";
import { Check, MessageCircle, Minus, Plus } from "lucide-react";

import { cn } from "@/utils/cn";
import { whatsappLink } from "@/utils/constants";
import { Button, Separator } from "@/shared/components/ui";
import { AddToCartButton } from "@/features/cart";
import { Price, useCurrency } from "@/features/currency";
import type { Product } from "@/features/products/types";

export function ProductInfo({ product }: { product: Product }) {
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState<string | undefined>(
    product.colors?.[0]
  );
  const { format } = useCurrency();

  const whatsapp = whatsappLink(
    `Hello Blossom, I'd like to order the ${product.name}${
      color ? ` (${color})` : ""
    } — ${format(product.price)}.`
  );

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {product.name}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {product.shortDescription}
      </p>

      <p className="mt-4 text-3xl font-bold text-primary">
        <Price usd={product.price} />
      </p>

      {product.colors && product.colors.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-medium">
            Color{": "}
            <span className="font-normal text-muted-foreground">{color}</span>
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2" role="group" aria-label="Choose color">
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                aria-pressed={color === c}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                  color === c
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {color === c && <Check className="size-3.5" />}
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <p className="text-sm font-medium">Quantity</p>
        <div className="mt-2.5 inline-flex items-center rounded-md border border-border">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <Minus className="size-4" />
          </Button>
          <span className="w-10 text-center text-sm font-semibold tabular-nums">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => q + 1)}
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="flex flex-col gap-3 sm:flex-row">
        <AddToCartButton
          item={{
            slug: product.slug,
            name: product.name + (color ? ` (${color})` : ""),
            price: product.price,
            image: product.images[0],
          }}
          quantity={quantity}
          className="flex-1"
        />
        <Button
          variant="outline"
          size="lg"
          className="flex-1"
          render={
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" />
          }
          nativeButton={false}
        >
          <MessageCircle className="size-4" /> Order on WhatsApp
        </Button>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        <li>• Quality guaranteed — built to Blossom standards</li>
        <li>• Available in Nigeria, Canada & West Africa</li>
        <li>• Questions? Our team is happy to help.</li>
      </ul>
    </div>
  );
}
