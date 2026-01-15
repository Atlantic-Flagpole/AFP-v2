
import Link from 'next/link';
import { BRAND_CONFIG } from '@/lib/shopify/brand';

export default function Footer() {
    return (
        <footer className="bg-navy text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
                            {BRAND_CONFIG.name}
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Premium, American-made telescoping flagpoles engineered for patriots who demand the best.
                        </p>
                        <div className="flex gap-4">
                            <Link href={BRAND_CONFIG.social.instagram} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </Link>
                            <Link href={BRAND_CONFIG.social.facebook} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-accent">Shop</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60">
                            <li><Link href="/collections/all" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link href="/collections/flagpoles" className="hover:text-white transition-colors">Flagpoles</Link></li>
                            <li><Link href="/collections/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
                            <li><Link href="/collections/bundle-deals" className="hover:text-white transition-colors">Bundle Deals</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-accent">Support</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                            <li><Link href="/returns" className="hover:text-white transition-colors">Return Policy</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-accent">Newsletter</h4>
                        <p className="text-sm text-white/60 mb-6 leading-relaxed">
                            Join our community of patriots and get exclusive offers.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-12 text-sm focus:outline-none focus:border-accent transition-colors"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-4 bg-accent rounded-full hover:bg-accent-hover transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-white/20 uppercase font-bold tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} {BRAND_CONFIG.name}. All Rights Reserved. Engineered in USA.
                    </p>
                    <div className="flex gap-8 text-[10px] text-white/20 uppercase font-bold tracking-[0.2em]">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
