import type { Metadata } from "next";
import { SearchPage } from "@/features/products/pages";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Blossom product catalogue.",
};

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;
  return <SearchPage query={q} />;
}
