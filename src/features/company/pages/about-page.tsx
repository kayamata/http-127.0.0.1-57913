import Image from "next/image";
import { Award, Globe2, Handshake, Sparkles } from "lucide-react";

import { PageSection } from "@/shared/components/layout";
import { InfoSection } from "@/features/company/components/info-section";

const stats = [
  { value: "2007", label: "Founded" },
  { value: "2023", label: "Expanded to Canada" },
  { value: "4+", label: "Partner countries" },
  { value: "2", label: "Continents served" },
];

const values = [
  {
    icon: Award,
    title: "Quality products",
    text: "We maintain a high standard across our entire range.",
  },
  {
    icon: Handshake,
    title: "Affordable pricing",
    text: "Quality at a price our customers can rely on.",
  },
  {
    icon: Sparkles,
    title: "Customer satisfaction",
    text: "Your satisfaction is our top priority, always.",
  },
  {
    icon: Globe2,
    title: "Global partners",
    text: "Trusted suppliers in the USA, Indonesia, Germany and China.",
  },
];

export function AboutPage() {
  return (
    <div>
      {/* Intro */}
      <PageSection className="border-b border-border/60">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              More About Blossom
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Our story
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              BLOSSOM was founded in 2007. We are known for importing the best
              quality car care and housekeeping products in Africa.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-muted">
            <Image
              src="/brand/about.jpg"
              alt="The Blossom logo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border/60 bg-card p-5"
            >
              <dt className="text-3xl font-bold text-primary">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      {/* Story */}
      <PageSection className="bg-secondary/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <InfoSection eyebrow="Who we are" title="From Nigeria to the world">
            <p>
              Blossom Shop Limited was registered with the Corporate Affairs
              Commission (CAC) in Nigeria. In 2023, Blossom expanded to Canada
              and registered as Blossom Supplies.
            </p>
            <p>
              At Blossom, we deal in housekeeping products, toiletries, car care
              products, and lots more. We have reliable partners in countries
              like the USA, Indonesia, Germany, and China.
            </p>
          </InfoSection>

          <InfoSection eyebrow="What we do" title="Quality you can count on">
            <p>
              With our partnerships, we bring quality products at affordable
              prices to Nigeria, Canada, and other West African countries.
            </p>
            <p>
              Over the past few years Blossom has grown wide — with branches and
              marketers around Africa and Canada. We try our best to give our
              customers what they want and make them feel comfortable.
            </p>
          </InfoSection>
        </div>
      </PageSection>

      {/* Values */}
      <PageSection
        title="What we stand for"
        description="The principles behind every Blossom product."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-border/60 bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Vision */}
      <PageSection className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Our vision
          </p>
          <p className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
            To provide high-quality products, maintain a high standard across
            the world, and deliver a high level of customer satisfaction — at an
            affordable rate.
          </p>
        </div>
      </PageSection>
    </div>
  );
}
