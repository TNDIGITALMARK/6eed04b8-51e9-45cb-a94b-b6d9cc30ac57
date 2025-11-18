'use client';

import { Header } from '@/components/marketplace/Header';
import { Footer } from '@/components/marketplace/Footer';
import { mockProducts, mockSellers } from '@/lib/mock-data';
import { Package, DollarSign, TrendingUp, Users, Plus, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SellerDashboard() {
  const seller = mockSellers[0];
  const sellerProducts = mockProducts.filter(p => p.seller.id === seller.id);

  // Mock analytics data
  const analytics = {
    totalRevenue: 24589.50,
    totalOrders: 342,
    activeProducts: sellerProducts.length,
    conversionRate: 3.8,
  };

  const recentOrders = [
    { id: '1', product: 'Wireless Headphones Pro', quantity: 1, amount: 199.99, status: 'Shipped', date: '2024-01-15' },
    { id: '2', product: 'Smart Watch Fitness Tracker', quantity: 2, amount: 499.98, status: 'Processing', date: '2024-01-14' },
    { id: '3', product: 'Laptop Pro 15 Inch', quantity: 1, amount: 1299.99, status: 'Delivered', date: '2024-01-13' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background">
        {/* Dashboard Header */}
        <div className="bg-white border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, {seller.name}!</p>
              </div>
              <Link
                href="/seller/products/new"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary/90 transition-all"
              >
                <Plus className="w-5 h-5" />
                Add New Product
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <p className="text-2xl font-bold mb-1">${analytics.totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-xs text-success mt-2">+12.5% from last month</p>
            </div>

            <div className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-success" />
                </div>
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <p className="text-2xl font-bold mb-1">{analytics.totalOrders}</p>
              <p className="text-sm text-muted-foreground">Total Orders</p>
              <p className="text-xs text-success mt-2">+8.3% from last month</p>
            </div>

            <div className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-warning" />
                </div>
              </div>
              <p className="text-2xl font-bold mb-1">{analytics.activeProducts}</p>
              <p className="text-sm text-muted-foreground">Active Products</p>
            </div>

            <div className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <p className="text-2xl font-bold mb-1">{analytics.conversionRate}%</p>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-xs text-success mt-2">+0.5% from last month</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-border overflow-hidden">
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Orders</h2>
                  <Link href="/seller/orders" className="text-sm text-primary hover:underline">
                    View All
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Order ID</th>
                        <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Product</th>
                        <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Qty</th>
                        <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Amount</th>
                        <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-border hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm">#{order.id}</td>
                          <td className="px-6 py-4 text-sm font-medium">{order.product}</td>
                          <td className="px-6 py-4 text-sm">{order.quantity}</td>
                          <td className="px-6 py-4 text-sm font-semibold">${order.amount.toFixed(2)}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                order.status === 'Delivered'
                                  ? 'bg-success/10 text-success'
                                  : order.status === 'Shipped'
                                  ? 'bg-primary/10 text-primary'
                                  : 'bg-warning/10 text-warning'
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <div className="bg-white rounded-lg border border-border p-6 mb-6">
                <h3 className="font-semibold mb-4">Store Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Seller Rating</span>
                      <span className="font-semibold">{seller.rating} / 5.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-warning h-2 rounded-full"
                        style={{ width: `${(seller.rating / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Order Fulfillment</span>
                      <span className="font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-success h-2 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Response Time</span>
                      <span className="font-semibold">2.3h</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
                <h3 className="font-semibold mb-2">Boost Your Sales</h3>
                <p className="text-sm opacity-90 mb-4">
                  Upgrade to Premium Seller to get featured placement and more visibility
                </p>
                <button className="w-full bg-white text-primary px-4 py-2 rounded font-medium hover:bg-white/90 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Product Inventory */}
          <div className="mt-8">
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <h2 className="text-xl font-semibold">Your Products</h2>
                <Link
                  href="/seller/products/new"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Plus className="w-4 h-4" />
                  Add Product
                </Link>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sellerProducts.map((product) => (
                    <div key={product.id} className="border border-border rounded-lg p-4">
                      <div className="relative aspect-square mb-3 bg-gray-50 rounded overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <h4 className="font-medium mb-2 line-clamp-2">{product.name}</h4>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            product.inStock
                              ? 'bg-success/10 text-success'
                              : 'bg-destructive/10 text-destructive'
                          }`}
                        >
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 border border-border rounded py-2 hover:bg-gray-50 transition-all">
                          <Edit className="w-4 h-4" />
                          <span className="text-sm">Edit</span>
                        </button>
                        <button className="flex items-center justify-center border border-destructive text-destructive rounded px-3 py-2 hover:bg-destructive/10 transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
