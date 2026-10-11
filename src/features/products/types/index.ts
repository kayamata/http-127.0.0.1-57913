export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  slug: string;
  name: string;
  /** Price in USD (the catalogue base currency). */
  price: number;
  /** Category slug this product belongs to. */
  category: string;
  /** Short one-line summary for cards/listings. */
  shortDescription: string;
  /** Full description for the detail page. */
  description: string;
  /** Ordered product image paths (public/). */
  images: string[];
  /** Optional colour options. */
  colors?: string[];
  /** Optional badge, e.g. "Best Seller". */
  badge?: string;
}

export type ProductSortKey = "featured" | "price-asc" | "price-desc" | "name";

export interface ProductFilters {
  category?: string;
  maxPrice?: number;
  query?: string;
  sort?: ProductSortKey;
}
