import React, { useState } from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ImageOff } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  // Helper for image error handling
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.nextElementSibling?.classList.remove('hidden'); // Show placeholder
  };

  return (
    <Section 
      id="work" 
      title="Selected Work" 
      subtitle="A visual curation of instructional design modules, gamified learning paths, and technical training assets."
    >
      {/* Masonry-style Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="break-inside-avoid"
          >
            <div 
              onClick={() => setSelectedId(project.id)}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-800 bg-slate-900"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                onError={handleImageError}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Fallback if image fails */}
              <div className="hidden w-full h-48 bg-slate-800 flex items-center justify-center flex-col gap-2 text-slate-500">
                <ImageOff size={32} />
                <span className="text-xs uppercase font-bold">Image Unavailable</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-slate-300 text-xs font-medium">
                    <ZoomIn size={14} /> View Details
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on click content
              className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-2/3 bg-black flex items-center justify-center p-4 md:p-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="max-h-[50vh] md:max-h-full max-w-full object-contain"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/3 p-8 overflow-y-auto">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-wider border border-teal-500/20 mb-4">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <div className="w-12 h-1 bg-teal-500 rounded-full mb-6"></div>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};