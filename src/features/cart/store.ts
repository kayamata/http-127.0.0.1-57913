import type { CartItem, CartState } from "@/features/cart/types";

/**
 * Client-side cart store.
 *
 * Implemented as a plain external store (subscribed via `useSyncExternalStore`)
 * so no React provider is required — any component can read or mutate the cart.
 * State persists to `localStorage` across reloads. All data is local/demo.
 */

const STORAGE_KEY = "blossom-cart";

let state: CartState = { items: [] };
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  } catch {
    /* ignore storage errors */
  }
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) state = { items: JSON.parse(raw) as CartItem[] };
  } catch {
    state = { items: [] };
  }
}

/* --------------------------------- API ---------------------------------- */

export function subscribeCart(listener: () => void) {
  hydrate();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getCart(): CartState {
  hydrate();
  return state;
}

export function getCartCount(): number {
  return state.items.reduce((n, i) => n + i.quantity, 0);
}

export function getCartSubtotal(): number {
  return state.items.reduce((n, i) => n + i.price * i.quantity, 0);
}

export function addToCart(
  item: Omit<CartItem, "quantity">,
  quantity = 1
) {
  hydrate();
  const existing = state.items.find((i) => i.slug === item.slug);
  state = {
    items: existing
      ? state.items.map((i) =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + quantity } : i
        )
      : [...state.items, { ...item, quantity }],
  };
  persist();
  emit();
}

export function updateQuantity(slug: string, quantity: number) {
  hydrate();
  state = {
    items:
      quantity <= 0
        ? state.items.filter((i) => i.slug !== slug)
        : state.items.map((i) => (i.slug === slug ? { ...i, quantity } : i)),
  };
  persist();
  emit();
}

export function removeFromCart(slug: string) {
  hydrate();
  state = { items: state.items.filter((i) => i.slug !== slug) };
  persist();
  emit();
}

export function clearCart() {
  hydrate();
  state = { items: [] };
  persist();
  emit();
}
