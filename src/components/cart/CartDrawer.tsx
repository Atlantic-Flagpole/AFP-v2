
'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartDrawer() {
    const { cart, isCartOpen, setIsCartOpen, removeItem, updateQuantity } = useCart();

    if (!isCartOpen) return null;

    const total = cart.reduce((acc, item) => acc + parseFloat(item.price.amount) * item.quantity, 0);

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden">
            <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

            <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
                    <div className="p-6 border-b border-navy/10 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-navy tracking-tighter uppercase">Your Cart</h2>
                        <button onClick={() => setIsCartOpen(false)} className="text-navy/40 hover:text-navy transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                        {cart.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-navy/20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2 tracking-tight">Your cart is empty</h3>
                                <p className="text-navy/40 text-sm mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-accent transition-all"
                                >
                                    Start Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {cart.map((item) => (
                                    <div key={item.variantId} className="flex gap-6 animate-in slide-in-from-right-10 duration-500">
                                        <div className="relative w-24 h-24 bg-zinc-50 rounded-2xl overflow-hidden flex-shrink-0 border border-zinc-100">
                                            {item.image && (
                                                <Image src={item.image.url} alt={item.image.altText} fill className="object-cover" />
                                            )}
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex items-start justify-between">
                                                    <h4 className="font-bold text-navy leading-tight line-clamp-2 pr-4">{item.title}</h4>
                                                    <button onClick={() => removeItem(item.variantId)} className="text-navy/20 hover:text-red-500 transition-colors p-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.34 9m-4.78 0-.34-9m9.26-2.35a3.008 3.008 0 0 0-3.478-2.404L9.726 5.992m-.053 0L7.428 5.466m14.73 0a51.647 51.647 0 0 1-7.033.466m-9.927.466a51.647 51.647 0 0 0-7.033.466m13.974 0v1.944A2.25 2.25 0 0 1 12.627 10.5h-1.254a2.25 2.25 0 0 1-2.247-2.112V6.63m16.035 0L15.383 7.29" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                {item.variantTitle && item.variantTitle !== 'Default Title' && (
                                                    <p className="text-xs font-bold text-accent uppercase tracking-wider mt-1">{item.variantTitle}</p>
                                                )}
                                                <p className="text-sm font-medium text-navy/40 mt-1">
                                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: item.price.currencyCode }).format(parseFloat(item.price.amount))}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center border border-navy/10 rounded-full h-8 px-2 bg-zinc-50">
                                                    <button
                                                        onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                                                        className="w-6 h-full flex items-center justify-center text-navy/40 hover:text-navy transition-colors font-bold"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center text-xs font-black text-navy">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                                                        className="w-6 h-full flex items-center justify-center text-navy/40 hover:text-navy transition-colors font-bold"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <span className="font-bold text-navy">
                                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: item.price.currencyCode }).format(parseFloat(item.price.amount) * item.quantity)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="p-6 border-t border-navy/10 bg-zinc-50">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">Subtotal</span>
                            <span className="text-2xl font-bold text-navy">
                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: cart[0]?.price.currencyCode || 'USD' }).format(total)}
                            </span>
                        </div>
                        <button
                            disabled={cart.length === 0}
                            onClick={async () => {
                                const { createCheckout } = await import('@/lib/shopify');
                                const checkoutUrl = await createCheckout(cart.map(item => ({
                                    variantId: item.variantId,
                                    quantity: item.quantity
                                })));
                                window.location.href = checkoutUrl;
                            }}
                            className="w-full py-5 bg-navy text-white text-lg font-bold rounded-full hover:bg-accent transition-all shadow-xl shadow-navy/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-tighter"
                        >
                            Checkout Now
                        </button>
                        <p className="text-center text-[10px] text-navy/40 mt-4 uppercase font-bold tracking-widest">
                            Shipping & Taxes Calculated at Checkout
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
