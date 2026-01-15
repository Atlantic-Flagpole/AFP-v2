'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND_CONFIG } from '@/lib/shopify/brand';
import { useCart } from '@/context/CartContext';


export default function Header() {
    const { totalQuantity, setIsCartOpen } = useCart();

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-navy/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src={BRAND_CONFIG.logo.url}
                        alt={BRAND_CONFIG.logo.alt}
                        width={40}
                        height={40}
                        className="w-auto h-10"
                    />
                    <span className="text-xl font-bold text-navy uppercase tracking-tighter hidden sm:block">
                        {BRAND_CONFIG.name}
                    </span>
                </Link>


                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy/70">
                    <Link href="/collections/all" className="hover:text-navy transition-colors">Shop All</Link>
                    <Link href="/flagpoles" className="hover:text-navy transition-colors">Flagpoles</Link>
                    <Link href="/accessories" className="hover:text-navy transition-colors">Accessories</Link>
                    <Link href="/about" className="hover:text-navy transition-colors">Our Story</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="p-2 text-navy hover:bg-navy/5 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="p-2 text-navy hover:bg-navy/5 rounded-full transition-colors relative"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        {totalQuantity > 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-white text-[10px] flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                                {totalQuantity}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

