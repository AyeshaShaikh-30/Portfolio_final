import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';

const Header = ({ activeSection }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'technologies', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleDownloadResume = () => {
    // Create a downloadable resume
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMSAwIG9iagpbXQplbmRvYmoKMiAwIG9iagpbXQplbmRvYmoKMyAwIG9iagpbXQplbmRvYmoKNSAwIG9iagpbXQplbmRvYmoKNiAwIG9iagpbXQplbmRvYmoKNyAwIG9iagpbXQplbmRvYmoKOCAwIG9iagpbXQplbmRvYmoKOSAwIG9iagpbXQplbmRvYmoKMTAgMCBvYmoKW10KZW5kb2JqCjExIDAgb2JqCltdCmVuZG9iagoxMiAwIG9iagpbXQplbmRvYmoKMTMgMCBvYmoKW10KZW5kb2JqCjE0IDAgb2JqCltdCmVuZG9iagoxNSAwIG9iagpbXQplbmRvYmoKMTYgMCBvYmoKW10KZW5kb2JqCjE3IDAgb2JqCltdCmVuZG9iagoxOCAwIG9iagpbXQplbmRvYmoKMTkgMCBvYmoKW10KZW5kb2JqCjIwIDAgb2JqCltdCmVuZG9iagp4cmVmCjAgMjEKMDAwMDAwMDAwMCA2NTUzNSBmCjAwMDAwMDAwMDkgMDAwMDAgbgowMDAwMDAwMDc0IDAwMDAwIG4KMDAwMDAwMDEyMCAwMDAwMCBuCjAwMDAwMDAxNjUgMDAwMDAgbgowMDAwMDAwMjEwIDAwMDAwIG4KMDAwMDAwMDI1NSAwMDAwMCBuCjAwMDAwMDAzMDAgMDAwMDAgbgowMDAwMDAwMzQ1IDAwMDAwIG4KMDAwMDAwMDM5MCAwMDAwMCBuCjAwMDAwMDA0MzYgMDAwMDAgbgowMDAwMDAwNDgxIDAwMDAwIG4KMDAwMDAwMDUyNiAwMDAwMCBuCjAwMDAwMDA1NzEgMDAwMDAgbgowMDAwMDAwNjE2IDAwMDAwIG4KMDAwMDAwMDY2MSAwMDAwMCBuCjAwMDAwMDA3MDYgMDAwMDAgbgowMDAwMDAwNzUxIDAwMDAwIG4KMDAwMDAwMDc5NiAwMDAwMCBuCjAwMDAwMDA4NDEgMDAwMDAgbgowMDAwMDAwODg2IDAwMDAwIG4KdHJhaWxlcgo8PC9TaXplIDIxL1Jvb3QgMSAwIFI+PgpzdGFydHhyZWYKOTMxCiUlRU9G'; // Mock PDF data
    link.download = 'Ayesha_Shaikh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `backdrop-blur-md ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} shadow-lg`
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              } hover:text-pink-500 transition-colors`}
            >
              Ayesha
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? `${isDark ? 'text-pink-400' : 'text-pink-600'} bg-pink-100 dark:bg-pink-900/20`
                    : `${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="sm"
              className="hover:bg-pink-50 hover:border-pink-300 dark:hover:bg-pink-900/20"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="w-9 h-9 rounded-full"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="w-9 h-9 rounded-full"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="w-9 h-9 rounded-full"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className={`md:hidden py-4 ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-lg mt-2 shadow-lg`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-left transition-colors ${
                    activeSection === item.id
                      ? `${isDark ? 'text-pink-400' : 'text-pink-600'} bg-pink-100 dark:bg-pink-900/20`
                      : `${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="sm"
                className="mt-4 justify-start"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;