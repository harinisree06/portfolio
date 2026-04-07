import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Amman Traders Billing Software',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas'],
    desc: 'Delivered and deployed a scalable full-stack billing platform automating GST computation. Reduced manual billing effort by ~90% and ensured 100% invoice accuracy. Features real-time CRUD, secure data persistence, and live PDF generation.',
    link: 'https://amman-traders-billing-software.vercel.app/',
    github: 'https://github.com/harinisree06'
  },
  {
    title: 'Online Whiteboard Collaboration System',
    tech: ['React', 'Java', 'Spring Boot', 'WebSockets', 'REST APIs'],
    desc: 'Developed a real-time collaborative whiteboard application allowing multiple users to interact simultaneously. Built Spring Boot backend to handle user sessions and board state management efficiently.'
  },
  {
    title: 'Edumind – AI-powered LMS Portal',
    tech: ['React', 'Node.js', 'AI APIs'],
    desc: 'Designed and developed an AI-driven learning management system providing personality-based course recommendations, gamified learning, and an AI smart chatbot for doubt resolution.'
  },
  {
    title: 'Detecting Oil Spills at Marine Environment',
    tech: ['Deep Learning', 'AIS Data', 'Satellite Imagery', 'CNN'],
    desc: 'Used CNN and anomaly detection models to identify potential marine oil spills, bringing improved efficiency in analyzing Synthetic Aperture Radar (SAR) imagery.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
            <span className="w-12 h-[2px] bg-[var(--color-accent)] mr-4"></span>
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col h-full group hover:border-[var(--color-accent)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-accent)] opacity-5 rounded-full blur-[50px] group-hover:opacity-20 transition-opacity"></div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)] bg-opacity-10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-400 flex-grow mb-6">
                {project.desc}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-white hover:text-[var(--color-accent)] transition">
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition">
                    <FaGithub size={16} className="mr-1" /> View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
