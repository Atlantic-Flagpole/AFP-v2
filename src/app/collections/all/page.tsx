
import { getProducts } from '@/lib/shopify';
import ProductGrid from '@/components/product/ProductGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Shop All Products',
    description: 'Explore our full collection of premium telescoping flagpoles and accessories.',
};

export default async function ShopAllPage() {
    const products = await getProducts(50);

    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-4 mb-16">
                    <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Collection</span>
                    <h1 className="text-6xl md:text-8xl font-black text-navy uppercase tracking-tighter leading-none">
                        Our Entire <br />
                        <span className="text-accent">Collection</span>
                    </h1>
                    <div className="h-2 w-32 bg-navy mt-4" />
                </div>

                {products.length > 0 ? (
                    <ProductGrid products={products} />
                ) : (
                    <div className="py-24 text-center glass rounded-5xl border-dashed border-2 border-navy/10">
                        <p className="text-navy/40 font-black uppercase tracking-widest">
                            No products found in this collection.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
