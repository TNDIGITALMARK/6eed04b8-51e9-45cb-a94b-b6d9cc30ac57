'use client';

import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [cartCount, setCartCount] = useState(2);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-primary text-2xl font-bold">
              <span className="text-primary">⚡</span> CommerceCo
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-10 pl-4 pr-12 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-10 px-4 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 transition-all">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <Link
              href="/account"
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-all"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Account</span>
            </Link>

            <Link href="/cart" className="relative flex items-center gap-2 text-sm text-foreground hover:text-primary transition-all">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-6 h-12 text-sm font-medium">
          <Link href="/" className="text-foreground hover:text-primary transition-all">
            HOME
          </Link>
          <Link href="/shop" className="text-foreground hover:text-primary transition-all">
            SHOP
          </Link>
          <Link href="/deals" className="text-foreground hover:text-primary transition-all">
            DEALS
          </Link>
          <Link href="/new-arrivals" className="text-foreground hover:text-primary transition-all">
            NEW ARRIVALS
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-all">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
