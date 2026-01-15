import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { BRAND_CONFIG } from "@/lib/shopify/brand";



import { getMenu } from "@/lib/shopify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: BRAND_CONFIG.name,
    template: `%s | ${BRAND_CONFIG.name}`,
  },
  description: "American-made telescoping flagpoles engineered for durability and ease of use. Veteran owned.",
  icons: {
    icon: BRAND_CONFIG.favicon,
  },
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenu('main-menu-new');

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <CartProvider>
          <Header menu={menu} />
          <CartDrawer />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
