import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe2, Handshake } from "lucide-react";

import { ROUTES } from "@/utils/constants";
import { buttonVariants } from "@/shared/components/ui";
import { PageSection } from "@/shared/components/layout";
import { cn } from "@/utils/cn";

const values = [
  {
    icon: Award,
    title: "Quality first",
    text: "High-quality products that meet the highest standards.",
  },
  {
    icon: Handshake,
    title: "Trusted partners",
    text: "Reliable partners across the USA, Indonesia, Germany and China.",
  },
  {
    icon: Globe2,
    title: "Growing reach",
    text: "Branches and marketers across Africa and Canada.",
  },
];

export function AboutTeaser() {
  return (
    <PageSection className="bg-background">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative order-last aspect-square overflow-hidden rounded-2xl border border-border/60 bg-muted lg:order-first">
          <Image
            src="/brand/about.jpg"
            alt="The Blossom logo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Copy */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Blossom
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Lets keep the world clean
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Founded in 2007, Blossom imports the best-quality car care and
            housekeeping products in Africa. We&apos;re proud of the
            affordable, unique products we provide — and committed to offering
            only the best merchandise and the largest available selection.
          </p>

          <ul className="mt-8 space-y-4">
            {values.map((v) => (
              <li key={v.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <v.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href={ROUTES.about}
            className={cn(buttonVariants({ variant: "link" }), "mt-6 px-0")}
          >
            Read our story
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </PageSection>
  );
}
