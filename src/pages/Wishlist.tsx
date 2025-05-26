// Redesigned Wishlist.tsx with matching modern dark theme and elegant UI/UX
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useAppSelector } from '../hooks/useTypedSelector';
import supabase from '../integrations/supabase/client';
import ProductCard from '../components/products/ProductCard';

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

const Wishlist = () => {
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlistProducts();
  }, [wishlistItems]);

  const fetchWishlistProducts = async () => {
    if (wishlistItems.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .in('id', wishlistItems);

    if (data && !error) {
      setProducts(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <Heart className="w-20 h-20 text-gray-400 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-2">Your wishlist is empty</h1>
          <p className="text-gray-400">Save products you love to your wishlist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20 text-white">
      <div className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold mb-2">My Wishlist</h1>
          <p className="text-gray-400">{products.length} item{products.length !== 1 ? 's' : ''} saved</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;