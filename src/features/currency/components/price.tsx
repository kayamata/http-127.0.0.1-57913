"use client";

import { cn } from "@/utils/cn";
import { useCurrency } from "@/features/currency/hooks";

interface PriceProps {
  /** Amount in USD (the catalogue base currency). */
  usd: number;
  className?: string;
}

/**
 * Renders a price converted to the user's selected currency.
 * Client component so it stays reactive — safe to use inside server trees.
 */
export function Price({ usd, className }: PriceProps) {
  const { format } = useCurrency();
  return <span className={cn("tabular-nums", className)}>{format(usd)}</span>;
}
