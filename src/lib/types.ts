// Types for the Amazon-inspired marketplace

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  seller: Seller;
  specifications?: Record<string, string>;
}

export interface Seller {
  id: string;
  name: string;
  rating: number;
  totalSales: number;
  joinedDate: string;
  verified: boolean;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export type Category = 'Electronics' | 'Fashion' | 'Home & Garden' | 'Sports' | 'Books';
