import type { CurrencyCode, CurrencyInfo } from "@/features/currency/types";

/**
 * Currency store.
 *
 * Product prices are stored in USD (the base currency). This store holds the
 * user's selected display currency and converts on render. Selection persists
 * to `localStorage`; on first visit the currency is inferred from the
 * browser's locale region, defaulting to NGN (Blossom's primary market).
 *
 * Plain external store — subscribe via `useSyncExternalStore`, no provider.
 */

const STORAGE_KEY = "blossom-currency";
const DEFAULT: CurrencyCode = "NGN";

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  NGN: { code: "NGN", symbol: "₦", label: "NGN", rate: 1600, locale: "en-NG", maxDecimals: 0 },
  USD: { code: "USD", symbol: "$", label: "USD", rate: 1, locale: "en-US", maxDecimals: 2 },
  GBP: { code: "GBP", symbol: "£", label: "GBP", rate: 0.78, locale: "en-GB", maxDecimals: 2 },
  EUR: { code: "EUR", symbol: "€", label: "EUR", rate: 0.92, locale: "de-DE", maxDecimals: 2 },
  CAD: { code: "CAD", symbol: "CA$", label: "CAD", rate: 1.38, locale: "en-CA", maxDecimals: 2 },
};

/** Region (ISO country) → currency. Only regions we ship to are mapped. */
const REGION_TO_CURRENCY: Record<string, CurrencyCode> = {
  NG: "NGN",
  US: "USD",
  GB: "GBP",
  UK: "GBP",
  CA: "CAD",
  // Euro area
  DE: "EUR", FR: "EUR", IT: "EUR", ES: "EUR", NL: "EUR", BE: "EUR",
  IE: "EUR", AT: "EUR", PT: "EUR", FI: "EUR", GR: "EUR", LU: "EUR",
};

let current: CurrencyCode = DEFAULT;
let initialized = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, current);
  } catch {
    /* ignore */
  }
}

function detectCurrency(): CurrencyCode {
  if (typeof navigator === "undefined") return DEFAULT;
  const region = (navigator.language.split("-")[1] ?? "").toUpperCase();
  return REGION_TO_CURRENCY[region] ?? DEFAULT;
}

function init() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
    current = stored && CURRENCIES[stored] ? stored : detectCurrency();
  } catch {
    current = detectCurrency();
  }
}

/* --------------------------------- API ---------------------------------- */

export function subscribeCurrency(listener: () => void) {
  init();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getCurrency(): CurrencyCode {
  init();
  return current;
}

export function setCurrency(code: CurrencyCode) {
  init();
  if (!CURRENCIES[code] || code === current) return;
  current = code;
  persist();
  emit();
}

/** Convert a USD amount into the given/selected currency. */
export function convertUsd(amount: number, code: CurrencyCode = getCurrency()): number {
  return amount * CURRENCIES[code].rate;
}

/** Format a USD amount in the given/selected currency. */
export function formatUsd(amount: number, code: CurrencyCode = getCurrency()): string {
  const info = CURRENCIES[code];
  const value = convertUsd(amount, code);
  try {
    return new Intl.NumberFormat(info.locale, {
      style: "currency",
      currency: info.code,
      minimumFractionDigits: info.maxDecimals,
      maximumFractionDigits: info.maxDecimals,
    }).format(value);
  } catch {
    return `${info.symbol}${value.toFixed(info.maxDecimals)}`;
  }
}
