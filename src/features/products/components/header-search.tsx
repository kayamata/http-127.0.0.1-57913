"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

import { ROUTES } from "@/utils/constants";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Input,
} from "@/shared/components/ui";
import { searchProducts } from "@/features/products/api/products";
import { Price } from "@/features/currency";

export function HeaderSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const results = React.useMemo(() => searchProducts(query), [query]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Search products">
            <Search className="size-5" />
          </Button>
        }
      />
      <DialogContent className="top-[14%] w-full gap-0 p-0 sm:top-[18%] sm:max-w-lg">
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3 pr-12">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <DialogTitle className="sr-only">Search products</DialogTitle>
          <DialogDescription className="sr-only">
            Type to search the Blossom product catalogue.
          </DialogDescription>
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
            className="h-9 flex-1 border-0 bg-transparent px-1 shadow-none focus-visible:ring-0"
          />
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() === "" ? (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">
              Start typing to search our products.
            </p>
          ) : results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">
              No products found for “{query}”.
            </p>
          ) : (
            <ul className="divide-y divide-border/60">
              {results.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={ROUTES.product(p.slug)}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-accent/60"
                  >
                    <span className="relative size-12 shrink-0 overflow-hidden rounded-md border border-border/60 bg-tile">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">
                        {p.name}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {p.shortDescription}
                      </span>
                    </span>
                    <Price
                      usd={p.price}
                      className="shrink-0 text-sm font-semibold text-primary"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
