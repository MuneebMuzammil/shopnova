// // Finalized Navbar.tsx with premium dark theme and working search integration
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
// import { useAppSelector, useAppDispatch } from '../../hooks/useTypedSelector';
// import { toggleCart } from '../../store/slices/cartSlice';
// import { setSearchQuery } from '../../store/slices/productsSlice';
// import { useUser, SignInButton, UserButton } from '@clerk/clerk-react';
// import { Button } from '../ui/button';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { items } = useAppSelector((state) => state.cart);
//   const { items: wishlistItems } = useAppSelector((state) => state.wishlist);
//   const { isSignedIn } = useUser();
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchValue.trim()) {
//       dispatch(setSearchQuery(searchValue));
//       navigate('/explore');
//     }
//   };

//   const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <header className="sticky top-0 z-50 bg-gradient-to-br from-[#000000] via-[#434343] to-[#29323c] backdrop-blur-md border-b border-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             ShopNova
//           </Link>

//           <nav className="hidden md:flex items-center space-x-6">
//             {['Explore', 'Electronics', 'Fashion', 'Gaming'].map((text, i) => (
//               <Link key={i} to={text === 'Explore' ? '/explore' : `/category/${text}`} className="text-gray-300 hover:text-white transition-colors">
//                 {text}
//               </Link>
//             ))}
//           </nav>

//           <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search for anything..."
//                 value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </div>
//           </form>

//           <div className="flex items-center space-x-4">
//             {isSignedIn && (
//               <Link to="/wishlist" className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
//                 <Heart className="w-5 h-5 text-gray-300" />
//                 {wishlistItems.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md">
//                     {wishlistItems.length}
//                   </span>
//                 )}
//               </Link>
//             )}

//             <button
//               onClick={() => dispatch(toggleCart())}
//               className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
//             >
//               <ShoppingCart className="w-5 h-5 text-gray-300" />
//               {cartItemCount > 0 && (
//                 <motion.span
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md"
//                 >
//                   {cartItemCount}
//                 </motion.span>
//               )}
//             </button>

//             {isSignedIn ? (
//               <UserButton afterSignOutUrl="/" />
//             ) : (
//               <SignInButton mode="modal">
//                 <a href="/auth">
//                 <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700">
//                   <User className="w-4 h-4 mr-2" />
//                   Sign In
//                 </Button>
//                 </a>
//               </SignInButton>
//             )}

//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
//             >
//               {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
//             </button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden py-4 border-t border-gray-800"
//             >
//               <form onSubmit={handleSearch} className="mb-4">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                   <input
//                     type="text"
//                     placeholder="Search for anything..."
//                     value={searchValue}
//                     onChange={(e) => setSearchValue(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//               </form>

//               <nav className="flex flex-col space-y-3">
//                 {['Explore', 'Electronics', 'Fashion', 'Gaming'].map((text, i) => (
//                   <Link
//                     key={i}
//                     to={text === 'Explore' ? '/explore' : `/category/${text}`}
//                     className="text-gray-300 hover:text-white transition-colors"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {text}
//                   </Link>
//                 ))}
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

















// Finalized Navbar.tsx with premium dark theme and working search integration
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../hooks/useTypedSelector';
import { toggleCart } from '../../store/slices/cartSlice';
import { setSearchQuery } from '../../store/slices/productsSlice';
import { useUser, SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useAppSelector((state) => state.cart);
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist);
  const { isSignedIn } = useUser();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      dispatch(setSearchQuery(searchValue));
      navigate('/explore');
    }
  };

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-[#000000] via-[#434343] to-[#29323c] backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ShopNova
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {['Explore', 'Electronics', 'Fashion', 'Gaming'].map((text, i) => (
              <Link key={i} to={text === 'Explore' ? '/explore' : `/category/${text}`} className="text-gray-300 hover:text-white transition-colors">
                {text}
              </Link>
            ))}
          </nav>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for anything..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </form>

          <div className="flex items-center space-x-4">
            {isSignedIn && (
              <Link to="/wishlist" className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Heart className="w-5 h-5 text-gray-300" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
            )}

            <button
              onClick={() => dispatch(toggleCart())}
              className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-300" />
              {cartItemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md"
                >
                  {cartItemCount}
                </motion.span>
              )}
            </button>

            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <Button className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </SignInButton>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-800"
            >
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search for anything..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </form>

              <nav className="flex flex-col space-y-3">
                {['Explore', 'Electronics', 'Fashion', 'Gaming'].map((text, i) => (
                  <Link
                    key={i}
                    to={text === 'Explore' ? '/explore' : `/category/${text}`}
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {text}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
