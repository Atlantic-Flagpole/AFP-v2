'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BRAND_CONFIG } from '@/lib/shopify/brand';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import { Menu } from '@/lib/shopify';

export default function Header({ menu }: { menu: Menu[] }) {
    const { totalQuantity, setIsCartOpen } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Logic: 
    // Home: Transparent at top (white text), Glass when scrolled (navy text)
    // Others: Always Navy background (white text)
    const headerClass = isHome
        ? (isScrolled ? 'py-3 glass' : 'py-6 bg-transparent')
        : 'py-3 bg-navy shadow-lg';

    const textColor = (isHome && isScrolled) ? 'text-navy' : 'text-white';

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${headerClass}`}
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
                        <span className={`text-xl font-black tracking-tighter uppercase leading-none ${textColor}`}>
                            {BRAND_CONFIG.name.split(' ')[0]}
                            <span className="text-accent">{BRAND_CONFIG.name.split(' ')[1]}</span>
                        </span>
                        <span className={`text-[8px] font-bold tracking-[0.3em] uppercase opacity-60 ${textColor}`}>
                            American Excellence
                        </span>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-10">
                    {menu.map((item) => (
                        <div key={item.title} className="relative group h-full flex items-center">
                            <Link
                                href={item.path}
                                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-accent relative py-4 ${textColor}`}
                            >
                                {item.title}
                                <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                            </Link>

                            {/* Dropdown for Submenu */}
                            {item.items && item.items.length > 0 && (
                                <div className="absolute top-full left-0 min-w-[200px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                    <div className="bg-white rounded-xl shadow-xl border border-navy/5 overflow-hidden flex flex-col py-2">
                                        {item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.path}
                                                className="px-6 py-3 text-[11px] font-bold text-navy hover:bg-zinc-50 hover:text-accent transition-colors uppercase tracking-widest text-left"
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <a
                        href={BRAND_CONFIG.contact.phoneClick}
                        className={`hidden xl:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors ${textColor}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        {BRAND_CONFIG.contact.phone}
                    </a>
                </nav>

                <div className="flex items-center gap-2">
                    <button className={`p-3 rounded-full transition-all hover:bg-white/10 active:scale-90 ${textColor}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className={`p-3 rounded-full transition-all hover:bg-white/10 relative group active:scale-90 ${textColor}`}
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

