
import React from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to ShopNova
          </h1>
          <p className="text-gray-600">
            {isSignUp ? 'Create your account to get started' : 'Sign in to your account'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {isSignUp ? (
            <SignUp 
              afterSignUpUrl="/"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-none p-0"
                }
              }}
            />
          ) : (
            <SignIn 
              afterSignInUrl="/"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-none p-0"
                }
              }}
            />
          )}
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              {isSignUp 
                ? 'Already have an account? Sign in' 
                : "Don't have an account? Sign up"
              }
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
