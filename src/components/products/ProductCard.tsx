
import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    seller: string;
    isWishlisted?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-gray-900/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-gray-900/80 hover:scale-110">
          <Heart className={`w-4 h-4 ${product.isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} />
        </button>

        {/* Quick Add to Cart - Shows on Hover */}
        <div className="absolute inset-x-3 bottom-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-white font-medium line-clamp-2 group-hover:text-purple-300 transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-300 ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            ${product.price.toFixed(2)}
          </div>
          <div className="text-sm text-gray-400">
            by {product.seller}
          </div>
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProductCard;
