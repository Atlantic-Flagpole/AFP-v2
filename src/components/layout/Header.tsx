'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND_CONFIG } from '@/lib/shopify/brand';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

export default function Header() {
    const { totalQuantity, setIsCartOpen } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <Image
                            src={BRAND_CONFIG.logo.url}
                            alt={BRAND_CONFIG.logo.alt}
                            width={48}
                            height={48}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-black tracking-tighter uppercase leading-none ${isScrolled ? 'text-navy' : 'text-white'}`}>
                            {BRAND_CONFIG.name.split(' ')[0]}
                            <span className="text-accent">{BRAND_CONFIG.name.split(' ')[1]}</span>
                        </span>
                        <span className={`text-[8px] font-bold tracking-[0.3em] uppercase opacity-60 ${isScrolled ? 'text-navy' : 'text-white'}`}>
                            American Excellence
                        </span>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-10">
                    {['Shop All', 'Flagpoles', 'Accessories', 'Our Story'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Shop All' ? '/collections/all' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-accent relative group ${isScrolled ? 'text-navy' : 'text-white'
                                }`}
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button className={`p-3 rounded-full transition-all hover:bg-white/10 active:scale-90 ${isScrolled ? 'text-navy' : 'text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className={`p-3 rounded-full transition-all hover:bg-white/10 relative group active:scale-90 ${isScrolled ? 'text-navy' : 'text-white'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        {totalQuantity > 0 && (
                            <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-[10px] font-bold text-white flex items-center justify-center rounded-full animate-in zoom-in duration-300 ring-2 ring-white">
                                {totalQuantity}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

