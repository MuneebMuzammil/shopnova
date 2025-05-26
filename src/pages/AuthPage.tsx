// Finalized AuthPage.tsx with premium dark UI, full Clerk theme control including Google button text
import React, { useState } from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#485563] to-[#29323c] flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome to ShopNova
          </h1>
          <p className="text-gray-300">
            {isSignUp ? 'Create your account to get started' : 'Sign in to your account'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-[#1c1c1c] rounded-2xl shadow-lg p-8 border border-gray-700"
        >
          {isSignUp ? (
            <SignUp 
              afterSignUpUrl="/"
              appearance={{
                variables: {
                  colorText: "#ffffff",
                  colorTextSecondary: "#9ca3af",
                  colorPrimary: "#8b5cf6",
                  colorBackground: "#1c1c1c"
                },
                elements: {
                  rootBox: 'w-full',
                  card: 'shadow-none border-none p-0 bg-transparent text-white',
                  headerTitle: 'text-white',
                  headerSubtitle: 'text-gray-400',
                  formFieldLabel: 'text-gray-300',
                  formFieldInput: 'bg-[#2a2a2a] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500',
                  formButtonPrimary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90',
                  socialButtonsBlockButtonText: 'text-white',
                  socialButtonsBlockButton: 'bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-gray-600'
                }
              }}
            />
          ) : (
            <SignIn 
              afterSignInUrl="/"
              appearance={{
                variables: {
                  colorText: "#ffffff",
                  colorTextSecondary: "#9ca3af",
                  colorPrimary: "#8b5cf6",
                  colorBackground: "#1c1c1c"
                },
                elements: {
                  rootBox: 'w-full',
                  card: 'shadow-none border-none p-0 bg-transparent text-white',
                  headerTitle: 'text-white',
                  headerSubtitle: 'text-gray-400',
                  formFieldLabel: 'text-gray-300',
                  formFieldInput: 'bg-[#2a2a2a] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500',
                  formButtonPrimary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90',
                  socialButtonsBlockButtonText: 'text-white',
                  socialButtonsBlockButton: 'bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-gray-600'
                }
              }}
            />
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
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