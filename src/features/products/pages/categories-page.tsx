import {
  getCategories,
  getProductsByCategory,
} from "@/features/products/api/products";
import { CategoryCard } from "@/features/products/components";

export function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Categories
        </h1>
        <p className="mt-3 text-muted-foreground">
          Browse Blossom products by category — cleaning essentials for every
          space.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
        {categories.map((c) => {
          const count = getProductsByCategory(c.slug).length;
          return (
            <div key={c.slug} className="relative">
              <CategoryCard category={c} />
              {count > 0 && (
                <span className="absolute left-5 top-5 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  {count} {count === 1 ? "item" : "items"}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
