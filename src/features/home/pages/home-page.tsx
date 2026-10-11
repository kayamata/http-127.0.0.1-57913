import {
  AboutTeaser,
  CategoriesPreview,
  CtaBanner,
  FeaturedProducts,
  HomeIntro,
  ProductSpotlight,
} from "@/features/home/components";

export function HomePage() {
  return (
    <>
      <HomeIntro />
      <CategoriesPreview />
      <FeaturedProducts />
      <ProductSpotlight />
      <AboutTeaser />
      <CtaBanner />
    </>
  );
}
