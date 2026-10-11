"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/utils/cn";
import { Badge } from "@/shared/components/ui";

interface ProductGalleryProps {
  images: string[];
  name: string;
  badge?: string;
}

export function ProductGallery({ images, name, badge }: ProductGalleryProps) {
  const [active, setActive] = React.useState(0);
  const list = images.length > 0 ? images : ["/logo.png"];
  const src = list[Math.min(active, list.length - 1)];

  return (
    <div className="flex flex-col gap-3">
      {/* Main image — contain keeps the full product in frame, no cropping */}
      <div className="relative aspect-square overflow-hidden rounded-xl border border-border/60 bg-tile">
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-6 sm:p-10"
          priority
        />
        {badge && (
          <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground shadow-sm">
            {badge}
          </Badge>
        )}
      </div>

      {list.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {list.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1} of ${name}`}
              aria-pressed={i === active}
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg border bg-tile transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                i === active
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border/60 hover:border-primary/40"
              )}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="(max-width: 1024px) 25vw, 12vw"
                className="object-contain p-1.5 sm:p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
