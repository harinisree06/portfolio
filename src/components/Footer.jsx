import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white border-opacity-10 py-8 text-center bg-[var(--color-primary)]">
      <div className="flex justify-center gap-6 mb-6">
        <a href="https://github.com/harinisree06" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--color-accent)] transition">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/harini-sree-ramesh-88a178290" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--color-accent)] transition">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:harinisreer2006@gmail.com" className="text-gray-400 hover:text-[var(--color-accent)] transition">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-sm text-gray-500 font-medium">
        &copy; {new Date().getFullYear()} Harini Sree Ramesh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
