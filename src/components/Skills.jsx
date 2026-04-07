import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Programming', items: ['Java', 'Python', 'C++'] },
  { category: 'Core CS', items: ['Data Structures & Algorithms', 'Object-Oriented Programming'] },
  { category: 'Backend', items: ['Spring Boot', 'REST APIs', 'Microservices', 'Node.js'] },
  { category: 'Frontend', items: ['React.js', 'Tailwind CSS'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'IBM Cloud', 'Git', 'Linux'] },
  { category: 'AI/ML', items: ['Machine Learning', 'Deep Learning'] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
            <span className="w-12 h-[2px] bg-[var(--color-accent)] mr-4"></span>
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:border-[var(--color-accent)] transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-accent)]">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white bg-opacity-5 rounded-full text-sm text-gray-300 border border-white border-opacity-10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
