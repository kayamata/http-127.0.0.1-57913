import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ROUTES } from "@/utils/constants";
import { buttonVariants } from "@/shared/components/ui";
import { PageSection } from "@/shared/components/layout";
import { getBestSellers, ProductGrid } from "@/features/products";

export function FeaturedProducts() {
  const products = getBestSellers();

  return (
    <PageSection
      title="Best sellers"
      description="Our most-loved cleaning products, chosen by customers like you."
      className="bg-secondary/40"
      action={
        <Link
          href={ROUTES.products}
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          View all products
          <ArrowRight className="size-4" />
        </Link>
      }
    >
      <ProductGrid products={products} priorityCount={4} />
    </PageSection>
  );
}
