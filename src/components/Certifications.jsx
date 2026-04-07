import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certsData = [
  { name: 'Software Engineering Job Simulation', issuer: 'Goldman Sachs, Forage' },
  { name: 'Google Cloud Computing Foundations', issuer: 'Google' },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon' },
  { name: 'Foundations for Machine Learning', issuer: 'Amazon' },
  { name: 'Introduction to Cloud Computing', issuer: 'IBM' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy' },
  { name: 'C++ Fundamentals', issuer: 'Infosys' },
  { name: 'Data Structure and Algorithm using Java', issuer: 'Navgurukul' }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-[2px] bg-[var(--color-accent)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-5 rounded-xl border border-white border-opacity-5 hover:border-[var(--color-accent)] hover:border-opacity-50 transition-all flex items-start gap-4"
            >
              <Award className="text-[var(--color-accent)] flex-shrink-0" size={24} />
              <div>
                <h3 className="text-sm font-bold text-white mb-1 leading-tight">{cert.name}</h3>
                <p className="text-xs text-gray-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
