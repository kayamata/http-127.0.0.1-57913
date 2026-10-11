"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { cn } from "@/utils/cn";
import { Input } from "@/shared/components/ui";
import type {
  Category,
  ProductSortKey,
} from "@/features/products/types";

interface ProductFiltersProps {
  categories: Category[];
  category: string;
  onCategoryChange: (slug: string) => void;
  query: string;
  onQueryChange: (q: string) => void;
  sort: ProductSortKey;
  onSortChange: (s: ProductSortKey) => void;
  showSearch?: boolean;
}

export function ProductFilters({
  categories,
  category,
  onCategoryChange,
  query,
  onQueryChange,
  sort,
  onSortChange,
  showSearch = true,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-col gap-4">
      {showSearch && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
            className="h-10 pl-9"
          />
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Category chips */}
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter by category"
        >
          <FilterChip
            label="All"
            active={category === "all"}
            onClick={() => onCategoryChange("all")}
          />
          {categories.map((c) => (
            <FilterChip
              key={c.slug}
              label={c.name}
              active={category === c.slug}
              onClick={() => onCategoryChange(c.slug)}
            />
          ))}
        </div>

        {/* Sort */}
        <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal className="size-4" />
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as ProductSortKey)}
            aria-label="Sort products"
            className="h-9 rounded-md border border-input bg-background px-2 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </label>
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
