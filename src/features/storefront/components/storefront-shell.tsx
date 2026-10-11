import * as React from "react";

import { SiteFooter, SiteHeader } from "@/shared/components/layout";
import { CartButton } from "@/features/cart";
import { HeaderSearch } from "@/features/products";
import { CurrencySelector } from "@/features/currency";

/**
 * App-wide storefront chrome: sticky header (nav + search + cart) and footer.
 * Rendered by the root layout so it wraps every route.
 */
export function StorefrontShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader
        currency={<CurrencySelector />}
        search={<HeaderSearch />}
        cart={<CartButton />}
      />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
