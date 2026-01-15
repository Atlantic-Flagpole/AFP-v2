
import { Product } from '@/lib/shopify';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, title }: { products: Product[], title?: string }) {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {title && (
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tighter mb-4">{title}</h2>
                            <div className="h-1.5 w-24 bg-accent rounded-full" />
                        </div>
                        <p className="hidden md:block text-navy/60 font-medium max-w-xs text-right">
                            Premium hardware designed for patriots, by patriots.
                        </p>
                    </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
