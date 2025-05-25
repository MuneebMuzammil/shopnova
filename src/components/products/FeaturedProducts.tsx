
import React from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  // Mock data - in real app this would come from Supabase
  const featuredProducts = [
    {
      id: '1',
      title: 'Apple iPhone 15 Pro Max - Titanium Blue',
      price: 1199.99,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 2847,
      seller: 'TechStore Pro',
      isWishlisted: false
    },
    {
      id: '2',
      title: 'Sony WH-1000XM5 Noise Canceling Headphones',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 1523,
      seller: 'Audio Elite',
      isWishlisted: true
    },
    {
      id: '3',
      title: 'MacBook Pro 14" M3 Pro - Space Gray',
      price: 2499.99,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 756,
      seller: 'Apple Authorized',
      isWishlisted: false
    },
    {
      id: '4',
      title: 'Nike Air Jordan 1 Retro High OG',
      price: 170.00,
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 3291,
      seller: 'Sneaker Palace',
      isWishlisted: false
    },
    {
      id: '5',
      title: 'Samsung 65" QLED 4K Smart TV',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 892,
      seller: 'Electronics Hub',
      isWishlisted: false
    },
    {
      id: '6',
      title: 'Canon EOS R5 Mirrorless Camera',
      price: 3899.99,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 445,
      seller: 'Camera Central',
      isWishlisted: true
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
            <span className="text-sm text-purple-300">Trending Now</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Products
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the most popular items from our trusted sellers worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
