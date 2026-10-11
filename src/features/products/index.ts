// Public API of the products feature.
export {
  ProductCard,
  ProductGrid,
  CategoryCard,
  ProductsBrowser,
  HeaderSearch,
  ProductGallery,
  ProductInfo,
  RelatedProducts,
} from "@/features/products/components";
export {
  getProducts,
  getCategories,
  getCategory,
  getProduct,
  getProductsByCategory,
  getBestSellers,
  getRelatedProducts,
} from "@/features/products/api/products";
export type {
  Category,
  Product,
  ProductFilters,
  ProductSortKey,
} from "@/features/products/types";
