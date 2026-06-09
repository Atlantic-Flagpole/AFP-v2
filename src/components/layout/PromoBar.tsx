'use client';

import Link from 'next/link';

export default function PromoBar() {
    return (
        <div className="w-full bg-gradient-to-r from-accent via-red-600 to-accent text-white py-2.5 px-4 relative overflow-hidden z-50">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/50 via-red-600/50 to-accent/50 animate-pulse" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
                <span className="text-[13px] md:text-sm font-black uppercase tracking-[0.15em] animate-bounce">🎉</span>
                <Link
                    href="/products/phoenix-telescoping-flagpole-premier-kit-starter-bundle"
                    className="text-[12px] md:text-sm font-black uppercase tracking-[0.12em] hover:brightness-110 transition-all duration-200 flex-1"
                >
                    EXCLUSIVE PROMO: <span className="text-yellow-100 font-black">JUNEBUG</span> — $75 OFF Phoenix Telescoping Flagpole Kits (15ft, 20ft, 25ft)
                </Link>
                <span className="text-[13px] md:text-sm font-black uppercase tracking-[0.15em] animate-bounce">🎉</span>
            </div>
        </div>
    );
}
