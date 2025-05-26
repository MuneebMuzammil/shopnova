// Redesigned ProductDetail.tsx with dark UI and high-conversion layout
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { addToCart } from '../store/slices/cartSlice';
import { toggleWishlist } from '../store/slices/wishlistSlice';
import supabase from '../integrations/supabase/client';
import { Button } from '../components/ui/button';
import StarRating from '../components/ui/star-rating';
import { useUser } from '@clerk/clerk-react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  stock: number;
  rating: number;
  review_count: number;
  tags: string[];
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist);
  const { isSignedIn } = useUser();

  const isWishlisted = product ? wishlistItems.includes(product.id) : false;

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (productId: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .single();

    if (data && !error) {
      setProduct(data);
    }
    setLoading(false);
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image_url: product.image_url,
      }));
    }
  };

  const handleToggleWishlist = () => {
    if (product && isSignedIn) {
      dispatch(toggleWishlist(product.id));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-400">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square rounded-xl overflow-hidden bg-[#1a1a1a] shadow-lg"
          >
            <img
              src={product.image_url}
              alt={product.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <div className="text-sm text-blue-400 font-medium uppercase tracking-wide mb-1">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold mb-3">{product.title}</h1>
              <StarRating rating={product.rating} totalReviews={product.review_count} size="lg" />
            </div>

            <div className="text-3xl font-semibold text-white">
              ${product.price.toLocaleString()}
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Stock:</span>
              <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
              </span>
            </div>

            {product.tags && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#2c2c2c] text-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 text-white py-3 text-lg font-semibold rounded-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              {isSignedIn && (
                <Button
                  onClick={handleToggleWishlist}
                  variant="outline"
                  className="p-3 border border-gray-600 hover:border-red-400"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;