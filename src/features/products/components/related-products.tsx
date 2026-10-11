import type { Product } from "@/features/products/types";
import { ProductGrid } from "@/features/products/components/product-grid";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section aria-label="Related products" className="mt-16">
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
        You may also like
      </h2>
      <div className="mt-6">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
