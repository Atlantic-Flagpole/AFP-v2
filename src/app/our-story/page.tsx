
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Our Story',
    description: 'Learn about Atlantic Flagpole, a veteran-owned company dedicated to American excellence.',
};

export default function OurStoryPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-navy text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Since 2012</span>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mt-4 mb-8 leading-[0.9]">
                            Our <br />
                            <span className="text-accent italic">Story</span>
                        </h1>
                        <div className="space-y-6 text-xl text-white/60 font-bold leading-relaxed">
                            <p>
                                Atlantic Flagpole wasn't born in a boardroom. It was born from a desire to see the American flag flown with the dignity and durability it deserves.
                            </p>
                            <p>
                                As a veteran-owned business, we understand the importance of hardware that doesn't fail. We spent years engineering a telescoping system that eliminates the frustrations of traditional poles.
                            </p>
                            <p>
                                Today, we are proud to have helped over 10,000 families across America fly their colors with pride.
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                        <Image
                            src="/hero.jpg"
                            alt="Atlantic Flagpole Story"
                            fill
                            className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                        <div className="absolute bottom-12 left-12">
                            <h3 className="text-4xl font-black uppercase tracking-tighter italic">American <br /> Made.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
