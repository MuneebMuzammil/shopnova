// Redesigned Index.tsx with unified dark theme and animated layout
import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import StatsSection from '@/components/home/StatsSection';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] text-white">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
