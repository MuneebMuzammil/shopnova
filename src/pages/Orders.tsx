// Redesigned Orders.tsx with modern dark theme and minimal clean UI
import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

const Orders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-2">My Orders</h1>
          <p className="text-gray-400 text-lg">Track and manage your order history</p>
        </motion.div>

        <div className="text-center py-24">
          <Package className="w-20 h-20 text-gray-500 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold mb-3">No orders yet</h2>
          <p className="text-gray-400 text-base">Your order history will appear here once you make a purchase.</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;