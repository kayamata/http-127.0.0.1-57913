import * as React from "react";

import { cn } from "@/utils/cn";

interface InfoSectionProps {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** A labelled content block used to break company info into digestible parts. */
export function InfoSection({
  eyebrow,
  title,
  children,
  className,
}: InfoSectionProps) {
  return (
    <section className={cn("border-l-2 border-primary/40 pl-5 sm:pl-6", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
