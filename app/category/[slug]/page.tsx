import type { Metadata } from "next";
import { CategoryPage } from "@/features/products/pages";
import { getCategory } from "@/features/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return {
    title: category ? category.name : "Category",
    description: category?.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <CategoryPage slug={slug} />;
}
