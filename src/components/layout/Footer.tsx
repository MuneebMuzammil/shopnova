// Finalized Footer.tsx with premium dark UI and consistent design
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#000000] via-[#434343] to-[#29323c] border-t border-gray-800  px-4 mt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ShopNova
            </h3>
            <p className="text-gray-400 max-w-sm">
              Your modern marketplace for discovering, buying, and selling products with confidence.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Shop</h4>
            <div className="space-y-2">
              {["All Categories", "Electronics", "Fashion", "Home & Garden", "Sports"].map((label, i) => (
                <a key={i} href="#" className="block text-gray-400 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Sell */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Sell</h4>
            <div className="space-y-2">
              {["Start Selling", "Seller Hub", "Fees & Charges", "Seller Protection", "Resources"].map((label, i) => (
                <a key={i} href="#" className="block text-gray-400 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <div className="space-y-2">
              {["Help Center", "Contact Us", "Returns", "Shipping Info", "Safety Center"].map((label, i) => (
                <a key={i} href="#" className="block text-gray-400 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 ShopNova. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
