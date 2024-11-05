import React from 'react';
import { motion } from 'framer-motion';
import InteractiveCard from './InteractiveCard';

const ContinuitySection: React.FC = () => {
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
          <h2 className="text-4xl font-light text-theme-primary mb-4">Unparalleled Continuity</h2>
          <p className="text-xl text-theme-secondary">Make your customers feel heard with unmatched personalization and shared context across channels.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <InteractiveCard
              title="Personalized Conversations"
              content="Customer context is managed across conversations, so customers are greeted by first name on inbound calls and instantly reassured."
            />
            <InteractiveCard
              title="Agent Handoff"
              content="Agents seamlessly warm transfer calls to agents, including relevant conversation details, so they can pick up right where AI left off."
            />
            <InteractiveCard
              title="Always Available"
              content="Provide every opportunity for touchpoints. With 24/7 inbound and SMS agents. After hours calls? Schedule callbacks, and automatically call back."
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
              src="https://cdn.prod.website-files.com/669ed0783d780b8512f370a5/66a11cb8582942ec7d64f409_Nodable%20Inbounds%20Home%20Graphic.jpg"
              alt="Agent interface"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContinuitySection;