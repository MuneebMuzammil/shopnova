
import React from 'react';
import { TrendingUp, Shield, Truck, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '$2.4B+',
      label: 'Total Sales Volume',
      description: 'Processed through our platform'
    },
    {
      icon: Shield,
      number: '99.8%',
      label: 'Buyer Protection',
      description: 'Safe and secure transactions'
    },
    {
      icon: Truck,
      number: '24hr',
      label: 'Average Delivery',
      description: 'Lightning fast shipping'
    },
    {
      icon: Award,
      number: '4.9★',
      label: 'Customer Rating',
      description: 'From 2M+ verified reviews'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center space-y-4 group">
                {/* Icon */}
                <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-purple-400" />
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-gray-200">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
