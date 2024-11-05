import React from 'react';
import { motion } from 'framer-motion';
import InteractiveCard from './InteractiveCard';
import { useTheme } from '../context/ThemeContext';

const ServiceSection: React.FC = () => {
  const { theme } = useTheme();
  const journeyDiagramSrc = theme === 'dark'
    ? "https://cdn.prod.website-files.com/669ed0783d780b8512f370a5/67297109de870e6b0e737342_svgviewer-png-output%20(6).png"
    : "https://cdn.prod.website-files.com/669ed0783d780b8512f370a5/67297580afe521a432226fce_svgviewer-png-output%20(7).png";

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-black/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-light text-theme-primary mb-4">White-Glove Service Meets Product Excellence</h2>
          <p className="text-xl text-theme-secondary">We design, deploy and maintain teams of autonomous AI agents to steward your team into the AI age.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <InteractiveCard
              title="Your Expert Team"
              content="Leverage our trusted team's experience launching 200+ AI contact center transformations over the last 2 years."
            />
            <InteractiveCard
              title="Comprehensive Omni-Channel Solutions"
              content="Teams of autonomous agents spanning inbound and outbound calls, SMS, and agentic actions updating your systems through secure data transport."
            />
            <InteractiveCard
              title="Managed with Care"
              content="The only constant in the world of AI is change. Gain the advantages of new models, techniques, and capabilities with ease as they arrive."
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img
              src={journeyDiagramSrc}
              alt="Multi-agent orchestration"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;