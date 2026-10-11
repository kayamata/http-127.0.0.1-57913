import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle } from "lucide-react";

import { ROUTES, whatsappLink } from "@/utils/constants";
import { Button } from "@/shared/components/ui";
import {
  getCategories,
  getCategory,
  getProductsByCategory,
} from "@/features/products/api/products";
import { ProductGrid } from "@/features/products/components";

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);
  const categories = getCategories().filter((c) => c.slug !== slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
      >
        <Link href={ROUTES.home} className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="size-4" />
        <Link href={ROUTES.products} className="hover:text-foreground">
          Products
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-foreground">{category.name}</span>
      </nav>

      <div className="mt-6 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {category.name}
        </h1>
        <p className="mt-3 text-muted-foreground">{category.description}</p>
      </div>

      <div className="mt-10">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
            <h3 className="font-semibold">Coming soon</h3>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              We&apos;re stocking this category. Get in touch and we&apos;ll let
              you know when it&apos;s ready.
            </p>
            <Button
              className="mt-5"
              render={
                <a
                  href={whatsappLink(
                    `Hello Blossom, I'm interested in your ${category.name} products.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
            >
              <MessageCircle className="size-4" /> Ask about {category.name}
            </Button>
          </div>
        ) : (
          <ProductGrid products={products} priorityCount={4} />
        )}
      </div>

      {/* Other categories */}
      {categories.length > 0 && (
        <div className="mt-16">
          <h2 className="text-lg font-semibold">Browse other categories</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={ROUTES.category(c.slug)}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
