'use client';

import { Header } from '@/components/marketplace/Header';
import { Footer } from '@/components/marketplace/Footer';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { mockProducts, mockReviews, shippingOptions } from '@/lib/mock-data';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Check } from 'lucide-react';
import Image from 'next/image';
import { useState, use } from 'react';
import Link from 'next/link';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  const productReviews = mockReviews.filter(r => r.productId === product.id);
  const relatedProducts = mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const [quantity, setQuantity] = useState(1);
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0].id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-primary">Shop</Link>
              <span>/</span>
              <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-primary">{product.category}</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative aspect-square bg-gray-50 rounded border border-border cursor-pointer hover:border-primary transition-all">
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-warning text-warning'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-semibold">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <>
                      <Check className="w-5 h-5 text-success" />
                      <span className="text-success font-medium">In Stock</span>
                    </>
                  ) : (
                    <span className="text-destructive font-medium">Out of Stock</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border rounded hover:bg-gray-50 transition-all"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-10 text-center border border-border rounded"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border rounded hover:bg-gray-50 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <button
                  disabled={!product.inStock}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground h-12 rounded font-medium hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="w-12 h-12 border border-border rounded hover:bg-gray-50 transition-all">
                  <Heart className="w-5 h-5 mx-auto" />
                </button>
                <button className="w-12 h-12 border border-border rounded hover:bg-gray-50 transition-all">
                  <Share2 className="w-5 h-5 mx-auto" />
                </button>
              </div>

              {/* Shipping Options */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-4">Shipping Options</h3>
                <div className="space-y-3">
                  {shippingOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center justify-between p-3 bg-white border border-border rounded cursor-pointer hover:border-primary transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          value={option.id}
                          checked={selectedShipping === option.id}
                          onChange={() => setSelectedShipping(option.id)}
                          className="w-4 h-4"
                        />
                        <div>
                          <p className="font-medium">{option.name}</p>
                          <p className="text-sm text-muted-foreground">{option.estimatedDays}</p>
                        </div>
                      </div>
                      <span className="font-semibold">
                        {option.price === 0 ? 'FREE' : `$${option.price.toFixed(2)}`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Free Shipping</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-success" />
                  <p className="text-xs font-medium">Secure Payment</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <RotateCcw className="w-6 h-6 mx-auto mb-2 text-warning" />
                  <p className="text-xs font-medium">Easy Returns</p>
                </div>
              </div>

              {/* Seller Info */}
              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-3">Sold By</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{product.seller.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.seller.rating)
                                ? 'fill-warning text-warning'
                                : 'fill-muted text-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.seller.totalSales} sales
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/seller/${product.seller.id}`}
                    className="text-sm text-primary hover:underline"
                  >
                    Visit Store
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Specifications</h2>
              <div className="bg-white rounded-lg border border-border overflow-hidden">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`grid md:grid-cols-2 gap-4 p-4 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <div className="font-medium">{key}</div>
                    <div className="text-muted-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          {productReviews.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
              <div className="space-y-6">
                {productReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-lg border border-border p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.userName}</span>
                          {review.verified && (
                            <span className="bg-success/10 text-success text-xs px-2 py-0.5 rounded">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'fill-warning text-warning'
                                  : 'fill-muted text-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <h4 className="font-semibold mb-2">{review.title}</h4>
                    <p className="text-muted-foreground mb-3">{review.comment}</p>
                    <button className="text-sm text-muted-foreground hover:text-foreground">
                      Helpful ({review.helpful})
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
