import React from 'react';
import { motion } from 'framer-motion';
import InteractiveCard from './InteractiveCard';

const UseCasesSection: React.FC = () => {
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
          <h2 className="text-4xl font-light text-theme-primary mb-4">Use Cases We Love</h2>
          <p className="text-xl text-theme-secondary">Half of the battle is implementing AI in the right places throughout the customer journey.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <InteractiveCard
              title="New Leads"
              content="Pre-qualify, verify, and educate prospects with personalized inbound and outbound calls the moment they complete a form."
            />
            <InteractiveCard
              title="Onboarding and Welcome Calls"
              content="Tailored onboarding experiences with voice and SMS to increase retention and customer satisfaction."
            />
            <InteractiveCard
              title="Account Updates"
              content="Autonomously notify customers of updates and required documentation. Resolve end-to-end with AI."
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://cdn.prod.website-files.com/669ed0783d780b8512f370a5/66a12e055c4a5aaade9d5823_Nodable%20Outbound%20Nurturing.jpg"
              alt="Customer service"
              className="rounded-lg shadow-xl"
            />
            <img
              src="https://cdn.prod.website-files.com/669ed0783d780b8512f370a5/67297103de870e6b0e736f3a_Screenshot%202024-11-04%20at%204.39.14%E2%80%AFPM.png"
              alt="Revenue calculator"
              className="absolute -bottom-8 -right-8 w-64 rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;