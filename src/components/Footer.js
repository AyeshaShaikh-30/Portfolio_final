import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MapPin, Linkedin, Github, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';

const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#technologies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ayesha-shaikh-091139260/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/AyeshaShaikh-30',
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:shaikh.ayeshabashir@gmail.com',
      color: 'hover:text-pink-500'
    }
  ];

  const handleNavClick = (href) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Ayesha
                </span>
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Frontend Developer & IT Engineering Student passionate about creating 
                innovative solutions and meaningful user experiences.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Pune, India
                </span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`text-sm transition-colors duration-200 ${
                        isDark 
                          ? 'text-gray-400 hover:text-pink-400' 
                          : 'text-gray-600 hover:text-pink-600'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Technologies */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Technologies I Love to Play With
              </h4>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>React & JavaScript</li>
                <li>Node.js & Express</li>
                <li>MongoDB & Databases</li>
                <li>HTML/CSS & Responsive Design</li>
                <li>Java & Programming</li>
              </ul>
            </motion.div>
          </div>

          {/* Connect & Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Connect
              </h4>
              <div className="space-y-3">
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={index}
                      onClick={() => window.open(social.url, '_blank')}
                      className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.button>
                  ))}
                </div>
                <div className="pt-4">
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Response Time: Within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`py-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-4 md:mb-0"
            >
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2024 Ayesha Shaikh. Made with
              </span>
              <Heart className="w-4 h-4 text-pink-500 fill-current" />
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                and lots of coffee
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className={`${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-all duration-300`}
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;