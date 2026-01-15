
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center bg-navy overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Atlantic Flagpole Premium Residential Setting"
                    fill
                    className="object-cover opacity-60 scale-105 animate-in zoom-in duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent z-10" />
            </div>


            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-6 animate-fade-in">
                        <div className="flex -space-x-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-white/80">OVER 10,000+ 5-STAR REVIEWS</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tighter">
                        The Last Flagpole <br />
                        <span className="text-accent underline decoration-4 underline-offset-8">You'll Ever Need.</span>
                    </h1>

                    <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                        Tired of flagpoles that bend, break, or tangle? Our telescoping flagpoles are engineered for maximum durability and effortless operation. Veteran owned, American made excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link
                            href="/products/phoenix-telescoping-flagpole"
                            className="w-full sm:w-auto px-10 py-5 bg-navy text-white text-lg font-bold rounded-full hover:bg-accent transition-all transform hover:scale-105 shadow-xl shadow-navy/20 flex items-center justify-center gap-2"
                        >
                            Shop Best Seller
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/collections/flagpoles"
                            className="w-full sm:w-auto px-10 py-5 bg-white text-navy text-lg font-bold rounded-full border-2 border-navy/10 hover:border-navy transition-all flex items-center justify-center"
                        >
                            View Collection
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
                        <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-bold text-white/60 uppercase">Made in USA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-bold text-white/60 uppercase">Veteran Owned</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-bold text-white/60 uppercase">30-Day Guarantee</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
