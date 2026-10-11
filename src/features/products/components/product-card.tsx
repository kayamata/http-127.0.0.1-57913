"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

import { ROUTES } from "@/utils/constants";
import { Badge, Button } from "@/shared/components/ui";
import { addToCart } from "@/features/cart";
import { Price } from "@/features/currency";
import type { Product } from "@/features/products/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority }: ProductCardProps) {
  const { slug, name, price, shortDescription, images, badge } = product;

  const onAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(
      {
        slug,
        name,
        price,
        image: images[0],
      },
      1
    );
  };

  return (
    <Link
      href={ROUTES.product(slug)}
      className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card text-card-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      {/* Image — consistent aspect + contain so nothing is cropped or stretched */}
      <div className="relative aspect-square overflow-hidden bg-tile">
        <Image
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-5 transition-transform duration-300 group-hover:scale-[1.04] sm:p-7"
          priority={priority}
        />
        {badge && (
          <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground shadow-sm">
            {badge}
          </Badge>
        )}
        <Button
          size="icon"
          variant="secondary"
          aria-label={`Add ${name} to cart`}
          className="absolute bottom-3 right-3 rounded-full border border-border/60 shadow-md transition-opacity focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
          onClick={onAdd}
        >
          <Plus className="size-4" />
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-1 border-t border-border/50 p-4">
        <h3 className="line-clamp-1 text-sm font-semibold leading-snug sm:text-[15px]">
          {name}
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2.5">
          <Price
            usd={price}
            className="text-base font-bold text-primary sm:text-lg"
          />
          <span className="hidden text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary sm:inline">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
