import { Mail, MessageCircle, Phone } from "lucide-react";

import { CONTACT, whatsappLink } from "@/utils/constants";
import { InstagramIcon } from "@/shared/components/ui";

const methods = [
  {
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    hint: "We usually reply within a day.",
  },
  {
    icon: Phone,
    title: "Phone",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
    hint: "Call us for quick enquiries.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+234 818 900 2005",
    href: whatsappLink("Hello Blossom, I have a question."),
    hint: "Chat with us directly.",
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    value: `@${CONTACT.instagram}`,
    href: CONTACT.instagramUrl,
    hint: "Follow us for updates.",
  },
];

export function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {methods.map((m) => (
        <a
          key={m.title}
          href={m.href}
          target={m.href.startsWith("http") ? "_blank" : undefined}
          rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5 transition-shadow hover:shadow-md"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <m.icon className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold">{m.title}</span>
            <span className="mt-0.5 block truncate text-sm text-foreground group-hover:text-primary">
              {m.value}
            </span>
            <span className="mt-1 block text-xs text-muted-foreground">
              {m.hint}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
