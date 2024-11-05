import React from 'react';
import { motion } from 'framer-motion';
import InteractiveCard from './InteractiveCard';

const ChallengesSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light text-theme-primary mb-4">Advanced Voice AI is here,</h2>
          <p className="text-xl text-theme-secondary mb-12">But enterprises are struggling to adopt.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <InteractiveCard
            title="Legacy Systems"
            content="Traditional CRM, CCaaS, and dialer stacks are unprepared for autonomous agents. Teams struggle to integrate rigid, deterministic systems with the new generation of generative systems."
          />
          <InteractiveCard
            title="Compliance"
            content="Autonomous multi-agent teams must adhere to a quickly evolving new set of rules for data security and regulatory compliance that require dedicated teams to manage."
          />
          <InteractiveCard
            title="Conversational Design"
            content="Generative AI unleashes new possibilities for hyper-personalized conversational customer experience, carrying unique considerations from traditional agent scripting."
          />
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;