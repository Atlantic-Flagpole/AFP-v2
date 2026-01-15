import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/shopify';

export default function ProductCard({ product }: { product: Product }) {
    const image = product.images.edges[0]?.node;
    const price = product.priceRange.minVariantPrice;

    return (
        <Link href={`/products/${product.handle}`} className="group flex flex-col">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-zinc-50 border border-zinc-100 group-hover:border-accent/10 transition-all duration-500">
                {image ? (
                    <Image
                        src={image.url}
                        alt={image.altText || product.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-navy/5 text-navy/10 text-xl font-black uppercase tracking-widest">
                        Ready to Ship
                    </div>
                )}

                <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 glass text-[8px] font-black uppercase tracking-[0.2em] text-navy rounded-full">
                        Premium Hardware
                    </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="w-full py-5 bg-navy text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl text-center shadow-2xl">
                        Explore Engineering
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Flagpoles</span>
                    <div className="flex items-center gap-1 group/rating">
                        <svg className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-[10px] font-black text-navy/40 tracking-widest">5.0</span>
                    </div>
                </div>
                <h3 className="text-2xl font-black text-navy leading-none tracking-tight group-hover:text-accent transition-colors uppercase">
                    {product.title}
                </h3>
                <p className="text-sm font-bold text-navy/60 mt-1">
                    Starting from {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: price.currencyCode,
                    }).format(parseFloat(price.amount))}
                </p>
            </div>
        </Link>
    );
}
