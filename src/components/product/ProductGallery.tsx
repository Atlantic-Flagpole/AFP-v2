'use client';

import { useState } from 'react';
import Image from 'next/image';

type ProductGalleryProps = {
    images: {
        node: {
            url: string;
            altText: string;
        };
    }[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="sticky top-32 space-y-4">
            <div className="relative aspect-[4/5] w-full rounded-[3rem] bg-zinc-50 overflow-hidden shadow-2xl border border-zinc-100 group">
                <Image
                    src={images[selectedIndex]?.node.url}
                    alt={images[selectedIndex]?.node.altText || 'Product Image'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
                <div className="absolute top-8 left-8">
                    <span className="px-6 py-3 glass text-[10px] font-black uppercase tracking-[0.3em] text-navy rounded-full">
                        Engineering Phase 1
                    </span>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {images.map((edge, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedIndex(i)}
                        className={`relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 border transition-all ${selectedIndex === i ? 'border-accent ring-2 ring-accent/20' : 'border-zinc-100 hover:border-accent/50'
                            }`}
                    >
                        <Image
                            src={edge.node.url}
                            alt={edge.node.altText || ''}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
