
import { LOCATIONS } from '@/data/locations';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Flagpoles by Location',
    description: 'Find premium telescoping flagpoles available in your city and state.',
};

export default function FlagpolesPage() {
    // Group locations by state
    const states = LOCATIONS.reduce((acc, loc) => {
        if (!acc[loc.state]) {
            acc[loc.state] = [];
        }
        acc[loc.state].push(loc);
        return acc;
    }, {} as Record<string, typeof LOCATIONS>);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-zinc-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mb-20">
                    <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Distribution</span>
                    <h1 className="text-6xl md:text-8xl font-black text-navy uppercase tracking-tighter leading-[0.9] mt-4 mb-8">
                        Flagpoles <br />
                        <span className="text-accent italic">Across America</span>
                    </h1>
                    <p className="text-xl text-navy/60 font-bold leading-relaxed">
                        We ship our premium, American-made hardware to patriots nationwide. Select your location below to find local service and specifications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {Object.entries(states).map(([state, cities]) => (
                        <div key={state} className="flex flex-col gap-6">
                            <h2 className="text-2xl font-black text-navy uppercase tracking-tight border-b-2 border-accent pb-4 flex items-center justify-between">
                                {state}
                                <span className="text-[10px] text-navy/20">{cities.length} CITIES</span>
                            </h2>
                            <div className="flex flex-col gap-3">
                                {cities.map((city) => (
                                    <Link
                                        key={city.slug}
                                        href={`/flagpoles/${city.stateSlug}/${city.slug}`}
                                        className="text-sm font-bold text-navy/60 hover:text-accent transition-colors flex items-center justify-between group"
                                    >
                                        {city.city}
                                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
