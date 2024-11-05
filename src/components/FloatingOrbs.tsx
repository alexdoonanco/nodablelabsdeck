import { motion } from 'framer-motion';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const FloatingOrbs: React.FC = () => {
  const { theme } = useTheme();
  const opacity = theme === 'dark' ? 0.2 : 0.15;

  const orbs = [
    { color: '#74E0BB', delay: 0 },
    { color: '#293AF9', delay: 2 },
    { color: '#74E0BB', delay: 4 },
    { color: '#293AF9', delay: 1 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{ 
            backgroundColor: orb.color,
            opacity: opacity
          }}
          animate={{
            x: ['0%', '100%', '0%'],
            y: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 20,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;