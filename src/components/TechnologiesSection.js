import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Git } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from './ui/card';

const TechnologiesSection = () => {
  const { isDark } = useTheme();

  const technologies = [
    {
      name: 'React',
      icon: Code,
      description: 'Building interactive user interfaces',
      color: 'from-blue-500 to-cyan-500',
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      icon: Server,
      description: 'Server-side JavaScript development',
      color: 'from-green-500 to-emerald-500',
      category: 'Backend'
    },
    {
      name: 'Java',
      icon: Code,
      description: 'Object-oriented programming',
      color: 'from-orange-500 to-red-500',
      category: 'Programming'
    },
    {
      name: 'MongoDB',
      icon: Database,
      description: 'NoSQL database management',
      color: 'from-green-600 to-teal-600',
      category: 'Database'
    },
    {
      name: 'JavaScript',
      icon: Globe,
      description: 'Dynamic web development',
      color: 'from-yellow-500 to-orange-500',
      category: 'Programming'
    },
    {
      name: 'HTML',
      icon: Globe,
      description: 'Web markup and structure',
      color: 'from-orange-600 to-red-600',
      category: 'Frontend'
    },
    {
      name: 'CSS',
      icon: Smartphone,
      description: 'Styling and responsive design',
      color: 'from-blue-600 to-purple-600',
      category: 'Frontend'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="technologies"
      className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technologies I Love to Play With
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Here are some of the technologies I work with to bring ideas to life and love experimenting with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer group h-full`}>
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Technology Name */}
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {tech.name}
                  </h3>

                  {/* Category Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tech.category}
                  </div>

                  {/* Description */}
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {tech.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`mt-4 w-full h-1 bg-gradient-to-r ${tech.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm max-w-4xl mx-auto`}>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Frontend Focus
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Specializing in React and modern JavaScript frameworks
                  </p>
                </div>

                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center`}>
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Full-Stack Learning
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Expanding skills in Node.js and backend development
                  </p>
                </div>

                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center`}>
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Database Management
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Working with MongoDB and data modeling
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;