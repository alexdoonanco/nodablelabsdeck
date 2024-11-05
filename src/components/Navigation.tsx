import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Theme } from '../context/ThemeContext';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  theme: Theme;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  theme,
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="p-2 rounded-full bg-black/10 backdrop-blur-sm hover:bg-black/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
      </button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? theme === 'dark' ? 'bg-white' : 'bg-black'
                : theme === 'dark' ? 'bg-white/30' : 'bg-black/30'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full bg-black/10 backdrop-blur-sm hover:bg-black/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRight className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
      </button>
    </div>
  );
};

export default Navigation;