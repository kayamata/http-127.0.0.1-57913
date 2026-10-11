import * as React from "react";

import { cn } from "@/utils/cn";

interface PageSectionProps extends React.ComponentProps<"section"> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  containerClassName?: string;
}

/**
 * A consistent page section wrapper: centered container with an optional
 * heading row (title + description + trailing action).
 */
export function PageSection({
  title,
  description,
  action,
  className,
  containerClassName,
  children,
  ...props
}: PageSectionProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)} {...props}>
      <div
        className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}
      >
        {(title || description || action) && (
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              {title && (
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {description}
                </p>
              )}
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
