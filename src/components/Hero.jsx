import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center relative px-4">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-accent)] opacity-20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[var(--color-accent)] mb-4 font-medium"
        >
          Hi, I am
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Harini Sree Ramesh
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl text-gray-400 mb-8"
        >
          Full-Stack Developer & Amazon Future Engineer Scholar
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Building impactful, scalable, and AI-powered applications. Passionate about creating intelligent web solutions that modernize workflows and simplify processes.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold rounded-full hover:bg-opacity-90 transition shadow-[0_0_20px_rgba(0,178,255,0.4)]">
            Contact Me
          </a>
          <a href="https://github.com/harinisree06" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-white hover:text-[var(--color-accent)] transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/harini-sree-ramesh-88a178290" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-white hover:text-[var(--color-accent)] transition">
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
