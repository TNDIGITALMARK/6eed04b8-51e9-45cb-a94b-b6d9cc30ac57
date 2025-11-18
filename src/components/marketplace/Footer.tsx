'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">⚡ CommerceCo</h3>
            <p className="text-sm opacity-90">
              Your trusted marketplace for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/about" className="hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:opacity-100 transition-opacity">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:opacity-100 transition-opacity">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/shipping" className="hover:opacity-100 transition-opacity">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:opacity-100 transition-opacity">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:opacity-100 transition-opacity">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm opacity-90 mb-2">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 h-9 px-3 text-sm bg-white/10 border border-white/20 rounded text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
              />
              <button className="h-9 px-4 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-secondary/90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-90">
          <p>&copy; 2025 CommerceCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
