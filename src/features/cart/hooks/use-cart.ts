"use client";

import { useSyncExternalStore } from "react";

import {
  getCart,
  getCartCount,
  getCartSubtotal,
  subscribeCart,
} from "@/features/cart/store";

import type { CartState } from "@/features/cart/types";

const SERVER_SNAPSHOT: CartState = { items: [] };

function getServerCart(): CartState {
  return SERVER_SNAPSHOT;
}

/** Reactive access to the client-side cart (localStorage-backed). */
export function useCart() {
  const state = useSyncExternalStore(
    subscribeCart,
    getCart,
    getServerCart
  );
  return {
    items: state.items,
    count: getCartCount(),
    subtotal: getCartSubtotal(),
    // Avoid SSR/hydration mismatch — true only after the store hydrates.
    hydrated: typeof window !== "undefined",
  };
}
