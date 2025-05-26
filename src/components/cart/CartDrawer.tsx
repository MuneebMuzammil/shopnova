// Redesigned CartDrawer.tsx with sleek dark drawer UI and smooth transitions
import React from 'react';
import { X, ShoppingBag, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../../hooks/useTypedSelector';
import { toggleCart, updateQuantity, removeFromCart } from '../../store/slices/cartSlice';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isOpen, items, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => dispatch(toggleCart())}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#000000] text-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                  {items.length}
                </span>
              </div>
              <button
                onClick={() => dispatch(toggleCart())}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 mb-4">Your cart is empty</p>
                  <Button
                    onClick={() => dispatch(toggleCart())}
                    variant="outline"
                    className="text-white border-gray-600 hover:bg-white/10"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      className="flex gap-3 p-3 bg-[#2c2c2c] border border-gray-700 rounded-lg"
                    >
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm text-white line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-blue-400 font-semibold">
                          ${item.price.toLocaleString()}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                            className="p-1 bg-[#1a1a1a] hover:bg-[#333] rounded transition-colors"
                          >
                            <Minus className="w-3 h-3 text-white" />
                          </button>
                          <span className="px-2 py-1 bg-[#444] rounded text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                            className="p-1 bg-[#1a1a1a] hover:bg-[#333] rounded transition-colors"
                          >
                            <Plus className="w-3 h-3 text-white" />
                          </button>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="ml-auto text-red-400 text-xs hover:text-red-300 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-700 p-4 space-y-4">
                <div className="flex justify-between items-center text-white">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-xl font-bold text-blue-400">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="space-y-2">
                  <Link to="/cart" onClick={() => dispatch(toggleCart())}>
                    <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-white/10">
                      View Cart
                    </Button>
                  </Link>
                  <Link to="/checkout" onClick={() => dispatch(toggleCart())}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90">
                      Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;