import React from 'react';
import { Section } from './Section';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <Section 
      id="about" 
      title="Experience" 
      subtitle="A track record in transforming complex requirements into effective instructional design and ensuring rigorous Quality Assurance (QA) of e-learning content development."
    >
      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Dot */}
            <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-teal-500 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
              <h3 className="text-2xl font-bold text-white">{item.role}</h3>
              <span className="text-teal-400 font-medium">@ {item.company}</span>
            </div>
            <span className="inline-block px-3 py-1 bg-slate-900 rounded text-xs text-slate-500 font-mono mb-4 border border-slate-800">
              {item.year}
            </span>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};