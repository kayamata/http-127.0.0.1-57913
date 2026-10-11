import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ROUTES } from "@/utils/constants";
import type { Category } from "@/features/products/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={ROUTES.category(category.slug)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-tile">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-1.5 p-5">
        <h3 className="text-base font-semibold sm:text-lg">{category.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          View Products
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
