// Finalized StatsSection.tsx with premium dark UI and motion interactions
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
    <section className="py-20 bg-gradient-to-br from-[#111827] to-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group transform transition-transform duration-300 hover:scale-105"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-purple-600/10 to-pink-500/10 rounded-full border border-purple-500/20">
                  <IconComponent className="w-8 h-8 text-purple-400" />
                </div>

                <div className="mt-4 text-4xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {stat.number}
                </div>

                <div className="mt-2 text-lg font-medium text-gray-200">
                  {stat.label}
                </div>

                <div className="text-sm text-gray-400">
                  {stat.description}
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