import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/utils/cn";
import { ROUTES } from "@/utils/constants";
import { buttonVariants } from "@/shared/components/ui";

/**
 * Minimal brand intro — a light page header (headline + subtext + links) that
 * opens the homepage cleanly without a large promotional banner.
 */
export function HomeIntro() {
  return (
    <section className="border-b border-border/60 bg-accent/30">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Blossom Cleaning Products
        </p>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
          Quality products for a cleaner home and car
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
          High-quality, affordable housekeeping and car care products — mops,
          brushes, buckets and more — trusted across Nigeria, Canada and West
          Africa.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={ROUTES.products}
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            Browse products
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={ROUTES.contact}
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
