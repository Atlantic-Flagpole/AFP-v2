import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import CartDrawer from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";

export const runtime = "edge";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atlantic Flagpole | Premium Headless Storefront",
  description: "High-performance, visually stunning flagpole storefront powered by Shopify and Cloudflare Pages.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-grow">
            {children}
          </main>
        </CartProvider>

      </body>


    </html>
  );
}
