// Redesigned Profile.tsx with dark UI and modern UX
import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] pt-20 text-white">
      <div className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Profile Settings</h1>

          <div className="bg-[#1c1c1c] rounded-xl shadow-md p-6 border border-gray-700">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{user?.fullName || 'User'}</h2>
                <p className="text-gray-400">{user?.primaryEmailAddress?.emailAddress}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={user?.primaryEmailAddress?.emailAddress || ''}
                  disabled
                  className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-[#2a2a2a] text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={user?.fullName || ''}
                  className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Address
                </label>
                <textarea
                  placeholder="Enter your address"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-[#2a2a2a] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                Save Changes
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;