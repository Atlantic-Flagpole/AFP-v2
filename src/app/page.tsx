import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/ui/TrustBadges";
import ProductGrid from "@/components/product/ProductGrid";
import { getProducts } from "@/lib/shopify";

export default async function Home() {
  const products = await getProducts(4);

  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBadges />
      <ProductGrid
        products={products}
        title="Bestselling Flagpoles"
      />
    </div>
  );
}



