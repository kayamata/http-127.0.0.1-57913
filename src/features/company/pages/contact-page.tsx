import { PageSection } from "@/shared/components/layout";
import { ContactCards } from "@/features/company/components/contact-cards";
import { LocationList } from "@/features/company/components/location-list";

export function ContactPage() {
  return (
    <div>
      <PageSection className="border-b border-border/60">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Blossom is committed to exceeding your needs. Questions, comments
            or special requests? We&apos;d love to hear from you — don&apos;t
            hesitate to reach out.
          </p>
        </div>

        <div className="mt-10">
          <ContactCards />
        </div>
      </PageSection>

      <PageSection
        title="Visit us"
        description="Find Blossom at these locations across Nigeria."
      >
        <LocationList />
      </PageSection>
    </div>
  );
}
