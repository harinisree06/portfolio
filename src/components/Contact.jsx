import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto glass p-8 md:p-12 rounded-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Open for opportunities, collaborations, or just a friendly chat. Send me a message and I'll get back to you as soon as possible.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white bg-opacity-5 rounded-full flex items-center justify-center text-[var(--color-accent)]">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Email</h4>
                <a href="mailto:harinisreer2006@gmail.com" className="text-white font-medium hover:text-[var(--color-accent)] transition">
                  harinisreer2006@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white bg-opacity-5 rounded-full flex items-center justify-center text-[var(--color-accent)]">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Phone</h4>
                <p className="text-white font-medium">+91 7810055882</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white bg-opacity-5 rounded-full flex items-center justify-center text-[var(--color-accent)]">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Location</h4>
                <p className="text-white font-medium">Coimbatore, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form action="https://formsubmit.co/harinisreer2006@gmail.com" method="POST" className="space-y-4">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://harinisree.vercel.app/" />
              
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition"
                />
              </div>
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required
                className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition"
              />
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Your Message..." 
                required
                className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold rounded-lg px-4 py-3 flex items-center justify-center gap-2 hover:bg-opacity-90 transition"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
