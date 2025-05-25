
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Smartphone, Headphones, Laptop, Shirt, Home as HomeIcon, Camera, Gamepad2, Watch } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import ProductCard from '../components/products/ProductCard';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { setProducts } from '../store/slices/productsSlice';
import { supabase } from '../integrations/supabase/client';

const Home = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .limit(8);
    
    if (data && !error) {
      dispatch(setProducts(data));
    }
  };

  const categories = [
    { name: 'Electronics', icon: Smartphone, gradient: 'from-blue-500 to-cyan-500', count: '2.3M+ items' },
    { name: 'Audio', icon: Headphones, gradient: 'from-purple-500 to-pink-500', count: '450K+ items' },
    { name: 'Computers', icon: Laptop, gradient: 'from-green-500 to-emerald-500', count: '890K+ items' },
    { name: 'Fashion', icon: Shirt, gradient: 'from-rose-500 to-orange-500', count: '1.8M+ items' },
    { name: 'Home & Garden', icon: HomeIcon, gradient: 'from-indigo-500 to-purple-500', count: '1.2M+ items' },
    { name: 'Photography', icon: Camera, gradient: 'from-yellow-500 to-red-500', count: '320K+ items' },
    { name: 'Gaming', icon: Gamepad2, gradient: 'from-teal-500 to-blue-500', count: '760K+ items' },
    { name: 'Watches', icon: Watch, gradient: 'from-violet-500 to-purple-500', count: '180K+ items' }
  ];

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Trusted by 10M+ shoppers worldwide</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Discover Products.
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shop Smarter.
                </span>
                <br />
                Sell Faster.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                ShopNova is your modern marketplace — fast, personal, and built for today's digital-first world.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/explore">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Start Shopping
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                <TrendingUp className="mr-2 w-5 h-5" />
                Sell Your Product
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-gray-400">Active Products</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-gray-400">Trusted Sellers</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore millions of products across all your favorite categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Link
                    to={`/category/${category.name}`}
                    className="block p-6 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`mb-4 p-3 bg-gradient-to-br ${category.gradient} rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                      {category.count}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200">
              <span className="text-sm text-yellow-700 font-medium">Trending Now</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured Products
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most popular items from our trusted sellers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/explore">
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
