"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { ROUTES, whatsappLink } from "@/utils/constants";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from "@/shared/components/ui";
import { useCart } from "@/features/cart/hooks";
import { Price, useCurrency } from "@/features/currency";

export function CartSummary() {
  const { items, subtotal } = useCart();
  const { format } = useCurrency();

  const orderMessage = `Hello Blossom, I'd like to order:\n\n${items
    .map((i) => `• ${i.name} × ${i.quantity} — ${format(i.price * i.quantity)}`)
    .join("\n")}\n\nTotal: ${format(subtotal)}`;

  return (
    <Card className="lg:sticky lg:top-24">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <Price usd={subtotal} className="font-medium" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Delivery</span>
          <span className="font-medium">Calculated at checkout</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">Total</span>
          <Price usd={subtotal} className="text-lg font-bold" />
        </div>

        <Button
          size="lg"
          className="w-full"
          disabled={items.length === 0}
          render={
            <a
              href={whatsappLink(orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          nativeButton={false}
        >
          <MessageCircle className="size-4" /> Order via WhatsApp
        </Button>

        <Button
          variant="outline"
          className="w-full"
          render={<Link href={ROUTES.products} />}
          nativeButton={false}
        >
          Continue Shopping
        </Button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          Ordering sends your cart to our team on WhatsApp so we can confirm
          price, delivery, and payment.
        </p>
      </CardContent>
    </Card>
  );
}
