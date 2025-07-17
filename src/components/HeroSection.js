import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const HeroSection = () => {
  const { isDark } = useTheme();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnect = () => {
    scrollToSection('contact');
  };

  const stats = [
    { label: 'Years of Experience', value: '2+', icon: Calendar },
    { label: 'Projects Completed', value: '5+', icon: ArrowRight },
    { label: 'Learning Focus', value: '100%', icon: ArrowRight },
    { label: 'Open for Collaboration', value: 'Yes', icon: ArrowRight },
  ];

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full opacity-15 blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className={`text-6xl md:text-8xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Ayesha
              </span>
            </h1>
            <h2 className={`text-xl md:text-2xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Frontend Developer | IT Engineering Student
            </h2>
            <div className={`flex items-center justify-center space-x-4 text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Pune, India
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                shaikh.ayeshabashir@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          >
            I'm a passionate frontend developer with real-world experience through internships and hackathons. 
            I love building intuitive user interfaces and bringing creative ideas to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={handleConnect}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full text-lg font-semibold border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <Card key={index} className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;