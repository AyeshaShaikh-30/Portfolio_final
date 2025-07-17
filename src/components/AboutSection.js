import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, User, Trophy } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';

const AboutSection = () => {
  const { isDark } = useTheme();

  const personalInfo = [
    { icon: User, label: 'Name', value: 'Ayesha Shaikh' },
    { icon: MapPin, label: 'Location', value: 'Pune, India' },
    { icon: Mail, label: 'Email', value: 'shaikh.ayeshabashir@gmail.com' },
    { icon: Trophy, label: 'Experience', value: '2+ Years' },
  ];

  const skills = [
    { name: 'React', level: 80, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 70, color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/CSS', level: 90, color: 'from-red-500 to-pink-500' },
    { name: 'Java', level: 70, color: 'from-purple-500 to-indigo-500' },
    { name: 'MongoDB', level: 60, color: 'from-green-500 to-teal-500' },
    { name: 'Node.js', level: 60, color: 'from-emerald-500 to-green-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}
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
            About Me & Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Me */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <div className={`w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-xl`}>
                A
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div variants={itemVariants}>
              <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Personal Information
                  </h3>
                  <div className="space-y-3">
                    {personalInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <info.icon className={`w-5 h-5 ${isDark ? 'text-pink-400' : 'text-pink-600'}`} />
                        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {info.label}:
                        </span>
                        <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {info.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* About Text */}
            <motion.div variants={itemVariants}>
              <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    About Me
                  </h3>
                  <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    I'm a passionate frontend developer with real-world experience through internships and hackathons. 
                    I love building intuitive user interfaces and bringing creative ideas to life. Currently learning 
                    full-stack development, while exploring leadership and social impact work.
                  </p>
                  <p className={`text-base leading-relaxed mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    My journey in tech started with a curiosity about how websites work, and it has evolved into 
                    a genuine passion for creating meaningful digital experiences. I believe in continuous learning 
                    and staying updated with the latest technologies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Technical Skills
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {skill.name}
                          </span>
                          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div variants={itemVariants}>
              <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Quick Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-pink-50'}`}>
                      <div className={`text-2xl font-bold ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
                        3+
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        International Hackathon Winner
                      </div>
                    </div>
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-purple-50'}`}>
                      <div className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                        🐱
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Love Cats (Obviously!)
                      </div>
                    </div>
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-blue-50'}`}>
                      <div className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        🍕
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Is a Foodie
                      </div>
                    </div>
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-green-50'}`}>
                      <div className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                        2+
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Years of Experience
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;