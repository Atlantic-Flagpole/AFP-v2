
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/shopify';

export default function ProductCard({ product }: { product: Product }) {
    const image = product.images.edges[0]?.node;
    const price = product.priceRange.minVariantPrice;

    return (
        <Link href={`/products/${product.handle}`} className="group flex flex-col items-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-zinc-100 group-hover:shadow-2xl transition-all duration-500">
                {image ? (
                    <Image
                        src={image.url}
                        alt={image.altText || product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-navy/10 text-4xl font-bold uppercase">
                        No Image
                    </div>
                )}

                {/* Rapid CTA / Hover Button */}
                <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-full py-4 bg-white/90 backdrop-blur text-navy text-sm font-bold rounded-2xl text-center shadow-xl">
                        View Details
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-1 w-full text-left">
                <h3 className="text-xl font-bold text-navy group-hover:text-accent transition-colors">
                    {product.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-medium text-navy/80">
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: price.currencyCode,
                        }).format(parseFloat(price.amount))}
                    </span>
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs font-bold text-navy/40 uppercase">5.0 (42)</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
