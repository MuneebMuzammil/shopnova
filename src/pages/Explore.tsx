
// Redesigned Explore.tsx with matching modern dark theme and elegant UI/UX
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { setProducts, setSelectedCategory } from '../store/slices/productsSlice';
import supabase from '../integrations/supabase/client';
import ProductCard from '../components/products/ProductCard';
import { Button } from '../components/ui/button';
import Footer from '@/components/layout/Footer';

const Explore = () => {
  const dispatch = useAppDispatch();
  const { products, filteredProducts, categories, selectedCategory } = useAppSelector((state) => state.products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (data && !error) {
      dispatch(setProducts(data));
    }
  };

  const handleCategoryFilter = (category: string | null) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20 text-white">
      <div className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">Explore Products</h1>
          <p className="text-lg text-gray-400">Discover amazing products from our trusted sellers</p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-10 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => handleCategoryFilter(null)}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-none hover:opacity-90"
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryFilter(category)}
                className={`border border-gray-600 hover:border-blue-500 text-white ${selectedCategory === category ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600' : 'bg-[#1a1a1a]'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
