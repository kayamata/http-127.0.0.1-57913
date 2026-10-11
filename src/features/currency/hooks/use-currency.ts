"use client";

import { useSyncExternalStore } from "react";

import {
  convertUsd,
  formatUsd,
  getCurrency,
  setCurrency,
  subscribeCurrency,
} from "@/features/currency/store";
import type { CurrencyCode } from "@/features/currency/types";

/** Reactive access to the selected display currency. */
export function useCurrency() {
  const code = useSyncExternalStore(
    subscribeCurrency,
    getCurrency,
    () => "NGN" as CurrencyCode
  );

  return {
    code,
    setCode: setCurrency,
    /** Convert a USD amount to the selected currency. */
    convert: (usd: number) => convertUsd(usd, code),
    /** Format a USD amount in the selected currency. */
    format: (usd: number) => formatUsd(usd, code),
  };
}
