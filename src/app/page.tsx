import HeroWithSizeSelector from "@/components/home/HeroWithSizeSelector";
import InstagramCTA from "@/components/home/InstagramCTA";
import TrustBadges from "@/components/ui/TrustBadges";
import ProductGrid from "@/components/product/ProductGrid";
import { getProducts } from "@/lib/shopify";

export default async function Home() {
  // Fetch Phoenix products for the hero size selector
  const phoenixProducts = await getProducts(10, 'title:Phoenix');

  // Fetch all products for the grid
  const allProducts = await getProducts(4);

  return (
    <div className="flex flex-col">
      <HeroWithSizeSelector phoenixProducts={phoenixProducts} />
      <InstagramCTA />
      <TrustBadges />
      <ProductGrid
        products={allProducts}
        title="Bestselling Flagpoles"
      />
    </div>
  );
}



