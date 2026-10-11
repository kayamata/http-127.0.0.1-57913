export const ROUTES = {
  home: "/",
  products: "/products",
  categories: "/categories",
  category: (slug: string) => `/category/${slug}`,
  product: (slug: string) => `/product/${slug}`,
  about: "/about",
  contact: "/contact",
  cart: "/cart",
  search: "/search",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "Products", href: ROUTES.products },
  { label: "Categories", href: ROUTES.categories },
  { label: "About Us", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
] as const;

export const CONTACT = {
  email: "support@blossomprince.com",
  phone: "08036903790",
  phoneDisplay: "0803 690 3790",
  whatsapp: "2348189002005",
  instagram: "blossom_prince_",
  instagramUrl: "https://www.instagram.com/blossom_prince_/",
} as const;

export function whatsappLink(message: string): string {
  return `https://api.whatsapp.com/send?phone=${CONTACT.whatsapp}&text=${encodeURIComponent(
    message
  )}`;
}
