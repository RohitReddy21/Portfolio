import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: "https://github.com/rohitreddy",
      label: "GitHub"
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "https://linkedin.com/in/rohitreddy",
      label: "LinkedIn"
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: "https://twitter.com/rohitreddy",
      label: "Twitter"
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: "mailto:contact@rohitreddy.com",
      label: "Email"
    },
  ];

  return (
    <footer className="bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold gradient-text">Rohit Reddy</h2>
            <p className="text-gray-400 mt-2">Full Stack Software Developer | React & Python Expert</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-700 text-white hover:bg-primary hover:text-white transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Rohit Reddy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#home" className="text-sm text-gray-400 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;