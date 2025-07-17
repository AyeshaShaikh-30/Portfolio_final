import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Code, Users, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const ExperienceSection = () => {
  const { isDark } = useTheme();

  const experiences = [
    {
      id: 1,
      company: 'Zensolve',
      role: 'SDE (Software Development Engineer)',
      duration: '1 month',
      location: 'Remote',
      type: 'Internship',
      description: 'Worked as a Frontend Developer focusing on building responsive web applications and improving user experience.',
      responsibilities: [
        'Developed responsive web components using React',
        'Collaborated with design team to implement UI/UX improvements',
        'Participated in code reviews and team meetings',
        'Contributed to frontend architecture decisions',
       
      ],
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      achievements: [
        'Successfully delivered all assigned tasks on time',
        'Improved code quality through peer reviews',
        'Learned modern development practices'
      ],
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const additionalExperience = [
    {
      title: 'Hackathon Participant',
      description: 'Participated in multiple hackathons, building innovative solutions under time constraints.',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Team Collaboration',
      description: 'Worked in cross-functional teams, enhancing communication and project management skills.',
      icon: Users,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Actively learning new technologies and staying updated with industry trends.',
      icon: Building,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50'}`}
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            My professional journey and key experiences that have shaped my development skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Experience */}
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants}>
              <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Company Icon */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center mb-6 lg:mb-0 flex-shrink-0`}>
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Experience Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {exp.role}
                          </h3>
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="flex items-center">
                              <Building className={`w-4 h-4 mr-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                              <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                {exp.company}
                              </span>
                            </div>
                            <Badge variant="outline" className={`${isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'}`}>
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end">
                          <div className="flex items-center mb-2">
                            <Calendar className={`w-4 h-4 mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {exp.duration}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className={`w-4 h-4 mr-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`text-base mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Key Responsibilities:
                        </h4>
                        <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className={`${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Key Achievements:
                        </h4>
                        <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Award className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Additional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Additional Experience & Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalExperience.map((item, index) => (
                <Card key={index} className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;