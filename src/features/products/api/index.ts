import { useQuery } from "@tanstack/react-query";

import {
  getCategories,
  getCategory,
  getProduct,
  getProducts,
  filterProducts,
  searchProducts,
} from "@/features/products/api/products";
import type {
  Category,
  Product,
  ProductFilters,
} from "@/features/products/types";

/* ------------------------------------------------------------------------ */
/*  Raw fetchers (private).                                                  */
/*                                                                          */
/*  The catalogue is currently static; these resolve synchronously. To wire a */
/*  real backend, replace the bodies with `apiClient` calls — the hook        */
/*  surface stays identical.                                                 */
/* ------------------------------------------------------------------------ */

async function fetchProducts(): Promise<Product[]> {
  return getProducts();
}

async function fetchCategories(): Promise<Category[]> {
  return getCategories();
}

async function fetchCategory(slug: string): Promise<Category | undefined> {
  return getCategory(slug);
}

async function fetchProduct(slug: string): Promise<Product | undefined> {
  return getProduct(slug);
}

async function fetchFilteredProducts(
  filters: ProductFilters
): Promise<Product[]> {
  return filterProducts(filters);
}

async function fetchSearch(query: string): Promise<Product[]> {
  return searchProducts(query);
}

/* ------------------------------------------------------------------------ */
/*  React Query hooks (public — consumed by components/pages).               */
/* ------------------------------------------------------------------------ */

export function useProducts() {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
}

export function useCategories() {
  return useQuery({ queryKey: ["categories"], queryFn: fetchCategories });
}

export function useCategory(slug: string) {
  return useQuery({
    queryKey: ["category", slug],
    queryFn: () => fetchCategory(slug),
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProduct(slug),
  });
}

export function useFilteredProducts(filters: ProductFilters) {
  return useQuery({
    queryKey: ["products", "filtered", filters],
    queryFn: () => fetchFilteredProducts(filters),
  });
}

export function useSearchProducts(query: string) {
  return useQuery({
    queryKey: ["products", "search", query],
    queryFn: () => fetchSearch(query),
    enabled: query.trim().length > 0,
  });
}
