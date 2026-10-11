import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/utils/cn";
import { ROUTES } from "@/utils/constants";
import { buttonVariants, Badge } from "@/shared/components/ui";
import { PageSection } from "@/shared/components/layout";
import { getProduct } from "@/features/products";
import { Price } from "@/features/currency";

/**
 * Editorial-style spotlight: showcases one product's real image set in an
 * asymmetric collage beside its story. Adds visual variety beyond the grid.
 */
export function ProductSpotlight() {
  const product = getProduct("colored-mop");
  if (!product) return null;

  const [main, ...rest] = product.images;

  return (
    <PageSection className="border-t border-border/60 bg-background">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image collage */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-tile">
            <Image
              src={main}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-6"
            />
            <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
          {rest.slice(0, 2).map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl border border-border/60 bg-tile"
            >
              <Image
                src={img}
                alt={`${product.name} view ${i + 2}`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-contain p-4"
              />
            </div>
          ))}
        </div>

        {/* Copy */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Product spotlight
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {product.name}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-5 flex items-center gap-4">
            <Price usd={product.price} className="text-3xl font-bold text-primary" />
            {product.colors && (
              <p className="text-sm text-muted-foreground">
                {product.colors.length} colours available
              </p>
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={ROUTES.product(product.slug)}
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              View details
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={ROUTES.category(product.category)}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              More {product.category === "mop" ? "Mops" : "products"}
            </Link>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
