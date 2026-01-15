
import { Metadata } from 'next';
import { getBaseMetadata } from '@/lib/seo';
import TrustBadges from '@/components/ui/TrustBadges';
import Link from 'next/link';

type Props = {
    params: Promise<{ state: string; city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { state, city } = await params;
    const stateLabel = state.charAt(0).toUpperCase() + state.slice(1);
    const cityLabel = city.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return getBaseMetadata({
        title: `Premium Flagpoles in ${cityLabel}, ${stateLabel}`,
        description: `Atlantic Flagpole provides high-durability telescoping flagpoles in ${cityLabel}, ${stateLabel}. Veteran owned and American made.`,
        openGraph: {
            title: `Best Flagpoles in ${cityLabel}, ${stateLabel} | Atlantic Flagpole`,
            description: `Shop the Phoenix Telescoping Flagpole in ${cityLabel}. The last flagpole you'll ever need.`,
        },
    });
}

export default async function LocationPage({ params }: Props) {
    const { state, city } = await params;
    const stateLabel = state.charAt(0).toUpperCase() + state.slice(1);
    const cityLabel = city.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="flex flex-col">
            {/* Dynamic Hero for Location */}
            <section className="bg-navy py-24 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
                        Flagpoles for <span className="text-accent underline underline-offset-8 decoration-4">{cityLabel}, {stateLabel}</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
                        Atlantic Flagpole is proud to serve the residents of {cityLabel}. Get the same high-quality, veteran-designed hardware used by patriots nationwide.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/products/phoenix-telescoping-flagpole"
                            className="px-8 py-4 bg-white text-navy font-bold rounded-full hover:bg-accent hover:text-white transition-all shadow-xl"
                        >
                            Shop Phoenix Flagpole
                        </Link>
                    </div>
                </div>
            </section>

            <TrustBadges />

            {/* Local Content Section */}
            <section className="py-20 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-navy mb-8 tracking-tight">Why {cityLabel} Residents Choose Atlantic Flagpole</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-navy/80 leading-relaxed">
                            <p>
                                In {cityLabel}, we know that community and pride run deep. Whether you're flying the Stars and Stripes or a local flag, you need a flagpole that can withstand the local weather while remaining incredibly easy to operate.
                            </p>
                            <p>
                                Our Phoenix Telescoping Flagpole is the perfect choice for homeowners in {stateLabel}. It eliminates the need for messy ropes and pulleys, replacing them with a secure locking system that won't fail you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ / Schema Section could go here */}
        </div>
    );
}
