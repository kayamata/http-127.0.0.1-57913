"use client";

import * as React from "react";

import type { Category, ProductSortKey } from "@/features/products/types";
import { filterProducts } from "@/features/products/api/products";
import { ProductFilters } from "@/features/products/components/product-filters";
import { ProductGrid } from "@/features/products/components/product-grid";
import { PackageSearch } from "lucide-react";

interface ProductsBrowserProps {
  categories: Category[];
  /** Lock the browser to a single category (e.g. on a category page). */
  fixedCategory?: string;
  initialQuery?: string;
}

export function ProductsBrowser({
  categories,
  fixedCategory,
  initialQuery = "",
}: ProductsBrowserProps) {
  const [category, setCategory] = React.useState(fixedCategory ?? "all");
  const [query, setQuery] = React.useState(initialQuery);
  const [sort, setSort] = React.useState<ProductSortKey>("featured");

  const products = React.useMemo(
    () =>
      filterProducts({
        category: fixedCategory ?? category,
        query,
        sort,
      }),
    [category, query, sort, fixedCategory]
  );

  return (
    <div className="flex flex-col gap-6">
      <ProductFilters
        categories={categories}
        category={category}
        onCategoryChange={setCategory}
        query={query}
        onQueryChange={setQuery}
        sort={sort}
        onSortChange={setSort}
        showSearch={!fixedCategory}
      />

      {products.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
          <ProductGrid products={products} priorityCount={4} />
        </>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <PackageSearch className="size-6" />
      </span>
      <h3 className="mt-4 font-semibold">No products found</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">
        Try a different search or category.
      </p>
    </div>
  );
}
