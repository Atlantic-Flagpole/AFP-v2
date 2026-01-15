
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Flagpole Accessories',
    description: 'Premium flags, lighting, and hardware for your telescoping flagpole.',
};

export default function AccessoriesPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container mx-auto px-4 text-center">
                <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Essential Gear</span>
                <h1 className="text-6xl md:text-8xl font-black text-navy uppercase tracking-tighter mt-4 mb-8">
                    Accessories
                </h1>
                <div className="max-w-2xl mx-auto glass p-12 rounded-5xl border-dashed border-2 border-navy/10 mt-12">
                    <p className="text-navy/60 font-bold mb-8 uppercase tracking-widest leading-relaxed">
                        Our premium accessories collection is currently being updated for the new season.
                    </p>
                    <Link
                        href="/collections/all"
                        className="inline-flex px-12 py-6 bg-navy text-white font-black rounded-full hover:bg-accent transition-all uppercase tracking-tighter"
                    >
                        Shop Main Hardware
                    </Link>
                </div>
            </div>
        </div>
    );
}
