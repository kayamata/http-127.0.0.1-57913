import type { Category, Product, ProductFilters } from "@/features/products/types";

/**
 * Static catalogue data for Blossom.
 *
 * Prices are in USD (the catalogue base currency); the currency feature
 * converts them for display. This data source can be swapped for real API
 * calls later by changing the getters below / the hooks in `api/index.ts`.
 */

export const CATEGORIES: Category[] = [
  {
    slug: "mop",
    name: "Mop",
    description: "Durable, colorful mops built for a deep, streak-free clean.",
    image: "/products/colored-mop.jpg",
  },
  {
    slug: "sweeping-brush",
    name: "Sweeping Brush",
    description: "Sturdy brushes that sweep up dust and debris with ease.",
    image: "/products/red-sweeping-brush.jpg",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "blossom-mop-bucket",
    name: "Blossom Mop Bucket",
    price: 12,
    category: "mop",
    badge: "Best Seller",
    shortDescription:
      "A durable mop bucket with built-in wheels for easy cleaning.",
    description:
      "Introducing the Blossom Mop Bucket, the perfect addition to any cleaning arsenal. Made with unmatched quality and to the highest standard, you won't find a better mop bucket on the market! Available in blue, green, and red, you can choose the hue that best suits your cleaning space. The durable construction ensures that this mop bucket will last for years to come, while the built-in wheels make for easy transportation. Clean with ease and efficiency with the Blossom Mop Bucket.",
    images: [
      "/products/blossom-mop-bucket.jpg",
      "/products/blossom-mop-bucket-2.jpg",
      "/products/blossom-mop-bucket-3.jpg",
    ],
    colors: ["Blue", "Green", "Red"],
  },
  {
    slug: "double-colored-sweeper",
    name: "Double Colored Sweeper",
    price: 10,
    category: "sweeping-brush",
    badge: "Best Seller",
    shortDescription:
      "A two-tone sweeper that clears dust and debris from any surface.",
    description:
      "Introducing the Double Colored Sweeper, the perfect cleaning tool for any home or office. With its unique design, this sweeper is highly effective at sweeping dust, dirt, and debris from any surface. Built with exceptional quality, it is guaranteed to last long and withstand heavy use. The two distinct colors allow for easy use and organization. Make cleaning a breeze with the Double Colored Sweeper.",
    images: [
      "/products/double-colored-sweeper.jpg",
      "/products/double-colored-sweeper-2.jpg",
      "/products/double-colored-sweeper-3.jpg",
    ],
  },
  {
    slug: "colored-mop",
    name: "Colored Mop",
    price: 12,
    category: "mop",
    badge: "Best Seller",
    shortDescription:
      "A vibrant, durable mop whose color won't fade over time.",
    description:
      "Introducing our high-quality Colored Mop, designed to add a pop of color to your cleaning routine. Made with durable materials, this mop is built to last and can withstand heavy use. Unlike other mops on the market, the vibrant color of our Colored Mop does not wash out over time, ensuring a long-lasting and consistent look. Keep your floors clean and bright with this reliable and stylish cleaning tool that is guaranteed to stand the test of time.",
    images: [
      "/products/colored-mop.jpg",
      "/products/colored-mop-2.jpg",
      "/products/colored-mop-3.jpg",
    ],
    colors: ["Yellow", "Green", "Pink", "Blue"],
  },
  {
    slug: "red-sweeping-brush",
    name: "Red Sweeping Brush",
    price: 10,
    category: "sweeping-brush",
    badge: "Best Seller",
    shortDescription:
      "A durable red brush with soft bristles for effortless sweeping.",
    description:
      "Introducing our high-quality Red Sweeping Brush, perfect for keeping your floors clean and tidy. This durable brush is specially designed to last long, saving you money in the long run. The soft bristles make it easy to sweep up dust and debris with minimal effort. Whether you're cleaning your home or workplace, this brush will quickly become your go-to tool. Upgrade your cleaning materials with our Red Sweeping Brush today.",
    images: [
      "/products/red-sweeping-brush.jpg",
      "/products/red-sweeping-brush-2.jpg",
    ],
  },
  {
    slug: "blue-and-red-mop",
    name: "Blue and Red Mop",
    price: 12,
    category: "mop",
    badge: "Best Seller",
    shortDescription:
      "A top-quality mop that removes dirt without leaving streaks.",
    description:
      "Introducing our Blue and Red Mop, the top-quality cleaning tool for your home or business. This affordable mop is made to last, delivering unmatched durability with every use. Designed for maximum effectiveness, it easily removes dirt and grime from any floor surface without leaving streaks. Its attractive blue and red color scheme is just the icing on the cake, making cleaning a little bit more fun. Invest in our Blue and Red Mop today and discover the difference in your cleaning routine.",
    images: [
      "/products/blue-and-red-mop.jpg",
      "/products/blue-and-red-mop-2.jpg",
    ],
    colors: ["Blue", "Red"],
  },
];

/* ------------------------------------------------------------------------ */
/*  Getters (synchronous — the data is static).                              */
/* ------------------------------------------------------------------------ */

export function getProducts(): Product[] {
  return PRODUCTS;
}

export function getCategories(): Category[] {
  return CATEGORIES;
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function getBestSellers(): Product[] {
  return PRODUCTS.filter((p) => p.badge === "Best Seller");
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  )
    .concat(PRODUCTS.filter((p) => p.slug !== product.slug))
    .filter((p, i, arr) => arr.indexOf(p) === i)
    .slice(0, limit);
}

export function filterProducts(filters: ProductFilters): Product[] {
  const { category, maxPrice, query, sort = "featured" } = filters;
  const q = query?.trim().toLowerCase();

  let list = PRODUCTS.filter((p) => {
    if (category && category !== "all" && p.category !== category) return false;
    if (maxPrice != null && p.price > maxPrice) return false;
    if (q) {
      const hay = `${p.name} ${p.shortDescription} ${p.description}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  switch (sort) {
    case "price-asc":
      list = [...list].sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list = [...list].sort((a, b) => b.price - a.price);
      break;
    case "name":
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  return list;
}

export function searchProducts(query: string): Product[] {
  return filterProducts({ query });
}
