import { ProductSearch } from "@/features/products/components/product-search";

export function SearchPage({ query }: { query?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Search</h1>
      <p className="mt-2 text-muted-foreground">
        Find the right Blossom product for your cleaning needs.
      </p>
      <div className="mt-8">
        <ProductSearch initialQuery={query} />
      </div>
    </div>
  );
}
