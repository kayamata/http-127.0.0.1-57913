import { CartPageContent } from "@/features/cart/components";

export function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Cart</h1>
      <p className="mt-2 text-muted-foreground">
        Review your items and place your order.
      </p>
      <div className="mt-8">
        <CartPageContent />
      </div>
    </div>
  );
}
