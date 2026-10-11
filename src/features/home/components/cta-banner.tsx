import { MessageCircle, Phone } from "lucide-react";

import { CONTACT, whatsappLink } from "@/utils/constants";
import { buttonVariants } from "@/shared/components/ui";
import { cn } from "@/utils/cn";

export function CtaBanner() {
  return (
    <section className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to keep your world clean?
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
          Questions, comments or special requests? Our team is committed to
          exceeding your needs — reach out and we&apos;ll get right back to you.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(
              "Hello Blossom, I'd like to place an order / make an enquiry."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "gap-2"
            )}
          >
            <MessageCircle className="size-4" />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
              }),
              "gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            )}
          >
            <Phone className="size-4" />
            Call {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
