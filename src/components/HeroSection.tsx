import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' 
    ? "https://cdn.prod.website-files.com/669ed0783d780b8512f370a5/669fe2e0ec43f2909270c057_Nodable%20Logo%20White%20Text%2072%20ppi.png"
    : "https://cdn.prod.website-files.com/669ed0783d780b8512f370a5/66bfa1f56b8fef22f0e4dfe5_Nodable%20Logo%20Black%20Text%2072%20ppi.png";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={logoSrc}
          alt="Nodable Logo"
          className="w-64 mb-8"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-light text-theme-primary mb-12"
        >
          Contact center automations that feel like magic.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-theme-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;