// Redesigned Checkout.tsx with modern dark UI, polished UX, and order success alert
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from '../hooks/useTypedSelector';

const Checkout = () => {
  const { items, total } = useAppSelector((state) => state.cart);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Your order is successfully placed in ShopNova! 🎉");
    // Optionally reset form or navigate to thank-you page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Checkout Form */}
            <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>

              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                  <input
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">City</label>
                    <input
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">State</label>
                    <input
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">ZIP Code</label>
                    <input
                      name="zip"
                      type="text"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 border border-gray-700 h-fit">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-white text-sm">{item.title}</p>
                      <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-white text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-600 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Shipping</span>
                  <span className="text-white font-medium">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-2">
                  <span>Total</span>
                  <span className="text-white">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
