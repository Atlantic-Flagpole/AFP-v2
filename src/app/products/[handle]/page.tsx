import { Metadata } from 'next';
import { getProduct, getProducts } from '@/lib/shopify';
import { getBaseMetadata, getProductSchema } from '@/lib/seo';
import Image from 'next/image';
import TrustBadges from '@/components/ui/TrustBadges';
import StickyBuyBar from '@/components/product/StickyBuyBar';
import ProductStorytelling from '@/components/product/ProductStorytelling';
import ReviewBlock from '@/components/product/ReviewBlock';
import ProductForm from '@/components/product/ProductForm';
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
    const products = await getProducts(100);
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
        <div className="flex flex-col min-h-screen pt-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema(product)) }}
            />

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        {/* Premium Gallery Layout */}
                        <div className="sticky top-32 space-y-4">
                            <div className="relative aspect-[4/5] w-full rounded-[3rem] bg-zinc-50 overflow-hidden shadow-2xl border border-zinc-100">
                                {primaryImage && (
                                    <Image
                                        src={primaryImage.url}
                                        alt={primaryImage.altText || product.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                )}
                                <div className="absolute top-8 left-8">
                                    <span className="px-6 py-3 glass text-[10px] font-black uppercase tracking-[0.3em] text-navy rounded-full">
                                        Engineering Phase 1
                                    </span>
                                </div>
                            </div>

                            {/* Additional Images Grid */}
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.edges.slice(1, 5).map((edge, i) => (
                                    <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-100 hover:border-accent transition-colors cursor-pointer">
                                        <Image src={edge.node.url} alt={edge.node.altText || ''} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* High-End Info */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex text-yellow-500 gap-1">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <span className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em]">4.9 / 128 Verified Reviews</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black text-navy leading-[0.9] tracking-[-0.04em] mb-6 uppercase italic">
                                {product.title.split(' ').slice(0, -1).join(' ')} <br />
                                <span className="text-accent not-italic">{product.title.split(' ').slice(-1)}</span>
                            </h1>

                            <div className="flex items-baseline gap-4 mb-12">
                                <span className="text-5xl font-black text-navy tracking-tighter">
                                    {new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: price.currencyCode,
                                    }).format(parseFloat(price.amount))}
                                </span>
                                <span className="text-sm font-bold text-navy/40 uppercase tracking-widest">Pricing Subject to Demand</span>
                            </div>

                            <div className="prose prose-lg prose-navy max-w-none text-navy/70 leading-relaxed mb-12 font-medium"
                                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                            />

                            <div className="p-10 glass rounded-[2.5rem] mb-12 border-navy/5">
                                <h4 className="font-black text-navy mb-8 uppercase text-xs tracking-[0.3em] flex items-center gap-3">
                                    <span className="w-8 h-px bg-accent" />
                                    Master Specifications
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                    {[
                                        { l: 'Design', v: 'Full Telescoping' },
                                        { l: 'Material', v: '6000 Series Aluminum' },
                                        { l: 'Wind Rating', v: 'Safe up to 100 MPH' },
                                        { l: 'Assembly', v: 'Zero Ropes or Pulleys' },
                                        { l: 'Origin', v: '100% American Made' },
                                        { l: 'Warranty', v: 'Forever Guarantee' }
                                    ].map(f => (
                                        <li key={f.l} className="flex flex-col gap-1">
                                            <span className="text-[8px] font-black text-navy/30 uppercase tracking-[0.1em]">{f.l}</span>
                                            <span className="text-sm font-bold text-navy uppercase tracking-tight">{f.v}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <ProductForm product={product} />

                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-zinc-50 border-t border-zinc-200">
                <TrustBadges />
            </div>
            <ProductStorytelling product={product} />
            <ReviewBlock />
            <StickyBuyBar product={product} />
        </div>
    );
}
