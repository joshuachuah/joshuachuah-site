'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/joshuachuah', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/joshua-chuah00', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:jchuah07@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2 }}
          className="text-center space-y-6 sm:space-y-8 lg:space-y-10"
        >
          <p className="text-[10px] tracking-widest text-text-dim uppercase">Connect</p>

          <p className="text-lg sm:text-xl font-light text-text-secondary max-w-md mx-auto leading-relaxed px-4 sm:px-0">
            Have a project in mind? Let's create something meaningful together.
          </p>

          <motion.a
            href="mailto:jchuah07@gmail.com"
            className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 border border-light text-text-dim hover:text-text-primary hover:border-border-subtle transition-all duration-500 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50"
            whileHover={{ y: -2 }}
          >
            <span className="text-sm tracking-tight uppercase">Say Hello</span>
            <FaArrowRight aria-hidden="true" className="text-xs group-hover:translate-x-1 transition-transform duration-500" />
          </motion.a>

          <div className="flex justify-center gap-8 sm:gap-10 pt-8 sm:pt-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-text-light hover:text-text-muted transition-colors duration-500 p-2 -m-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50 rounded"
                aria-label={social.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -3 }}
              >
                <social.icon aria-hidden="true" className="text-xl sm:text-2xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;