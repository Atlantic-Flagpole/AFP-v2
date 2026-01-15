
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-navy overflow-hidden">
            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="Atlantic Flagpole Premium Residential Setting"
                    fill
                    className="object-cover opacity-50 scale-110 animate-in zoom-in duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-20 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 glass-dark rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex -space-x-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <svg key={s} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.3em]">Over 10,000 Verified 5-Star Reviews</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-8 tracking-[-0.04em] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 uppercase">
                        The Last Flagpole <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover italic">You'll Ever Need.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
                        Engineered for maximum durability. American-made excellence for patriots who demand the best.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
                        <Link
                            href="/products/phoenix-telescoping-flagpole"
                            className="w-full sm:w-auto px-12 py-6 bg-accent text-white text-lg font-black rounded-full hover:bg-accent-hover transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 uppercase tracking-tighter"
                        >
                            Shop Best Seller
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                        <Link
                            href="/collections/all"
                            className="w-full sm:w-auto px-12 py-6 glass-dark text-white text-lg font-black rounded-full hover:bg-white/10 transition-all flex items-center justify-center uppercase tracking-tighter"
                        >
                            View Collection
                        </Link>
                    </div>

                    <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-500">
                        {[
                            { label: 'Made in USA', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
                            { label: 'Veteran Owned', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> },
                            { label: 'Forever Warranty', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center justify-center gap-3 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors text-accent">
                                    {item.icon}
                                </div>
                                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] group-hover:text-white/80 transition-colors">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-30">
                <div className="w-0.5 h-12 bg-gradient-to-b from-white to-transparent rounded-full" />
            </div>
        </section>
    );
}
