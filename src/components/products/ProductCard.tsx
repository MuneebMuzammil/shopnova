
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleWishlist } from '../../store/slices/wishlistSlice';
import { Button } from '../ui/button';
import StarRating from '../ui/star-rating';
import { useUser } from '@clerk/clerk-react';

interface Product {
  id: string;
  title: string;
  price: number;
  image_url: string;
  rating: number;
  review_count: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist);
  const { isSignedIn } = useUser();
  const isWishlisted = wishlistItems.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image_url: product.image_url,
    }));
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSignedIn) {
      dispatch(toggleWishlist(product.id));
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Wishlist Button */}
          {isSignedIn && (
            <button
              onClick={handleToggleWishlist}
              className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white hover:scale-110 shadow-sm"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
            </button>
          )}

          {/* Quick Add Button - Shows on Hover */}
          <div className="absolute inset-x-3 bottom-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium shadow-lg"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <div className="text-xs text-blue-600 font-medium uppercase tracking-wide">
            {product.category}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>

          {/* Rating */}
          <StarRating 
            rating={product.rating} 
            totalReviews={product.review_count} 
            size="sm"
          />

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
