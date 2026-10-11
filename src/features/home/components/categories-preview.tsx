import { PageSection } from "@/shared/components/layout";
import { CategoryCard, getCategories } from "@/features/products";

export function CategoriesPreview() {
  const categories = getCategories();

  return (
    <PageSection
      title="Shop by category"
      description="Explore our range of quality cleaning essentials, organized to help you find exactly what you need."
      className="bg-background"
    >
      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </PageSection>
  );
}
