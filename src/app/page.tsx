'use client';

import { Header } from '@/components/marketplace/Header';
import { Footer } from '@/components/marketplace/Footer';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { mockProducts } from '@/lib/mock-data';
import { Monitor, Shirt, Home as HomeIcon, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const featuredProducts = mockProducts.slice(0, 4);
  const recommendedProducts = mockProducts.slice(4, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-gray-100 to-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  DISCOVER YOUR NEXT
                  <br />
                  <span className="text-primary">FAVORITE THING</span>
                </h1>
                <p className="text-muted-foreground mb-6 text-lg">
                  Shop the latest products from top brands at unbeatable prices
                </p>
                <Link
                  href="/shop"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-medium hover:bg-primary/90 transition-all"
                >
                  SHOP NOW
                </Link>
              </div>
              <div className="relative h-80">
                <Image
                  src="/generated/hero-banner.png"
                  alt="Shop online"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Flash Sale Banner */}
        <section className="bg-primary text-primary-foreground py-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 text-center">
              <Zap className="w-6 h-6" />
              <p className="text-lg font-semibold">FLASH SALE ENDS SOON - UP TO 50% OFF!</p>
            </div>
          </div>
        </section>

        {/* Category Icons */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link
              href="/category/electronics"
              className="category-icon bg-primary text-primary-foreground p-8 aspect-square flex-col gap-3"
            >
              <Monitor className="w-12 h-12" />
              <span className="font-medium">Electronics</span>
            </Link>
            <Link
              href="/category/fashion"
              className="category-icon bg-success text-success-foreground p-8 aspect-square flex-col gap-3"
            >
              <Shirt className="w-12 h-12" />
              <span className="font-medium">Fashion</span>
            </Link>
            <Link
              href="/category/home"
              className="category-icon bg-destructive text-destructive-foreground p-8 aspect-square flex-col gap-3"
            >
              <HomeIcon className="w-12 h-12" />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              href="/category/sports"
              className="category-icon bg-warning text-warning-foreground p-8 aspect-square flex-col gap-3"
            >
              <Zap className="w-12 h-12" />
              <span className="font-medium">Sports</span>
            </Link>
            <Link
              href="/category/all"
              className="category-icon bg-secondary text-secondary-foreground p-8 aspect-square flex-col gap-3"
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="w-4 h-4 bg-white/30 rounded"></div>
                <div className="w-4 h-4 bg-white/30 rounded"></div>
                <div className="w-4 h-4 bg-white/30 rounded"></div>
                <div className="w-4 h-4 bg-white/30 rounded"></div>
              </div>
              <span className="font-medium">All</span>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">FEATURED PRODUCTS</h2>
            <div className="flex gap-2">
              <button className="w-9 h-9 flex items-center justify-center bg-white border border-border rounded hover:bg-gray-50 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-9 h-9 flex items-center justify-center bg-white border border-border rounded hover:bg-gray-50 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Free Shipping Banner */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 py-8 my-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">FREE SHIPPING ON ALL ORDERS OVER $50!</h3>
              <p className="text-muted-foreground">No code required, discount applied at checkout</p>
            </div>
          </div>
        </section>

        {/* Product Recommendations */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-6">PRODUCT RECOMMENDATIONS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Why Shop With Us */}
        <section className="bg-gray-50 py-16 mt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-center mb-12">Why Shop With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Fast Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $50
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Secure Shopping</h3>
                <p className="text-sm text-muted-foreground">
                  Your payment information is safe with us
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warning text-warning-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">
                  30-day return policy on all items
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}