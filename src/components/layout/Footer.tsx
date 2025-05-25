
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ShopNova
            </h3>
            <p className="text-gray-400 max-w-sm">
              Your modern marketplace for discovering, buying, and selling products with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Shop</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">All Categories</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Electronics</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Fashion</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Home & Garden</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Sports</a>
            </div>
          </div>

          {/* Sell */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Sell</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Start Selling</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Seller Hub</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Fees & Charges</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Seller Protection</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Resources</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Returns</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Shipping Info</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Safety Center</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 ShopNova. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
