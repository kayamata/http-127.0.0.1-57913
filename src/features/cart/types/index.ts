export interface CartItem {
  slug: string;
  name: string;
  /** Price in USD (the catalogue base currency). */
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
