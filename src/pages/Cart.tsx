// Redesigned Cart.tsx with modern dark UI and improved cart UX
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import { Button } from '../components/ui/button';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-400 mb-8">Start shopping to add items to your cart</p>
            <Link to="/explore">
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-gray-400">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-700 shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-lg font-bold text-white">${item.price.toLocaleString()}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full bg-[#2a2a2a] hover:bg-[#333] transition-colors"
                    >
                      <Minus className="w-4 h-4 text-white" />
                    </button>
                    <span className="w-8 text-center font-medium text-white">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full bg-[#2a2a2a] hover:bg-[#333] transition-colors"
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-700 h-fit shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span className="text-white font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Shipping</span>
                <span className="text-white font-medium">Free</span>
              </div>
              <div className="border-t border-gray-600 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-white">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link to="/checkout">
              <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300">
                Proceed to Checkout
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;