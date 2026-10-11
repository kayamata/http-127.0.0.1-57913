import type { Product } from "@/features/products/types";
import { ProductCard } from "@/features/products/components/product-card";

interface ProductGridProps {
  products: Product[];
  priorityCount?: number;
}

export function ProductGrid({ products, priorityCount = 0 }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
      {products.map((product, i) => (
        <ProductCard
          key={product.slug}
          product={product}
          priority={i < priorityCount}
        />
      ))}
    </div>
  );
}
