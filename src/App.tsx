import React from 'react';
import { useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import FloatingOrbs from './components/FloatingOrbs';
import HeroSection from './components/HeroSection';
import ChallengesSection from './components/ChallengesSection';
import ServiceSection from './components/ServiceSection';
import ContinuitySection from './components/ContinuitySection';
import VisibilitySection from './components/VisibilitySection';
import UseCasesSection from './components/UseCasesSection';
import ResultsSection from './components/ResultsSection';

function App() {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className="relative">
      <FloatingOrbs />
      <ThemeToggle />
      <HeroSection />
      <ChallengesSection />
      <ServiceSection />
      <ContinuitySection />
      <VisibilitySection />
      <UseCasesSection />
      <ResultsSection />
    </div>
  );
}

export default App;