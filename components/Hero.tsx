import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Globe2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            High-impact learning strategies, <br />
            <span className="text-slate-500">delivered remotely.</span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
            Innovative instructional design, delivered remotely. I bridge the gap between dense technical content and intuitive learning paths. An E-Learning Specialist based in <span className="text-white font-medium">Mexico</span>, helping organizations transform their knowledge into high-quality, actionable training assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all transform hover:-translate-y-1"
            >
              View Work <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold rounded-lg transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-slate-500 font-medium border-t border-slate-900 pt-8">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-teal-500" /> Mexico City (CST)
            </div>
            <div className="flex items-center gap-2">
              <Globe2 size={16} className="text-teal-500" /> Fluent English / Native Spanish
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};