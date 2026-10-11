"use client";

import * as React from "react";
import { PackageSearch, Search } from "lucide-react";

import { Input } from "@/shared/components/ui";
import { searchProducts } from "@/features/products/api/products";
import { ProductGrid } from "@/features/products/components/product-grid";

export function ProductSearch({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = React.useState(initialQuery);
  const results = React.useMemo(() => searchProducts(query), [query]);
  const hasQuery = query.trim().length > 0;

  return (
    <div className="flex flex-col gap-6">
      <div className="relative max-w-xl">
        <Search className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for mops, brushes, buckets…"
          aria-label="Search products"
          className="h-12 rounded-xl pl-11 text-base"
        />
      </div>

      {!hasQuery ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Search className="size-6" />
          </span>
          <h3 className="mt-4 font-semibold">Search our products</h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Type a product name or keyword to find what you need.
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <PackageSearch className="size-6" />
          </span>
          <h3 className="mt-4 font-semibold">No results for “{query}”</h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Try a different keyword or browse all products.
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? "result" : "results"} for
            “{query}”
          </p>
          <ProductGrid products={results} priorityCount={4} />
        </>
      )}
    </div>
  );
}
