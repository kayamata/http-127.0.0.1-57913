export type CurrencyCode = "NGN" | "USD" | "GBP" | "EUR" | "CAD";

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  label: string;
  /** Rate to convert 1 USD into this currency. */
  rate: number;
  /** Locale used for number formatting. */
  locale: string;
  /** Max fraction digits when formatting (NGN shows whole naira). */
  maxDecimals: number;
}
