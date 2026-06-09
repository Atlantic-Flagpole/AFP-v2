'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND_CONFIG } from '@/lib/shopify/brand';
import { useState, useEffect } from 'react';
import { Product } from '@/lib/shopify';

interface HeroWithSizeSelectorProps {
  phoenixProducts: Product[];
}

const SIZES = [
  { key: '15ft', label: '15ft', value: 'Phoenix 15ft' },
  { key: '20ft', label: '20ft', value: 'Phoenix 20ft' },
  { key: '25ft', label: '25ft', value: 'Phoenix 25ft' },
];

export default function HeroWithSizeSelector({ phoenixProducts }: HeroWithSizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState('20ft');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [displayPrice, setDisplayPrice] = useState('$0');
  const [displayImage, setDisplayImage] = useState('/hero.jpg');

  // Map size to product based on title
  useEffect(() => {
    if (!phoenixProducts || phoenixProducts.length === 0) return;

    let product = phoenixProducts.find(p =>
      p.title.toLowerCase().includes(selectedSize.toLowerCase()) ||
      p.title.toLowerCase().includes(selectedSize.split('ft')[0])
    );

    // Fallback to first product if exact match not found
    if (!product) {
      product = phoenixProducts[0];
    }

    setSelectedProduct(product);

    if (product) {
      // Get price
      const price = product.priceRange?.minVariantPrice?.amount || '999';
      setDisplayPrice(`$${parseInt(price)}`);

      // Get first image
      const image = product.images?.edges?.[0]?.node?.url || '/hero.jpg';
      setDisplayImage(image);
    }
  }, [selectedSize, phoenixProducts]);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={displayImage || '/hero.jpg'}
          alt={selectedProduct?.title || "Atlantic Flagpole Premium Residential Setting"}
          fill
          className="object-cover opacity-50 scale-110 animate-in zoom-in duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rating Badge */}
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

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6 tracking-[-0.04em] animate-in fade-in slide-in-from-bottom-8 duration-700 uppercase">
            Phoenix: The Last Flagpole <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover italic">You&apos;ll Ever Need.</span>
          </h1>

          {/* Size Selector Buttons */}
          <div className="flex flex-col items-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            <p className="text-sm font-bold text-white/70 uppercase tracking-widest">SELECT YOUR SIZE:</p>
            <div className="flex gap-4 flex-wrap justify-center">
              {SIZES.map((size) => (
                <button
                  key={size.key}
                  onClick={() => setSelectedSize(size.key)}
                  className={`px-8 py-3 font-black uppercase tracking-widest text-sm rounded-full transition-all transform hover:scale-105 active:scale-95 ${
                    selectedSize === size.key
                      ? 'bg-accent text-white shadow-2xl shadow-accent/40'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Product Info */}
          {selectedProduct && (
            <div className="mb-8 p-6 glass-dark rounded-xl animate-in fade-in duration-500">
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Current Selection</p>
              <h2 className="text-2xl font-black text-accent mb-2">{selectedProduct.title}</h2>
              <p className="text-4xl font-black text-white">{displayPrice}</p>
            </div>
          )}

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            {BRAND_CONFIG.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <Link
              href={selectedProduct ? `/products/${selectedProduct.handle}` : '/products/phoenix-telescoping-flagpole'}
              className="w-full sm:w-auto px-12 py-6 bg-accent text-white text-lg font-black rounded-full hover:bg-accent-hover transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 uppercase tracking-tighter"
            >
              Shop {selectedSize}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <Link
              href="/collections/all"
              className="w-full sm:w-auto px-12 py-6 glass-dark text-white text-lg font-black rounded-full hover:bg-white/10 transition-all flex items-center justify-center uppercase tracking-tighter"
            >
              View All Sizes
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-500">
            {[
              { label: 'Made in USA', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
              { label: '365-Day Trial', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> },
              { label: '100 MPH Wind', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7A7.1 7.1 0 1 1 5 8M18 8h3M18 12h3M15 16h6"></path></svg> },
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
