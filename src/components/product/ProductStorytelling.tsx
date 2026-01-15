
import { Product } from '@/lib/shopify';

export default function ProductStorytelling({ product }: { product: Product }) {
    return (
        <section className="py-24 bg-zinc-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-32">
                    {/* Section 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight tracking-tighter">
                                Engineered for <br /><span className="text-accent underline decoration-4 underline-offset-8">Strength & Beauty.</span>
                            </h2>
                            <p className="text-xl text-navy/70 leading-relaxed">
                                Most flagpoles on the market are built with cheap materials that rust, snap, or fade within a year. Our hardware is designed by veterans who understand durability.
                            </p>
                        </div>
                        <div className="flex-1 w-full aspect-[4/3] bg-navy/5 rounded-4xl flex items-center justify-center border-2 border-navy/10 italic text-navy/20 font-bold text-xl">
                            [Detail Image Placeholder]
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight tracking-tighter">
                                The Phoenix Advantage <br /><span className="text-accent underline decoration-4 underline-offset-8">No Ropes, No Tangles.</span>
                            </h2>
                            <p className="text-xl text-navy/70 leading-relaxed">
                                Our patented telescoping system allows you to raise and lower your flag in seconds, without ever touching a rope.
                            </p>
                        </div>
                        <div className="flex-1 w-full aspect-[4/3] bg-white rounded-4xl flex items-center justify-center border-2 border-navy/10 italic text-navy/20 font-bold text-xl shadow-2xl">
                            [Patented Mechanism Image]
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
