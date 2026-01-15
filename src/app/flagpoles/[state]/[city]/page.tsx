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

    // Dynamic Copy based on Weather Zone
    const getWeatherCopy = () => {
        switch (location.weatherZone) {
            case 'hurricane':
            case 'high-wind':
                return {
                    headline: `Engineered for ${location.city}'s High Winds`,
                    body: `In ${location.city}, wind gusts can be unpredictable. The Phoenix Telescoping Flagpole is rated for 100 MPH winds, ensuring your flag flies proudly even during ${location.state}'s severe weather seasons.`
                };
            case 'coastal':
                return {
                    headline: `Salt-Water Proof for ${location.city} residents`,
                    body: `Living in ${location.city} implies exposure to salt air. Our 6000 Series Aluminum is anodized to resist corrosion, making it the only choice for coastal ${location.state} homes.`
                };
            case 'winter':
                return {
                    headline: `Freeze-Proof Design for ${location.city}`,
                    body: `Don't let ${location.city}'s winters freeze your hardware. Our pulley-free "Securi-Lock" system has no moving parts to jam with ice, perfect for the ${location.state} cold.`
                };
            default:
                return {
                    headline: `The Last Flagpole ${location.city} Will Ever Need`,
                    body: `Residents of ${location.city} demand quality. The Phoenix Telescoping Flagpole offers a lifetime warranty and aerospace-grade strength, perfectly suited for ${location.state} homes.`
                };
        }
    };

    const copy = getWeatherCopy();

    return (
        <div className="flex flex-col">
            {/* Dynamic Hero for Location */}
            <section className="relative min-h-[60vh] flex items-center justify-center bg-navy overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full flex items-center justify-center text-[15vw] font-black uppercase -rotate-12 select-none text-white blur-sm">
                        {location.stateSlug.slice(0, 2)}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50 z-10" />

                <div className="container mx-auto px-4 text-center relative z-20 pt-20">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 glass rounded-full border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Now Shipping to {location.city}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                        Flagpoles for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">{location.city}, {location.state}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        {copy.body}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            href="/products/phoenix-telescoping-flagpole"
                            className="px-10 py-5 bg-accent text-white font-black text-lg rounded-full hover:bg-accent-hover transition-all shadow-2xl shadow-accent/20 transform hover:scale-105 uppercase tracking-wide"
                        >
                            Shop Phoenix Flagpole
                        </Link>
                        <Link
                            href="/collections/all"
                            className="px-10 py-5 glass text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all uppercase tracking-wide"
                        >
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            <TrustBadges />

            {/* Weather Defense Section */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-1 bg-accent" />
                            <h2 className="text-xs font-black text-navy uppercase tracking-[0.3em]">Engineered for {location.state}</h2>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-black text-navy mb-12 tracking-tight">
                            {copy.headline}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-navy/80 leading-relaxed text-lg">
                            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-navy/5 border border-navy/5">
                                <h4 className="text-xl font-black text-navy mb-4 uppercase tracking-tighter">100 MPH Wind Guarantee</h4>
                                <p className="text-base text-navy/60">
                                    Traditional poles bend or snap under {location.city}'s extreme weather. Our 6000 pound-per-square-inch tensile strength aluminum ensures your flag keeps flying high.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-navy/5 border border-navy/5">
                                <h4 className="text-xl font-black text-navy mb-4 uppercase tracking-tighter">Lifetime Warranty</h4>
                                <p className="text-base text-navy/60">
                                    We are so confident in our American engineering that every flagpole shipped to {location.city} comes with an iron-clad lifetime warranty. Including theft protection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Linking / Nearby Cities (Simple Implementation) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h4 className="text-sm font-bold text-navy/40 uppercase tracking-widest mb-8">We also serve these {location.state} communities</h4>
                    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {LOCATIONS.filter(l => l.stateSlug === location.stateSlug && l.slug !== location.slug).slice(0, 6).map(neighbor => (
                            <Link
                                key={neighbor.slug}
                                href={`/flagpoles/${neighbor.stateSlug}/${neighbor.slug}`}
                                className="px-4 py-2 bg-zinc-50 rounded-lg text-sm font-bold text-navy hover:bg-navy hover:text-white transition-colors border border-zinc-100"
                            >
                                {neighbor.city}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

