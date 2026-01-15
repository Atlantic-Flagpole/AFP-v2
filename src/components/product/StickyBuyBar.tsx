
'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/lib/shopify';

export default function StickyBuyBar({ product }: { product: Product }) {
    const [isVisible, setIsVisible] = useState(false);
    const price = product.priceRange.minVariantPrice;

    useEffect(() => {
        const handleScroll = () => {
            // Show bar after user scrolls past the main buy button (roughly 800px)
            setIsVisible(window.scrollY > 800);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white/90 backdrop-blur-xl border border-navy/10 rounded-full p-2 md:p-3 shadow-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4 ml-4">
                        <div className="hidden sm:block">
                            <h4 className="text-sm font-bold text-navy line-clamp-1">{product.title}</h4>
                            <p className="text-xs font-semibold text-navy/60">
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: price.currencyCode,
                                }).format(parseFloat(price.amount))}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleScrollToTop}
                        className="px-8 md:px-12 py-3 md:py-4 bg-navy text-white text-base md:text-lg font-bold rounded-full hover:bg-accent transition-all active:scale-[0.98]"
                    >
                        <span className="hidden sm:inline">Configure & Buy</span>
                        <span className="sm:hidden">Buy - {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: price.currencyCode,
                        }).format(parseFloat(price.amount))}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
