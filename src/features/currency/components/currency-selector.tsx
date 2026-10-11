"use client";

import { ChevronDown } from "lucide-react";

import { CURRENCIES } from "@/features/currency/store";
import { useCurrency } from "@/features/currency/hooks";
import type { CurrencyCode } from "@/features/currency/types";

/** Compact currency picker shown in the site header. */
export function CurrencySelector() {
  const { code, setCode } = useCurrency();
  const info = CURRENCIES[code];

  return (
    <label
      className="relative inline-flex h-9 items-center gap-1 rounded-md border border-transparent px-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground focus-within:ring-2 focus-within:ring-ring/50"
      title="Currency"
    >
      <span className="pointer-events-none flex items-center gap-1">
        <span aria-hidden className="text-sm">{info.symbol}</span>
        <span className="hidden sm:inline">{info.code}</span>
        <ChevronDown className="size-3.5 opacity-70" aria-hidden />
      </span>
      <select
        value={code}
        onChange={(e) => setCode(e.target.value as CurrencyCode)}
        aria-label="Select currency"
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      >
        {Object.values(CURRENCIES).map((c) => (
          <option key={c.code} value={c.code}>
            {c.symbol} {c.code}
          </option>
        ))}
      </select>
    </label>
  );
}
