
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
};

type CartContextType = {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    totalQuantity: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Persistence
    useEffect(() => {
        const savedCart = localStorage.getItem('afp_cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse cart', e);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('afp_cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            return [...prev, item];
        });
        setIsCartOpen(true);
    };

    const removeItem = (id: string) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCart((prev) =>
            prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i))
        );
    };

    const clearCart = () => setCart([]);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

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
