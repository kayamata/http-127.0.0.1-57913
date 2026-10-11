import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { ROUTES } from "@/utils/constants";
import {
  getCategory,
  getProduct,
  getRelatedProducts,
} from "@/features/products/api/products";
import {
  ProductGallery,
  ProductInfo,
  RelatedProducts,
} from "@/features/products/components";

export function ProductDetailPage({ slug }: { slug: string }) {
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
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
        {category && (
          <>
            <ChevronRight className="size-4" />
            <Link
              href={ROUTES.category(category.slug)}
              className="hover:text-foreground"
            >
              {category.name}
            </Link>
          </>
        )}
        <ChevronRight className="size-4" />
        <span className="truncate text-foreground">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery
          images={product.images}
          name={product.name}
          badge={product.badge}
        />
        <ProductInfo product={product} />
      </div>

      {/* Description */}
      <section aria-label="Product description" className="mt-14 max-w-3xl">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          About this product
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      </section>

      <RelatedProducts products={related} />
    </div>
  );
}
