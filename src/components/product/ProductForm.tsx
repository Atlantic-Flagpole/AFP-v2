
'use client';


'use client';

import { useState, useMemo } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/shopify';

export default function ProductForm({ product }: { product: Product }) {
    const { addItem } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    // Initialize state with the first available variant's options
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
        const firstVariant = product.variants.edges[0]?.node;
        if (!firstVariant) return {};

        return firstVariant.selectedOptions.reduce((acc, option) => {
            acc[option.name] = option.value;
            return acc;
        }, {} as Record<string, string>);
    });

    // Find the variant that matches all selected options
    const selectedVariant = useMemo(() => {
        return product.variants.edges.find((edge) => {
            return edge.node.selectedOptions.every((option) => {
                return selectedOptions[option.name] === option.value;
            });
        })?.node;
    }, [product.variants.edges, selectedOptions]);

    const handleOptionChange = (name: string, value: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddToCart = () => {
        if (!selectedVariant) return;

        setIsAdding(true);
        addItem({
            id: product.id,
            variantId: selectedVariant.id,
            title: product.title,
            handle: product.handle,
            quantity: 1,
            price: selectedVariant.price,
            image: product.images.edges[0]?.node, // Could update to specific variant image if available
        });

        setTimeout(() => setIsAdding(false), 500);
    };

    // Helper to get color code for styling
    const getColorCode = (name: string) => {
        const n = name.toLowerCase();
        if (n.includes('bronze')) return '#CD7F32';
        if (n.includes('silver') || n.includes('satin')) return '#C0C0C0';
        if (n.includes('black')) return '#000000';
        if (n.includes('white')) return '#FFFFFF';
        return '#001B40'; // Default Navy
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Options Renderer */}
            <div className="flex flex-col gap-6">
                {product.options.map((option) => (
                    <div key={option.id} className="flex flex-col gap-3">
                        <span className="text-sm font-bold uppercase tracking-widest text-navy">
                            {option.name}: <span className="text-accent">{selectedOptions[option.name]}</span>
                        </span>

                        <div className="flex flex-wrap gap-3">
                            {option.values.map((value) => {
                                const isSelected = selectedOptions[option.name] === value;
                                const isColor = option.name.toLowerCase() === 'color' || option.name.toLowerCase() === 'finish';

                                if (isColor) {
                                    return (
                                        <button
                                            key={value}
                                            onClick={() => handleOptionChange(option.name, value)}
                                            className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${isSelected ? 'border-accent ring-2 ring-accent/30 scale-110' : 'border-zinc-200 hover:border-navy'
                                                }`}
                                            title={value}
                                        >
                                            <span
                                                className="w-8 h-8 rounded-full shadow-sm border border-black/5"
                                                style={{ backgroundColor: getColorCode(value) }}
                                            />
                                        </button>
                                    );
                                }

                                return (
                                    <button
                                        key={value}
                                        onClick={() => handleOptionChange(option.name, value)}
                                        className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border-2 transition-all ${isSelected
                                            ? 'bg-navy border-navy text-white shadow-lg shadow-navy/20'
                                            : 'bg-transparent border-zinc-200 text-navy/60 hover:border-navy hover:text-navy'
                                            }`}
                                    >
                                        {value}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-4">
                <button
                    onClick={handleAddToCart}
                    disabled={isAdding || !selectedVariant}
                    className="w-full py-5 bg-navy text-white text-lg font-bold rounded-full hover:bg-accent transition-all shadow-xl shadow-navy/20 uppercase tracking-tighter disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isAdding ? 'Adding...' : selectedVariant ? 'Add to Cart' : 'Unavailable'}
                </button>
                <button
                    disabled={!selectedVariant}
                    className="w-full py-5 border-2 border-navy text-navy text-lg font-bold rounded-full hover:bg-navy hover:text-white transition-all uppercase tracking-tighter disabled:opacity-50"
                >
                    Buy Now
                </button>
            </div>

            <p className="text-center text-xs text-navy/40 uppercase font-bold tracking-widest">
                Free Shipping & Lifetime Warranty Included
            </p>
        </div>
    );
}
