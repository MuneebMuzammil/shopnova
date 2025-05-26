// Redesigned NotFound.tsx with modern dark theme and animated UX
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-6">Oops! Page not found</p>
        <a
          href="/"
          className="inline-block mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300"
        >
          Return to Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;