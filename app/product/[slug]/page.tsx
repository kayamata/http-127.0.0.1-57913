import type { Metadata } from "next";
import { ProductDetailPage } from "@/features/products/pages";
import { getProduct, getProducts } from "@/features/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product ? product.name : "Product",
    description: product?.shortDescription,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} />;
}
