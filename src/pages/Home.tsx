// Redesigned Home.tsx with modern dark theme and elegant animations
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  TrendingUp,
  Smartphone,
  Headphones,
  Laptop,
  Shirt,
  Home as HomeIcon,
  Camera,
  Gamepad2,
  Watch,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import ProductCard from '../components/products/ProductCard';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { setProducts } from '../store/slices/productsSlice';
import supabase from '../integrations/supabase/client';
import Footer from '@/components/layout/Footer';

const Home = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*').limit(8);
    if (data && !error) {
      dispatch(setProducts(data));
    }
  };

  const categories = [
    { name: 'Electronics', icon: Smartphone, gradient: 'from-indigo-500 via-sky-500 to-cyan-400', count: '2.3M+ items' },
    { name: 'Audio', icon: Headphones, gradient: 'from-purple-600 via-pink-500 to-rose-400', count: '450K+ items' },
    { name: 'Computers', icon: Laptop, gradient: 'from-green-500 via-emerald-500 to-teal-400', count: '890K+ items' },
    { name: 'Fashion', icon: Shirt, gradient: 'from-red-400 via-orange-500 to-amber-400', count: '1.8M+ items' },
    { name: 'Home & Garden', icon: HomeIcon, gradient: 'from-indigo-500 via-violet-500 to-purple-400', count: '1.2M+ items' },
    { name: 'Photography', icon: Camera, gradient: 'from-yellow-400 via-amber-500 to-rose-500', count: '320K+ items' },
    { name: 'Gaming', icon: Gamepad2, gradient: 'from-teal-500 via-blue-500 to-indigo-500', count: '760K+ items' },
    { name: 'Watches', icon: Watch, gradient: 'from-violet-500 via-indigo-600 to-blue-600', count: '180K+ items' },
  ];

  const featuredProducts = products.slice(0, 6);
const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"]; // Add your images to /public
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  }, 6000); // Change image every 6 seconds

  return () => clearInterval(interval);
}, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] text-white">

     {/* <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-black text-white animate-gradientX"> */}
      {/* Hero Section */}
      {/* <section className="relative py-24 px-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b]/80 to-[#0f172a]"> */}
      <section className="relative py-24 px-4 bg-black overflow-hidden">   {/* Ken Burns Background Slideshow */}   <div className="absolute inset-0 z-0">     {heroImages.map((img, idx) => (       <div         key={idx}         className={`absolute inset-0 transition-opacity duration-1000 ${           idx === currentImageIndex ? 'opacity-100' : 'opacity-0'         }`}       >         <img           src={img}           alt={`ShopNova Visual ${idx + 1}`}           className="w-full h-full object-cover animate-ken-burns"         />       </div>     ))}     <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" /> {/* Optional dark overlay */}   </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-inner shadow-white/10">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Trusted by 10M+ shoppers worldwide</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover Products.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shop Smarter.
            </span>
            <br />
            Sell Faster.
          </h1>
          <p className="text-lg md:text-xl text-gray-300">ShopNova is your modern marketplace — fast, personal, and built for today's digital-first world.</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/explore">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-purple-500/30 transition-transform transform hover:scale-105">
                Start Shopping
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="border border-blue-500 text-blue-400 hover:bg-blue-900/40 hover:text-white px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow-sm shadow-blue-500/20">
              <TrendingUp className="mr-2 w-5 h-5" />
              Sell Your Product
            </Button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <p className="text-3xl font-bold">2M+</p>
              <p className="text-gray-400">Active Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">50K+</p>
              <p className="text-gray-400">Trusted Sellers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">99.9%</p>
              <p className="text-gray-400">Uptime</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      {/* <section className="py-20 px-4 bg-[#141414]"> */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#434343] to-[#29323c]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Shop by Category</h2>
          <p className="text-lg text-gray-400">Explore millions of products across your favorite categories</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group bg-[#1F1F1F] p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all hover:shadow-lg"
              >
                <Link to={`/category/${category.name}`} className="flex flex-col items-start gap-3">
                  <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-full group-hover:scale-110 transition-transform shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400">{category.name}</h3>
                  <p className="text-sm text-gray-400">{category.count}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Products Section */}
      {/* <section className="py-20 px-4 bg-[#101010]"> */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#485563] to-[#29323c]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-900/20 border border-yellow-600 rounded-full">
            <span className="text-sm text-yellow-400 font-medium">Trending Now</span>
          </div>
          <h2 className="text-4xl font-bold mt-4">Featured Products</h2>
          <p className="text-lg text-gray-400 mt-2">Discover the most popular items from our trusted sellers worldwide</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/explore">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-400 hover:bg-blue-900/40 px-8 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
<Footer />

    </div>
  );
};

export default Home;
