
import { Metadata } from 'next';
import { getProduct, getProducts } from '@/lib/shopify';
import { getBaseMetadata, getProductSchema } from '@/lib/seo';
import Image from 'next/image';
import TrustBadges from '@/components/ui/TrustBadges';
import StickyBuyBar from '@/components/product/StickyBuyBar';
import ProductStorytelling from '@/components/product/ProductStorytelling';
import ReviewBlock from '@/components/product/ReviewBlock';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { handle } = await params;
    const product = await getProduct(handle);

    if (!product) return getBaseMetadata({ title: 'Product Not Found' });

    return getBaseMetadata({
        title: product.title,
        description: product.descriptionHtml.replace(/<[^>]*>?/gm, '').slice(0, 160),
        openGraph: {
            title: product.title,
            images: product.images.edges.map(e => ({ url: e.node.url })),
        },
    });
}

export async function generateStaticParams() {
    const products = await getProducts(10);
    return products.map((product) => ({
        handle: product.handle,
    }));
}

export default async function ProductPage({ params }: Props) {
    const { handle } = await params;
    const product = await getProduct(handle);

    if (!product) notFound();

    const primaryImage = product.images.edges[0]?.node;
    const price = product.priceRange.minVariantPrice;

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema(product)) }}
            />

            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Gallery */}
                        <div className="relative aspect-square w-full rounded-4xl bg-zinc-50 overflow-hidden sticky top-24">
                            {primaryImage && (
                                <Image
                                    src={primaryImage.url}
                                    alt={primaryImage.altText || product.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-yellow-500">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-navy/60">4.9 (128 REVIEWS)</span>
                            </div>

                            <h1 className="text-5xl font-bold text-navy tracking-tighter mb-4">{product.title}</h1>
                            <p className="text-3xl font-medium text-navy/80 mb-8">
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: price.currencyCode,
                                }).format(parseFloat(price.amount))}
                            </p>

                            <div
                                className="prose prose-navy max-w-none text-navy/70 leading-relaxed mb-10"
                                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                            />

                            <div className="p-6 bg-navy/5 rounded-3xl border border-navy/10 mb-10">
                                <h4 className="font-bold text-navy mb-4 uppercase text-sm tracking-widest">Key Features</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['Telescoping Design', 'Rust-Proof Aluminum', 'Veteran Owned', '30-Day Guarantee'].map(f => (
                                        <li key={f} className="flex items-center gap-2 text-sm font-medium text-navy/80">
                                            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-full py-6 bg-navy text-white text-xl font-bold rounded-full hover:bg-accent transition-all shadow-2xl shadow-navy/20 active:scale-[0.98]">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBadges />
            <ProductStorytelling product={product} />
            <ReviewBlock />
            <StickyBuyBar product={product} />
        </div>
    );
}
