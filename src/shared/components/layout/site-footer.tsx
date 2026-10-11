import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { CONTACT, NAV_LINKS, ROUTES } from "@/utils/constants";
import { InstagramIcon } from "@/shared/components/ui";

const productLinks = [
  { label: "All Products", href: ROUTES.products },
  { label: "Mop", href: ROUTES.category("mop") },
  { label: "Sweeping Brush", href: ROUTES.category("sweeping-brush") },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={ROUTES.home} className="flex items-center gap-2.5">
              <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Blossom logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </span>
              <span className="text-lg font-bold tracking-tight text-primary">
                Blossom
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The Blossom product makes the world clean. Quality housekeeping
              and car care products across Nigeria and Canada since 2007.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold tracking-tight">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={ROUTES.cart}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold tracking-tight">Products</h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-tight">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <InstagramIcon className="size-4 shrink-0" />
                  @{CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            ©{new Date().getFullYear()} Blossom. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Nigeria · Canada · West Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
