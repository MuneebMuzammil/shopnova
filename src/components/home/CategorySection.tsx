
import React from 'react';
import { Smartphone, Headphones, Laptop, Shirt, Home, Camera, Gamepad2, Watch } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    {
      name: 'Electronics',
      icon: Smartphone,
      gradient: 'from-blue-500 to-cyan-500',
      count: '2.3M+ items'
    },
    {
      name: 'Audio',
      icon: Headphones,
      gradient: 'from-purple-500 to-pink-500',
      count: '450K+ items'
    },
    {
      name: 'Computers',
      icon: Laptop,
      gradient: 'from-green-500 to-emerald-500',
      count: '890K+ items'
    },
    {
      name: 'Fashion',
      icon: Shirt,
      gradient: 'from-rose-500 to-orange-500',
      count: '1.8M+ items'
    },
    {
      name: 'Home & Garden',
      icon: Home,
      gradient: 'from-indigo-500 to-purple-500',
      count: '1.2M+ items'
    },
    {
      name: 'Photography',
      icon: Camera,
      gradient: 'from-yellow-500 to-red-500',
      count: '320K+ items'
    },
    {
      name: 'Gaming',
      icon: Gamepad2,
      gradient: 'from-teal-500 to-blue-500',
      count: '760K+ items'
    },
    {
      name: 'Watches',
      icon: Watch,
      gradient: 'from-violet-500 to-purple-500',
      count: '180K+ items'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore millions of products across all your favorite categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative mb-4 p-3 bg-gradient-to-br ${category.gradient} rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Category Info */}
                <div className="relative space-y-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {category.count}
                  </p>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
