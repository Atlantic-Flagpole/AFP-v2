import { Metadata } from 'next';
import { getBaseMetadata } from '@/lib/seo';
import TrustBadges from '@/components/ui/TrustBadges';
import Link from 'next/link';
import { LOCATIONS } from '@/data/locations';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ state: string; city: string }>;
};

export async function generateStaticParams() {
    return LOCATIONS.map((loc) => ({
        state: loc.stateSlug,
        city: loc.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { state, city } = await params;
    const location = LOCATIONS.find(l => l.stateSlug === state && l.slug === city);

    if (!location) return getBaseMetadata({ title: 'Location Not Found' });

    return getBaseMetadata({
        title: `Premium Flagpoles in ${location.city}, ${location.state}`,
        description: `Atlantic Flagpole provides high-durability telescoping flagpoles in ${location.city}, ${location.state}. Veteran owned and American made.`,
        openGraph: {
            title: `Best Flagpoles in ${location.city}, ${location.state} | Atlantic Flagpole`,
            description: `Shop the Phoenix Telescoping Flagpole in ${location.city}. The last flagpole you'll ever need.`,
        },
    });
}

export default async function LocationPage({ params }: Props) {
    const { state, city } = await params;
    const location = LOCATIONS.find(l => l.stateSlug === state && l.slug === city);

    if (!location) notFound();

    return (
        <div className="flex flex-col">
            {/* Dynamic Hero for Location */}
            <section className="bg-navy py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full flex items-center justify-center text-[20rem] font-bold uppercase rotate-12 select-none">
                        {location.stateSlug.slice(0, 2)}
                    </div>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                        Flagpoles for <span className="text-accent underline underline-offset-8 decoration-4">{location.city}, {location.state}</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Atlantic Flagpole is proud to serve the residents of {location.city}. Get the same high-quality, military-grade hardware used by patriots nationwide.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/products/phoenix-telescoping-flagpole"
                            className="px-10 py-5 bg-white text-navy font-bold rounded-full hover:bg-accent hover:text-white transition-all shadow-2xl transform hover:scale-105"
                        >
                            Shop Phoenix Flagpole
                        </Link>
                    </div>
                </div>
            </section>

            <TrustBadges />

            {/* Local Content Section */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-navy mb-10 tracking-tight">Why {location.city} Residents Choose Atlantic Flagpole</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-navy/80 leading-relaxed text-lg">
                            <div className="space-y-6">
                                <p>
                                    In {location.city}, we know that community and pride run deep. Whether you're flying the Stars and Stripes or a local flag, you need a flagpole that can withstand the local climate while remaining incredibly easy to operate.
                                </p>
                                <div className="p-6 bg-white rounded-3xl border border-navy/5 shadow-sm">
                                    <h4 className="font-bold text-navy mb-2">Built for {location.state} Weather</h4>
                                    <p className="text-sm">Our 6000 Series Aluminum is designed to handle high-wind conditions without bending or breaking.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    Our Phoenix Telescoping Flagpole is the perfect choice for homeowners in {location.state}. It eliminates the need for messy ropes and pulleys, replacing them with a secure locking system that won't fail you.
                                </p>
                                <div className="p-6 bg-white rounded-3xl border border-navy/5 shadow-sm">
                                    <h4 className="font-bold text-navy mb-2">No Ropes, No Tangles</h4>
                                    <p className="text-sm">Patented design ensures your flag flies beautifuly in {location.city} without the noise of clanging hardware.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold text-navy mb-8">Ready to Fly Your Colors in {location.city}?</h3>
                    <Link href="/collections/all" className="text-accent font-bold text-lg hover:underline underline-offset-4">
                        Browse Our Entire Collection &rarr;
                    </Link>
                </div>
            </section>
        </div>
    );
}

