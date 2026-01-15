
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type CartItem = {
    id: string;
    variantId: string;
    title: string;
    handle: string;
    quantity: number;
    price: {
        amount: string;
        currencyCode: string;
    };
    image?: {
        url: string;
        altText: string;
    };
    variantTitle?: string;
};

type CartContextType = {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (variantId: string) => void;
    updateQuantity: (variantId: string, quantity: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    totalQuantity: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('afp_cart');
            if (savedCart) {
                try {
                    return JSON.parse(savedCart);
                } catch (e) {
                    console.error('Failed to parse cart', e);
                }
            }
        }
        return [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem('afp_cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.variantId === item.variantId);
            if (existing) {
                return prev.map((i) =>
                    i.variantId === item.variantId ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            return [...prev, item];
        });
        setIsCartOpen(true);
    };

    const removeItem = (variantId: string) => {
        setCart((prev) => prev.filter((i) => i.variantId !== variantId));
    };

    const updateQuantity = (variantId: string, quantity: number) => {
        setCart((prev) =>
            prev.map((i) => (i.variantId === variantId ? { ...i, quantity: Math.max(0, quantity) } : i))
        );
    };

    const clearCart = () => setCart([]);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    if (!isHydrated) return null;

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                isCartOpen,
                setIsCartOpen,
                totalQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
