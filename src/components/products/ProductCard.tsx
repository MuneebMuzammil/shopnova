// Finalized ProductCard.tsx with premium UI/UX and hover animation
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
      whileHover={{ scale: 1.025 }}
      className="group bg-gradient-to-b from-[#1c1c1c] to-[#101010] text-white rounded-xl overflow-hidden border border-gray-800 shadow hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/product/${product.id}`}>  
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {isSignedIn && (
            <button
              onClick={handleToggleWishlist}
              className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} />
            </button>
          )}

          <div className="absolute inset-x-3 bottom-3 translate-y-full group-hover:translate-y-0 transition-transform">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow-lg"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="text-xs text-purple-400 uppercase tracking-wide font-semibold">
            {product.category}
          </div>

          <h3 className="font-semibold line-clamp-2 group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>

          <StarRating rating={product.rating} totalReviews={product.review_count} size="sm" />

          <div className="text-xl font-bold text-white">
            ${product.price.toLocaleString()}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;