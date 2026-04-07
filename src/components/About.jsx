import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--color-accent)] opacity-10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center">
            <span className="w-12 h-[2px] bg-[var(--color-accent)] mr-4"></span>
            About Me
          </h2>
          
          <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>
              I am a passionate <strong>Full-Stack Developer</strong> and <strong>Amazon Future Engineer Scholar</strong> currently pursuing a B.E. in Computer Science and Design at Sri Krishna College of Engineering and Technology (CGPA: 8.00).
            </p>
            <p>
              My hands-on experience revolves around developing scalable web and AI-powered applications. I take pride in building solutions like AI-driven Learning Management Systems and GST-compliant billing platforms that significantly reduce manual effort while ensuring operational accuracy.
            </p>
            <p>
              With strong skills in React, Node.js, Spring Boot, REST APIs, and extensive Cloud/DevOps knowledge, my primary focus remains on creating meaningful impact, ensuring system reliability, and delivering exceptional user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
