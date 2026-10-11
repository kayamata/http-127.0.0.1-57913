import { MapPin, Phone } from "lucide-react";

interface StoreLocation {
  city: string;
  addresses: { label: string; phone?: string }[];
}

const LOCATIONS: StoreLocation[] = [
  {
    city: "Abuja",
    addresses: [
      {
        label: "Block 42 shop 452, Wuse Market, Wuse",
        phone: "08163052999",
      },
      {
        label: "304/305 Iya Magira Plaza, opposite Utako Market",
      },
      {
        label: "STB 26 Abuja line, Utako Market (by exit gate)",
        phone: "07064896828",
      },
      {
        label:
          "Zone D4 shop 3, Deidei Building Material Market (beside Zenith Bank), Deidei",
      },
      {
        label: "Shop 26 block B1, Nassarawa St front line, Old Garki Market, Garki",
        phone: "09074448848",
      },
    ],
  },
  {
    city: "Lagos",
    addresses: [
      {
        label: "No 5 Offin Canal Street by Holloway, Lagos Island",
        phone: "07086631131",
      },
    ],
  },
  {
    city: "Aba",
    addresses: [
      {
        label: "EWLS 22 by Free Zone Road, Ariaria Market, Aba",
        phone: "08039839105",
      },
    ],
  },
  {
    city: "Enugu",
    addresses: [
      {
        label: "No 4 Market Road by Holy Ghost (beside Sterling Bank), Enugu",
        phone: "07015999905",
      },
    ],
  },
];

export function LocationList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {LOCATIONS.map((loc) => (
        <div
          key={loc.city}
          className="rounded-xl border border-border/60 bg-card p-5"
        >
          <h3 className="flex items-center gap-2 font-semibold">
            <MapPin className="size-4 text-primary" />
            {loc.city}
            <span className="text-xs font-normal text-muted-foreground">
              ({loc.addresses.length}{" "}
              {loc.addresses.length === 1 ? "location" : "locations"})
            </span>
          </h3>
          <ul className="mt-4 space-y-3.5">
            {loc.addresses.map((a, i) => (
              <li key={i} className="text-sm">
                <p className="leading-relaxed text-foreground">{a.label}</p>
                {a.phone && (
                  <a
                    href={`tel:${a.phone}`}
                    className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="size-3.5" />
                    {a.phone}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
