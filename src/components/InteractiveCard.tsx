import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface InteractiveCardProps {
  title: string;
  content: string;
  highlight?: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ title, content, highlight }) => {
  const { theme } = useTheme();
  const highlightColor = theme === 'dark' ? 'text-[#74E0BB]' : 'text-[#2A9D76]';

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="glass-card group cursor-pointer"
    >
      <h3 className={`text-2xl font-semibold mb-2 ${highlight ? highlightColor : 'text-theme-primary'}`}>
        {title}
      </h3>
      <p className="text-theme-secondary group-hover:text-theme-primary transition-colors">
        {content}
      </p>
    </motion.div>
  );
};

export default InteractiveCard;