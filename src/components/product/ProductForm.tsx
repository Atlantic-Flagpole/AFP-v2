
'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/shopify';

export default function ProductForm({ product }: { product: Product }) {
    const { addItem } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const firstVariant = product.variants.edges[0]?.node;
    const variantId = firstVariant?.id || '';

    const handleAddToCart = () => {
        if (!variantId) return;

        setIsAdding(true);
        addItem({
            id: product.id,
            variantId: variantId,
            title: product.title,
            handle: product.handle,
            quantity: 1,
            price: product.priceRange.minVariantPrice,
            image: product.images.edges[0]?.node,
        });

        setTimeout(() => setIsAdding(false), 500);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                <button
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className="w-full py-5 bg-navy text-white text-lg font-bold rounded-full hover:bg-accent transition-all shadow-xl shadow-navy/20 uppercase tracking-tighter"
                >
                    {isAdding ? 'Adding...' : 'Add to Cart'}
                </button>
                <button className="w-full py-5 border-2 border-navy text-navy text-lg font-bold rounded-full hover:bg-navy hover:text-white transition-all uppercase tracking-tighter">
                    Buy Now
                </button>
            </div>

            <p className="text-center text-xs text-navy/40 uppercase font-bold tracking-widest">
                Free Shipping & Lifetime Warranty Included
            </p>
        </div>
    );
}
