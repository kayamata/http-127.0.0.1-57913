import { getCategories } from "@/features/products/api/products";
import { ProductsBrowser } from "@/features/products/components";

export function ProductsPage() {
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          All Products
        </h1>
        <p className="mt-3 text-muted-foreground">
          Browse our full range of Blossom cleaning products — quality,
          affordable, and built to last.
        </p>
      </div>

      <div className="mt-10">
        <ProductsBrowser categories={categories} />
      </div>
    </div>
  );
}
