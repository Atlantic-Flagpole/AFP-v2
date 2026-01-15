
import { Metadata } from 'next';
import { getCollection, getCollections } from '@/lib/shopify';
import { getBaseMetadata } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TrustBadges from '@/components/ui/TrustBadges';

type Props = {
    params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { handle } = await params;
    const collection = await getCollection(handle);

    if (!collection) return getBaseMetadata({ title: 'Collection Not Found' });

    return getBaseMetadata({
        title: collection.title,
        description: collection.descriptionHtml.replace(/<[^>]*>?/gm, '').slice(0, 160) || `Shop ${collection.title} at Atlantic Flagpole.`,
    });
}

export async function generateStaticParams() {
    const collections = await getCollections(20);
    return collections.map((c) => ({
        handle: c.handle,
    }));
}

export default async function CollectionPage({ params }: Props) {
    const { handle } = await params;
    const collection = await getCollection(handle);

    if (!collection) notFound();

    return (
        <div className="flex flex-col min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative bg-navy py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full flex items-center justify-center text-[20vw] font-black uppercase -rotate-12 select-none text-white blur-sm">
                        {collection.title.slice(0, 3)}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        {collection.title}
                    </h1>
                    <div
                        className="prose prose-lg prose-invert mx-auto text-white/70 max-w-2xl font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: collection.descriptionHtml }}
                    />
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-24 bg-zinc-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {collection.products.length > 0 ? (
                            collection.products.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/products/${product.handle}`}
                                    className="group flex flex-col gap-6"
                                >
                                    <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-navy/5 border border-navy/5 group-hover:border-accent/30 transition-all duration-500 group-hover:-translate-y-2">
                                        {/* Image */}
                                        {product.images.edges[0] ? (
                                            <Image
                                                src={product.images.edges[0].node.url}
                                                alt={product.images.edges[0].node.altText || product.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-navy/20 font-bold uppercase tracking-widest">
                                                No Image
                                            </div>
                                        )}

                                        {/* Overlay Bagde */}
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-2 glass text-[10px] font-black uppercase tracking-[0.2em] text-navy rounded-full">
                                                Premium
                                            </span>
                                        </div>

                                        {/* Quick View Button (Visual Only for now) */}
                                        <div className="absolute inset-x-6 bottom-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                            <button className="w-full py-4 bg-navy text-white text-sm font-bold uppercase tracking-widest rounded-full shadow-xl">
                                                View Product
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 items-center text-center px-4">
                                        <h3 className="text-xl font-bold text-navy uppercase tracking-tight group-hover:text-accent transition-colors">
                                            {product.title}
                                        </h3>
                                        <div className="px-4 py-1 border border-navy/10 rounded-full">
                                            <span className="text-sm font-black text-navy/60">
                                                {new Intl.NumberFormat('en-US', {
                                                    style: 'currency',
                                                    currency: product.priceRange.minVariantPrice.currencyCode,
                                                }).format(parseFloat(product.priceRange.minVariantPrice.amount))}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <h3 className="text-2xl font-bold text-navy/40 uppercase tracking-widest">No products found in this collection.</h3>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <div className="border-t border-zinc-200 bg-white">
                <TrustBadges />
            </div>
        </div>
    );
}
