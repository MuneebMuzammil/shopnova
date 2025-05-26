// Redesigned CategoryPage.tsx with dark UI and elegant UX
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { setProducts, setSelectedCategory } from '../store/slices/productsSlice';
import supabase from '../integrations/supabase/client';
import ProductCard from '../components/products/ProductCard';
import Footer from '@/components/layout/Footer';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();
  const { filteredProducts } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (slug) {
      fetchCategoryProducts(slug);
      dispatch(setSelectedCategory(slug));
    }
  }, [slug, dispatch]);

  const fetchCategoryProducts = async (category: string) => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (data && !error) {
      dispatch(setProducts(data));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold mb-3 capitalize">{slug}</h1>
          <p className="text-lg text-gray-400">Browse our collection of {slug?.toLowerCase()} products</p>
        </motion.div>

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
            <p className="text-lg text-gray-400">No products found in this category.</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CategoryPage;