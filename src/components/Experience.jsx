import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Freelancing Developer',
    company: 'Amman Traders',
    date: 'Dec 2025',
    bullets: [
      'Built a full-stack billing platform streamlining tax calculations and invoice generation.',
      'Cut manual work by ~90% and guaranteed error-free billing with fault-tolerant sequencing.'
    ]
  },
  {
    role: 'Developer',
    company: 'Ettiksoft Technologies Private Limited',
    date: 'May 2025 - Jun 2025',
    bullets: [
      'Built an LMS platform offering tailored course suggestions based on Holland’s Theory.',
      'Developed interactive gamified experiences and a smart assistant for instant query support.'
    ]
  },
  {
    role: 'Intern',
    company: 'JLK Automation Technology Private Limited',
    date: 'Dec 2024 - Jan 2025',
    bullets: [
      'Observed and documented organizational processes, team workflows, and meeting protocols.',
      'Gained valuable insights into operational practices and professional collaboration.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-[var(--color-primary)] bg-opacity-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
            <span className="w-12 h-[2px] bg-[var(--color-accent)] mr-4"></span>
            Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-4 items-start">
                <div className="md:col-span-1 md:text-right mb-2 md:mb-0 md:pr-4 pt-1">
                  <span className="text-sm font-semibold text-[var(--color-accent)]">{exp.date}</span>
                </div>
                
                <div className="md:col-span-4 glass p-6 rounded-2xl relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[35px] md:-left-[27px] top-6 w-4 h-4 rounded-full bg-[var(--color-accent)] border-[3px] border-[var(--color-primary)]"></div>
                  {/* Timeline line */}
                  {index !== experienceData.length - 1 && (
                    <div className="absolute -left-[29px] md:-left-[21px] top-10 w-[2px] h-[120%] bg-white bg-opacity-10"></div>
                  )}

                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-md text-gray-400 mb-4">{exp.company}</h4>
                  
                  <ul className="list-disc list-outside ml-4 text-gray-300 space-y-2 text-sm">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
