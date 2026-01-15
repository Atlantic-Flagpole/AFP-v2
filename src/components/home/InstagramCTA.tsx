
import Link from 'next/link';
import Image from 'next/image';
import { BRAND_CONFIG } from '@/lib/shopify/brand';

export default function InstagramCTA() {
    return (
        <section className="py-24 bg-zinc-50 border-y border-zinc-200">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto glass-dark rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center border-white/10 shadow-2xl">
                    <div className="md:w-1/2 p-12 lg:p-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </div>
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Join the Community</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">
                            Follow Us On <br />
                            <span className="text-accent not-italic">Instagram</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-sm font-medium">
                            See our flagpoles in action across America. Tag us for a chance to be featured.
                        </p>
                        <Link
                            href={BRAND_CONFIG.social.instagram}
                            target="_blank"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy font-black rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95 uppercase tracking-tighter"
                        >
                            @atlanticflagpole
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </Link>
                    </div>
                    <div className="md:w-1/2 relative aspect-square md:aspect-auto self-stretch">
                        <Image
                            src="/hero.jpg"
                            alt="Follow us on Instagram"
                            fill
                            className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-transparent hidden md:block" />
                    </div>
                </div>
            </div>
        </section>
    );
}
