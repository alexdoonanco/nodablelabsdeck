import React from 'react';
import { motion } from 'framer-motion';
import InteractiveCard from './InteractiveCard';

const VisibilitySection: React.FC = () => {
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
          <h2 className="text-4xl font-light text-theme-primary mb-4">Gain Complete Visibility</h2>
          <p className="text-xl text-theme-secondary">'White glove' shouldn't mean 'black box'.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <InteractiveCard
              title="View Aggregate and Individual Call Insights"
              content="View custom campaign-relevant analytics in real-time, with a state-of-the-art dashboard that puts your team in control."
            />
            <InteractiveCard
              title="Embedded AI-First QA"
              content="Each call receives a custom score and assessment based on your QA guidelines."
            />
            <InteractiveCard
              title="Nodable Knowledge"
              content="Learn more about agent activity by simply asking in natural language."
            />
          </div>
          <div className="space-y-6">
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src="https://cdn.prod.website-files.com/669ed0783d780b8512f370a5/672970f36a55c3202e71d0cb_Screenshot%202024-11-04%20at%204.14.46%E2%80%AFPM.png"
              alt="Dashboard"
              className="w-full rounded-lg shadow-xl"
            />
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://cdn.prod.website-files.com/669ed0783d780b8512f370a5/6729710f178be75947dca8bc_Screenshot%202024-11-04%20at%204.15.03%E2%80%AFPM.png"
              alt="Call analytics"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibilitySection;