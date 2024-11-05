import React from 'react';
import { motion } from 'framer-motion';
import InteractiveCard from './InteractiveCard';

const ResultsSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-light text-theme-primary mb-4">Real Results</h2>
          <p className="text-xl text-theme-secondary">Adopt the latest technologies with confidence, and real bottom-line impact.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <InteractiveCard
            title="$1M+ Revenue Gains"
            content="Multiple Nodable customers boost revenue by over $1M per week."
            highlight
          />
          <InteractiveCard
            title="17%+ LTV Gain"
            content="Achieved through increased customer retention using Nodable."
            highlight
          />
          <InteractiveCard
            title="200+ Projects"
            content="Overseen end to end by Nodable's team of undisputed voice AI experts."
          />
          <InteractiveCard
            title="11,000+"
            content="Agent hours saved by automating tasks."
          />
          <InteractiveCard
            title="30k+"
            content="Real customer calls handled daily on the Nodable platform."
          />
          <InteractiveCard
            title="-22% Issue Rate"
            content="On new insurance policies signed using Nodable as a qualifier."
            highlight
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <InteractiveCard
            title="Pending SOC 2 Type II and HIPAA"
            content="Enterprise standards to meet enterprise-grade solutions."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;