import { motion } from 'framer-motion';
import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ children, isActive }) => {
  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center p-8 ${
        isActive ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-6xl">{children}</div>
    </motion.div>
  );
};

export default Slide;